import React from "react";
import "./Equipo.css";

function Equipo() {
  return (
    <section id="equipo" className="section">
      <h2>Nuestro Equipo</h2>
      <p className="team-subtitle">Nuestros profesionales cuentan con vasta experiencia para cumplir con un desempeño inmejorable en las áreas que tienen a cargo.</p>
      <div className="content">
        <div className="team-member">
          <div className="profile-image">
            {/* Espacio para la imagen de Marcelo Oliva */}
            <img src="Marcelo.jpg" alt="Marcelo Oliva" /> 
          </div>
          <h3>Marcelo Oliva</h3>
          <p className="position">Socio Director</p>
          <p>Con 15 años de experiencia en gestión empresarial y desarrollo tecnológico.</p>
        </div>
        <div className="team-member">
          <div className="profile-image">
            {/* Espacio para la imagen de Carlos Rodríguez */}
            <img src="yo.jpg" alt="Carlos Rodríguez" /> 
          </div>
          <h3>Carlos Rodríguez</h3>
          <p className="position">Director de Tecnología</p>
          <p>Especialista en desarrollo full-stack y arquitectura de sistemas.</p>
        </div>
        <div className="team-member">
          <div className="profile-image">
            {/* Espacio para la imagen de Marcos López */}
            <img src="yo.jpg" alt="Carlos Rodríguez" /> 
          </div>
          <h3>Marcos López</h3>
          <p className="position">Director de Diseño</p>
          <p>Creativo incansable con un ojo especial para la experiencia de usuario.</p>
        </div>
      </div>
    </section>
  );
}

export default Equipo;