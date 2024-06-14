import { Form } from "react-router-dom";
import "./Compte.css";

function Compte() {
  
  return (
    <Form className="form-mon-compte" method="post">
      <h1 className="h1-mon-compte">Modifier mon profil</h1>
      <input type="text" name="name" />
      <input type="submit" value="valider" />
    </Form>
  );
}

export default Compte;
