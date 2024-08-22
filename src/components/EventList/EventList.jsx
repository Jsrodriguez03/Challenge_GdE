import { useState, useEffect } from "react";
import "./EventList.css";
import eventsData from "../../data/events.json";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  useEffect(() => {
    // Establecer los eventos desde el JSON importado
    setEvents(eventsData);
  }, []);

  const handleRegister = (title) => {
    alert(`Inscrito en en el evento "${title}", gracias por su selección.`);
  };

  const handleUpdate = (id) => {
    alert(`Actualizar evento con ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Eliminar evento con ID: ${id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSave = () => {
    // Crear un nuevo ID para el evento
    const newId = events.length ? events[events.length - 1].id + 1 : 1;
    const eventToAdd = { id: newId, ...newEvent };

    // Guardar el nuevo evento en el archivo JSON
    const updatedEvents = [...events, eventToAdd];
    setEvents(updatedEvents);

    // Cerrar el formulario y reiniciar el estado del nuevo evento
    setShowForm(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
  };

  return (
    <div className="container-event-list">
      <div className="header-ManagementEvent">
        <h1 className="title"> Lista de Eventos </h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
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
                    className="btn btn-dropdown dropdown-toggle"
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

      {/* Formulario Modal */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Agregar Nuevo Evento</h2>
            <form>
              <label>Título</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />

              <label>Descripción</label>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
              />

              <label>Fecha</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
              />

              <label>Hora</label>
              <input
                type="time"
                name="time"
                value={newEvent.time}
                onChange={handleInputChange}
              />

              <label>Lugar</label>
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
              />

              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
