"use client";

import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    title: "Entradas CTPM",
    status: "CTP MATAPALO · EN USO",
    problem: "El Baile de Gala se vendía a mano: filas, comprobantes por WhatsApp y familias sin saber dónde sentarse.",
    solution: "Mapa 1:1 del gimnasio con 12 mesas y 72 sillas. El pago por SINPE se revisa, luego llega el QR y en puerta cada entrada se valida una sola vez.",
    highlight: "12 mesas · 72 sillas · QR de 5 letras",
    stack: ["Flask 3.1", "Supabase", "QR", "Vercel"],
    code: "https://github.com/greikol4321-hub/entradas-ctpm",
    demo: "https://entradas-ctpm.vercel.app",
  },
  {
    title: "Taquilla",
    status: "MULTI-SEDE · PRODUCCIÓN",
    problem: "Cada sede vendía por separado y el portero no podía saber con seguridad si un QR ya había entrado.",
    solution: "Vendedor genera, portero valida con cámara y cada sede ve solo lo suyo. El admin general mantiene el control sin mezclar operaciones.",
    highlight: "RLS por sede · cámara · 1 escaneo",
    stack: ["Flask", "Supabase + RLS", "Storage", "Vercel"],
    code: "https://github.com/greikol4321-hub/taquilla",
    demo: "https://taquilla-quepos.vercel.app",
  },
  {
    title: "Jungle Wildlife Tours",
    status: "TURISMO · COMPLETADO",
    problem: "Una empresa de tours necesitaba recibir reservas y gestionar su contenido sin depender de un desarrollador para cada cambio.",
    solution: "Web pública, panel para tours, reseñas y contactos, con contenido en varios idiomas y flujos pensados para una sola persona administrando.",
    highlight: "Next.js · panel · i18n",
    stack: ["Next.js 16", "React", "Supabase", "TypeScript"],
    code: "https://github.com/greikol4321-hub/jungle-wildlife-tours",
    demo: "https://jungle-wildlife-tours.vercel.app",
  },
  {
    title: "Evaluación de Ferias",
    status: "MEP · 2 COLEGIOS",
    problem: "Las ferias se evaluaban en papel y consolidar resultados tomaba demasiado tiempo.",
    solution: "Siete pantallas para usuarios, proyectos, asignaciones, resultados y observaciones; genera PDF y reutiliza el mismo núcleo para dos colegios.",
    highlight: "Vanilla JS · PDF · mismo core",
    stack: ["JavaScript", "Supabase + RLS", "jsPDF", "Vercel"],
    code: "https://github.com/greikol4321-hub/evaluaciones-CTPQ",
  },
];

const stackGroups = [
  ["Frontend", "Next.js 16", "React 19", "Tailwind v4", "TypeScript", "JavaScript"],
  ["Backend y datos", "Flask 3.1", "Supabase", "PostgreSQL", "RLS", "Python"],
  ["Entrega y criterio", "Vercel", "Git / GitHub", "PDF + QR", "Accesibilidad AA", "SEO técnico"],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.48, delay }}>{children}</motion.div>;
}

function CodeMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 7l5 5-5 5M12 19h7" /></svg>;
}

function ProjectCard({ project, index }) {
  return <Reveal delay={index * 0.06} className="portfolio-card"><div className="card-topline"><span>{project.status}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><div className="case-copy"><p><b>Problema.</b> {project.problem}</p><p><b>Lo que hice.</b> {project.solution}</p></div><p className="project-highlight">{project.highlight}</p><div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions"><a href={project.code} target="_blank" rel="noreferrer">Código ↗</a>{project.demo && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer">Ver sitio ↗</a>}</div></Reveal>;
}

export default function Home() {
  return <div className="wander-page">
    <header className="wander-header"><a className="brand code-brand" href="#inicio" aria-label="Ir al inicio"><CodeMark /><span>Greikol<br /><small>Quesada · dev</small></span></a><nav aria-label="Navegación principal"><a href="#trabajo">Proyectos</a><a href="#servicios">Servicios</a><a href="#perfil">Perfil</a><a href="#contacto">Contacto</a></nav><a className="header-note" href="https://mail.google.com/mail/?view=cm&fs=1&to=greikolamador@gmail.com" target="_blank" rel="noreferrer">DISPONIBLE<br /><span>QUEPOS, CR</span></a></header>
    <main id="inicio">
      <section className="portfolio-hero"><Reveal><p className="eyebrow">PORTAFOLIO / DESARROLLO WEB / 2026</p><h1>Software para<br /><em>problemas reales.</em></h1><p className="lead">Soy Greikol Quesada. Desarrollo sistemas para colegios, negocios y turismo: entradas, paneles y herramientas que no necesitan manual para usarse.</p><div className="hero-links"><a className="hero-primary" href="#trabajo">Ver proyectos</a><a href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer">GitHub ↗</a></div></Reveal><Reveal delay={0.1} className="proof-board"><p className="eyebrow">EN PRODUCCIÓN</p><div><strong>4</strong><span>proyectos<br />publicados</span></div><div><strong>2</strong><span>colegios usando<br />el mismo core</span></div><div><strong>12</strong><span>mesas mapeadas<br />silla por silla</span></div><p className="proof-note">De Quepos para gente que necesita que las cosas funcionen.</p></Reveal></section>
      <section className="signal-strip"><span>QUEPOS, COSTA RICA</span><span>FLASK · NEXT.JS · SUPABASE</span><span>FREELANCE Y EQUIPO</span></section>
      <section className="work-intro" id="trabajo"><Reveal><p className="eyebrow">CASOS DE ESTUDIO</p><h2>No son ejercicios.<br /><em>Son sistemas en uso.</em></h2><p>Cada proyecto parte de un problema concreto y termina con una herramienta que se puede abrir, probar y mantener.</p></Reveal></section>
      <section className="project-section"><div className="project-ledger">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><a className="github-all" href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer">Ver todos los repositorios en GitHub ↗</a></section>
      <section className="services-portfolio" id="servicios"><Reveal><p className="eyebrow">LO QUE PUEDO CONSTRUIR</p><h2>De la idea<br /><em>a algo usable.</em></h2></Reveal><div className="service-grid"><Reveal><h3>Webs y reservas</h3><p>Webs rápidas para tours y negocios, con reservas por WhatsApp, contenido editable y SEO desde el inicio.</p></Reveal><Reveal delay={0.05}><h3>Entradas y QR</h3><p>Flujos de pago por SINPE, asientos, comprobantes, QR y validación en puerta.</p></Reveal><Reveal delay={0.1}><h3>Paneles internos</h3><p>Herramientas para administrar usuarios, contenido, ventas, evaluaciones y reportes sin enredos.</p></Reveal></div></section>
      <section className="stack-section"><Reveal><p className="eyebrow">HERRAMIENTAS</p><h2>Con esto trabajo.</h2></Reveal><div className="stack-grid">{stackGroups.map(([title, ...items], index) => <Reveal key={title} delay={index * 0.05} className="stack-group"><h3>{title}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div></section>
      <section className="about-section" id="perfil"><Reveal><p className="eyebrow">PERFIL</p><h2>Menos pasos.<br /><em>Mejor uso.</em></h2></Reveal><Reveal delay={0.08} className="about-copy"><p>Soy Greikol Yanfred Quesada Amador, estudiante de Desarrollo Web en el CTP de Quepos. Empecé construyendo sistemas para colegios y negocios de Quepos y Matapalo.</p><p>Me importa más que una persona pueda vender una entrada o encontrar una reserva sin preguntar, que llenar una pantalla de funciones. Si necesita manual, todavía no está listo.</p></Reveal></section>
      <section className="contact-camp" id="contacto"><div className="contact-torn"><p className="eyebrow">CONTACTO</p><h2>¿Tenés algo que<br /><em>ordenar o construir?</em></h2><p>Escribime con el problema que necesitás resolver. Te digo directo cómo lo abordaría.</p><a className="contact-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=greikolamador@gmail.com" target="_blank" rel="noreferrer">Enviar correo por Gmail ↗</a></div><div className="contact-card contact-directory"><p>OTRAS FORMAS DE CONTACTARME</p><a className="contact-channel" href="https://wa.me/50661272074" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+506 6127-2074 ↗</strong></a><a className="contact-channel" href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@greikol4321-hub ↗</strong></a><a className="contact-channel" href="https://linkedin.com/in/greikol" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>/in/greikol ↗</strong></a><div className="contact-location"><CodeMark /><span>QUEPOS, COSTA RICA</span></div></div></section>
    </main>
    <footer className="wander-footer"><span>GREIKOL QUESADA · DESARROLLO WEB</span><span>© {new Date().getFullYear()} / HECHO EN QUEPOS</span></footer>
  </div>;
}
