import Cookie from "js-cookie";

function Deconnexion() {
  Cookie.remove("auth");
  window.location.href = "http://localhost:3000/connexion";
}

export default Deconnexion;
