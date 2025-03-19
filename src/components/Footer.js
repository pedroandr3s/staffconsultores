import React from "react";
// Import React icons for social media
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© 2025 StaffConsultores. Todos los derechos reservados a Pedro Vera.</p>
        <div className="social-icons">
          <a href="#" className="social-icon" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" className="social-icon" title="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon" title="Facebook">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon" title="Twitter / X">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;