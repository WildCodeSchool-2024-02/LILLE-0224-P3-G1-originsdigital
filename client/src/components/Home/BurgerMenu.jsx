import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  return (
    <div className="burger-menu">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/apropos">À propos</Link>
        </li>
        <li>
          <Link to="/contactPage">Contact</Link>
        </li>
        <li>
          <Link to="/aide">Aide</Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
