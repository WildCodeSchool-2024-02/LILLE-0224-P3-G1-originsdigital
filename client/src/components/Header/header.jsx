// ///////////////////////////////////// alexandre M composant header ////////////////////////////////////////////////

import { useState } from "react";
import "./Header.css";
import { Form, Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  if (!Cookies.get("auth"))
    window.location.href = "http://localhost:3000/connexion";

  const [style, setStyle] = useState(false);
  const [searchbar, setSearchBar] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [textDefile, setTexDefile] = useState("");
  const session = Cookies.get("auth");

  const fctStyle = () => {
    setStyle(!style);
    setTexDefile("terminator");
  };
  if (style) {
    setTimeout(() => {
      setStyle(!style);
    }, 2500);
  }

  if (style) {
    setTimeout(() => {}, 800);
  }

  const searchBar = () => {
    setSearchBar(!searchbar);
  };

  const blur = () => {
    setOnBlur(!onBlur);
    setSearchBar(!searchbar);
  };

  if (onBlur === true) {
    setTimeout(() => {
      setOnBlur(!onBlur);
    }, 500);
  }

  return (
    <>
      <header>
        <img
          src="src/assets/images/magn1.png"
          alt="ceci est une iage de magnétoscope"
          className="img_background_header"
        />

        <img
          src="src/assets/images/magn2.png"
          alt="ceci est une iage de cassete video"
          className={style ? "img_k7" : "img_k7_none"}
        />

        <div className={textDefile.length > 0 && "marquee-rtl"}>
          <div>{textDefile}</div>
        </div>

        <Form className="form-search-bar">
          {searchbar && !onBlur ? (
            <input
              type="text"
              name="searchBar"
              className="searchBar"
              autoFocus
              onBlur={() => {
                blur();
              }}
            />
          ) : (
            ""
          )}
        </Form>

        <audio src="src/assets/images/son_magnetoscope.mp3">
          <track
            default
            kind="captions"
            srcLang="en"
            src="/media/examples/friday.vtt"
          />
        </audio>
        <button
          type="button"
          className="click_search"
          onClick={() => {
            searchBar();
          }}
        >
          b
        </button>

        <Link to="/play">
          <button type="button" onClick={() => fctStyle()}>
            click
          </button>
        </Link>
      </header>
      <h1 style={{ color: "white", fontSize: "2em",marginTop:"10em" }}>Bienvenue {session} ! <Link to="/deconnexion">déconnexion</Link></h1>
    </>
  );
}

export default Header;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
