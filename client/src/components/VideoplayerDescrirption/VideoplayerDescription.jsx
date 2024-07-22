import { Link, useParams } from "react-router-dom";
import "./VideoplayerDescription.css";
import { useEffect, useState } from "react";
import SameCategories from "../SameCategories/SameCategories";
import { Mycontext } from "../Context";

function VideoplayerDescription() {
  const [info, setInfo] = useState();
  const [release, setRelease] = useState();
  const { container, setContainer } = Mycontext();
  const [margin, setMargin] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/videos/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        setRelease(response[0].release_date.split("-"));
      });
  }, [id]);
  setTimeout(
    () => {
      setContainer("videoplayer_description_container");
    },
    window.innerWidth < 1024 ? 1000 : 100
  );
  if (window.innerWidth >= 1024) {
    setTimeout(() => {
      setMargin("235px");
    }, 2000);
  }
  return (
    <>
      <div className={container}>
        <div
          className="videoplayer_description_categories"
          id="animate-description"
          style={{ marginBottom: margin }}
        >
          <div className="videoplayer_none_on_mobile">
            <h2 className="title_categories">CATEGORIE</h2>
            <ul className="videoplayer_categories">
              <li className="genre">
                <Link to="/movies" style={{ color: "white" }}>
                  {" "}
                  VOIR TOUS LES FILMS{" "}
                </Link>
                <br />{" "}
                <Link to="/series" style={{ color: "white" }}>
                  VOIR TOUTES LES SERIES
                </Link>
              </li>
            </ul>
            <div className="categories">
              <h2 className="title_genre">
                {info && info[0].typeID} PAR GENRE
              </h2>
              <ul className="videoplayer_genre">
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Action"
                      : "/series?genre=Action"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">ACTION</li>
                </Link>

                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Aventure"
                      : "/series?genre=Aventure"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">AVENTURE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Animation"
                      : "/series?genre=Animation"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">ANIMATION</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Biopic"
                      : "/series?genre=Biopic"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">BIOPIC</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Comédie"
                      : "/series?genre=Comédie"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">COMEDIE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Drame"
                      : "/series?genre=Drame"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">DRAME</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Fantastique"
                      : "/series?genre=Fantastique"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">FANTASTIQUE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Guerre"
                      : "/series?genre=Guerre"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">GUERRE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Historique"
                      : "/series?genre=Historique"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">HISTORIQUE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Mystère"
                      : "/series?genre=Mystère"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">MYSTERE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Romance"
                      : "/series?genre=Romance"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">ROMANCE</li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Science-fiction"
                      : "/series?genre=Science-fiction"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">SCIENCE-FICTION </li>
                </Link>
                <Link
                  to={
                    info && info[0].typeID === "Film"
                      ? "/movies?genre=Thriller"
                      : "/series?genre=Thriller"
                  }
                  style={{ textDecorationColor: "white" }}
                >
                  <li className="genre">THRILLER</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="videoplayer_image">
            {window.innerWidth > 1024 ? (
              <img
                className="vignette_image"
                src={info && info[0].image_1}
                alt="img"
                style={{ width: "30em", height: "100%" }}
              />
            ) : (
              <img
                className="vignette_image"
                src={info && info[0].image_1}
                alt="img"
              />
            )}

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
      <SameCategories
        categorie={info && info[0].name}
        type={info && info[0].typeID}
      />
    </>
  );
}

export default VideoplayerDescription;
