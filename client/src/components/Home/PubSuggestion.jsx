import { useEffect, useState } from "react";
import "./PubSuggestion.css";
import axios from "axios";
import Card from "../Card/Card";

function PubSuggestion() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videos")
      .then((response) => response)
      .then((response) => setData(response.data));
  }, []);

  console.info(data);

  const z = data && data.length;
  const y = z - 1;
  const x = y - 1;
  const w = x - 1;
  const v = w - 1;
  return (
    <>
      <div className="SectionSuggestionSeries">
        <h1 className="h1-title">Plongez dans l’Univer du VHS</h1>
        <h3 className="h3-p">Derniers ajouts</h3>
        <article className="cardSuggestion">
          {data && (
            <>
              <Card className="card card-home" video={data[v]} />
              <Card className="card card-home" video={data[w]} />
              <Card className="card card-home" video={data[x]} />
              <Card className="card card-home" video={data[y]} />
            </>
          )}
        </article>
      </div>
      <article className="SectionSuggestionFilms">
        <img
          className="ImgSuggestionFilms"
          src="src/assets/images/series/films.png"
          alt="pochette films"
        />
        <h3 className="h3-pAbso">Et bien d'autres encore ...</h3>
      </article>
    </>
  );
}
export default PubSuggestion;
