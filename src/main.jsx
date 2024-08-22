import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventList from "./components/EventList/EventList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventList />
    <ToastContainer />
  </React.StrictMode>
);
