import { useState, useEffect } from "react";
import axios from "axios";
import "./VideoCard.css";

function VideoCard() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [videos, setVideos] = useState([]);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get("http://localhost:3310/api/videos");
      setVideos(response.data);
    };

    fetchVideos();

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
      <h1 className="video-card-title-main">TOUS NOS FILMS</h1>
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
            <div className="video-card-side video-card-side-front">
              <img
                src={video.image}
                alt={video.titre}
                className="video-card-image"
              />
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
