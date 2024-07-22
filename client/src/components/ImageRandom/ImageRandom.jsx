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
  const [win, setWin] = useState(false);
  window.addEventListener("scroll", () => {
    if (
      window.scrollY > 200 &&
      window.scrollY < 1000 &&
      window.innerWidth >= 1024
    ) {
      setWin(true);
    } else {
      setWin(false);
    }
  });
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      const videos = response.data;

      // Sélectionner une vidéo au hasard sur la BDD
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos[randomIndex];
      setVid(randomVideo);
      // Lit l'image au hasard
      setRandomImage(randomVideo.image_1);
      setRandom(videos[randomIndex].titre);
    };

    fetchVideos();
  }, []);
  return (
    <>
      <div className="test-k7">
        <img src="/public/magn2.png" alt="k7" className="background-k7" />
      </div>

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
            <Link
              to={`/player/${vid.videoID}`}
              style={{ textDecoration: "none" }}
            >
              <h1 className="recommanded">
                <br />
                RECOMMANDATION
              </h1>

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
        <h1 className="synopsis-random">{vid && vid.synopsis}</h1>
      </div>
      {win && (
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            opacity: 0.2,
            position: "absolute",
            top: "62em",
          }}
        >
          <source src="/public/20th Century Fox HD.mp4" type="video/mp4" />
          <track kind="film" src="captions.vtt" label="English" />
        </video>
      )}
    </>
  );
}

export default ImageRandom;
