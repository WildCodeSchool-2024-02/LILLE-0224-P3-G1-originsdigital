// ///////////////////////////////////// alexandre M composant header ////////////////////////////////////////////////

import { useState } from "react";
import "./Header.css";
import { Form, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Mycontext } from "../Context";

function Header() {
  const { style, textDefile } = Mycontext();
  if (!Cookies.get("auth"))
    window.location.href = "http://localhost:3000/connexion";

  const [searchbar, setSearchBar] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const session = Cookies.get("auth");
  const { id } = useParams();

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
    <div id="apparition">
      <header>
        <img
          src="/public/magn1.png"
          alt="ceci est une iage de magnétoscope"
          className="img_background_header"
        />

        <img
          src="/public/magn2.png"
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
      </header>
      {!id && (
        <h1 id="h1-film-welcom">
          <span>Bienvenue</span> {session}
        </h1>
      )}
    </div>
  );
}

export default Header;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
