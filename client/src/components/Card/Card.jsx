import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ video }) {
  const [flipped, setFlipped] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const HandleFlip = () => {
    if (!cooldown && !isMobile) {
      setFlipped(!flipped);
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onMouseOver={HandleFlip}
      onFocus={HandleFlip}
    >
      <div className="card_side card_side-front">
        <img
          src={isMobile ? video.image_1 : video.image_2}
          alt="Movie Poster"
          className="card_image"
        />
        <div className="card_details_mobile">
          <ul>
            <li>{video.release_date}</li>
            <li>
              {video.duration} {video.rating}
            </li>
            <li>{video.director}</li>
          </ul>
        </div>
      </div>
      <div className="card_side card_side-back">
        <div className="card_cta">
          <div className="card_details">
            <h2 className="card_title">{video.titre}</h2>
            <ul>
              <li>{new Date(video.release_date).toLocaleDateString()}</li>
              <li>{video.duration}</li>
              <li>{video.director}</li>
              <li>{video.synopsis}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  video: PropTypes.shape({
    image_1: PropTypes.string.isRequired,
    image_2: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
