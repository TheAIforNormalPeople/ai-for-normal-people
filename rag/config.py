"""
Configuration for RAG system
"""
import os
from pathlib import Path

# Base paths
BASE_DIR = Path(__file__).parent.parent
RAG_DIR = Path(__file__).parent
DATA_DIR = RAG_DIR / "data"
CHROMA_DB_DIR = DATA_DIR / "chroma_db"

# Vector database configuration
VECTOR_DB_TYPE = "chromadb"
VECTOR_DB_PATH = str(CHROMA_DB_DIR)

# Embedding model configuration
EMBEDDING_MODEL = "sentence-transformers/all-MiniLM-L6-v2"
EMBEDDING_DIMENSIONS = 384
EMBEDDING_DEVICE = "cpu"  # Use "cuda" if GPU available

# Document chunking configuration
CHUNK_SIZE = 800  # tokens per chunk
CHUNK_OVERLAP = 150  # tokens overlap between chunks
MIN_CHUNK_SIZE = 100  # minimum chunk size

# Retrieval configuration
TOP_K_RESULTS = 10  # number of results to return
SIMILARITY_THRESHOLD = 0.0  # minimum similarity score (0.0 = return all, filter by distance instead)
MAX_DISTANCE = 1.5  # maximum distance (ChromaDB uses cosine distance, 0-2 range)

# Document paths to index
DOCUMENT_PATHS = {
    "core": [
        BASE_DIR / "COMPLETE_PROJECT_BIBLE.md",
        BASE_DIR / "CURRENT_STATE.md",
        BASE_DIR / "MASTER_VISION.md",
        BASE_DIR / "MULTI_AI_COLLABORATION_SYSTEM.md",
        BASE_DIR / ".cursorrules",
        BASE_DIR / "START_HERE.md",
        BASE_DIR / "CONTEXT_LOADING_CHECKLIST.md",
    ],
    "characters": [
        BASE_DIR / "data" / "characters",
        BASE_DIR / "docs" / "CHARACTER_VOICE_ROTATION.md",
        BASE_DIR / "docs" / "CHARACTER_DEEP_BACKSTORY.md",
        BASE_DIR / "docs" / "ENVIRONMENT_AND_BANTER.md",
    ],
    "episodes": [
        BASE_DIR / "content" / "blog",
    ],
    "documentation": [
        BASE_DIR / "docs",
    ],
    "story": [
        BASE_DIR / "scripts" / "STORY_THREAD_TRACKER.md",
        BASE_DIR / "COMEDY_SYSTEM",
    ],
}

# File patterns to include
INCLUDE_PATTERNS = ["*.md", "*.yaml", "*.yml", "*.txt"]

# File patterns to exclude
EXCLUDE_PATTERNS = [
    "**/node_modules/**",
    "**/__pycache__/**",
    "**/.git/**",
    "**/public/**",
    "**/test-output/**",
    "**/archive/**",
]

# Metadata fields to extract
METADATA_FIELDS = [
    "file_path",
    "file_name",
    "episode_number",
    "character",
    "characters",
    "topic",
    "topics",
    "date",
    "type",
    "draft",
    "title",
    "section",  # section within document
]

# ChromaDB collection names
COLLECTIONS = {
    "documents": "all_documents",
    "episodes": "episodes",
    "characters": "characters",
    "story": "story_arcs",
    "documentation": "documentation",
}
