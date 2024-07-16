import Cookie from "js-cookie";

function Deconnexion() {
  Cookie.remove("auth");
  Cookie.remove("administrator");
  window.location.href = "http://localhost:3000/connexion";
}

export default Deconnexion;
