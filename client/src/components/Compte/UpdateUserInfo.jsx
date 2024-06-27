import { Form, useActionData, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./UpdateUserInfo.css";
import Footer from "../Footer/Footer";

function UpdateUserInfo() {
  useActionData();
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  const [responseServUserName, setResponseServUserName] = useState("");
  const [responseServEmail, setResponseServEmail] = useState("");
  const { id } = useParams();

  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSubmit(false);
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
    setSubmit(false);

    setFormData({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    if (
      formData.username.length > 3 &&
      formData.username !== responseServUserName &&
      regex.test(formData.email) &&
      formData.email !== responseServEmail &&
      regexPass.test(formData.password)
    ) {
      setSubmit(true);

      axios.put(`http://localhost:3310/api/users/${id}`, formData);
    }
  };

  return (
    <>
      <img
        src="../src/assets/images/logo.png"
        alt="this is a logo"
        className="logo-creation-account"
      />
      <Form className="form-mon-compte" method="put" onSubmit={handleSubmit}>
        <h1 className="h1-my-account">Modifier mon profil </h1> <hr />
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
                {!regexPass.test(formData.password) &&
                  formData.password.length > 0 && (
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
                name="password"
                className="input"
                id="passwd"
                onChange={handleFormData}
                value={formData.password}
              />
              {formData.username.length > 3 &&
                formData.username !== responseServUserName &&
                regex.test(formData.email) &&
                formData.email !== responseServEmail &&
                regexPass.test(formData.password) &&
                submit && <h3 className="validate">ENREGISTRER !</h3>}
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
          <button type="button" className="input" id="cancel">
            ANNULER
          </button>
        </div>
        <img
          src="../src/assets/images/th3.jpg"
          alt="cassettes disposé en diagonale"
          className="background"
        />
      </Form>
      <Footer />
    </>
  );
}

export default UpdateUserInfo;
