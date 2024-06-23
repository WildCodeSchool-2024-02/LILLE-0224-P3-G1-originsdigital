import "./PubSuggestion.css";
import Card from "../Card/Card";

function PubSuggestion() {
  return (
    <>
      <div className="SectionSuggestionSeries">
        <h1 className="h1-title">Plongez dans l’Univers des Séries</h1>
        <h3 className="h3-p">
          Disponible en VHS Lite et <span className="Premium">Premium</span>{" "}
        </h3>
        <article className="cardSuggestion">
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </div>
      <article className="SectionSuggestionFilms">
        <img
          className="ImgSuggestionFilms"
          src="src/assets/images/series/films.png"
          alt="pochette films"
        />
        <h1 className="h1-titleAbso">Plongez dans l’Univers des Films</h1>
        <h3 className="h3-pAbso">
          Disponible en VHS Lite et <span className="Premium">Premium</span>{" "}
        </h3>
      </article>
    </>
  );
}
export default PubSuggestion;
