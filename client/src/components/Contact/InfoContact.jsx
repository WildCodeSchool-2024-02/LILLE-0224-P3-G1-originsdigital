import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./InfoContact.css";

export default function InfoContact() {
  return (
    <>
      <div className="div-info-contact">
        <Link to="/browsepage">
          <img
            src="/public/LOgo1.png"
            className="img-info-contact"
            alt="logo"
          />
        </Link>
      </div>
      <div className="container-body" id="hdp">
        <h1 className="h1-faq">Informations generale </h1>

        <div className="supportSection">
          <div className="supportInfo">
            <h2 className="h2-contact">Besoin d'aide?</h2>
            <p className="p-contact">
              Nous sommes disponibles 24 heures sur 24 et 7 jours sur 7.
            </p>
            <h3 className="h2-contact">
              <a className="h3Fair" href="/foire-aux-questions#hdp">
                Foire aux questions
              </a>
            </h3>
          </div>
          <div className="callSupport">
            <h3 className="h3-contact">Contactez-nous</h3>
            <p className="p-contact">
              Nous serons heureux de lire vos commentaires et suggestions.
              Rendez vous sur notre page{" "}
              <a href="/contact-page" className="phoneText">
                contact
              </a>{" "}
              ou par téléphone au
              <a className="phoneText" href="tel:0320202020">
                03 20 20 20 20{" "}
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
