"""
Vector store interface for ChromaDB
"""
import chromadb
from chromadb.config import Settings
from typing import List, Dict, Any, Optional
from pathlib import Path

from .config import VECTOR_DB_PATH, COLLECTIONS, EMBEDDING_DIMENSIONS


class VectorStore:
    """Interface to ChromaDB vector database"""
    
    def __init__(self, db_path: str = VECTOR_DB_PATH):
        """
        Initialize vector store
        
        Args:
            db_path: Path to ChromaDB database
        """
        self.db_path = Path(db_path)
        self.db_path.mkdir(parents=True, exist_ok=True)
        
        # Initialize ChromaDB client
        self.client = chromadb.PersistentClient(
            path=str(self.db_path),
            settings=Settings(anonymized_telemetry=False)
        )
        
        # Initialize collections
        self.collections = {}
        for key, name in COLLECTIONS.items():
            try:
                self.collections[key] = self.client.get_or_create_collection(
                    name=name,
                    metadata={"description": f"Collection for {key}"}
                )
            except Exception as e:
                print(f"Error creating collection {name}: {e}")
                # Try creating with different name
                self.collections[key] = self.client.get_or_create_collection(
                    name=f"{name}_alt"
                )
    
    def add_documents(
        self,
        documents: List[Dict[str, Any]],
        collection_key: str = "documents",
        embeddings: Optional[List[List[float]]] = None
    ):
        """
        Add documents to vector store
        
        Args:
            documents: List of dicts with 'content' and 'metadata' keys
            collection_key: Which collection to use
            embeddings: Pre-computed embeddings (if None, will need to compute)
        """
        if collection_key not in self.collections:
            raise ValueError(f"Unknown collection: {collection_key}")
        
        collection = self.collections[collection_key]
        
        # Prepare data
        ids = []
        contents = []
        metadatas = []
        
        for i, doc in enumerate(documents):
            doc_id = f"{doc['metadata'].get('file_path', 'unknown')}_chunk_{doc['metadata'].get('chunk_index', i)}"
            ids.append(doc_id)
            contents.append(doc['content'])
            
            # Clean metadata (ChromaDB only accepts strings, numbers, bools)
            clean_metadata = {}
            for key, value in doc['metadata'].items():
                if isinstance(value, (str, int, float, bool)):
                    clean_metadata[key] = value
                elif isinstance(value, list):
                    # Convert list to comma-separated string
                    clean_metadata[key] = ", ".join(str(v) for v in value)
                else:
                    clean_metadata[key] = str(value)
            
            metadatas.append(clean_metadata)
        
        # Add to collection
        if embeddings:
            collection.add(
                ids=ids,
                documents=contents,
                metadatas=metadatas,
                embeddings=embeddings
            )
        else:
            collection.add(
                ids=ids,
                documents=contents,
                metadatas=metadatas
            )
    
    def query(
        self,
        query_text: str,
        query_embeddings: Optional[List[float]] = None,
        collection_key: str = "documents",
        n_results: int = 10,
        where: Optional[Dict[str, Any]] = None,
        where_document: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """
        Query the vector store
        
        Args:
            query_text: Text to search for
            query_embeddings: Pre-computed query embedding
            collection_key: Which collection to search
            n_results: Number of results to return
            where: Metadata filter (e.g., {"episode_number": 33})
            where_document: Document content filter
        
        Returns:
            Dict with 'ids', 'documents', 'metadatas', 'distances'
        """
        if collection_key not in self.collections:
            raise ValueError(f"Unknown collection: {collection_key}")
        
        collection = self.collections[collection_key]
        
        # Query
        if query_embeddings:
            results = collection.query(
                query_embeddings=[query_embeddings],
                n_results=n_results,
                where=where,
                where_document=where_document
            )
        else:
            results = collection.query(
                query_texts=[query_text],
                n_results=n_results,
                where=where,
                where_document=where_document
            )
        
        return results
    
    def delete_collection(self, collection_key: str):
        """Delete a collection"""
        if collection_key in self.collections:
            collection_name = COLLECTIONS[collection_key]
            self.client.delete_collection(name=collection_name)
            del self.collections[collection_key]
    
    def get_collection_count(self, collection_key: str) -> int:
        """Get number of documents in collection"""
        if collection_key not in self.collections:
            return 0
        return self.collections[collection_key].count()
    
    def reset_collection(self, collection_key: str):
        """Reset (delete and recreate) a collection"""
        self.delete_collection(collection_key)
        collection_name = COLLECTIONS[collection_key]
        self.collections[collection_key] = self.client.get_or_create_collection(
            name=collection_name,
            metadata={"description": f"Collection for {collection_key}"}
        )
