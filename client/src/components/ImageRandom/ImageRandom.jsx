import { useState, useEffect } from "react";
import axios from "axios";
import "./ImageRandom.css";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

function ImageRandom() {
  const { fctStyle } = Mycontext();
  const [randomImage, setRandomImage] = useState("");
  const [vid, setVid] = useState();
  const [random, setRandom] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      const videos = response.data;

      // Sélectionner une vidéo au hasard sur la BDD
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos[randomIndex];
      setVid(randomVideo);
      // Lit l'image au hasard
      setRandomImage(randomVideo.image);
      setRandom(videos[randomIndex].titre);
    };

    fetchVideos();
  }, []);

  return (
    <div className="random-image-container" id="apparition2">
      {randomImage ? (
        <>
          <Link to={`/player/${vid.videoID}`}>
            <button
              className="button-random"
              type="button"
              onClick={() => {
                fctStyle(random);
              }}
            >
              {" "}
            </button>
          </Link>
          <Link to={`/player/${vid.videoID}`}>
            <img
              src={randomImage}
              alt="Random Video"
              className="random-image"
            />
          </Link>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default ImageRandom;
