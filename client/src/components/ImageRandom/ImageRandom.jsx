import { useState, useEffect } from "react";
import axios from "axios";
import "./ImageRandom.css";

function ImageRandom() {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      const videos = response.data;

      // Sélectionner une vidéo au hasard sur la BDD
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos[randomIndex];

      // Lit l'image au hasard
      setRandomImage(randomVideo.image);
    };

    fetchVideos();
  }, []);

  return (
    <div className="random-image-container">
      {randomImage ? (
        <img src={randomImage} alt="Random Video" className="random-image" />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default ImageRandom;
