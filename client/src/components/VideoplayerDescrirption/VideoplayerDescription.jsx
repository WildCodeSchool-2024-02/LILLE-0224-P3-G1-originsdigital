import { useParams } from "react-router-dom";
import "./VideoplayerDescription.css";
import { useEffect, useState } from "react";

function VideoplayerDescription() {
  const [info, setInfo] = useState();
  const [release, setRelease] = useState();
  const [container, setContainer] = useState("videoplayer_description_container_none");
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/videos/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        setRelease(response[0].release_date.split("-"));
        console.info(response[0])
      });
  }, []);
setTimeout(()=>{
  setContainer("videoplayer_description_container")
},1000)
  return (
    <div className={container}>
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
            src={info && info[0].image_1}
            alt="img"
          />

          <ul className="videoplayer_list">
            <li className="vignette_descritpion">
              TITRE : {info && info[0].titre}
            </li>
            <li className="vignette_descritpion">
              DATE DE SORTIE : {info && `${release[1]}-${release[0]}`}{" "}
            </li>
            <li className="vignette_descritpion">
              GENRE : {info && info[0].name}
            </li>
            <li className="vignette_descritpion">
              DUREE : {info && info[0].duration}
            </li>
            <li className="vignette_descritpion">
              SYNOPSIS : {info && info[0].synopsis}
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default VideoplayerDescription;
