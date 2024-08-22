import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre nuestro equipo y nuestra misión.</p>
      </header>
      <section className="about-us-content">
        <div className="team-member">
          <img
            src="src\assets\Foto.jpeg"
            alt="Team Member"
            className="team-member-img"
          />
          <div className="team-member-info">
            <h2>Junior Rodriguez</h2>
            <p className="rol">Fundador y CEO</p>
            <p>
              Junior ha sido el motor detrás de nuestra misión desde el
              principio. Con años de experiencia en la industria, su visión y
              liderazgo han llevado a la empresa a nuevos horizontes.
            </p>
          </div>
        </div>
        <div className="team-member">
          <img
            src="src\assets\Foto.jpeg"
            alt="Team Member"
            className="team-member-img"
          />
          <div className="team-member-info">
            <h2>Junior Rodriguez</h2>
            <p className="rol">Director de Operaciones</p>
            <p>
              Junior se encarga de asegurar que todos los procesos de la empresa
              funcionen sin problemas. Su habilidad para resolver problemas y su
              enfoque en la eficiencia son invaluables.
            </p>
          </div>
        </div>
        <div className="company-mission">
          <h2>Nuestra Misión</h2>
          <p>
            En nuestra empresa, nos dedicamos a proporcionar soluciones
            innovadoras que faciliten la vida de nuestros clientes. Creemos en
            la calidad, el compromiso y la mejora continua.
          </p>
        </div>
      </section>
    </div>
  );
}
