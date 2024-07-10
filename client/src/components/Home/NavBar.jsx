import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="container-NavBar">
      <nav className="navbar">
        <Link to="/Home">
          <img
            className="LogoImg"
            src="src/assets/images/Logo1.png"
            alt="logo de la page"
          />
        </Link>
        <div className="inscription-connexion" id="inscription-connexion">
          <Link to="/connexion" className="login-button">
            Connexion
          </Link>
          <Link to="/subscribe" className="login-button">
            Inscription
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
