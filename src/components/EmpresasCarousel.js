import React, { useState, useEffect } from "react";
import "./EmpresasCarousel.css";

const EmpresasCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const empresasPerView = 5;
  const totalEmpresas = 25;
  const autoRotateInterval = 3000; // 3 seconds

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + empresasPerView;
      return nextIndex >= totalEmpresas ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevGroupIndex = prevIndex - empresasPerView;
      return prevGroupIndex < 0 ? Math.max(0, totalEmpresas - empresasPerView) : prevGroupIndex;
    });
  };

  // Get the current set of images to display
  const getCurrentSlideImages = () => {
    const images = [];
    const endIndex = Math.min(currentIndex + empresasPerView, totalEmpresas);
    
    for (let i = currentIndex; i < endIndex; i++) {
      images.push(i + 1); // Adding 1 to get image numbers 1-25 instead of 0-24
    }
    
    return images;
  };

  return (
    <section className="empresas-carousel-section">
      <div className="container">
        <h2 className="section-title">Nuestros Clientes</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &lt;
          </button>
          
          <div className="carousel-slide">
            {getCurrentSlideImages().map((imageNumber) => (
              <div key={imageNumber} className="empresa-item">
                {/* Try JPG first, then PNG as fallback */}
                <img 
                  src={`/${imageNumber}.jpg`}
                  alt={`Empresa ${imageNumber}`}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `/${imageNumber}.png`;
                  }}
                />
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {Array.from({ length: Math.ceil(totalEmpresas / empresasPerView) }).map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${currentIndex === index * empresasPerView ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * empresasPerView)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpresasCarousel;