import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO COMO IMAGEN */}
        <NavLink to="/" className="navbar-logo">
          <img
            src="/logo.png"
            alt="PLUS+ Arquitectura"
            className="logo-image"
          />
        </NavLink>

        {/* MENU (solo rutas reales) */}
        <nav className="navbar-menu">
          <NavLink to="/" className="nav-item">
            Inicio
          </NavLink>

          <NavLink to="/catalog" className="nav-item">
            Catálogo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
