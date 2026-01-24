"""
Embedding service for RAG system
Generates embeddings using sentence-transformers
"""
from typing import List, Optional
from sentence_transformers import SentenceTransformer
import torch

from .config import EMBEDDING_MODEL, EMBEDDING_DEVICE, EMBEDDING_DIMENSIONS


class EmbeddingService:
    """Service for generating text embeddings"""
    
    def __init__(self, model_name: str = EMBEDDING_MODEL, device: str = None):
        """
        Initialize embedding service
        
        Args:
            model_name: Name of the sentence-transformers model
            device: Device to use ('cpu' or 'cuda'), auto-detects if None
        """
        if device is None:
            device = EMBEDDING_DEVICE
            if torch.cuda.is_available():
                device = "cuda"
        
        print(f"Loading embedding model: {model_name} on {device}")
        self.model = SentenceTransformer(model_name, device=device)
        self.model_name = model_name
        self.device = device
        print(f"Model loaded successfully")
    
    def embed_text(self, text: str) -> List[float]:
        """Generate embedding for a single text"""
        embedding = self.model.encode(text, convert_to_numpy=True, show_progress_bar=False)
        return embedding.tolist()
    
    def embed_batch(self, texts: List[str], batch_size: int = 32, show_progress: bool = True) -> List[List[float]]:
        """
        Generate embeddings for a batch of texts
        
        Args:
            texts: List of texts to embed
            batch_size: Batch size for processing
            show_progress: Whether to show progress bar
        
        Returns:
            List of embeddings (each is a list of floats)
        """
        embeddings = self.model.encode(
            texts,
            batch_size=batch_size,
            show_progress_bar=show_progress,
            convert_to_numpy=True
        )
        return embeddings.tolist()
    
    def get_embedding_dimension(self) -> int:
        """Get the dimension of embeddings"""
        # Test with a small text
        test_embedding = self.embed_text("test")
        return len(test_embedding)
