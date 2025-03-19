import React from "react";
import './Contacto.css';

function Contacto() {
  return (
    <section id="contacto" className="section">
      <h2>Contáctenos</h2>
      <div className="content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
        <div className="contact-info">
          <p><strong>Dirección:</strong> Los Mañíos 623, Chillan, Chillán, Región de Ñuble</p>
          <p><strong>Celular:</strong> +56 9 42951729</p>
          <p><strong>Email:</strong> contacto@staffconsultores.cl | moliva@staffconsultores.cl</p>
        </div>
      </div>
    </section>
  );
}

export default Contacto;