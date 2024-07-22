import axios from "axios";
import "./SameCategories.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

function SameCategories({ categorie, type }) {
  const [rep, setRep] = useState(null);
  const [data, setData] = useState();

  const url = parseInt(window.location.href.split("/")[4], 10);
  const { fctStyle, setContainer, same, setSame, setFooter, setIframe } =
    Mycontext();
  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/videos/${categorie}/${type}`)
      .then((response) => response)
      .then((response) => {
        setRep(response.data);
      });
  }, [categorie]);
  useEffect(() => {
    setData(rep);
  }, [rep]);
  setTimeout(() => {
    setSame("SameCategories");
  }, 4000);
  console.info(url);

  return (
    <div className={same}>
      <h1 className="video-card-title-main" id="video-card-title-main-id">
        Videos similaires
      </h1>
      {data &&
        data[0] &&
        data.map(
          (elem) =>
            elem.videoID !== url && (
              <div className="same-categorie" key={elem.videoID}>
                <Link to={`/player/${elem.videoID}`}>
                  <button
                    type="button"
                    className="button-same-cat"
                    onClick={() => {
                      fctStyle(elem.titre);
                      setContainer("videoplayer_description_container_none");
                      setSame("SameCategories-none");
                      setFooter("footer-player-none");
                      setIframe("iframe_player_none");
                    }}
                  >
                    .
                  </button>
                </Link>
                <img
                  src={elem.image_1}
                  alt="img1"
                  className="img-same-categorie"
                  style={{ cursor: "pointer" }}
                />
              </div>
            )
        )}
    </div>
  );
}

SameCategories.propTypes = {
  categorie: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SameCategories;
