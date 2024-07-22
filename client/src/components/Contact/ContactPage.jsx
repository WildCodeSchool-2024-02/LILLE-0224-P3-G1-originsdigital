import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function ContactPage() {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ldvm0ww", "template_509zrsb", form.current, {
        publicKey: "_c2F4970FQz2gIDVR",
      })
      .then(
        () => {
          // Réinitialiser le formulaire
          form.current.reset();
          // Afficher le popup de confirmation
          setShowConfirmation(true);
          // Masquer le popup après 3 secondes
          setTimeout(() => setShowConfirmation(false), 3000);
        },
        () => {
          // En cas d'erreur
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };
  return (
    <>
      <div className="container-form">
        <div className="sectionForm">
          <h1 className="h1contact">Contact</h1>
          <Link to="/browsepage">
            <img
              className="home-icon"
              src="src/assets/images/icons/home.svg"
              alt="home icon"
            />
          </Link>
          <form ref={form} onSubmit={sendEmail} className="form-contact">
            <label className="fields" htmlFor="name">
              Name
            </label>
            <input className="fields" type="text" name="from_name" />
            <label className="fields" htmlFor="email">
              Email
            </label>
            <input className="fields" type="email" name="from_email" />
            <label className="fields" htmlFor="message">
              Message
            </label>
            <textarea className="fields msg" name="message" />
            <input className="btnSend" type="submit" value="Envoyer" />
          </form>
          {showConfirmation && (
            <div className="confirmationPopup">
              Votre message a été envoyé avec succès !
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
