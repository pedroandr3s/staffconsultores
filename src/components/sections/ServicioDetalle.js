import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserFriends, 
  faBuilding, 
  faGraduationCap, 
  faSearch, 
  faChartLine, 
  faFileAlt, 
  faUserPlus, 
  faSignOutAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import "./ServicioDetalle.css";

function ServicioDetalle() {
  const { servicioId } = useParams();
  
  const serviciosData = {
    "coaching-individual-equipos": {
      icono: faUserFriends,
      titulo: "Coaching individual y de equipos",
      descripcion: "Acompañamos a personas y equipos en el desarrollo de su potencial máximo.",
      contenido: [
        "Coaching ejecutivo para líderes",
        "Coaching de equipos para mejorar la cohesión",
        "Desarrollo de habilidades de liderazgo",
        "Gestión del cambio personal y organizacional",
        "Resolución de conflictos interpersonales"
      ],
      beneficios: [
        "Mayor autoconocimiento y desarrollo personal",
        "Mejora del rendimiento individual y colectivo",
        "Comunicación más efectiva",
        "Mayor satisfacción personal y profesional"
      ]
    },
    "clima-laboral": {
      icono: faBuilding,
      titulo: "Clima laboral",
      descripcion: "Analizamos y mejoramos el ambiente de trabajo para potenciar el bienestar y la productividad.",
      contenido: [
        "Diagnóstico del clima organizacional",
        "Análisis de satisfacción laboral",
        "Planes de acción para mejora del ambiente",
        "Talleres de integración y trabajo en equipo",
        "Seguimiento de indicadores de clima"
      ],
      beneficios: [
        "Reducción de la rotación de personal",
        "Mejora del compromiso y sentido de pertenencia",
        "Incremento de la productividad",
        "Prevención de conflictos laborales"
      ]
    },
    "formacion-competencias": {
      icono: faGraduationCap,
      titulo: "Formación de competencias",
      descripcion: "Desarrollamos programas formativos para potenciar las competencias clave en tu organización.",
      contenido: [
        "Diagnóstico de necesidades formativas",
        "Diseño de programas a medida",
        "Talleres teórico-prácticos",
        "Formación en habilidades directivas",
        "Evaluación de impacto formativo"
      ],
      beneficios: [
        "Desarrollo profesional continuo",
        "Alineación con objetivos estratégicos",
        "Mayor adaptabilidad ante cambios",
        "Mejora de la empleabilidad interna"
      ]
    },
    "busqueda-seleccion": {
      icono: faSearch,
      titulo: "Búsqueda y selección",
      descripcion: "Identificamos y atraemos el talento ideal para cada posición en tu organización.",
      contenido: [
        "Análisis del perfil requerido",
        "Búsqueda especializada por competencias",
        "Entrevistas por competencias",
        "Assessment center",
        "Verificación de referencias y antecedentes"
      ],
      beneficios: [
        "Reducción de errores en contratación",
        "Menor tiempo de adaptación",
        "Mayor retención del talento",
        "Incorporaciones alineadas con la cultura organizacional"
      ]
    },
    "evaluacion-potencial": {
      icono: faChartLine,
      titulo: "Evaluación de potencial",
      descripcion: "Identificamos capacidades y competencias para desarrollar el potencial de tus colaboradores.",
      contenido: [
        "Assessment center de potencial",
        "Pruebas psicométricas especializadas",
        "Entrevistas de evaluación profunda",
        "Mapeo de talentos",
        "Planes de desarrollo individual"
      ],
      beneficios: [
        "Identificación de high potentials",
        "Planificación de sucesiones",
        "Desarrollo del talento interno",
        "Mejor aprovechamiento de capacidades"
      ]
    },
    "perfiles-cargo": {
      icono: faFileAlt,
      titulo: "Perfiles de cargo por competencias",
      descripcion: "Diseñamos descripciones de puesto orientadas a competencias clave para el éxito.",
      contenido: [
        "Análisis funcional de puestos",
        "Identificación de competencias críticas",
        "Elaboración de diccionarios de competencias",
        "Validación con stakeholders",
        "Integración con sistemas de gestión del talento"
      ],
      beneficios: [
        "Claridad en roles y responsabilidades",
        "Base para procesos de selección efectivos",
        "Alineación con evaluación del desempeño",
        "Planes de desarrollo más efectivos"
      ]
    },
    "onboarding": {
      icono: faUserPlus,
      titulo: "Onboarding",
      descripcion: "Facilitamos la integración exitosa de nuevos colaboradores a tu organización.",
      contenido: [
        "Diseño de programas de bienvenida",
        "Integración cultural y de valores",
        "Asignación de mentores",
        "Seguimiento de adaptación",
        "Evaluación de resultados iniciales"
      ],
      beneficios: [
        "Reducción del tiempo de adaptación",
        "Mayor compromiso desde el inicio",
        "Claridad en expectativas mutuas",
        "Menor rotación temprana"
      ]
    },
    "outplacement": {
      icono: faSignOutAlt,
      titulo: "Outplacement",
      descripcion: "Acompañamos en la transición profesional y reubicación laboral de colaboradores.",
      contenido: [
        "Apoyo emocional en la desvinculación",
        "Redefinición del perfil profesional",
        "Estrategias de búsqueda laboral",
        "Preparación para entrevistas",
        "Networking estratégico"
      ],
      beneficios: [
        "Minimización del impacto emocional",
        "Reubicación laboral más rápida",
        "Mantenimiento de la imagen corporativa",
        "Gestión responsable del talento"
      ]
    }
  };

  const servicio = serviciosData[servicioId];

  if (!servicio) {
    return (
      <div className="servicio-no-encontrado">
        <h2>Servicio no encontrado</h2>
        <Link to="/#servicios" className="volver-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Volver a servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="servicio-detalle-container">
      <div className="servicio-detalle-header">
        <div className="servicio-detalle-icono">
          <FontAwesomeIcon icon={servicio.icono} />
        </div>
        <h1 className="servicio-detalle-titulo">{servicio.titulo}</h1>
      </div>
      
      <div className="servicio-detalle-descripcion">
        <p>{servicio.descripcion}</p>
      </div>
      
      <div className="servicio-detalle-secciones">
        <div className="servicio-detalle-seccion">
          <h2>Qué incluye</h2>
          <ul>
            {servicio.contenido.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="servicio-detalle-seccion">
          <h2>Beneficios</h2>
          <ul>
            {servicio.beneficios.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <Link to="/#servicios" className="volver-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Volver a servicios
      </Link>
    </div>
  );
}

export default ServicioDetalle;