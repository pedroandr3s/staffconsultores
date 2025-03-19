import React from "react";
import "./OfertasLaborales.css";

function OfertasLaborales() {
  return (
    <section id="ofertas" className="ofertas-section">
      <div className="container">
        <div className="section-header">
          <h2>Únete a Nuestro Equipo</h2>
          <p className="section-subtitle">
            Buscamos profesionales apasionados por la gestión estratégica del talento humano
          </p>
        </div>
        
        <div className="ofertas-grid">
          <div className="oferta-card">
            <div className="oferta-content">
              <span className="badge">Tiempo Completo</span>
              <h3>Consultor Senior en Desarrollo Organizacional</h3>
              <p className="descripcion">
                Especialista en diseñar e implementar estrategias de transformación organizacional 
                alineadas con los objetivos de negocio de nuestros clientes.
              </p>
              <ul className="requisitos">
                <li>Experiencia mínima de 4 años en consultoría de RRHH</li>
                <li>Conocimientos avanzados en gestión del cambio y desarrollo de liderazgo</li>
                <li>Capacidad para facilitar workshops y sesiones estratégicas</li>
                <li>Formación en psicología organizacional o administración de empresas</li>
              </ul>
            </div>
            <div className="oferta-footer">
              <button className="apply-button">Postular Ahora</button>
            </div>
          </div>
          
          <div className="oferta-card">
            <div className="oferta-content">
              <span className="badge">Tiempo Completo</span>
              <h3>Especialista en Gestión del Talento</h3>
              <p className="descripcion">
                Profesional encargado de diseñar e implementar estrategias de atracción, 
                retención y desarrollo del talento personalizado para cada cliente.
              </p>
              <ul className="requisitos">
                <li>Experiencia mínima de 3 años en selección y desarrollo del talento</li>
                <li>Conocimientos en herramientas de assessment y evaluación por competencias</li>
                <li>Manejo de metodologías ágiles aplicadas a la gestión del talento</li>
                <li>Habilidades avanzadas de comunicación y presentación</li>
              </ul>
            </div>
            <div className="oferta-footer">
              <button className="apply-button">Postular Ahora</button>
            </div>
          </div>
          
          <div className="oferta-card">
            <div className="oferta-content">
              <span className="badge">Tiempo Completo</span>
              <h3>Analista de Compensaciones y Beneficios</h3>
              <p className="descripcion">
                Analista especializado en desarrollar e implementar estructuras de compensaciones 
                competitivas y alineadas con la estrategia y cultura organizacional de los clientes.
              </p>
              <ul className="requisitos">
                <li>Experiencia mínima de 2 años en análisis y gestión de compensaciones</li>
                <li>Conocimiento de metodologías de valoración de cargos y análisis de equidad</li>
                <li>Manejo avanzado de Excel y herramientas de análisis de datos</li>
                <li>Capacidad para desarrollar propuestas personalizadas para cada cliente</li>
              </ul>
            </div>
            <div className="oferta-footer">
              <button className="apply-button">Postular Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfertasLaborales;