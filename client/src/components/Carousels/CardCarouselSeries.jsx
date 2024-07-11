import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Mycontext } from "../Context";
import "./CardCarousel.css";

function CardCarouselSeries() {
  const { videos } = Mycontext();
  const a = videos.filter((elem) => elem.typeID === "Série");
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    if (a.length > 0) {
      // Créer une copie des vidéos pour ne pas muter l'état original
      const shuffledVideos = [...a];

      // Mélanger les vidéos pour l'affichage aléatoire
      // eslint-disable-next-line no-plusplus
      for (let i = shuffledVideos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledVideos[i], shuffledVideos[j]] = [
          shuffledVideos[j],
          shuffledVideos[i],
        ];
      }

      setDisplayedVideos(shuffledVideos);
    }
  }, [videos]);

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

  // Diviser les vidéos en groupes de trois
  const groupSize = 3;
  const videoGroups = [];
  for (let i = 0; i < displayedVideos.length; i += groupSize) {
    videoGroups.push(displayedVideos.slice(i, i + groupSize));
  }

  return (
    <>
      <h1 className="title-serie-car">SERIES</h1>
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        emulateTouch
        infiniteLoop
        selectedItem={0}
        width="100%"
      >
        {videoGroups.map((group) => (
          <div
            className="car-arnauld"
            key={group.map((video) => video.id).join("-")}
            style={{ display: "flex", gap: "1em" }}
          >
            {group.map((video, index) => (
              <div
                style={{ border: "none" }}
                key={video.id}
                className={`card ${flippedIndex === index ? "flipped" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleMouseEnter(index)}
                onBlur={handleMouseLeave}
              >
                <div className="card_side card_side-front">
                  <img
                    // src={video.image_1}
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B88651E95E652B927F5B2C4A81CD4DD83CE10EC4350333862A5D68AB823392BE/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
                    alt="Movie Poster"
                    className="card_image"
                  />
                  <div className="card_details_mobile">
                    <ul>
                      <li>
                        {new Date(video.release_date).toLocaleDateString()}
                      </li>
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
                        <li>
                          {new Date(video.release_date).toLocaleDateString()}
                        </li>
                        <li>{video.duration}</li>
                        <li>{video.director}</li>
                        <li>{video.synopsis}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default CardCarouselSeries;
