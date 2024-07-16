// ///////////////////////////////////// alexandre M composant header ////////////////////////////////////////////////

import { useState } from "react";
import axios from "axios";
import "./Header.css";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Mycontext } from "../Context";

// import BurgerMenu from "../Home/BurgerMenu";

function Header() {
  if (!Cookies.get("auth"))
    window.location.href = "http://localhost:3000/connexion";
  const navigate = useNavigate();
  const { style, textDefile } = Mycontext();
  const [searchbar, setSearchBar] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const session = Cookies.get("auth");
  const { id } = useParams();

  const searchBar = () => {
    setSearchBar(!searchbar);
  };

  const blur = () => {
    if (searchResults < 1) {
      setOnBlur(!onBlur);
      setSearchBar(!searchbar);
    }
  };

  const handleSearchChange = async (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 0) {
      try {
        const response = await axios.get(
          `http://localhost:3310/api/videos/search?title=${event.target.value}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  if (onBlur === true) {
    setTimeout(() => {
      setOnBlur(!onBlur);
    }, 500);
  }
  const handleResultClick = (videoId) => {
    setSearchResults([]); // Clear search results
    navigate(`/player/${videoId}`);
  };
  return (
    <div id="apparition">
      <header>
        {/* {<BurgerMenu />} */}
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

        <form className="form-search-bar" onSubmit={(e) => e.preventDefault()}>
          {searchbar && !onBlur ? (
            <div className="search-container">
              <input
                type="text"
                name="searchBar"
                className="searchBar"
                autoFocus
                value={searchQuery}
                onChange={handleSearchChange}
                onBlur={blur}
              />
              {searchResults.length > 0 && (
                <ul className="search-results">
                  {searchResults.map((result) => (
                    <li key={result.videoID}>
                      <button
                        type="button"
                        onClick={() => {
                          handleResultClick(result.videoID);
                        }}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleResultClick(result.videoID)
                        }
                        className="result-button"
                      >
                        {result.titre}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </form>

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
