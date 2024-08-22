import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventList from "./components/EventList/EventList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
