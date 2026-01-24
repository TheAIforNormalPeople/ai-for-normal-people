"""
Test script for RAG system
"""
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from rag.query_interface import QueryInterface

def test_rag():
    print("=" * 60)
    print("RAG System Test")
    print("=" * 60)
    
    qi = QueryInterface()
    
    # Test 1: General query
    print("\n1. Testing general query: 'What is the current episode number?'")
    print("-" * 60)
    results = qi.query("What is the current episode number?", collection="documents", n_results=3)
    for i, r in enumerate(results[:3], 1):
        print(f"\nResult {i} (Score: {r['score']:.3f}):")
        print(f"Source: {r['metadata'].get('file_name', 'Unknown')}")
        print(f"Content: {r['content'][:200]}...")
    
    # Test 2: Episode search
    print("\n\n2. Testing episode search: 'Vector processing glitches'")
    print("-" * 60)
    results = qi.search_episodes("Vector processing glitches trauma", episode_numbers=[29, 32, 33], n_results=3)
    for i, r in enumerate(results[:3], 1):
        ep_num = r['metadata'].get('episode_number', '?')
        print(f"\nResult {i} - Episode {ep_num} (Score: {r['score']:.3f}):")
        print(f"Content: {r['content'][:300]}...")
    
    # Test 3: Character search
    print("\n\n3. Testing character search: 'Bounce personality'")
    print("-" * 60)
    results = qi.query("Bounce personality 90s gamer", collection="characters", n_results=3)
    for i, r in enumerate(results[:3], 1):
        print(f"\nResult {i} (Score: {r['score']:.3f}):")
        print(f"Source: {r['metadata'].get('file_name', 'Unknown')}")
        print(f"Content: {r['content'][:300]}...")
    
    # Test 4: Story context
    print("\n\n4. Testing story context (episode 33)")
    print("-" * 60)
    context = qi.get_story_context(episode_number=33)
    print(f"Context length: {len(context)} characters")
    print(f"First 500 chars:\n{context[:500]}...")
    
    # Test 5: Current state
    print("\n\n5. Testing current state retrieval")
    print("-" * 60)
    state = qi.get_current_state()
    if state and "not found" not in state.lower():
        print(f"State length: {len(state)} characters")
        print(f"First 500 chars:\n{state[:500]}...")
    else:
        print("Current state not found - trying alternative query...")
        results = qi.query("current episode status published draft", collection="documents", n_results=5)
        if results:
            print(f"Found {len(results)} results")
            print(f"First result: {results[0]['content'][:300]}...")
    
    print("\n" + "=" * 60)
    print("Test Complete!")
    print("=" * 60)

if __name__ == "__main__":
    test_rag()
