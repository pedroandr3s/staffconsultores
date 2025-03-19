import React, { useState, useEffect } from "react";
import "./TestimoniosCarousel.css";

const TestimoniosCarousel = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "César Gómez",
      cargo: "Gerente General Forestal Millalemu",
      texto: "Con Staff Consultores hemos construido una alianza estratégica para la implementación de nuevos proyectos de la compañía y para el desarrollo de nuestros colaboradores",
      foto: "forestal.jpg" // Aquí puedes poner la ruta real de la imagen
    },
    {
      id: 2,
      nombre: "Arturo Melibosky",
      cargo: "Gerente General Clínica Policenter",
      texto: "Los programas de capacitación que poseen han impactado de manera profunda en las competencias de nuestros líderes y jefaturas",
      foto: "policenter.png" // Aquí puedes poner la ruta real de la imagen
    },
    {
      id: 3,
      nombre: "Mauricio Opazo",
      cargo: "Subdirector de Gestión y Desarrollo de las personas Hospital Clínico Herminda Martin",
      texto: "Nos han ayudado a desarrollar competencias en nuestros profesionales y técnicos con estrategias innovadoras y de alta calidad",
      foto: "herminda.jpg" // Aquí puedes poner la ruta real de la imagen
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonios.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  return (
    <section className="testimonios-section" id="testimonios">
      <div className="testimonios-container">
        <h2 className="testimonios-title">Lo que dicen nuestros clientes</h2>
        
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={handlePrevClick}>
            <span className="arrow-icon">&#10094;</span>
          </button>
          
          <div className="carousel-content">
            {testimonios.map((testimonio, index) => (
              <div 
                key={testimonio.id}
                className={`testimonio-card ${index === currentIndex ? "active" : ""}`}
              >
                <div className="testimonio-inner">
                  <div className="testimonio-quote-marks">
                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 0L11.5 36H0L5 0H16.5ZM42 0L37 36H25.5L30.5 0H42Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="testimonio-texto">{testimonio.texto}</p>
                  <div className="testimonio-author">
                    <div className="author-avatar">
                      <img 
                        src={testimonio.foto} 
                        alt={`Foto de ${testimonio.nombre}`} 
                        className="avatar-img" 
                      />
                    </div>
                    <div className="author-details">
                      <h3 className="testimonio-nombre">{testimonio.nombre}</h3>
                      <p className="testimonio-cargo">{testimonio.cargo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-button next" onClick={handleNextClick}>
            <span className="arrow-icon">&#10095;</span>
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonios.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosCarousel;