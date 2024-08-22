import HomePage from "../../pages/HomePage";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">EventManager</h1>
        <nav className="nav">
          <a href={<HomePage />} className="nav-link">
            Inicio
          </a>
          <a href="#events" className="nav-link">
            Eventos
          </a>
        </nav>
      </div>
    </header>
  );
}
