"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button, Card } from "retro-react";

const projects = [
  { title: "Taquilla", year: "EN PRODUCCIÓN", description: "Taquilla multi-sede con generación de entradas y validación por cámara.", stack: "Flask · Supabase", code: "https://github.com/greikol4321-hub/taquilla", demo: "https://taquilla-quepos.vercel.app", featured: true },
  { title: "Jungle Wildlife Tours", year: "COMPLETADO", description: "Sitio web y panel administrativo para una empresa de tours, con soporte multi-idioma.", stack: "Next.js · React · Supabase", code: "https://github.com/greikol4321-hub/jungle-wildlife-tours", demo: "https://jungle-wildlife-tours.vercel.app" },
  { title: "Evaluación Ferias", year: "EN USO · 2 COLEGIOS MEP", description: "Evaluación de proyectos en ferias escolares con reportes PDF.", stack: "JavaScript · Supabase", code: "https://github.com/greikol4321-hub/evaluaciones-CTPQ", demo: "#trabajo" },
  { title: "Entradas CTPM", year: "EN DESARROLLO", description: "Venta de entradas con QR y verificación manual de comprobantes de pago.", stack: "Flask · Supabase", code: "https://github.com/greikol4321-hub/entradas-ctpm", demo: "https://entradas-ctpm.vercel.app" },
];

const services = [
  { title: "Webs para tours y negocios", text: "Páginas rápidas para celular, reservas por WhatsApp, SEO listo y fotos optimizadas.", detail: "Next.js + Tailwind · Flask si hace falta" },
  { title: "Taquilla y entradas con QR + SINPE", text: "Flujo completo para vender, comprobar pagos y validar una entrada una sola vez.", detail: "Mapa de mesas · QR · referencias SINPE" },
  { title: "Paneles admin que no piden manual", text: "Paneles donde el dueño crea, ve y responde sin llamar al desarrollador.", detail: "Supabase + RLS por sede y rol" },
  { title: "Sistemas para coles y ferias", text: "Evaluaciones, votaciones y controles internos que cualquier profe puede abrir.", detail: "Vanilla o Next · PDF · filtros" },
  { title: "Optimización y SEO técnico", text: "Revisión de carga, imágenes, metadata y estructura para que Google sí encuentre la web.", detail: "Core Web Vitals · sitemap · Lighthouse" },
  { title: "Soporte, hosting y evolutivos", text: "Dominio, Vercel y cambios chicos por WhatsApp después del primer deploy.", detail: "Deploy automático · backups" },
];

const skills = ["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "Vanilla JS", "Flask 3.1", "Supabase + RLS", "PostgreSQL", "Python", "Java", "C#", "Vercel", "Git / GitHub", "Accesibilidad AA"];

function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article className={project.featured ? "project project-featured" : "project"} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? {} : { y: -5, rotate: index % 2 ? 0.3 : -0.3 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
      <Card header={<span className="card-kicker">{project.year}</span>} footer={<div className="project-links"><a href={project.code} target="_blank" rel="noreferrer">Código ↗</a>{project.demo !== "#trabajo" && <a href={project.demo} target="_blank" rel="noreferrer">Ver sitio ↗</a>}</div>} sx={{ height: "100%", backgroundColor: project.featured ? "#e7d7af" : "#f1e7cf", border: "2px solid #1d362f", borderRadius: 0, boxShadow: "5px 5px 0 #1d362f" }}>
        <h3>{project.title}</h3><p>{project.description}</p><p className="project-stack">{project.stack}</p>
      </Card>
    </motion.article>
  );
}

export default function Home() {
  return (
    <div className="vintage-site">
      <header className="site-header"><a className="wordmark" href="#inicio" aria-label="Ir al inicio">GQ<span>_</span></a><nav aria-label="Navegación principal"><a href="#trabajo">Proyectos</a><a href="#perfil">Perfil</a><a href="#contacto">Contacto</a></nav><a className="header-mail" href="mailto:greikolamador@gmail.com">Escribime</a></header>
      <main id="inicio">
        <section className="hero">
          <Reveal className="hero-copy"><p className="folio">PORTAFOLIO / DESARROLLO WEB / 2026</p><h1>Sistemas web<br />que se usan<br /><em>de verdad.</em></h1><p className="hero-intro">Soy Greikol Quesada. Construyo herramientas claras para colegios y negocios de Costa Rica.</p><div className="hero-actions"><Button variant="success" size="large" onClick={() => document.querySelector("#trabajo")?.scrollIntoView({ behavior: "smooth" })}>Ver proyectos</Button><a className="text-link" href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer">Abrir GitHub ↗</a></div></Reveal>
          <Reveal delay={0.12} className="hero-dossier"><div className="dossier-tab">FICHA 01</div><p className="dossier-label">DISPONIBILIDAD</p><p className="dossier-big">Hablemos de lo tuyo.</p><div className="dossier-rule" /><dl><div><dt>Base</dt><dd>Quepos, Costa Rica</dd></div><div><dt>Canal</dt><dd>WhatsApp o correo</dd></div><div><dt>Stack</dt><dd>Flask, Supabase, Next.js</dd></div><div><dt>Entrega</dt><dd>Demo antes de codear</dd></div></dl><div className="stamp">DISPONIBLE<br />PARA FREELANCE</div></Reveal>
        </section>
        <section className="proof-strip" aria-label="Resumen profesional"><span>CTP QUEPOS</span><span>DESARROLLO WEB</span><span>SISTEMAS EN PRODUCCIÓN</span><span>FREELANCE</span></section>
        <section id="trabajo" className="content-section work-section"><Reveal className="section-heading"><div><p className="folio">PROYECTOS PROPIOS</p><h2>Lo que ya está<br /><em>en movimiento.</em></h2></div><p>No son ejercicios de clase. Son herramientas hechas para cobrar, validar, organizar o enseñar.</p></Reveal><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
        <section className="content-section services-section"><Reveal className="section-heading"><div><p className="folio">QUÉ TE PUEDO ARMAR</p><h2>Seis cosas que<br /><em>sí hago bien.</em></h2></div><p>No te vendo &ldquo;de todo un poco&rdquo;. Te digo qué resuelvo, con qué y qué te llevás.</p></Reveal><div className="service-list">{services.map((service, index) => <Reveal key={service.title} delay={index * 0.04} className="service-row"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><small>{service.detail}</small></Reveal>)}</div></section>
        <section id="perfil" className="content-section profile-section"><Reveal className="profile-note"><p className="folio">PERFIL</p><h2>Menos pasos.<br />Mejor uso.</h2><p>Soy Greikol Yanfred Quesada Amador, estudiante de Desarrollo Web en el CTP de Quepos. Hago sistemas chicos que quitan trabajo, no que añaden pasos.</p><p>Empecé con colegios y negocios de Quepos y Matapalo. Terminé dibujando un gimnasio silla por silla porque doce botones grises no le servían a nadie.</p></Reveal><div className="timeline"><Reveal delay={0.05} className="timeline-item"><p>ASÍ TRABAJO</p><h3>Me contás cómo cobrás hoy</h3><span>Cuaderno, SINPE o link. Dibujo el flujo tal cual y si no se entiende a la primera, lo reescribo.</span></Reveal><Reveal delay={0.1} className="timeline-item"><p>ANTES DE CODEAR</p><h3>Te muestro algo clickeable</h3><span>Wire en Figma o demo en staging. Vos tocás, yo ajusto. Sin cincuenta funciones por si acaso.</span></Reveal><Reveal delay={0.15} className="timeline-item"><p>DESPUÉS DEL DEPLOY</p><h3>Me quedo cerca</h3><span>Te paso acceso y las primeras semanas estoy por WhatsApp si hay que cambiar un texto o girar una silla.</span></Reveal></div></section>
        <section className="skills-section"><Reveal><p className="folio">HERRAMIENTAS DE TRABAJO</p><h2>El taller.</h2></Reveal><Reveal delay={0.06} className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</Reveal><Reveal delay={0.12} className="skills-footnote"><p>También trabajo con Word, PowerPoint y Excel a nivel intermedio. Tengo nociones de redes e IoT y experiencia organizando equipos.</p></Reveal></section>
        <section id="contacto" className="contact-section"><Reveal><p className="folio">CONTACTO</p><h2>¿Tenés algo que<br /><em>ordenar o construir?</em></h2><p>Contame qué necesitás. Te respondo directo si lo puedo resolver y cómo lo abordaría.</p><div className="contact-actions"><Button variant="primary" size="large" onClick={() => { window.location.href = "mailto:greikolamador@gmail.com"; }}>Enviar correo</Button><a href="https://wa.me/50661272074" target="_blank" rel="noreferrer">WhatsApp: 6127-2074 ↗</a></div></Reveal></section>
      </main>
      <footer><span>GREIKOL YANFRED QUESADA AMADOR</span><span>QUEPOS, COSTA RICA</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}
