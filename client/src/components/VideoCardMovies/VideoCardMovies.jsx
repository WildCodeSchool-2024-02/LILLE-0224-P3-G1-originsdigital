import { useState, useEffect } from "react";
import "./VideoCardMovies.css";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

function VideoCardMovies() {
  const { fctStyle } = Mycontext();

  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const { videos } = Mycontext();
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [setTitle] = useState(false);

  setTimeout(() => {
    setTitle(true);
  }, 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setFlippedIndex(index);
      }, 300);
      setHoverTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setFlippedIndex(null);
  };

  // Filtrer les vidéos pour ne garder que celles qui sont des séries
  const moviesVideos = videos.filter((video) => video.typeID === "Film");

  return (
    <div>

      <div className="movies-card-container">
        {moviesVideos.map((video, index) => (
          <div
            key={video.videoID}
            id="test"
            className={`movies-card ${flippedIndex === index ? "flipped" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleMouseEnter(index)}
            onBlur={handleMouseLeave}
          >
            <Link to={`/player/${video.videoID}#top`}>
              <button
                className="button-random2"
                type="button"
                onClick={() => {
                  fctStyle(video.titre);
                }}
              >
                {" "}
              </button>
            </Link>

            <div className="movies-card-side movies-card-side-front">
              <Link to={`/player/${video.videoID}#top`}>
                <img
                  src={video.image}
                  alt={video.titre}
                  className="movies-card-image"
                />
              </Link>
              <div className="movies-card-details-mobile">
                <ul>
                  <li>{new Date(video.release_date).toLocaleDateString()}</li>
                  <li>
                    {video.duration} - {video.rating}
                  </li>
                  <li>{video.director}</li>
                </ul>
              </div>
            </div>
            <div className="movies-card-side movies-card-side-back">
              <div className="movies-card-back-content">
                <div className="movies-card-details">
                  <h2 className="movies-card-title">{video.titre}</h2>
                  <ul>
                    <li>{new Date(video.release_date).toLocaleDateString()}</li>
                    <li>
                      {video.duration} - {video.rating}
                    </li>
                    <li>{video.director}</li>
                    <li>{video.synopsis}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCardMovies;
