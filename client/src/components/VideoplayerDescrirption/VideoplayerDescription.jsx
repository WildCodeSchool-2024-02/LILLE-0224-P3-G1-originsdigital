import "./VideoplayerDescription.css";

function VideoplayerDescription() {
  return (
    <div className="videoplayer_description_container">
      <div className="videoplayer_description_categories">
        <div className="videoplayer_none_on_mobile">
            <h2 className="title_categories">CATEGORIES</h2>
          <ul className="videoplayer_categories">
            <li className="genre">FILM</li>
            <li className="genre">SERIE</li>
          </ul>
          <div className="categories">
              <h2 className="title_genre">FILMS PAR GENRE</h2>
            <ul className="videoplayer_genre">
              <li className="genre">ACTION</li>
              <li className="genre">AVENTURE</li>
              <li className="genre">ANIMATION</li>
              <li className="genre">BIOGRAPHIE</li>
              <li className="genre">COMEDIE</li>
              <li className="genre">CRIME</li>
              <li className="genre">DRAME</li>
              <li className="genre">FANTASTIQUE</li>
              <li className="genre">GUERRE</li>
              <li className="genre">HISTORIQUE</li>
              <li className="genre">MYSTERE</li>
              <li className="genre">ROMANCE</li>
              <li className="genre">SCI FI</li>
              <li className="genre">THRILLER</li>
            </ul>
          </div>
        </div>
        <div className="videoplayer_image">
          <img
            className="vignette_image"
            src="https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/14/33/18366630.jpg"
            alt="img"
          />

          <ul className="videoplayer_list">
            <li className="vignette_descritpion">
              TITRE : LE SEIGNEUR DES ANNEAUX LE RETOUR DU ROI
            </li>
            <li className="vignette_descritpion">DATE DE SORTIE : 2023</li>
            <li className="vignette_descritpion">
              GENRE : ACTION AVENTURE FANTASTIQUE
            </li>
            <li className="vignette_descritpion">DUREE : 3H21</li>
            <li className="vignette_descritpion">
              SYNOPSIS : Gandalf et Aragorn mènent le Monde des Hommes contre
              l''armée de Sauron pour détourner son regard de Frodon et Sam
              alors qu''ils approchent du Mont Destin avec l''Anneau Unique.
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default VideoplayerDescription;
