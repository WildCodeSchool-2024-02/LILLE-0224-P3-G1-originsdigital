import { Form, useActionData, useParams } from "react-router-dom";
import "./UpdateUserInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";

function UpdateUserInfo() {
  const [valueUserName, setValueUserName] = useState();
  const [valueMail, setValueMail] = useState();
  const [valuePass, setValuePass] = useState();
  const [initError, setInitError] = useState(false);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3310/api/users/${id}`).then((response) => {
      setValueUserName(response.data[0].username);
      setValueMail(response.data[0].email);
      setValuePass(response.data[0].password);
      setUser(response.data);
    });
  }, []);

  const onchangePseudo = (e) => {
    setValueUserName(e.target.value);
  };
  const onchangeMail = (e) => {
    setValueMail(e.target.value);
  };
  const onchangePass = (e) => {
    setValuePass(e.target.value);
  };

  const init = () => {
    setValueUserName(user[0].username);
    setValueMail(user[0].email);
    setValuePass(user[0].password);
    setInitError(!initError);
    window.location.reload();
  };

  const data = useActionData();
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  return (
    <>
      <img
        src="../src/assets/images/Logo1.png"
        alt="this is a logo"
        className="logo-creation-account"
      />
      <Form
        className="form-mon-compte"
        method="post"
        onSubmit={() => {
          setInitError(false);
        }}
      >
        <h1 className="h1-my-account">Modifier mon profil </h1> <hr />
        <div className="div-form">
          <ul className="ul-form">
            <li className="info">
              <label htmlFor="username" className="label">
                Pseudo:{" "}
                {data && data.user.length < 3 && !initError ? (
                  <span className="error">
                    3 caractère minimum, <br />
                    100 maximum
                  </span>
                ) : (
                  ""
                )}
              </label>
              <input
                type="text"
                name="username"
                className="input"
                id="username"
                onChange={onchangePseudo}
                value={valueUserName}
              />
            </li>
            <li className="info">
              <label htmlFor="email" className="label">
                Email:{" "}
                {data && !regex.test(data.mail) && !initError ? (
                  <span className="error">Adresse mail invalide</span>
                ) : (
                  ""
                )}
              </label>
              <input
                type="text"
                name="email"
                className="input"
                id="email"
                onChange={onchangeMail}
                value={valueMail}
              />
            </li>
            <li className="info">
              <label htmlFor="password" className="label">
                Mot de passe:{" "}
                {data && !regexPass.test(data.pass) && !initError ? (
                  <span className="error">
                    <br />
                    Le mot de passe doit <br />
                    contenir au moins <br />8 caractères, une <br />
                    majuscule, un chiffre et
                    <br /> un caractère spécial
                  </span>
                ) : (
                  ""
                )}
              </label>
              <input
                type="password"
                name="password"
                className="input"
                id="passwd"
                onChange={onchangePass}
                value={valuePass}
              />
              <h3 className="validate">
                {data &&
                  data.user.length > 3 &&
                  regex.test(data.mail) &&
                  regexPass.test(data.pass) &&
                  "ENREGISTRER !"}{" "}
              </h3>
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
          <button type="button" className="input" id="cancel" onClick={init}>
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
