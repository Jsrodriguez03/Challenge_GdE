import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} EventManager. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
