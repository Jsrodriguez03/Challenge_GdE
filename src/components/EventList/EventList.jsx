import { useState, useEffect } from "react";
import "./EventList.css";
import eventsData from "../../data/events.json"; // Importa directamente el JSON

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Establecer los eventos desde el JSON importado
    setEvents(eventsData);
  }, []);

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
            <th scope="col">Inscribirse</th>
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
