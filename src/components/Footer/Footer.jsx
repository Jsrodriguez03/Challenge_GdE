import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2 className="footer-logo">EventManager</h2>
          <p className="footer-description">
            EventManager es tu solución integral para gestionar eventos de forma
            sencilla y eficiente. ¡Contáctanos para más información!
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} EventManager. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
