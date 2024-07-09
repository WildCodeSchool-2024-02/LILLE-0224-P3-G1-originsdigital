import "./CardPub.css";

function CardPub() {
  return (
    <div className="container-cardPub">
      <div className="card card-film">
        <div className="card-title">Film</div>
        <div className="card-content">Film vhs</div>
      </div>
      <div className="card card-serie">
        <div className="card-title">Series</div>
        <div className="card-content">Series vhs</div>
      </div>
    </div>
  );
}

export default CardPub;
