import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <h3>CATEGORIES</h3>
          <ul>
            <li>FILMS</li>
            <li>SERIES</li>
            <li>POPULAIRE</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>SUIVEZ NOUS</h3>
          <ul>
            <a href="www.facebook.com">
              <li>FACEBOOK</li>
            </a>
            <a href="www.instagram.com">
              <li>INSTAGRAM</li>
            </a>
            <li>A PROPOS</li>
            <li>CONTACTEZ NOUS</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>COMPTE</h3>
          <ul>
            <li>FAVORIS</li>
            <li>DECONNEXION</li>
            <li>COMPTE</li>
            <li>CONDITIONS D'UTILISATION</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
