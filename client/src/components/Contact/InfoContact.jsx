import "./InfoContact.css";
import { Link } from "react-router-dom";

export default function InfoContact() {
  return (
    <div className="container-body">
      <div className="ContainerInfoContact">
        <section className="SectionInfoContact">
          <article>
            <h2>Informations sur l'entreprise VHS</h2>
            <p>
              Besoin d'aide? Connectez-vous et contactez-nous chaque fois que
              vous en avez besoin. Vous ne parvenez pas à vous connecter ?
              Réinitialiser votre mot de passe <span>ici</span>. Si vous avez
              oublié l'adresse e-mail associée à votre compte, essayez plutôt de
              la récupérer <span>ici</span>.
            </p>
            <h2>
              Pour des demandes supplémentaires, veuillez voir ci-dessous:
            </h2>
            <ul>
              <li>
                Demandes de presse — Trouvez des informations détaillées sur
                notre entreprise sur notre page d'informations pour les médias,
                ou contactez notre équipe média
              </li>
              <li>
                Annonceurs — Pour faire de la publicité sur VHS, veuillez
                visiter notre page de publicité
              </li>
              <li>
                Propriétaires de contenu — Pour mettre votre contenu vidéo sur
                VHS, veuillez contacter notre équipe de contenu
              </li>
              <li>
                Distribution — Si vous êtes intéressé par l'utilisation du
                contenu de VHS sur votre site, veuillez contacter notre équipe
                de distribution
              </li>
              <li>
                Préoccupations en matière de confidentialité — Veuillez
                consulter notre politique de confidentialité ou contacter notre
                équipe de confidentialité
              </li>
              <li>
                Réclamations pour violation de droits d'auteur — Contactez-nous
                <span>ici.</span>
              </li>
              <li>
                Questions juridiques — Veuillez consulter{" "}
                <Link to="/conditions">
                  <span>nos conditions d'utilisation</span>{" "}
                </Link>{" "}
                ou{" "}
                <Link to="/contactPage">
                  <span>contacter</span>{" "}
                </Link>{" "}
                notre équipe juridique
              </li>
            </ul>
          </article>
        </section>
        <section className="SectionInfoContactSuggestion">
          <article>
            <h2>Articles suggérés</h2>
            <p className="Plink">
              <Link to="/article">
                Avec qui puis-je partager mon abonnement VHS ?
              </Link>
            </p>
          </article>
        </section>
      </div>
      <div className="supportSection">
        <div className="supportInfo">
          <h2>Besoin d'aide?</h2>
          <p>
            Nous sommes disponibles pour une assistance en direct 24 heures sur
            24, 7 jours sur 7.
          </p>
          <h3>
            <Link className="h3Fair" to="/foire-aux-questions">
              Foire aux questions
            </Link>
          </h3>
        </div>
        <div className="callSupport">
          <h2>Contactez-nous</h2>
          <p>
            Nous serons heureux de vous aider chaque fois que vous en aurez
            besoin. Connectez-vous pour visiter notre page Contact pour obtenir
            de l’aide supplémentaire &nbsp; &nbsp; &nbsp;
            <a className="phoneText" href="tel:0320202020">
              03 20 20 20 20{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
