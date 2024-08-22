import PropTypes from "prop-types";
import "../pages/EventList/EventList.css";

export default function Modal({ show, children }) {
  if (!show) return null;

  return <div className="modal">{children}</div>;
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
