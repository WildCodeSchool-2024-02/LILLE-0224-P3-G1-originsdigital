import "./HomePartPub.css";

function HomePartPub() {
  return (
    <div className="container-Home">
      <section className="imgPubDay">
        <img className="imgHomePartPub"
          src="src/assets/images/420098-le-seigneur-des-anneaux-que-sont-1200x630-1.jpg"
          alt="pochette de jour "
        />
      </section>
      <section className="choosePlan">
        <h1 className="TextChoose">Trouvez Votre Plan Parfait</h1>
        <button type="button" className="btn-Choose">
          {" "}
          Commencer à choisir{" "}
        </button>
      </section>
      <article className="artcileP">
        <h1 className="titleP">Profitez du Cinéma Chez Vous</h1>
        <p className="textP" style={{textAlign:"center"}}>
          Regardez des saisons complètes de séries en streaming, des films à succès, des VHS originals.
        </p>
      </article>
    </div>
  );
}

export default HomePartPub;
