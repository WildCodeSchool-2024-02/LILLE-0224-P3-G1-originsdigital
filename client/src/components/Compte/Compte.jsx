import { Form, useActionData } from "react-router-dom";
import "./Compte.css";
import { useState } from "react";

function Count() {
  const [valueUserName, setValueUserName] = useState("alexandre");
  const [valueMail, setValueMail] = useState("alex@gmail.com");
  const [valuePass, setValuePass] = useState("Abcd1234!");
  const [initError, setInitError] = useState(false);

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
    setValueUserName("alexandre");
    setValueMail("alex@gmail.com");
    setValuePass("Abcd1234!");
    setInitError(!initError);
  };

  const data = useActionData();
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  return (
    <Form
      className="form-mon-compte"
      method="post"
      onSubmit={() => {
        setInitError(false);
      }}
    >
      <h1 className="h1-my-account">Modifier mon profil</h1> <hr />
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
                <span className="error">adresse mail invalide</span>
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
                  le mot de passe doit <br />
                  contenir au moin <br />8 caractères, une <br />
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
          </li>
        </ul>
      </div>
      <hr className="hr" />
      <div className="rec-cancel">
        <input type="submit" value="ENREGISTRER" className="input" id="save" />

        <button type="button" className="input" id="cancel" onClick={init}>
          ANNULER
        </button>
      </div>
      <img
        src="src/assets/images/th.jpg"
        alt="cassettes disposé en diagonale"
        className="background"
      />
    </Form>
  );
}

export default Count;
