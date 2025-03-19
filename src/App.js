import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/sections/Inicio";
import Servicios from "./components/sections/Servicios";
import TestimoniosCarousel from "./components/TestimoniosCarousel";
import Conocenos from "./components/sections/Conocenos";
import EmpresasCarousel from "./components/EmpresasCarousel"; // Added this import
import Equipo from "./components/sections/Equipo";
import OfertasLaborales from "./components/sections/OfertasLaborales";
import Contacto from "./components/sections/Contacto";
import ServicioDetalle from "./components/sections/ServicioDetalle";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Inicio />
        <Servicios />
        <TestimoniosCarousel />
        <Conocenos />
        <EmpresasCarousel /> {/* Added this component */}
        <Equipo />
        <OfertasLaborales />
        <Contacto />
      </div>
      <Footer />
    </>
  );
}

function ServicioPage() {
  return (
    <>
      <Header />
      <div className="content-container">
        <ServicioDetalle />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicio/:id" element={<ServicioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;