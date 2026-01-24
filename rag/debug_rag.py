"""
Debug script for RAG system
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from rag.vector_store import VectorStore
from rag.query_interface import QueryInterface

def debug_rag():
    print("=" * 60)
    print("RAG Debug")
    print("=" * 60)
    
    store = VectorStore()
    
    # Check collection counts
    print("\nCollection counts:")
    for key in ['documents', 'episodes', 'characters', 'story', 'documentation']:
        count = store.get_collection_count(key)
        print(f"  {key}: {count}")
    
    # Try to get a sample document from each collection
    print("\n\nSample documents from collections:")
    for key in ['documents', 'episodes', 'characters']:
        print(f"\n--- {key.upper()} ---")
        try:
            collection = store.collections[key]
            # Get first few documents
            results = collection.get(limit=3)
            if results['ids']:
                print(f"Found {len(results['ids'])} sample documents")
                for i, doc_id in enumerate(results['ids'][:2]):
                    print(f"\n  Document {i+1} ID: {doc_id}")
                    if results['metadatas']:
                        metadata = results['metadatas'][i]
                        print(f"    File: {metadata.get('file_name', 'Unknown')}")
                        print(f"    Episode: {metadata.get('episode_number', 'N/A')}")
                    if results['documents']:
                        content = results['documents'][i]
                        print(f"    Content preview: {content[:150]}...")
            else:
                print("  No documents found")
        except Exception as e:
            print(f"  Error: {e}")
    
    # Test a simple query
    print("\n\nTesting simple query:")
    print("-" * 60)
    qi = QueryInterface()
    
    # Try very simple queries
    simple_queries = [
        "episode",
        "Vector",
        "character",
        "story"
    ]
    
    for query in simple_queries:
        print(f"\nQuery: '{query}'")
        try:
            results = qi.query(query, collection="documents", n_results=3)
            print(f"  Found {len(results)} results")
            if results:
                print(f"  Top result score: {results[0]['score']:.3f}")
                print(f"  Top result source: {results[0]['metadata'].get('file_name', 'Unknown')}")
        except Exception as e:
            print(f"  Error: {e}")

if __name__ == "__main__":
    debug_rag()
