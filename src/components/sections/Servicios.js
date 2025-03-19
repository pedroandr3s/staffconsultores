import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserFriends, 
  faBuilding, 
  faGraduationCap, 
  faSearch, 
  faChartLine, 
  faFileAlt, 
  faUserPlus, 
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";
import "./Servicios.css"; // Import your CSS file

function Servicios() {
  const servicios = [
    {
      id: "coaching-individual-equipos",
      icono: faUserFriends,
      titulo: "Coaching individual y de equipos"
    },
    {
      id: "clima-laboral",
      icono: faBuilding,
      titulo: "Clima laboral"
    },
    {
      id: "formacion-competencias",
      icono: faGraduationCap,
      titulo: "Formación de competencias"
    },
    {
      id: "busqueda-seleccion",
      icono: faSearch,
      titulo: "Búsqueda y selección"
    },
    {
      id: "evaluacion-potencial",
      icono: faChartLine,
      titulo: "Evaluación de potencial"
    },
    {
      id: "perfiles-cargo",
      icono: faFileAlt,
      titulo: "Perfiles de cargo por competencias"
    },
    {
      id: "onboarding",
      icono: faUserPlus,
      titulo: "Onboarding"
    },
    {
      id: "outplacement",
      icono: faSignOutAlt,
      titulo: "Outplacement"
    }
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-header">
        <h2 className="servicios-titulo">NUESTROS SERVICIOS</h2>
      </div>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <Link to={`/servicio/${servicio.id}`} key={servicio.id} className="servicio-card">
            <div className="servicio-icono">
              <FontAwesomeIcon icon={servicio.icono} />
            </div>
            <h3 className="servicio-titulo">{servicio.titulo}</h3>
            <span className="leer-mas">Leer Más</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Servicios;