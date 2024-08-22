import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">EventManager</h1>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Inicio
          </a>
          <a href="#events" className="nav-link">
            Eventos
          </a>
          <a href="#about" className="nav-link">
            Sobre Nosotros
          </a>
          <a href="#contact" className="nav-link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
