import PropTypes from "prop-types";
import EventDropdown from "./EventDropdown";

export default function EventTable({
  events,
  handleRegister,
  handleUpdate,
  handleDelete,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Lugar</th>
          <th>Gestión</th>
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
              <EventDropdown
                onRegister={() => handleRegister(event.title)}
                onUpdate={() => handleUpdate(event.id)}
                onDelete={() => handleDelete(event.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

EventTable.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleRegister: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
