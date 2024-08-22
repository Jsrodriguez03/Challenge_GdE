import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <section className="homepage-features">
        <h2 className="features-title">Características Principales</h2>
        <div className="features-grid">
          <div className="feature-item">
            <Link to="/events" className="feature-link">
              <i className="fa-solid fa-calendar-check feature-icon"></i>
              <h3 className="feature-title">Gestión de Eventos</h3>
              <p className="feature-description">
                Crea, actualiza y elimina eventos fácilmente.
              </p>
            </Link>
          </div>
          <div className="feature-item">
            <Link to="/events" className="feature-link">
              <i className="fa-solid fa-user-check feature-icon"></i>
              <h3 className="feature-title">Registro de Asistentes</h3>
              <p className="feature-description">
                Permite a los usuarios inscribirse y asistir a tus eventos.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="homepage-about">
        <h2 className="about-title">Acerca de Nosotros</h2>
        <p className="about-description">
          En EventMaster, nos dedicamos a brindarte las herramientas que
          necesitas para organizar eventos de manera eficiente y profesional.
          Nuestro software está diseñado para facilitar la creación, gestión y
          seguimiento de todos tus eventos, desde pequeños encuentros hasta
          grandes conferencias.
        </p>
        <Link to="/events" className="btn btn-secondary homepage-learn-more">
          Conoce Más
        </Link>
      </section>
    </div>
  );
}
