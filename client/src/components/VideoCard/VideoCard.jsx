import { useState, useEffect } from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

function VideoCard() {
  const { fctStyle } = Mycontext();

  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const { videos } = Mycontext();
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [title, setTitle] = useState(false);

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

  return (
    <div>
      {title && (
        <h1 className="video-card-title-main">DANS LA MEME CATEGORIE</h1>
      )}

      <div className="video-card-container">
        {videos.map((video, index) => (
          <div
            key={video.videoID}
            id="test"
            className={`video-card ${flippedIndex === index ? "flipped" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleMouseEnter(index)}
            onBlur={handleMouseLeave}
          >
            <Link to={`/player/${video.videoID}`}>
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

            <div className="video-card-side video-card-side-front">
              <Link to={`/player/${video.videoID}`}>
                <img
                  src={video.image_1}
                  alt={video.titre}
                  className="video-card-image"
                />
              </Link>
              <div className="video-card-details-mobile">
                <ul>
                  <li>{new Date(video.release_date).toLocaleDateString()}</li>
                  <li>
                    {video.duration} - {video.rating}
                  </li>
                  <li>{video.director}</li>
                </ul>
              </div>
            </div>
            <div className="video-card-side video-card-side-back">
              <div className="video-card-back-content">
                <div className="video-card-details">
                  <h2 className="video-card-title">{video.titre}</h2>
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

export default VideoCard;
