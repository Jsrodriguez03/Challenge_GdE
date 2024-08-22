import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import EventList from "./components/EventList/EventList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <HomePage />
    <Footer />
    <ToastContainer />
  </React.StrictMode>
);
