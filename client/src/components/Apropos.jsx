import "./Apropos.css";

export default function Apropos() {
  return (
    <div className="ContainerApropos">
      <div className="SectionApropos">
        <article className="Description">
          <h3>À propos de nous</h3>
          <p>
            Bienvenue sur VHS, votre destination incontournable pour redécouvrir
            les trésors cinématographiques et télévisuels des années 90 ! Créé
            par une équipe passionnée composée de Houari, Alexandre L, Alexandre
            M, Arnauld et Mathieu, VHS est le fruit d’une volonté commune de
            partager les moments iconiques de cette décennie inoubliable avec le
            monde entier.
          </p>
        </article>
        <img
          className="ImgApropos"
          src="src/assets/images/apropos.jpg"
          alt="groupe de développeurs"
        />
        <article className="Description">
          <h3>Notre Mission</h3>
          <p>
            Chez VHS, notre mission est claire : offrir à nos utilisateurs une
            plateforme où ils peuvent revivre les meilleures séries et films des
            années 90. Nous croyons que cette période regorge de joyaux
            culturels qui méritent d’être redécouverts et appréciés par les
            générations actuelles et futures.
          </p>
        </article>
        <img
          className="ImgApropos1"
          src="src/assets/images/apropos1.jpg"
          alt="groupe de développeurs"
        />
        <article className="Description1">
          <h3>Notre Histoire</h3>
          <p>
            L’idée de VHS a émergé lors d’une soirée entre amis, pleine de
            souvenirs et de discussions sur les classiques des années 90.
            Houari, Alexandre L, Alexandre M, Arnauld et Mathieu, tous
            profondément attachés à cette époque, ont constaté le manque d’une
            plateforme dédiée exclusivement à ce contenu. Ils ont donc décidé de
            combiner leurs compétences et leur passion pour créer VHS, un site
            de streaming unique en son genre.
          </p>
          <h3>Ce que nous proposons</h3>
          <p>
            Sur VHS, vous trouverez une vaste collection de séries et de films
            des années 90, soigneusement sélectionnés pour satisfaire les
            amateurs de cette décennie. Que vous soyez en quête de sitcoms
            hilarantes, de drames poignants, de thrillers palpitants ou de
            classiques intemporels, notre catalogue a de quoi ravir tous les
            goûts.
          </p>
          <h3>Pourquoi choisir VHS ?</h3>
          <ul>
            <li>
              Passion et Engagement : Notre équipe est composée de véritables
              passionnés des années 90, déterminés à offrir le meilleur contenu
              à nos utilisateurs.
            </li>
            <li>
              Interface Intuitive : Profitez d’une navigation facile et
              intuitive pour trouver rapidement vos séries et films préférés.
            </li>
            <li>
              Qualité et Diversité : Accédez à des vidéos de haute qualité et à
              une diversité de genres et de styles qui reflètent la richesse de
              cette époque.
            </li>
          </ul>
        </article>

        <p className="Description2">
          Nous vous invitons à rejoindre la communauté VHS et à replonger dans
          l’univers fascinant des années 90. Inscrivez-vous dès aujourd’hui et
          commencez votre voyage nostalgique avec nous. L'équipe VHS Houari,
          Alexandre L, Alexandre M, Arnauld et Mathieu
        </p>
      </div>
    </div>
  );
}
