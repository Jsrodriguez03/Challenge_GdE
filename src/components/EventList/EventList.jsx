import { useState, useEffect } from "react";
import "./EventList.css";
import eventsData from "../../data/events.json"; // Importa directamente el JSON

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Establecer los eventos desde el JSON importado
    setEvents(eventsData);
  }, []);

  const handleRegister = (title) => {
    alert(`Inscrito en ${title}`);
  };

  const handleUpdate = (id) => {
    alert(`Actualizar evento con ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Eliminar evento con ID: ${id}`);
  };

  return (
    <div className="container-event-list">
      <div className="header-ManagementEvent">
        <h1 className="title"> Lista de Eventos </h1>
        <button type="button" className="btn btn-primary" onClick={() => {}}>
          Agregar Nuevo Evento
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Lugar</th>
            <th scope="col">Gestión</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                  >
                    Acciones
                  </button>
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => handleRegister(event.title)}
                    >
                      Inscribirme
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleUpdate(event.id)}
                    >
                      Actualizar
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDelete(event.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
