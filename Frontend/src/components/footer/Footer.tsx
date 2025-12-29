import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LOGO PRINCIPAL */}
        <img
          src="/logo.png"
          alt="PLUS+ Arquitectura"
          className="footer-logo"
        />

        <p className="footer-location">Córdoba, Argentina</p>


        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/plusarquitectura_/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          <img
            src="/Ig.png"
            alt="Instagram PLUS+ Arquitectura"
            className="instagram-logo"
          />
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} PLUS+ Arquitectura
        </p>
      </div>
    </footer>
  );
}
