import "./TermsOfUse.css";
import { Link } from "react-router-dom";

export default function TermsOfUse() {
  return (
    <div className="container-terms">
      <h1 className="h1-faq cond">Conditions d'utilisation</h1>
      <div className="ContainerConditions">
        <section className="SectionConditions">
          <h2 className="h2-terms">Conditions d'utilisation</h2>
          <p className="p-terms">
            Bienvenue sur notre site de diffusion de films et séries. En
            accédant à notre site et en utilisant nos services, vous acceptez
            les présentes conditions d'utilisation. Veuillez les lire
            attentivement.
          </p>
          <h2 className="h2-terms">1. Acceptation des conditions</h2>
          <p className="p-terms">
            En utilisant notre site, vous acceptez d'être lié par les présentes
            conditions d'utilisation, ainsi que par notre politique de
            confidentialité. Si vous n'acceptez pas ces conditions, veuillez ne
            pas utiliser notre site.
          </p>
          <h2 className="h2-terms">2. Utilisation du site</h2>
          <p className="p-terms">
            Vous devez avoir au moins 18 ans pour utiliser notre site. Vous vous
            engagez à utiliser notre site uniquement à des fins légales et
            conformément aux présentes conditions d'utilisation.
          </p>
          <h2 className="h2-terms">3. Compte utilisateur</h2>
          <p className="p-terms">
            Pour accéder à certains services, vous devez créer un compte
            utilisateur. Vous êtes responsable de la confidentialité de vos
            informations de connexion et de toutes les activités effectuées sous
            votre compte.
          </p>
          <h2 className="h2-terms">4. Contenu</h2>
          <p className="p-terms">
            Tout le contenu disponible sur notre site, y compris les films,
            séries, images, textes et autres éléments, est protégé par des
            droits d'auteur et d'autres lois sur la propriété intellectuelle.
            Vous ne pouvez pas copier, distribuer, modifier ou utiliser ce
            contenu sans notre autorisation expresse.
          </p>
          <h2 className="h2-terms">5. Abonnements et paiements</h2>
          <p className="p-terms">
            Certains services de notre site peuvent nécessiter un abonnement
            payant. En vous abonnant, vous acceptez de payer les frais
            d'abonnement applicables. Nous nous réservons le droit de modifier
            les tarifs et les conditions d'abonnement à tout moment.
          </p>
          <h2 className="h2-terms">6. Résiliation</h2>
          <p className="p-terms">
            Nous nous réservons le droit de suspendre ou de résilier votre accès
            à notre site à tout moment, sans préavis, en cas de violation des
            présentes conditions d'utilisation.
          </p>
          <h2 className="h2-terms">7. Limitation de responsabilité</h2>
          <p className="p-terms">
            Nous ne serons pas responsables des dommages directs, indirects,
            accessoires, spéciaux ou consécutifs résultant de l'utilisation ou
            de l'incapacité d'utiliser notre site.
          </p>
          <h2 className="h2-terms">
            8. Modifications des conditions d'utilisation
          </h2>
          <p className="p-terms">
            Nous nous réservons le droit de modifier les présentes conditions
            d'utilisation à tout moment. Les modifications seront effectives dès
            leur publication sur notre site. Il vous incombe de consulter
            régulièrement les conditions d'utilisation pour vous tenir informé
            des modifications.
          </p>
          <h2 className="h2-terms">9. Contact</h2>
          <p className="p-terms">
            Si vous avez des questions concernant les présentes conditions
            d’utilisation, veuillez nous contacter à l’adresse suivante :
            <span> vhs@vhs.com </span>
            ou via la rubrique{" "}
            <Link to="/contactPage">
              <span>contact</span>
            </Link>
          </p>
          <p className="p-terms">
            Merci d'utiliser notre site de diffusion de films et séries.
          </p>
        </section>
      </div>
    </div>
  );
}
