"""
Retriever for RAG system
Handles semantic search and result ranking
"""
from typing import List, Dict, Any, Optional
from .vector_store import VectorStore
from .embedding_service import EmbeddingService
from .config import TOP_K_RESULTS, SIMILARITY_THRESHOLD, MAX_DISTANCE


class Retriever:
    """Retriever for semantic search"""
    
    def __init__(self, vector_store: VectorStore, embedding_service: EmbeddingService):
        """
        Initialize retriever
        
        Args:
            vector_store: VectorStore instance
            embedding_service: EmbeddingService instance
        """
        self.vector_store = vector_store
        self.embedding_service = embedding_service
    
    def retrieve(
        self,
        query: str,
        collection_key: str = "documents",
        n_results: int = TOP_K_RESULTS,
        filters: Optional[Dict[str, Any]] = None,
        min_score: float = SIMILARITY_THRESHOLD
    ) -> List[Dict[str, Any]]:
        """
        Retrieve relevant documents
        
        Args:
            query: Search query
            collection_key: Which collection to search
            n_results: Number of results to return
            filters: Metadata filters (e.g., {"episode_number": 33})
            min_score: Minimum similarity score (0-1, lower is more similar)
        
        Returns:
            List of relevant documents with metadata and scores
        """
        # Generate query embedding
        query_embedding = self.embedding_service.embed_text(query)
        
        # Prepare where clause for ChromaDB
        where_clause = None
        if filters:
            where_clause = {}
            for key, value in filters.items():
                if isinstance(value, list):
                    # ChromaDB uses $in for lists
                    where_clause[key] = {"$in": value}
                else:
                    where_clause[key] = value
        
        # Query vector store
        results = self.vector_store.query(
            query_text=query,
            query_embeddings=query_embedding,
            collection_key=collection_key,
            n_results=n_results,
            where=where_clause
        )
        
        # Format results
        formatted_results = []
        if results['ids'] and len(results['ids'][0]) > 0:
            for i in range(len(results['ids'][0])):
                # ChromaDB returns cosine distance (0-2 range, lower is more similar)
                distance = results['distances'][0][i] if results['distances'] else 2.0
                
                # Filter by maximum distance (lower distance = more similar)
                if distance <= MAX_DISTANCE:
                    # Convert distance to similarity score for display (0-1, higher is better)
                    # Cosine distance: 0 = identical, 1 = orthogonal, 2 = opposite
                    # Convert to similarity: similarity = 1 - (distance / 2)
                    similarity = 1 - (distance / 2.0)
                    formatted_results.append({
                        "content": results['documents'][0][i],
                        "metadata": results['metadatas'][0][i],
                        "score": similarity,
                        "distance": distance,
                    })
        
        # Sort by score (highest first)
        formatted_results.sort(key=lambda x: x['score'], reverse=True)
        
        return formatted_results
    
    def retrieve_episodes(
        self,
        query: str,
        episode_numbers: Optional[List[int]] = None,
        n_results: int = TOP_K_RESULTS
    ) -> List[Dict[str, Any]]:
        """Retrieve from episodes collection"""
        filters = {}
        if episode_numbers:
            filters["episode_number"] = episode_numbers
        
        return self.retrieve(
            query=query,
            collection_key="episodes",
            n_results=n_results,
            filters=filters
        )
    
    def retrieve_characters(
        self,
        query: str,
        character_names: Optional[List[str]] = None,
        n_results: int = TOP_K_RESULTS
    ) -> List[Dict[str, Any]]:
        """Retrieve from characters collection"""
        filters = {}
        if character_names:
            filters["character"] = character_names
        
        return self.retrieve(
            query=query,
            collection_key="characters",
            n_results=n_results,
            filters=filters
        )
    
    def retrieve_story(
        self,
        query: str,
        n_results: int = TOP_K_RESULTS
    ) -> List[Dict[str, Any]]:
        """Retrieve from story collection"""
        return self.retrieve(
            query=query,
            collection_key="story",
            n_results=n_results
        )
