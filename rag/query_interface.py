"""
Query interface for RAG system
User-friendly query functions
"""
from typing import List, Dict, Any, Optional
from .vector_store import VectorStore
from .embedding_service import EmbeddingService
from .retriever import Retriever


class QueryInterface:
    """User-friendly query interface"""
    
    def __init__(self):
        """Initialize query interface"""
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()
        self.retriever = Retriever(self.vector_store, self.embedding_service)
    
    def query(
        self,
        query: str,
        collection: str = "documents",
        filters: Optional[Dict[str, Any]] = None,
        n_results: int = 10
    ) -> List[Dict[str, Any]]:
        """
        General query function
        
        Args:
            query: Search query
            collection: Collection to search (documents, episodes, characters, story, documentation)
            filters: Metadata filters
            n_results: Number of results
        
        Returns:
            List of relevant documents
        """
        return self.retriever.retrieve(
            query=query,
            collection_key=collection,
            n_results=n_results,
            filters=filters
        )
    
    def get_story_context(self, episode_number: Optional[int] = None) -> str:
        """
        Get full story context
        
        Args:
            episode_number: If provided, get context up to this episode
        
        Returns:
            Formatted story context
        """
        query = "story arcs character development plot threads"
        if episode_number:
            filters = {"episode_number": list(range(1, episode_number + 1))}
        else:
            filters = None
        
        results = self.retriever.retrieve_episodes(
            query=query,
            episode_numbers=list(range(1, episode_number + 1)) if episode_number else None,
            n_results=20
        )
        
        # Also get from story collection
        story_results = self.retriever.retrieve_story(query=query, n_results=10)
        
        # Combine and format
        context_parts = []
        
        # Add story-specific results
        for result in story_results[:5]:
            context_parts.append(f"**{result['metadata'].get('file_name', 'Unknown')}**")
            context_parts.append(result['content'])
            context_parts.append("")
        
        # Add episode results
        for result in results[:10]:
            ep_num = result['metadata'].get('episode_number', '?')
            context_parts.append(f"**Episode {ep_num}**")
            context_parts.append(result['content'])
            context_parts.append("")
        
        return "\n".join(context_parts)
    
    def get_character_info(self, character_name: str) -> str:
        """
        Get character information
        
        Args:
            character_name: Name of character
        
        Returns:
            Formatted character information
        """
        results = self.retriever.retrieve_characters(
            query=f"{character_name} personality voice catchphrases backstory",
            character_names=[character_name],
            n_results=15
        )
        
        context_parts = [f"# {character_name} Information\n"]
        for result in results:
            source = result['metadata'].get('file_name', 'Unknown')
            context_parts.append(f"**From: {source}**")
            context_parts.append(result['content'])
            context_parts.append("")
        
        return "\n".join(context_parts)
    
    def search_episodes(
        self,
        query: str,
        episode_numbers: Optional[List[int]] = None,
        n_results: int = 10
    ) -> List[Dict[str, Any]]:
        """
        Search episodes
        
        Args:
            query: Search query
            episode_numbers: Filter by episode numbers
            n_results: Number of results
        
        Returns:
            List of relevant episode chunks
        """
        return self.retriever.retrieve_episodes(
            query=query,
            episode_numbers=episode_numbers,
            n_results=n_results
        )
    
    def get_current_state(self) -> str:
        """Get current project state"""
        results = self.query(
            query="current episode status published draft story arcs character state",
            collection="documents",
            filters={"file_name": "CURRENT_STATE.md"},
            n_results=5
        )
        
        if results:
            return results[0]['content']
        return "Current state not found in index"
    
    def find_similar(self, text: str, n_results: int = 5) -> List[Dict[str, Any]]:
        """
        Find similar content
        
        Args:
            text: Text to find similar content for
            n_results: Number of results
        
        Returns:
            List of similar documents
        """
        return self.retriever.retrieve(
            query=text,
            n_results=n_results
        )


# Convenience function
def query_rag(
    query: str,
    collection: str = "documents",
    filters: Optional[Dict[str, Any]] = None,
    n_results: int = 10
) -> List[Dict[str, Any]]:
    """
    Convenience function for querying RAG system
    
    Args:
        query: Search query
        collection: Collection to search
        filters: Metadata filters
        n_results: Number of results
    
    Returns:
        List of relevant documents
    """
    interface = QueryInterface()
    return interface.query(query, collection, filters, n_results)
