import { Form, Link, useActionData, useParams } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./UpdateUserInfo.css";

function UpdateUserInfo() {
  useActionData();
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  const [responseServUserName, setResponseServUserName] = useState("");
  const [responseServEmail, setResponseServEmail] = useState("");
  const { id } = useParams();

  const [animation, setAnimation] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.info(formData);
    setAnimation(false);
    axios
      .get(`http://localhost:3310/api/users/verify/${formData.username}`)
      .then((response) => {
        setResponseServUserName(response.data[0].username);
      });
    axios
      .get(`http://localhost:3310/api/users/verifyEmail/${formData.email}`)
      .then((response) => {
        setResponseServEmail(response.data[0].email);
      });
  };

  const handleSubmit = () => {
    setAnimation(false);

    setFormData({
      username: formData.username,
      email: formData.email,
      pass: formData.pass,
    });

    if (
      formData.username.length > 3 &&
      formData.username !== responseServUserName &&
      regex.test(formData.email) &&
      formData.email !== responseServEmail &&
      regexPass.test(formData.pass)
    ) {
      setAnimation(true);

      axios.put(`http://localhost:3310/api/users/${id}`, formData);
      Cookies.remove("auth");
    }
  };

  return (
    <>
      <Link to="/browsepage">
        <img
          src="../src/assets/images/Logo1.png"
          alt="this is a logo"
          className="logo-creation-account"
        />
      </Link>
      <Form className="form-mon-compte" method="put" onSubmit={handleSubmit}>
        <h1 className="h1-my-account" id="h1-my-account">Modifier mon profil </h1> <hr />
        <div className="div-form">
          <ul className="ul-form">
            <li className="info">
              <label htmlFor="username" className="label">
                Pseudo:
                {formData.username.length < 3 &&
                  formData.username.length > 0 && (
                    <span className="error">
                      <br />
                      minimum 3 caratères
                    </span>
                  )}
                {formData.username === responseServUserName &&
                  responseServUserName.length > 0 && (
                    <span className="error">
                      <br />
                      ce pseudo existe déja
                    </span>
                  )}
              </label>
              <input
                type="text"
                name="username"
                className="input"
                id="username"
                onChange={handleFormData}
                value={formData.username}
              />
            </li>
            <li className="info">
              <label htmlFor="email" className="label">
                Email:
                {!regex.test(formData.email) && formData.email.length > 0 && (
                  <span className="error">
                    <br />
                    adresse mail invalide
                  </span>
                )}
                {regex.test(formData.email) &&
                  formData.email === responseServEmail && (
                    <span className="error">
                      <br />
                      ce mail existe déja
                    </span>
                  )}
              </label>
              <input
                type="text"
                name="email"
                className="input"
                id="email"
                onChange={handleFormData}
                value={formData.email}
              />
            </li>
            <li className="info">
              <label htmlFor="password" className="label">
                Mot de passe:
                {!regexPass.test(formData.pass) && formData.pass.length > 0 && (
                  <span className="error">
                    <br />
                    Le mot de passe doit <br />
                    contenir au moins <br />8 caractères, une <br />
                    majuscule, un chiffre et
                    <br /> un caractère spécial
                  </span>
                )}
              </label>
              <input
                type="password"
                name="pass"
                className="input"
                id="passwd"
                onChange={handleFormData}
                value={formData.pass}
              />
              {formData.username.length > 3 &&
                formData.username !== responseServUserName &&
                regex.test(formData.email) &&
                formData.email !== responseServEmail &&
                regexPass.test(formData.pass) &&
                animation && (
                  <h3 className="validate">
                    ENREGISTRÉ !<br />
                    Reconnectez vous{" "}
                    <Link to="/connexion" style={{ color: "blue" }}>
                      ici
                    </Link>
                  </h3>
                )}
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <div className="rec-cancel">
          <input
            type="submit"
            value="ENREGISTRER"
            className="input"
            id="save"
          />
          <Link to="/browsepage">
            <button type="button" className="input" id="cancel">
              ANNULER
            </button>
          </Link>
        </div>
        <img
          src="../src/assets/images/th3.jpg"
          alt="cassettes disposé en diagonale"
          className="background"
        />
      </Form>
    </>
  );
}

export default UpdateUserInfo;
