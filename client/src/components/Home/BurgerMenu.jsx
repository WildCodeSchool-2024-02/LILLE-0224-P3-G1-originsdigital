import { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu() {
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
      <button type="button" label className="button-close-telecommande">
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
    </div>
  );
}

export default BurgerMenu;
