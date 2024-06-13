// ///////////////////////////////////// alexandre M composant header ////////////////////////////////////////////////

import { useState } from "react";
import "./Header.css";
import { Form, Link } from "react-router-dom";

function Header() {
  // tout ces states sont a mette dans le context et a importer ici de cette manière
  // const {style, setStyle,defile, setDefile,searchbar, setSearchBar,onBlur, setOnBlur} = moncontext();
  // et il faut créer un nouveau state pour le texte du défilement
  const [style, setStyle] = useState(false);
  const [defile, setDefile] = useState(false);
  const [searchbar, setSearchBar] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  const audio = new Audio("src/assets/images/son_magnetoscope.mp3");
  // const currentUrl = window.location.href; // donne l'url complète

  const fctStyle = () => {
    setStyle(!style);
    setDefile(!defile);
  };
  if (style) {
    setTimeout(() => {
      setStyle(!style);
    }, 2500);
  }

  if (style) {
    setTimeout(() => {
      audio.play();
    }, 800);
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
    <header>
      <img
        src="src/assets/images/magn1.png"
        alt="ceci est une iage de magnétoscope"
        className="img_background_header"
      />

      <img
        src="src/assets/images/k7.png"
        alt="ceci est une iage de cassete video"
        className={style ? "img_k7" : "img_k7_none"}
      />

      <div className="marquee-rtl">
        <div>{defile && "Terminator 1 duree 1h30 ..."}</div>
      </div>

      <Form>
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

      <Link to="/teste">
        <button type="button" onClick={() => fctStyle()}>
          click
        </button>
      </Link>
    </header>
  );
}
export default Header;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
