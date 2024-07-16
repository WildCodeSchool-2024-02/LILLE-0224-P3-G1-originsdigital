// ///////////////////////////////////// alexandre M composant header ////////////////////////////////////////////////

import { useState } from "react";
import "./Header.css";
import { Form, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Mycontext } from "../Context";
import BurgerMenu from "../Home/BurgerMenu";
import BurgerMini from "../Home/BurgerMini";

function Header() {
  if (!Cookies.get("auth"))
    window.location.href = "http://localhost:3000/connexion";
  const [name, setName] = useState("");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1 && window.innerWidth >= 1024) {
      setName("header1024");
    } else {
      setName("");
    }
  });

  const { style, textDefile, menu } = Mycontext();
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

  setTimeout(() => {});

  return (
    <div id="apparition">
      <header className={name}>
        <BurgerMini />
        {menu && <BurgerMenu />}
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
          <div id="idWelcome">
            <span className="b">B</span>
            <span className="i">i</span>
            <span className="e">e</span>
            <span className="n">n</span>
            <span className="v">v</span>
            <span className="ee">e</span>
            <span className="nn">n</span>
            <span className="u">u</span>
            <span className="eee">e</span>
            <span className="session">&nbsp;{session}</span>
          </div>
        </h1>
      )}
    </div>
  );
}

export default Header;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
