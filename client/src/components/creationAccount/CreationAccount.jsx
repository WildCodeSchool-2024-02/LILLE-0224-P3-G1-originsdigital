import { Form, useActionData } from "react-router-dom";
import "./CreationAccount.css";
import { useState } from "react";
import axios from "axios";

function CreationAccount() {
  const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  const dataForm = useActionData();
  if (dataForm) console.info(dataForm);

  const [responseServer, setResponseServer] = useState("");

  const [user, setUser] = useState({
    last: "",
    first: "",
    mail: "",
    user: "",
    pass: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const send = () => {
    // event.preventDefault();
    if (
      user.last.length > 3 &&
      user.first.length > 3 &&
      regexMail.test(user.mail) &&
      user.user.length > 3 &&
      regexPass.test(user.pass)
    ) {
      axios
        .post("http://localhost:3310/api/insertUser", user)
        .then((response) => {
          setResponseServer(response.data.message);
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
        src="src/assets/images/th.jpg"
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
        <Form className="form-creation-account" method="post" onSubmit={send}>
          {dataForm && dataForm.lastname.length < 3 && (
            <h3 className="errors">
              Le nom doit contenir au moins 3 caractère et maximum 100
            </h3>
          )}

          <input
            type="text"
            name="last"
            value={user.last}
            className="input-creation-account"
            placeholder="Nom"
            onChange={handleChange}
          />
          {dataForm && dataForm.firstname.length < 3 && (
            <h3 className="errors">
              Le prénom doit contenir au moins 3 caractère et maximum 100
            </h3>
          )}

          <input
            type="text"
            name="first"
            value={user.first}
            className="input-creation-account"
            placeholder="Prénom"
            onChange={handleChange}
          />
          {dataForm && !regexMail.test(dataForm.email) && (
            <h3 className="errors">Adresse mail invalide</h3>
          )}

          <input
            type="text"
            name="mail"
            className="input-creation-account"
            placeholder="Email"
            value={user.mail}
            onChange={handleChange}
          />
          {dataForm && dataForm.username.length < 3 && (
            <h3 className="errors">
              Le pseudo doit contenir au moins 3 caractère et maximum 100
            </h3>
          )}

          <input
            type="text"
            name="user"
            className="input-creation-account"
            placeholder="Pseudo"
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
            type="password"
            name="pass"
            className="input-creation-account"
            placeholder="Mot de passe"
            value={user.pass}
            onChange={handleChange}
          />

          <h3 className="errors-ok">{responseServer}</h3>

          <input
            type="submit"
            className="input-creation-account"
            id="submit-creation-account"
            value="Suivant"
          />
        </Form>
      </section>
    </>
  );
}

export default CreationAccount;
