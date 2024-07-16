import { useEffect, useState } from "react";
import "./PubSuggestion.css";
import axios from "axios";

function PubSuggestion() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videos")
      .then((response) => response)
      .then((response) => setData(response.data));
  }, []);

  const z = data && data.length;
  const y = z - 1;
  const x = y - 1;
  const w = x - 2;

  return (
    <>
      <div className="publicities-SectionSuggestionSeries">
        <h1 className="publicities-h1-title">Plongez dans l’Univer du VHS</h1>
        <h3 className="publicities-h3-p">Derniers ajouts</h3>
        <article className="publicities-cardSuggestion">
          {data && (
            <>
              <div className="publicities-card-home">
                <div className="publicities-card-side publicities-card-side-front">
                  <img
                    src={data[w]?.image_1}
                    alt={data[w]?.titre}
                    className="publicities-imgCardSugg"
                  />
                </div>
                <div className="publicities-card-side publicities-card-side-back">
                  <h2>{data[w]?.titre}</h2>
                  <p>{data[w]?.synopsis}</p>
                  <p>Durée: {data[w]?.duration}</p>
                  <p>Réalisateur: {data[w]?.director}</p>
                </div>
              </div>
              <div className="publicities-card-home">
                <div className="publicities-card-side publicities-card-side-front">
                  <img
                    src={data[x]?.image_1}
                    alt={data[x]?.titre}
                    className="publicities-imgCardSugg"
                  />
                </div>
                <div className="publicities-card-side publicities-card-side-back">
                  <h2>{data[x]?.titre}</h2>
                  <p>{data[x]?.synopsis}</p>
                  <p>Durée: {data[x]?.duration}</p>
                  <p>Réalisateur: {data[x]?.director}</p>
                </div>
              </div>
              <div className="publicities-card-home">
                <div className="publicities-card-side publicities-card-side-front">
                  <img
                    src={data[y]?.image_1}
                    alt={data[y]?.titre}
                    className="publicities-imgCardSugg"
                  />
                </div>
                <div className="publicities-card-side publicities-card-side-back">
                  <h2>{data[y]?.titre}</h2>
                  <p>{data[y]?.synopsis}</p>
                  <p>Durée: {data[y]?.duration}</p>
                  <p>Réalisateur: {data[y]?.director}</p>
                </div>
              </div>
            </>
          )}
        </article>
      </div>
      <article className="publicities-SectionSuggestionFilms">
        <img
          className="publicities-ImgSuggestionFilms"
          src="src/assets/images/series/films.png"
          alt="pochette films"
        />
        <h3 className="publicities-h3-pAbso">Et bien d'autres encore ...</h3>
      </article>
    </>
  );
}

export default PubSuggestion;
