import PropTypes from "prop-types";

export default function EventForm({
  newEvent,
  handleInputChange,
  handleSave,
  handleClose,
  formError,
  isEditing,
}) {
  return (
    <div className="modal-content">
      <h2>{isEditing ? "Actualizar Evento" : "Agregar Nuevo Evento"}</h2>
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
            onClick={handleClose}
          >
            Cerrar
          </button>
          <button
            type="button"
            className="btn btn-dropdown"
            onClick={handleSave}
          >
            {isEditing ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}

EventForm.propTypes = {
  newEvent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  formError: PropTypes.string,
  isEditing: PropTypes.bool.isRequired,
};
