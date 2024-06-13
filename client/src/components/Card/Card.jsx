import { useState, useEffect } from "react";
import "./Card.css";

function Card() {
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
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 992);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onMouseOver={HandleFlip}
      onFocus={HandleFlip}
    >
      <div className="card_side card_side-front">
        <img
          src="https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/14/08/39/1848157.jpg"
          alt="Movie Poster"
          className="card_image"
        />
        <div className="card_details_mobile">
          <ul>
            <li>Release_Date</li>
            <li>Duration Rating</li>
            <li>Director</li>
          </ul>
        </div>
      </div>
      <div className="card_side card_side-back">
        <div className="card_cta">
          <div className="card_details">
            <h2 className="card_title">Titre</h2>
            <ul>
              <li>Release_Date</li>
              <li>Duration Rating</li>
              <li>Director</li>
              <li>Synopsis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
