import { useState, useEffect } from "react";
import eventsData from "../../data/events.json";
import { toast } from "react-toastify";
import EventTable from "../../components/EventTable";
import EventForm from "../../components/EventForm";
import Modal from "../../components/Modal";
import "./EventList.css";

export default function EventList() {
  // Estados Necesarios
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

  //Registrarse en un Evento
  const handleRegister = (title) => {
    toast.success(`Inscrito en el evento "${title}", gracias por su registro.`);
  };

  //Actualizar Evento
  const handleUpdate = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setNewEvent(eventToEdit);
      setEditEventId(id);
      setShowForm(true);
    }
  };

  //Eliminar Evento
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      const updatedEvents = events.filter((event) => event.id !== id);
      setEvents(sortEventsByDate(updatedEvents));
      toast.success("Evento eliminado exitosamente.");
    }
  };

  //Cambios en los Inputs del Formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  //Agregar Evento, Validaciones del Mismo
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
      const existingIds = events.map((event) => event.id);
      const newId = existingIds.length ? Math.max(...existingIds) + 1 : 1;
      const eventToAdd = { id: newId, ...newEvent };
      updatedEvents = [...events, eventToAdd];
      toast.success("Evento guardado exitosamente.");
    }

    setEvents(sortEventsByDate(updatedEvents));
    resetForm();
  };

  const resetForm = () => {
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
    setFormError("");
    setEditEventId(null);
    setShowForm(false);
  };

  //Configuración Inicial Para Poder Agregar un Evento
  const handleShowForm = () => {
    resetForm();
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

      <EventTable
        events={events}
        handleRegister={handleRegister}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />

      <Modal show={showForm} onClose={resetForm}>
        <EventForm
          newEvent={newEvent}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          handleClose={resetForm}
          formError={formError}
          isEditing={editEventId !== null}
        />
      </Modal>
    </div>
  );
}
