import PropTypes from "prop-types";

export default function EventDropdown({ onRegister, onUpdate, onDelete }) {
  return (
    // Opciones del Desplegable
    <div className="dropdown">
      <button className="btn btn-dropdown dropdown-toggle" type="button">
        <i className="fa-solid fa-gear" style={{ marginRight: "10px" }}></i>
        Acciones
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" onClick={onRegister}>
          Inscribirme
        </button>
        <button className="dropdown-item" onClick={onUpdate}>
          Actualizar
        </button>
        <button className="dropdown-item" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

EventDropdown.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
