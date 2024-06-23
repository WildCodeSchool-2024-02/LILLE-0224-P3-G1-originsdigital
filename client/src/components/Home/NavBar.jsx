import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import "./NavBar.css";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-NavBar">
      <nav className="navbar">
        <div className="logo">
          <Link to="/Home">
            <img
              className="LogoImg"
              src="src/assets/images/Logo1.png"
              alt="logo de la page"
            />
          </Link>
        </div>
        <div className="menu">
          <Link to="/login" className="login-button">
            Connexion
          </Link>
          <button
            type="button"
            className="burger-menu-button"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
        {menuOpen && <BurgerMenu />}
      </nav>
    </div>
  );
}

export default NavBar;
