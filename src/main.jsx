import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 1,
    category: 'Residencial',
    title: 'Adecuación eléctrica residencial',
    description: '',
    image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    category: 'Comercial',
    title: 'Iluminación para espacios comerciales',
    description: '',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'
  },
];

const services = [
  { icon: '', title: 'Instalaciones eléctricas', text: 'Instalaciones electricas nuevas, ampliaciones, normalizacion de circuitos y construccion de sistemas de puesta a tierra para hogares y comercios.' },
  { icon: '', title: 'Mantenimiento', text: 'Matenimiento de mtores electricos, mantenimiento de tableros electricos y mantenimiento de redes residenciales en pro de la seguridad.' },
  { icon: '', title: 'Control electrico', text: 'Ensamble de tableros eléctricos de control y distribución, instalación y conexión de equipos de instrumentación, control de motores eléctricos y conexión de sistemas automatizados.' },
  { icon: '', title: 'Diagnóstico eléctrico', text: 'Inspección de fallas, puntos eléctricos, conexiones y necesidades de mejora.' }
];

const logoPath = `${import.meta.env.BASE_URL}logo-mr.png`;

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <img src={logoPath} alt="Logo MR Soluciones Eléctricas" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>Contáctanos</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section-container">
          <div className="hero-content">
            <h1>Conectamos tus ideas con la <span>energía</span> que necesitas.</h1>
            <p>
              Ofrecemos servicios eléctricos de calidad, con valores y seguridad para proyectos residenciales y
              comerciales.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">Solicitar asesoría</a>
              <a className="button button-secondary" href="#proyectos">Ver nuestros trabajos</a>
            </div>
            <div className="hero-highlights" aria-label="Características del servicio">
              <span>✓ Disponibilidad</span>
              <span>✓ Personal capacitado</span>
              <span>✓ Enfoque en seguridad</span>
            </div>
          </div>

          <div className="hero-card" aria-label="Presentación de la empresa">
            <div className="hero-card-top">MR</div>
            <div className="hero-card-line"></div>
            <p>Electricidad que impulsa tu hogar.</p>
            <strong>Residencial · Comercial</strong>
          </div>
        </section>

        <section id="servicios" className="section section-light">
          <div className="section-container">
            <div className="section-heading">
              <span className="eyebrow">LO QUE HACEMOS</span>
              <h2>Servicios pensados para tus necesidades</h2>
              <p>Te acompañamos desde la identificación de la necesidad hasta la ejecución de la solución.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section section-dark">
          <div className="section-container">
            <div className="section-heading section-heading-dark">
              <span className="eyebrow">NUESTRO PORTAFOLIO</span>
              <h2>Proyectos y trabajos realizados</h2>
              <p>Explora algunas categorías de nuestros servicios. Reemplaza estas imágenes por fotografías reales de tus trabajos.</p>
            </div>

            <div className="filter-list" aria-label="Filtrar proyectos por categoría">
              {['Todos', 'Residencial', 'Comercial'].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section section-light">
          <div className="section-container about-layout">
            <div>
              <span className="eyebrow">SOBRE MR</span>
              <h2>Una empresa cercana, responsable y orientada a soluciones.</h2>
            </div>
            <div>
              <p>
                En MR Soluciones Eléctricas trabajamos para brindar respuestas prácticas a las necesidades de cada cliente.
                Nuestro propósito es ejecutar trabajos con buena comunicación, atención al detalle y una cultura de seguridad.
              </p>
              <p>
                Cada proyecto es una oportunidad para construir confianza y aportar instalaciones más funcionales y organizadas.
              </p>
              <a className="text-link" href="#contacto">Hablemos de tu proyecto →</a>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container cta-content">
            <div>
              <span className="eyebrow">¿TIENES UN PROYECTO?</span>
              <h2>Cuéntanos qué necesitas y encontremos una solución.</h2>
            </div>
            <a className="button button-light" href="#contacto">Contactar ahora</a>
          </div>
        </section>
      </main>

      <footer id="contacto" className="site-footer">
        <div className="section-container footer-grid">
          <div className="footer-brand">
            <img src={logoPath} alt="MR Soluciones Eléctricas" />
            <p></p>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul className="footer-list">
              <li>📞 <a href="tel:+573000000000">+57 300 000 0000</a></li>
              <li>📩 <a href="mailto:contacto@mrsoluciones.com">contacto@mrsoluciones.com</a></li>
              <li>📍 Colombia · Cartagena</li>
            </ul>
          </div>

          <div>
            <h3>Redes sociales</h3>
            <ul className="footer-list">
              <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/573000000000" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section-container">
            <p>© {new Date().getFullYear()} MR Soluciones Eléctricas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
