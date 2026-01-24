# RAG System Setup Guide

## Quick Start

The RAG (Retrieval Augmented Generation) system is now set up and ready to use!

### 1. Install Dependencies

```bash
cd aiforhumans/rag
pip install -r requirements.txt
```

### 2. Index All Documents

```bash
cd aiforhumans
python -m rag.indexer
```

This will index all project documents into the vector database. First run may take 10-15 minutes.

### 3. Use RAG in Cursor

Once indexed, you can use RAG through MCP tools:

- **`rag_query`** - General semantic search
- **`rag_search_episodes`** - Search episodes
- **`rag_search_characters`** - Search character info
- **`rag_get_story_context`** - Get full story context
- **`rag_get_character_info`** - Get character information
- **`rag_get_current_state`** - Get current project state
- **`rag_find_similar`** - Find similar content

### Example Queries

Instead of manually reading files, just ask:

- "What's the full story so far?" → Use `rag_get_story_context`
- "What did we say about Vector's trauma in episodes 29-33?" → Use `rag_search_episodes`
- "What's Bounce's personality?" → Use `rag_get_character_info`
- "What are the active story arcs?" → Use `rag_query` with collection="story"

## What's Indexed

The system indexes:

- **Core Context**: COMPLETE_PROJECT_BIBLE.md, CURRENT_STATE.md, .cursorrules, etc.
- **Character Data**: All YAML files in `data/characters/`
- **Episodes**: All 33+ episodes in `content/blog/`
- **Documentation**: All files in `docs/`
- **Story**: Story threads, arcs, planning docs

## Maintenance

### Reindex After Major Changes

```bash
python -m rag.indexer --reset
```

### Check Index Status

```python
from rag.vector_store import VectorStore
store = VectorStore()
print(f"Episodes: {store.get_collection_count('episodes')}")
print(f"Characters: {store.get_collection_count('characters')}")
```

## Troubleshooting

### RAG Not Available

If RAG tools don't appear in MCP:
1. Check that dependencies are installed
2. Run the indexer: `python -m rag.indexer`
3. Restart Cursor/MCP server

### Poor Search Results

- Try different query phrasing
- Check if documents were indexed
- Use more specific queries

## Benefits

✅ **No Context Loss**: Full project knowledge always available
✅ **No Manual Reading**: Context retrieved automatically  
✅ **Story Continuity**: Full story arcs always accessible
✅ **Character Consistency**: Character data always available
✅ **Faster Workflow**: No time spent reading files

---

**The RAG system solves the context loss problem by making all project knowledge instantly accessible through semantic search.**
