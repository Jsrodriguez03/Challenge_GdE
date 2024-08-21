import "./EventList.css";

export default function EventList() {
  const events = [
    {
      title: "Exposición Rodolfo Nieto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit deserunt laborum, incidunt delectus ea autem dignissimos repellendus qui! Quo reiciendis harum aliquid. Excepturi repellendus corporis ut, iure eaque ratione.",
      date: "Lunes, 19 de Agosto",
      time: "10:00 AM",
      location: "Plaza Nativa",
    },
    {
      title: "Fería Lanzate",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officiis autem porro architecto totam. Expedita cum odio dolores mollitia velit eaque obcaecati placeat, eius, ratione nobis est sed voluptatibus. Ipsum!",
      date: "Martes, 20 de Agosto",
      time: "10:00 AM",
      location: "Plaza Nativa",
    },
    {
      title: "Concierto Morat",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugit quas consectetur ad deleniti obcaecati voluptates. Officiis ipsa laudantium nesciunt impedit laboriosam, vel reiciendis, odit possimus, cum maiores est nam.",
      date: "Miércoles, 22 de Agosto",
      time: "03:00 PM",
      location: "Plaza Nativa",
    },
  ];

  return (
    <div className="container-event-list">
      <h1 className="title">Lista de Eventos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Lugar</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>
                <button
                  onClick={() => alert(`Inscrito en ${event.title}`)}
                  type="button"
                  className="btn btn-primary"
                >
                  Inscribirme
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
