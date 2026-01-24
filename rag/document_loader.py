"""
Document loader for RAG system
Loads and chunks markdown and YAML files
"""
import re
from pathlib import Path
from typing import List, Dict, Any, Optional
import frontmatter
import yaml
import tiktoken

from .config import CHUNK_SIZE, CHUNK_OVERLAP, MIN_CHUNK_SIZE, INCLUDE_PATTERNS, EXCLUDE_PATTERNS

# Initialize tokenizer
try:
    encoding = tiktoken.get_encoding("cl100k_base")
except:
    encoding = None


def count_tokens(text: str) -> int:
    """Count tokens in text"""
    if encoding:
        return len(encoding.encode(text))
    # Fallback: approximate 4 characters per token
    return len(text) // 4


def extract_frontmatter(content: str) -> tuple:
    """Extract YAML frontmatter from markdown"""
    try:
        post = frontmatter.loads(content)
        metadata = dict(post.metadata)
        content = post.content
        return metadata, content
    except:
        # No frontmatter or invalid
        return {}, content


def chunk_text(text: str, chunk_size: int = CHUNK_SIZE, overlap: int = CHUNK_OVERLAP) -> List[str]:
    """
    Chunk text intelligently, preserving context
    Tries to split at paragraph/section boundaries
    """
    if count_tokens(text) <= chunk_size:
        return [text]
    
    chunks = []
    
    # First, try splitting by double newlines (paragraphs)
    paragraphs = re.split(r'\n\n+', text)
    current_chunk = ""
    
    for para in paragraphs:
        para_tokens = count_tokens(para)
        
        # If paragraph fits, add it
        if count_tokens(current_chunk + para) <= chunk_size:
            current_chunk += para + "\n\n"
        else:
            # Current chunk is full, save it
            if current_chunk.strip():
                chunks.append(current_chunk.strip())
            
            # If paragraph is too large, split it by sentences
            if para_tokens > chunk_size:
                sentences = re.split(r'[.!?]+\s+', para)
                temp_chunk = ""
                for sentence in sentences:
                    if count_tokens(temp_chunk + sentence) <= chunk_size:
                        temp_chunk += sentence + ". "
                    else:
                        if temp_chunk.strip():
                            chunks.append(temp_chunk.strip())
                        temp_chunk = sentence + ". "
                current_chunk = temp_chunk
            else:
                current_chunk = para + "\n\n"
    
    # Add final chunk
    if current_chunk.strip():
        chunks.append(current_chunk.strip())
    
    # Add overlap between chunks
    if overlap > 0 and len(chunks) > 1:
        overlapped_chunks = []
        for i, chunk in enumerate(chunks):
            if i == 0:
                overlapped_chunks.append(chunk)
            else:
                # Get last part of previous chunk
                prev_tokens = encoding.encode(chunks[i-1]) if encoding else chunks[i-1].split()
                overlap_text = ""
                if encoding:
                    overlap_tokens = prev_tokens[-overlap:] if len(prev_tokens) > overlap else prev_tokens
                    overlap_text = encoding.decode(overlap_tokens)
                else:
                    overlap_words = chunks[i-1].split()[-overlap:] if len(chunks[i-1].split()) > overlap else chunks[i-1].split()
                    overlap_text = " ".join(overlap_words)
                
                overlapped_chunks.append(overlap_text + "\n\n" + chunk)
        chunks = overlapped_chunks
    
    # Filter out chunks that are too small
    chunks = [c for c in chunks if count_tokens(c) >= MIN_CHUNK_SIZE]
    
    return chunks


def load_markdown_file(file_path: Path) -> List[Dict[str, Any]]:
    """Load a markdown file and return chunks with metadata"""
    try:
        content = file_path.read_text(encoding='utf-8')
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []
    
    # Extract frontmatter
    metadata, content = extract_frontmatter(content)
    
    # Chunk the content
    chunks = chunk_text(content)
    
    # Create document chunks with metadata
    documents = []
    for i, chunk in enumerate(chunks):
        doc_metadata = {
            "file_path": str(file_path),
            "file_name": file_path.name,
            "chunk_index": i,
            "total_chunks": len(chunks),
            "section": f"chunk_{i+1}_of_{len(chunks)}",
        }
        
        # Add frontmatter metadata
        doc_metadata.update(metadata)
        
        # Normalize character field (can be string or list)
        if "characters" in doc_metadata and isinstance(doc_metadata["characters"], list):
            doc_metadata["character"] = ", ".join(doc_metadata["characters"])
        
        documents.append({
            "content": chunk,
            "metadata": doc_metadata,
        })
    
    return documents


def load_yaml_file(file_path: Path) -> List[Dict[str, Any]]:
    """Load a YAML file and return chunks with metadata"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []
    
    # Convert YAML to text representation
    content = yaml.dump(data, default_flow_style=False, allow_unicode=True)
    
    # Chunk the content
    chunks = chunk_text(content)
    
    # Create document chunks with metadata
    documents = []
    for i, chunk in enumerate(chunks):
        doc_metadata = {
            "file_path": str(file_path),
            "file_name": file_path.name,
            "chunk_index": i,
            "total_chunks": len(chunks),
            "section": f"chunk_{i+1}_of_{len(chunks)}",
            "type": "character_data" if "characters" in str(file_path) else "yaml",
        }
        
        # Extract character name from filename if possible
        if "characters" in str(file_path):
            char_name = file_path.stem
            doc_metadata["character"] = char_name
        
        documents.append({
            "content": chunk,
            "metadata": doc_metadata,
        })
    
    return documents


def load_document(file_path: Path) -> List[Dict[str, Any]]:
    """Load a document (markdown or YAML) and return chunks"""
    if file_path.suffix in ['.yaml', '.yml']:
        return load_yaml_file(file_path)
    elif file_path.suffix == '.md':
        return load_markdown_file(file_path)
    else:
        # Try as text file
        try:
            content = file_path.read_text(encoding='utf-8')
            chunks = chunk_text(content)
            return [{
                "content": chunk,
                "metadata": {
                    "file_path": str(file_path),
                    "file_name": file_path.name,
                    "chunk_index": i,
                    "total_chunks": len(chunks),
                }
            } for i, chunk in enumerate(chunks)]
        except:
            return []


def find_documents(base_path: Path, include_patterns: List[str] = None, exclude_patterns: List[str] = None) -> List[Path]:
    """Find all documents matching patterns"""
    if include_patterns is None:
        include_patterns = INCLUDE_PATTERNS
    if exclude_patterns is None:
        exclude_patterns = EXCLUDE_PATTERNS
    
    documents = []
    
    # Convert patterns to Path-compatible globs
    for pattern in include_patterns:
        # Handle both file and directory paths
        if base_path.is_file():
            if base_path.match(pattern):
                documents.append(base_path)
        else:
            for file_path in base_path.rglob(pattern):
                # Check if file should be excluded
                should_exclude = False
                for exclude in exclude_patterns:
                    if exclude.replace("**/", "").replace("/**", "") in str(file_path):
                        should_exclude = True
                        break
                
                if not should_exclude and file_path.is_file():
                    documents.append(file_path)
    
    return list(set(documents))  # Remove duplicates
