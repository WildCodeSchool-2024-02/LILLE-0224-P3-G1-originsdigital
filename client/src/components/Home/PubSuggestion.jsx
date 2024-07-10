import "./PubSuggestion.css";
// import Card from "../Card/Card";

function PubSuggestion() {
  return (
    <>
      <div className="SectionSuggestionSeries">
        <h1 className="h1-title">Plongez dans l’Univer du VHS</h1>
        <h3 className="h3-p">Derniers ajouts</h3>
        <article className="cardSuggestion">
          {/* {<Card />
          <Card />
          <Card />
          <Card />} */}
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
