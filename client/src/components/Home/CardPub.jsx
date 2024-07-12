import "./CardPub.css";

function CardPub() {
  const size = window.innerWidth;
  return (
    <div className="container-cardPub" id="scroll-smooth">
      <div className="card card-film" id="card-film-pub">
        &nbsp;
      </div>
      <div className="card card-serie" id="card-film-pub2">
        &nbsp;
      </div>
      {size >= 768 && (
        <div className="card card-serie" id="card-film-pub3">
          &nbsp;
        </div>
      )}
      {size >= 1024 && (
        <div className="card card-serie" id="card-film-pub4">
          &nbsp;
        </div>
      )}
    </div>
  );
}

export default CardPub;
