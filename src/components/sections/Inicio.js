import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <section id="inicio" className="section inicio-section">
      <div className="inicio-content">
        <div className="inicio-image-container">
          <img 
            src={process.env.PUBLIC_URL + "/inicio.png"} 
            alt="Inicio" 
            className="inicio-image" 
          />
        </div>
      </div>
    </section>
  );
}

export default Inicio;