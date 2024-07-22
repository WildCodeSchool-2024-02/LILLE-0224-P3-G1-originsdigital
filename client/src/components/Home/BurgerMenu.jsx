import { useState } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Mycontext } from "../Context";

function BurgerMenu() {
  const { setMenu, setAnimate } = Mycontext();
  const [up, setUp] = useState(1);

  const selectionUp = () => {
    if (up < 5) {
      setUp(up + 1);
    } else {
      setUp(1);
    }
  };

  const selectionDown = () => {
    if (up > 1) {
      setUp(up - 1);
    } else {
      setUp(1);
    }
  };

  return (
    <div className="burger-menu">
      <button
        type="button"
        label
        className="button-close-telecommande"
        onClick={() => {
          setMenu(false);
          setAnimate("burger-mini");
        }}
      >
        {" "}
      </button>
      <div className="telecommande-ecran">
        <ul className={`select-option-menu${up}`}>
          <li className="li-select-option-menu">Menu principal</li>
          <li className="li-select-option-menu">Mon profil</li>
          <li className="li-select-option-menu">Voir tous les films</li>
          <li className="li-select-option-menu">Voir toutes les séries</li>
          <li className="li-select-option-menu">Déconnexion</li>
        </ul>{" "}
      </div>
      <img src="/public/tel2.png" alt="telecommande" className="telecommande" />
      <button
        type="button"
        id="button-telecommande-up"
        label
        onClick={selectionDown}
      >
        &nbsp;
      </button>
      <button
        type="button"
        id="button-telecommande-right"
        label
        onClick={selectionDown}
      >
        &nbsp;
      </button>
      <button
        type="button"
        id="button-telecommande-down"
        label
        onClick={selectionUp}
      >
        &nbsp;
      </button>
      <button
        type="button"
        id="button-telecommande-left"
        label
        onClick={selectionUp}
      >
        &nbsp;
      </button>
      <Link
        to={
          (up === 1 && "/browsepage") ||
          (up === 2 && `/users/${Cookies.get("auth")}`) ||
          (up === 3 && `/movies`) ||
          (up === 4 && `/series`) ||
          (up === 5 && "/deconnexion")
        }
      >
        <button
          type="button"
          id="button-telecommande-ok"
          label
          onClick={() => {
            setMenu(false);
            setAnimate("burger-mini");
          }}
        >
          &nbsp;
        </button>
      </Link>
    </div>
  );
}

export default BurgerMenu;
