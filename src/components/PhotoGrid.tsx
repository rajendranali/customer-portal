import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fallback photos if the API fails
  const defaultPhotos = [
    "https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722352565642-47e4942af628?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722271456143-5e4525b353d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722156855407-2775911d0174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723217102249-cd26c17da2d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723040175971-e16d4c8d5f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTd8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1723142481837-a50a0dd9dbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722218530707-2b6b720ac3bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722262179160-f00dbb9dcddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722446584524-5c3c5d23df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721907360880-e5c7462a9ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1722156855407-2775911d0174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723040175971-e16d4c8d5f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTd8fHxlbnwwfHx8fHw%3D",
  ];
  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: { count: 12, client_id: "YOUR_UNSPLASH_ACCESS_KEY" },
        }
      );
      const fetchedPhotos = response.data.map((photo: any) => photo.urls.thumb);
      setPhotos(getRandomPhotos(fetchedPhotos, 9));
      setError(null);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setError("Failed to fetch photos. Displaying default photos.");
      setPhotos(getRandomPhotos(defaultPhotos, 9));
    }
  };

  const getRandomPhotos = (photosArray: string[], numberOfPhotos: number) => {
    const shuffled = photosArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfPhotos);
  };

  const shufflePhotos = (photosToShuffle: string[]) => {
    setPhotos((prevPhotos) => {
      const shuffled = [...photosToShuffle];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(() => {
      shufflePhotos(photos);
    }, 10000);
    return () => clearInterval(interval);
  }, [customerId]);

  return (
    <div className="photo-grid">
      {error && <div className="error-message">{error}</div>}
      <div className="grid-container">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Customer related" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
