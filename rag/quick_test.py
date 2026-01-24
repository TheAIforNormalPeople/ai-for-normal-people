"""Quick RAG test"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from rag.query_interface import QueryInterface

print("=" * 60)
print("RAG System Quick Test")
print("=" * 60)

qi = QueryInterface()

# Test 1: General query
print("\n1. General Query: 'current episode'")
results = qi.query("current episode", n_results=3)
print(f"   Found {len(results)} results")
if results:
    print(f"   Top: {results[0]['metadata'].get('file_name')} (score: {results[0]['score']:.3f})")

# Test 2: Episode search
print("\n2. Episode Search: 'Vector glitches' (episodes 32-33)")
results = qi.search_episodes("Vector glitches", episode_numbers=[32, 33], n_results=3)
print(f"   Found {len(results)} results")
if results:
    for i, r in enumerate(results[:2], 1):
        ep = r['metadata'].get('episode_number', '?')
        print(f"   Result {i}: Episode {ep} (score: {r['score']:.3f})")

# Test 3: Character search
print("\n3. Character Search: 'Bounce personality'")
results = qi.query("Bounce personality 90s gamer", collection="characters", n_results=3)
print(f"   Found {len(results)} results")
if results:
    print(f"   Top: {results[0]['metadata'].get('file_name')} (score: {results[0]['score']:.3f})")

# Test 4: Story context
print("\n4. Story Context (episode 33)")
context = qi.get_story_context(episode_number=33)
print(f"   Context length: {len(context)} characters")
if len(context) > 0:
    print("   [OK] Story context retrieved")

print("\n" + "=" * 60)
print("All tests completed!")
print("=" * 60)
