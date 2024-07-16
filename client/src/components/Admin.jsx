import { Form, Link } from "react-router-dom";
import "./Admin.css";
import { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

function Admin() {
  if (!Cookie.get("administrator")) window.location.href = "/connexion";

  const [change, setChange] = useState({
    titre: "",
    release_date: "",
    typeID: "",
    director: "",
    duration: "",
    synopsis: "",
    image_1: "",
    image_2: "",
    link: "",
    rating: "",
    status: "",
  });

  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3310/api/videos/administrator", change)
      .then((response) => response)
      .then((response) => setMessage(response.data.message));
    setChange({
      titre: "",
      release_date: "",
      typeID: "",
      director: "",
      duration: "",
      synopsis: "",
      image_1: "",
      image_2: "",
      link: "",
      rating: "",
      status: "",
    });
  };

  return (
    <div className="administrator">
      <Link to="/deconnexion">
        <button type="button" className="button-deconnexion-admin">
          déconnexion
        </button>
      </Link>
      <h1 className="h1-admin">Upload videos</h1>
      <Form className="form-admin" onSubmit={handleSubmit}>
        <input
          type="text"
          name="titre"
          value={change.titre}
          onChange={handleChange}
          id="input-titre-admin"
          className="input-admin"
          placeholder="Titre (le titre du film/série)"
        />
        <input
          type="text"
          name="release_date"
          value={change.release_date}
          onChange={handleChange}
          id="input-release-date-admin"
          className="input-admin"
          placeholder="Date de sortie (1900-12-31)"
        />
        <input
          type="text"
          name="typeID"
          value={change.typeID}
          onChange={handleChange}
          id="typeID-admin"
          className="input-admin"
          placeholder="typeID (Film ou Série)"
        />
        <input
          type="text"
          name="director"
          value={change.director}
          onChange={handleChange}
          id="director-admin"
          className="input-admin"
          placeholder="Réalisateur (nom du réalisateur)"
        />
        <input
          type="text"
          name="duration"
          value={change.duration}
          onChange={handleChange}
          id="duration-admin"
          className="input-admin"
          placeholder="Duréé (0h00 ou 00 min)"
        />
        <input
          type="text"
          name="synopsis"
          value={change.synopsis}
          onChange={handleChange}
          id="synopsis-admin"
          className="input-admin"
          placeholder="Synopsis (comme on veux)"
        />
        <input
          type="text"
          name="image_1"
          value={change.image_1}
          onChange={handleChange}
          id="image-1-admin"
          className="input-admin"
          placeholder="Image (mobile)"
        />
        <input
          type="text"
          name="image_2"
          value={change.image_2}
          onChange={handleChange}
          id="image-2-admin"
          className="input-admin"
          placeholder="Image (desktop)"
        />
        <input
          type="text"
          name="link"
          value={change.link}
          onChange={handleChange}
          id="link-admin"
          className="input-admin"
          placeholder="Lien de la vidéo"
        />
        <input
          type="text"
          name="rating"
          value={change.rating}
          onChange={handleChange}
          id="rating-admin"
          className="input-admin"
          placeholder="Notation (3.2)"
        />
        <input
          type="text"
          name="status"
          value={change.status}
          onChange={handleChange}
          id="status-admin"
          className="input-admin"
          placeholder="Status (free ou premium)"
        />
        <br />
        <input className="submit-admin" type="submit" value="valider" />
      </Form>
      {message && <h1 className="message-ok">{message}</h1>}
    </div>
  );
}

export default Admin;
