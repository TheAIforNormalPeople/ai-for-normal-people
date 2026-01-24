# RAG System for AI for Normal People

Retrieval Augmented Generation (RAG) system that indexes all project documentation, episodes, character data, and story information into a searchable vector database.

## Purpose

This RAG system solves the context loss problem by making all project knowledge instantly accessible through semantic search. No more manual file reading - just ask questions and get relevant context.

## Setup

### 1. Install Dependencies

```bash
cd aiforhumans/rag
pip install -r requirements.txt
```

### 2. Index Documents

```bash
python -m rag.indexer
```

Or with reset (clears existing index):
```bash
python -m rag.indexer --reset
```

### 3. Use in Code

```python
from rag.query_interface import QueryInterface

# Initialize
interface = QueryInterface()

# Query
results = interface.query("What is Vector's backstory?")
for result in results:
    print(result['content'])
    print(f"Score: {result['score']}")
    print(f"Source: {result['metadata']['file_path']}")
```

## Usage Examples

### Get Story Context
```python
# Get full story context up to episode 33
context = interface.get_story_context(episode_number=33)
print(context)
```

### Search Episodes
```python
# Search episodes 29-33 for Vector's glitches
results = interface.search_episodes(
    "Vector processing glitches trauma",
    episode_numbers=[29, 30, 31, 32, 33]
)
```

### Get Character Info
```python
# Get all information about Bounce
info = interface.get_character_info("Bounce")
print(info)
```

### Get Current State
```python
# Get current project state
state = interface.get_current_state()
print(state)
```

## Collections

The system uses multiple collections:

- **documents**: All documents (default)
- **episodes**: Episode content
- **characters**: Character data
- **story**: Story threads and arcs
- **documentation**: Documentation files

## Query Functions

### General Query
```python
results = interface.query(
    query="What are the active story arcs?",
    collection="story",
    n_results=10
)
```

### With Filters
```python
results = interface.query(
    query="Vector's personality",
    collection="characters",
    filters={"character": "Vector"},
    n_results=5
)
```

## Integration

### MCP Server
The RAG system is integrated with the MCP server. Use MCP tools:
- `rag_query` - Query the knowledge base
- `rag_search_episodes` - Search episodes
- `rag_search_characters` - Search character info
- `rag_get_story_context` - Get full story context

### Cursor
The system automatically loads context on chat start. Just ask questions:
- "What's the full story so far?"
- "What did we say about Vector's trauma?"
- "What's Bounce's personality?"

## Configuration

Edit `config.py` to:
- Change embedding model
- Adjust chunk size
- Modify document paths
- Configure collections

## Maintenance

### Reindex
When documents change significantly:
```bash
python -m rag.indexer --reset
```

### Check Index Status
```python
from rag.vector_store import VectorStore

store = VectorStore()
for key in ["documents", "episodes", "characters", "story"]:
    count = store.get_collection_count(key)
    print(f"{key}: {count} documents")
```

## Technical Details

- **Vector DB**: ChromaDB (local, persistent)
- **Embedding Model**: sentence-transformers/all-MiniLM-L6-v2
- **Chunk Size**: 800 tokens
- **Chunk Overlap**: 150 tokens
- **Embedding Dimensions**: 384

## Troubleshooting

### Index is Empty
Run the indexer:
```bash
python -m rag.indexer
```

### Poor Search Results
- Try different query phrasing
- Check if documents were indexed (see Check Index Status)
- Adjust `min_score` in retriever

### Memory Issues
- Reduce `CHUNK_SIZE` in config.py
- Process documents in smaller batches
- Use GPU if available (set `EMBEDDING_DEVICE = "cuda"`)
