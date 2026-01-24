"""
Test querying ChromaDB directly
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from rag.vector_store import VectorStore
from rag.embedding_service import EmbeddingService

def test_direct():
    print("Testing ChromaDB query directly...")
    
    store = VectorStore()
    embedding_service = EmbeddingService()
    
    # Get a collection
    collection = store.collections['episodes']
    print(f"Collection count: {collection.count()}")
    
    # Generate query embedding
    query_text = "Vector processing glitches"
    query_embedding = embedding_service.embed_text(query_text)
    print(f"Query embedding dimension: {len(query_embedding)}")
    
    # Query directly
    print("\nQuerying with embedding...")
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=5
    )
    
    print(f"\nResults:")
    print(f"  IDs: {len(results['ids'][0]) if results['ids'] else 0}")
    print(f"  Distances: {results['distances'][0][:3] if results['distances'] else 'None'}")
    
    if results['ids'] and len(results['ids'][0]) > 0:
        print(f"\nTop 3 results:")
        for i in range(min(3, len(results['ids'][0]))):
            print(f"\n  Result {i+1}:")
            print(f"    ID: {results['ids'][0][i]}")
            if results['distances']:
                distance = results['distances'][0][i]
                similarity = 1 - distance
                print(f"    Distance: {distance:.4f}")
                print(f"    Similarity: {similarity:.4f}")
            if results['metadatas']:
                print(f"    Metadata: {results['metadatas'][0][i]}")
            if results['documents']:
                print(f"    Content: {results['documents'][0][i][:200]}...")
    else:
        print("  No results found")
    
    # Also try query_texts
    print("\n\nQuerying with query_texts...")
    results2 = collection.query(
        query_texts=[query_text],
        n_results=5
    )
    
    print(f"Results with query_texts:")
    print(f"  IDs: {len(results2['ids'][0]) if results2['ids'] else 0}")

if __name__ == "__main__":
    test_direct()
