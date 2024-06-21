import { Form, useActionData } from "react-router-dom";
import "./CreationAccount.css";
import { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

function CreationAccount() {
  const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  const dataForm = useActionData();

  const [responseServer, setResponseServer] = useState("");
  const [animation, setAnimation] = useState(null);
  const [eyes, seteyes] = useState(true);
  const [verify, setVerify] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");

  const [user, setUser] = useState({
    last: "",
    first: "",
    mail: "",
    user: "",
    pass: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // prevState est un mot clef qui créé une copie de l'état précédent de l'objet et ensuite
    // modifie la valeur dans la propriété [name] : si je change le firstname, ça va changer la valeur de [firsname] en lui
    // donnant la nouvelle valeur de l'input.
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3310/api/users/verify/${user.user}`)
      .then((response) => setVerify(response.data[0].username));
    axios
      .get(`http://localhost:3310/api/users/verify-email/${user.mail}`)
      .then((response) => setVerifyEmail(response.data[0].email));
    if (
      user.last.length > 3 &&
      user.first.length > 3 &&
      regexMail.test(user.mail) &&
      user.user.length > 3 &&
      regexPass.test(user.pass)
    ) {
      axios
        .post("http://localhost:3310/api/users/create", user)
        .then((response) => {
          setResponseServer(response.data.message);
          setAnimation(true);
          setTimeout(() => {
            setUser({
              last: "",
              first: "",
              mail: "",
              user: "",
              pass: "",
            });
          }, 500);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <img
        src="src/assets/images/th3.jpg"
        alt="this is a fond screen"
        className="backgroud-creation-accound"
      />
      <img
        src="src/assets/images/logo.png"
        alt="this is a logo"
        className="logo-creation-account"
      />
      <section className="form-creation-account">
        <h1 className="h1-creation-account">Inscription</h1>
        <Form
          className="form-creation-account"
          method="post"
          onSubmit={handleSubmit}
        >
          {dataForm && dataForm.lastname.length < 3 && (
            <h3 className="errors">
              Le nom doit contenir au moins <br />3 caractère et maximum 100
            </h3>
          )}
          <input
            type="text"
            name="last"
            value={user.last}
            className="input-creation-account"
            placeholder=" Nom"
            onChange={handleChange}
          />
          {dataForm && dataForm.firstname.length < 3 && (
            <h3 className="errors">
              Le prénom doit contenir au moins <br />3 caractère et maximum 100
            </h3>
          )}
          <input
            type="text"
            name="first"
            value={user.first}
            className="input-creation-account"
            placeholder=" Prénom"
            onChange={handleChange}
          />
          {dataForm && !regexMail.test(dataForm.email) && (
            <h3 className="errors">Adresse mail invalide</h3>
          )}
          {dataForm &&
            regexMail.test(dataForm.email) &&
            dataForm.email === verifyEmail && (
              <h3 className="errors">Cette adresse email exite déja</h3>
            )}
          <input
            type="text"
            name="mail"
            className="input-creation-account"
            placeholder=" Email"
            value={user.mail}
            onChange={handleChange}
          />
          {dataForm && dataForm.username.length < 3 && (
            <h3 className="errors">
              Le pseudo doit contenir au moins <br />3 caractère et maximum 100
            </h3>
          )}
          {dataForm &&
            dataForm.username === verify &&
            dataForm.username.length > 3 && (
              <h3 className="errors">Ce pseudo existe déja</h3>
            )}
          <input
            type="text"
            name="user"
            className="input-creation-account"
            placeholder=" Pseudo"
            value={user.user}
            onChange={handleChange}
          />
          {dataForm && !regexPass.test(dataForm.password) && (
            <h3 className="errors">
              <br />
              Le mot de passe doit contenir au moins <br />8 caractères, une
              majuscule, un chiffre et
              <br /> un caractère spécial
            </h3>
          )}
          <input
            type={eyes ? "password" : "text"}
            name="pass"
            className="input-creation-account"
            placeholder=" Mot de passe"
            value={user.pass}
            onChange={handleChange}
          />
          <button
            type="button"
            className="eyes"
            onClick={() => {
              seteyes(!eyes);
            }}
          >
            &#128065;{eyes && <hr className="hr-eyes" />}{" "}
          </button>
          <div id={animation !== null && "connect"}>
            <h3 className="errors-ok">{responseServer}</h3>
            {responseServer.length > 0 && animation !== null ? (
              <h2 className="connexion">se connecter</h2>
            ) : (
              ""
            )}
          </div>
          <div className="next">
            <hr className="hr-submit" />
            <h2 className="h2-submit">
              Inscrivez vous gratuitement pour regarder des films et des séries
              des années 80 à 2000.
            </h2>
            <input
              type="submit"
              className="input-creation-account"
              id="submit-creation-account"
              value="Suivant"
            />
            <hr style={{ marginTop: "1em" }} className="hr-submit" />
          </div>
        </Form>
      </section>
      <Footer />
    </>
  );
}

export default CreationAccount;
