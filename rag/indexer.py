"""
Indexer for RAG system
Indexes all documents into vector database
"""
from pathlib import Path
from typing import List, Dict, Any
import sys

from .config import DOCUMENT_PATHS, BASE_DIR, COLLECTIONS
from .document_loader import load_document, find_documents
from .embedding_service import EmbeddingService
from .vector_store import VectorStore
from .retriever import Retriever


class Indexer:
    """Indexer for processing and indexing documents"""
    
    def __init__(self):
        """Initialize indexer"""
        print("Initializing indexer...")
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()
        self.retriever = Retriever(self.vector_store, self.embedding_service)
        print("Indexer initialized")
    
    def determine_collection(self, file_path: Path, metadata: Dict[str, Any]) -> str:
        """Determine which collection a document belongs to"""
        path_str = str(file_path).lower()
        
        # Episodes
        if "episode" in path_str or "content/blog" in path_str:
            if metadata.get("episode_number"):
                return "episodes"
        
        # Characters
        if "character" in path_str or "data/characters" in path_str:
            return "characters"
        
        # Story
        if "story" in path_str or "arc" in path_str or "thread" in path_str:
            return "story"
        
        # Documentation
        if "docs" in path_str:
            return "documentation"
        
        # Default
        return "documents"
    
    def index_file(self, file_path: Path, collection_key: str = None) -> int:
        """
        Index a single file
        
        Returns:
            Number of chunks indexed
        """
        try:
            # Load document
            documents = load_document(file_path)
            if not documents:
                return 0
            
            # Determine collection if not specified
            if collection_key is None:
                collection_key = self.determine_collection(file_path, documents[0]['metadata'])
            
            # Generate embeddings
            contents = [doc['content'] for doc in documents]
            embeddings = self.embedding_service.embed_batch(contents, show_progress=False)
            
            # Add to vector store
            self.vector_store.add_documents(
                documents=documents,
                collection_key=collection_key,
                embeddings=embeddings
            )
            
            return len(documents)
        
        except Exception as e:
            print(f"Error indexing {file_path}: {e}")
            return 0
    
    def index_directory(self, directory_path: Path, collection_key: str = None) -> Dict[str, int]:
        """
        Index all documents in a directory
        
        Returns:
            Dict with counts: {"indexed": X, "failed": Y, "total": Z}
        """
        if not directory_path.exists():
            print(f"Directory not found: {directory_path}")
            return {"indexed": 0, "failed": 0, "total": 0}
        
        # Find all documents
        if directory_path.is_file():
            files = [directory_path]
        else:
            files = find_documents(directory_path)
        
        print(f"Found {len(files)} files to index in {directory_path}")
        
        indexed = 0
        failed = 0
        
        for file_path in files:
            try:
                count = self.index_file(file_path, collection_key)
                if count > 0:
                    indexed += count
                    print(f"  ✓ {file_path.name}: {count} chunks")
                else:
                    failed += 1
            except Exception as e:
                print(f"  ✗ {file_path.name}: {e}")
                failed += 1
        
        return {
            "indexed": indexed,
            "failed": failed,
            "total": len(files)
        }
    
    def index_all(self, reset: bool = False) -> Dict[str, Any]:
        """
        Index all documents from DOCUMENT_PATHS
        
        Args:
            reset: Whether to reset collections before indexing
        
        Returns:
            Summary of indexing
        """
        print("=" * 60)
        print("Starting full index of all documents")
        print("=" * 60)
        
        if reset:
            print("Resetting collections...")
            for key in COLLECTIONS.keys():
                self.vector_store.reset_collection(key)
        
        summary = {}
        total_chunks = 0
        
        # Index by priority
        for priority, paths in [
            ("core", DOCUMENT_PATHS["core"]),
            ("characters", DOCUMENT_PATHS["characters"]),
            ("episodes", DOCUMENT_PATHS["episodes"]),
            ("story", DOCUMENT_PATHS["story"]),
            ("documentation", DOCUMENT_PATHS["documentation"]),
        ]:
            print(f"\n--- Indexing {priority.upper()} documents ---")
            priority_summary = {"indexed": 0, "failed": 0, "total": 0}
            
            for path in paths:
                path_obj = Path(path)
                if not path_obj.exists():
                    print(f"  ⚠ Path not found: {path_obj}")
                    continue
                
                result = self.index_directory(path_obj)
                priority_summary["indexed"] += result["indexed"]
                priority_summary["failed"] += result["failed"]
                priority_summary["total"] += result["total"]
                total_chunks += result["indexed"]
            
            summary[priority] = priority_summary
        
        # Final summary
        print("\n" + "=" * 60)
        print("INDEXING COMPLETE")
        print("=" * 60)
        print(f"Total chunks indexed: {total_chunks}")
        for priority, stats in summary.items():
            print(f"  {priority}: {stats['indexed']} chunks from {stats['total']} files ({stats['failed']} failed)")
        
        # Collection counts
        print("\nCollection counts:")
        for key in COLLECTIONS.keys():
            count = self.vector_store.get_collection_count(key)
            print(f"  {key}: {count} documents")
        
        return {
            "summary": summary,
            "total_chunks": total_chunks
        }


def main():
    """Main function for command-line indexing"""
    indexer = Indexer()
    
    # Check for reset flag
    reset = "--reset" in sys.argv or "-r" in sys.argv
    
    # Index all
    result = indexer.index_all(reset=reset)
    
    print("\nIndexing complete!")
    return result


if __name__ == "__main__":
    main()
