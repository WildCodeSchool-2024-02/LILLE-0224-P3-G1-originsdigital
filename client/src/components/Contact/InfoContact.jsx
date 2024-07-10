import "./InfoContact.css";
import { Link } from "react-router-dom";

export default function InfoContact() {
  return (
    <div className="container-body">
      <h1 className="h1-faq">Informations generale </h1>
      <div className="ContainerInfoContact">
        <section className="SectionInfoContact">
          <article className="artcile-contact">
            <h2 className="h2-contact">Informations sur l'entreprise VHS</h2>
            <p className="p-contact">
              Besoin d'aide? Connectez-vous et contactez-nous chaque fois que
              vous en avez besoin. Vous ne parvenez pas à vous connecter ?
              Réinitialiser votre mot de passe{" "}
              <span className="span-contact">ici</span>. Si vous avez oublié
              l'adresse e-mail associée à votre compte, essayez plutôt de la
              récupérer <span className="span-contact">ici</span>.
            </p>
            <h2 className="h2-contact">
              Pour des demandes supplémentaires, veuillez voir ci-dessous:
            </h2>
            <ul>
              <li className="li-contact">
                Demandes de presse — Trouvez des informations détaillées sur
                notre entreprise sur notre page d'informations pour les médias,
                ou contactez notre équipe média
              </li>
              <li className="li-contact">
                Annonceurs — Pour faire de la publicité sur VHS, veuillez
                visiter notre page de publicité
              </li>
              <li className="li-contact">
                Propriétaires de contenu — Pour mettre votre contenu vidéo sur
                VHS, veuillez contacter notre équipe de contenu
              </li>
              <li className="li-contact">
                Distribution — Si vous êtes intéressé par l'utilisation du
                contenu de VHS sur votre site, veuillez contacter notre équipe
                de distribution
              </li>
              <li className="li-contact">
                Préoccupations en matière de confidentialité — Veuillez
                consulter notre politique de confidentialité ou contacter notre
                équipe de confidentialité
              </li>
              <li className="li-contact">
                Réclamations pour violation de droits d'auteur — Contactez-nous
                <Link to="/contactPage">
                  <span className="span-contact">ici.</span>{" "}
                </Link>{" "}
              </li>
              <li className="li-contact">
                Questions juridiques — Veuillez consulter{" "}
                <Link to="/conditions">
                  <span className="span-contact">
                    nos conditions d'utilisation
                  </span>{" "}
                </Link>{" "}
                ou{" "}
                <Link to="/contactPage">
                  <span className="span-contact">contacter</span>{" "}
                </Link>{" "}
                notre équipe juridique
              </li>
            </ul>
          </article>
        </section>
        <section className="SectionInfoContactSuggestion">
          <article>
            <h2 className="h2-contact">Articles suggérés</h2>
            <p className="Plink p-contact">
              <Link to="/article" className="Plink p-contact">
                Avec qui puis-je partager mon abonnement VHS ?
              </Link>
            </p>
          </article>
        </section>
      </div>
      <div className="supportSection">
        <div className="supportInfo">
          <h2 className="h2-contact">Besoin d'aide?</h2>
          <p className="p-contact">
            Nous sommes disponibles pour une assistance en direct 24 heures sur
            24, 7 jours sur 7.
          </p>
          <h3 className="h2-contact">
            <Link className="h3Fair" to="/foire-aux-questions">
              Foire aux questions
            </Link>
          </h3>
        </div>
        <div className="callSupport">
          <h3 className="h3-contact">Contactez-nous</h3>
          <p className="p-contact">
            Nous serons heureux de vous aider chaque fois que vous en aurez
            besoin. Connectez-vous pour visiter notre page Contact pour obtenir
            de l’aide supplémentaire &nbsp;
            <a className="phoneText" href="tel:0320202020">
              03 20 20 20 20{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
