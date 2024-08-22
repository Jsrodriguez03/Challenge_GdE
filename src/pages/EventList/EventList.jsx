import { useState, useEffect } from "react";
import "./EventList.css";
import eventsData from "../../data/events.json";
import { toast } from "react-toastify";

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
  const [formError, setFormError] = useState("");
  const [editEventId, setEditEventId] = useState(null);

  // Función para ordenar eventos por fecha
  const sortEventsByDate = (eventsList) => {
    return [...eventsList].sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  // Cargar y ordenar los eventos por fecha
  useEffect(() => {
    setEvents(sortEventsByDate(eventsData));
  }, []);

  const handleRegister = (title) => {
    toast.success(
      `Inscrito en el evento "${title}", gracias por su selección.`
    );
  };

  const handleUpdate = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setNewEvent(eventToEdit);
      setEditEventId(id);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      const updatedEvents = events.filter((event) => event.id !== id);
      setEvents(sortEventsByDate(updatedEvents));
      toast.success("Evento eliminado exitosamente.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSave = () => {
    const { title, description, date, time, location } = newEvent;
    if (!title || !description || !date || !time || !location) {
      setFormError("Por favor, complete todos los campos.");
      return;
    }

    let updatedEvents = [];
    if (editEventId !== null) {
      updatedEvents = events.map((event) =>
        event.id === editEventId ? { ...newEvent, id: editEventId } : event
      );
      toast.success("Evento actualizado exitosamente.");
    } else {
      const newId = events.length ? events[events.length - 1].id + 1 : 1;
      const eventToAdd = { id: newId, ...newEvent };
      updatedEvents = [...events, eventToAdd];
      toast.success("Evento guardado exitosamente.");
    }

    setEvents(sortEventsByDate(updatedEvents));
    setShowForm(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
    setFormError("");
    setEditEventId(null);
  };

  const handleShowForm = () => {
    setFormError("");
    setShowForm(true);
  };

  return (
    <div className="container-event-list">
      <div className="header-ManagementEvent">
        <h1 className="title">
          <i
            className="fa-solid fa-clipboard-list"
            style={{ marginRight: "10px", color: "#e6c068" }}
          ></i>
          Lista de Eventos
        </h1>
        <button
          type="button"
          className="btn btn-secondary btn-addEvent"
          onClick={handleShowForm}
        >
          Agregar Nuevo Evento
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>
              <i
                className="fa-solid fa-signature"
                style={{ marginRight: "10px" }}
              ></i>
              Título
            </th>
            <th>
              <i
                className="fa-solid fa-file-signature"
                style={{ marginRight: "5px" }}
              ></i>
              Descripción
            </th>
            <th>
              <i
                className="fa-regular fa-calendar-check"
                style={{ marginRight: "5px" }}
              ></i>
              Fecha
            </th>
            <th>
              <i
                className="fa-regular fa-clock"
                style={{ marginRight: "5px" }}
              ></i>
              Hora
            </th>
            <th>
              <i
                className="fa-solid fa-map-location-dot"
                style={{ marginRight: "5px" }}
              ></i>
              Lugar
            </th>
            <th>
              <i
                className="fa-solid fa-sliders"
                style={{ marginRight: "5px" }}
              ></i>
              Gestión
            </th>
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

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {editEventId !== null
                ? "Actualizar Evento"
                : "Agregar Nuevo Evento"}
            </h2>
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

              {formError && <div className="form-error">{formError}</div>}

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
                  className="btn btn-dropdown"
                  onClick={handleSave}
                >
                  {editEventId !== null ? "Actualizar" : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
