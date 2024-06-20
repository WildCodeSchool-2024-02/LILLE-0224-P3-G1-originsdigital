import "./TablePlan.css";

function TablePlan() {
  return (
    <div className="tableSection">
      <table>
        <thead>
          <tr>
            <th className="th-center">VHS Lite</th>
            <th className="th-center"> VHS Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prix mensuel. Économisez jusqu'à 8,98 euros/mois</td>
          </tr>
          <tr>
            <td>
              Diffusion en continu de bibliothèques avec des tonnes d'épisodes
              télévisés et de films
            </td>
          </tr>
          <tr>
            <td>
              La plupart des nouveaux épisodes le lendemain de leur apparition.
            </td>
          </tr>
          <tr>
            <td>Accès à VHS Originals primé</td>
          </tr>
          <tr>
            <td>
              Regarder sur vos appareils préférés, y compris la télévision,
              l'ordinateur portable, le téléphone ou la tablette
            </td>
          </tr>
          <tr>
            <td>Jusqu'à 6 profils d'utilisateurs</td>
          </tr>
          <tr>
            <td>Regarder sur 2 écrans différents en même temps</td>
          </tr>
          <tr>
            <td>Pas d'annonces dans la bibliothèque de streaming</td>
          </tr>
          <tr>
            <td>Télécharger et regarder</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePlan;
