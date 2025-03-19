import React, { useEffect, useRef } from "react";
import "./Conocenos.css";
const Conocenos = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="conocenos-section" id="conocenos" ref={sectionRef}>
      <div className="conocenos-container">
        <div className="conocenos-header">
          <h2 className="conocenos-titulo">Conócenos</h2>
        </div>
        
        <div className="conocenos-content">
          {/* Columna izquierda: ¿A qué nos dedicamos? */}
          <div className="conocenos-col dedicacion-col">
            <h3 className="conocenos-subtitulo">¿A qué nos dedicamos?</h3>
            <div className="dedicacion-content">
              <p className="dedicacion-texto">
                "Nos dedicamos a entregar soluciones en Gestión Estratégica de Personas 
                alineadas con los objetivos de la organización, a través de métodos de 
                consultoría innovadores y validados, teniendo en consideración las 
                necesidades y características particulares de cada cliente."
              </p>
              
              <div className="director-info">
                <div className="director-avatar">
                  <img src='Marcelo.jpg' alt="Marcelo Oliva Abusleme" className="avatar-image" />
                </div>
                <div className="director-details">
                  <h4 className="director-nombre">Marcelo Oliva Abusleme</h4>
                  <p className="director-cargo">Socio Director</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna derecha: Nuestros principios */}
          <div className="conocenos-col principios-col">
            <h3 className="conocenos-subtitulo">Nuestros principios</h3>
            <div className="principios-grid">
              <div className="principio-card">
                <div className="principio-header">
                  <div className="principio-icono">✓</div>
                  <h4 className="principio-titulo">Calidad</h4>
                </div>
                <p className="principio-texto">
                  Garantizamos que los servicios serán entregados por profesionales de alta capacidad 
                  técnica y amplia experiencia en procesos de gestión de personas y cambio en 
                  organizaciones del centro-sur de Chile.
                </p>
              </div>
              
              <div className="principio-card">
                <div className="principio-header">
                  <div className="principio-icono">🔥</div>
                  <h4 className="principio-titulo">Pasión por los resultados</h4>
                </div>
                <p className="principio-texto">
                  Queremos ser socios estratégicos de nuestros clientes, agregarle valor a la gestión 
                  de su empresa y a sus resultados operativos. Esto lo hacemos con metodología 
                  validada e innovadora y con la convicción de que las personas somos las que 
                  otorgamos valor a las organizaciones.
                </p>
              </div>
              
              <div className="principio-card">
                <div className="principio-header">
                  <div className="principio-icono">🤝</div>
                  <h4 className="principio-titulo">Confianza</h4>
                </div>
                <p className="principio-texto">
                  Buscamos asesorar a nuestros clientes entendiendo sus necesidades y expectativas. 
                  Es por ello que colaboramos de manera cercana, cálida y oportuna. Queremos y 
                  construimos una relación de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocenos;