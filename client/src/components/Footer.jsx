import "./Footer.css";

function Footer() {
  return (
    <div className="footer-jsx">
      {" "}
      <a href="https://www.instagram.com/">
        <img src="/public/instagram.svg" alt="teste" className="img-footer" />
      </a>
      <a href="https://fr-fr.facebook.com/">
        <img src="/public/facebook.svg" alt="teste" className="img-footer" />
      </a>
      <a href="/info-contact#hdp">
        <img src="/public/a-propos.png" alt="teste" className="img-footer" />
      </a>
    </div>
  );
}

export default Footer;
