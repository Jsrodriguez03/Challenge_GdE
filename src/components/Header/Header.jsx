import "./Header.css";
import { Link } from "react-router-dom";
import logo from "/public/favicon.ico";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="EventManager Logo" className="logo-image" />
          <h1 className="logo-text">EventManager</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/events" className="nav-link">
            Eventos
          </Link>
          <Link to="/about-us" className="nav-link">
            Nosotros
          </Link>
        </nav>
      </div>
    </header>
  );
}
