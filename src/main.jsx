import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Importaciones de Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EventList from "./pages/EventList/EventList";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  </React.StrictMode>
);
