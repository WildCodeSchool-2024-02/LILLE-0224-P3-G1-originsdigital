import { useState } from "react";
import "./Connexion.css";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Connexion() {
  const [errorInvalidPseudoOrEmail, setErrorInvalidPseudoOrEmail] =
    useState(false);
  const [errorInvalidPassword, setErrorInvalidPassword] = useState(false);
  const [animate, setAnimate] = useState("");
  const [animateFadeOut, setAnimateFadeOut] = useState("");
  const [eyes, setEyes] = useState(true);

  setTimeout(() => {
    setAnimate("animate");
  }, 2000);

  const [form, setForm] = useState({
    pseudoOrEmail: "",
    password: "",
  });

  const updateState = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    axios
      .post(`http://localhost:3310/api/users/verify-pseudo-or-email`, form)
      .then((response) => {
        if (response.data.username === "no username") {
          setErrorInvalidPseudoOrEmail(true);
        } else {
          setErrorInvalidPseudoOrEmail(false);
        }
        if (response.data.password === false) {
          setErrorInvalidPassword(true);
        } else {
          setErrorInvalidPassword(false);
        }

        if (
          response.data.results.username === "administrator" &&
          response.data.password
        ) {
          Cookies.set("administrator", response.data.results.username);
          window.location.href = "http://localhost:3000/administrator";
        }

        if (
          response.data.username !== "no username" &&
          response.data.password === true
        ) {
          console.info(response.data.secureKey);
          Cookies.set("auth", response.data.results.username);
          Cookies.set("token", response.data.secureKey);
          setAnimateFadeOut("fade-out");

          setTimeout(() => {
            window.location.href = "http://localhost:3000/browsepage";
          }, 1000);
        }
      });
  };

  return (
    <section className="section-connexion" id={animateFadeOut}>
      <img
        src="src/assets/images/th3.jpg"
        alt="this is a vhs pictures"
        className="img-background-connexion"
      />
      <Link to="/">
        <img
          src="src/assets/images/Logo1.png"
          alt="this is a logo"
          className="logo-connexion"
        />
      </Link>
      <Form className="form-connexion" method="post" onSubmit={submitForm}>
        <h1 className="h1-connexion">Connexion</h1>

        {errorInvalidPseudoOrEmail && (
          <h3 className="error-mail-invalid">Adresse ou pseudo introuvable</h3>
        )}

        <input
          type="text"
          name="pseudoOrEmail"
          className="input-connexion"
          placeholder=" Pseudo ou email"
          id="input-connexion-pseudo"
          onChange={updateState}
          value={form.pseudoOrEmail}
        />

        {errorInvalidPassword && (
          <h3 className="error-mail-invalid">Mot de passe invalide</h3>
        )}

        <input
          type={eyes ? "password" : "text"}
          name="password"
          className="input-connexion"
          placeholder=" Mot de passe"
          id="input-connexion-password"
          onChange={updateState}
          value={form.password}
        />

        <button
          type="button"
          className="eyes-connexion"
          onClick={() => {
            setEyes(!eyes);
          }}
        >
          &#128065;
          {eyes && <hr className="hr-eyes" />}
        </button>

        <input
          type="submit"
          className="input-connexion"
          id="submit-connexion"
          value="connexion"
        />
        <div id="checkbox-connexion">
          <label htmlFor="check" className="right-label">
            se souvenir de moi
          </label>
          <input type="checkbox" id="check" />
        </div>
        <h2 className="first-visit">
          Première visite sur <span className="span-vhs-first-visit">VHS </span>
          ?<br />
          <Link to="/subscribe" style={{ textDecoration: "none" }}>
            <span className="register-you" id={animate}>
              inscrivez vous
            </span>
          </Link>
        </h2>
      </Form>
    </section>
  );
}
export default Connexion;
