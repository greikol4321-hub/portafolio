"use client";

import { motion, useReducedMotion } from "motion/react";

const projects = [
  { title: "Taquilla", status: "EN PRODUCCIÓN", body: "Taquilla multi-sede con generación de entradas y validación por cámara.", stack: "Flask · Supabase", code: "https://github.com/greikol4321-hub/taquilla", demo: "https://taquilla-quepos.vercel.app" },
  { title: "Jungle Wildlife Tours", status: "COMPLETADO", body: "Sitio web y panel administrativo para una empresa de tours, con soporte multi-idioma.", stack: "Next.js · React · Supabase", code: "https://github.com/greikol4321-hub/jungle-wildlife-tours", demo: "https://jungle-wildlife-tours.vercel.app" },
  { title: "Evaluación Ferias", status: "EN USO · 2 COLEGIOS MEP", body: "Evaluación de proyectos en ferias escolares con reportes PDF.", stack: "JavaScript · Supabase", code: "https://github.com/greikol4321-hub/evaluaciones-CTPQ" },
  { title: "Entradas CTPM", status: "EN DESARROLLO", body: "Venta de entradas con QR y verificación manual de comprobantes de pago.", stack: "Flask · Supabase", code: "https://github.com/greikol4321-hub/entradas-ctpm", demo: "https://entradas-ctpm.vercel.app" },
];

const services = [
  ["01", "Webs para tours y negocios", "Páginas rápidas para celular, reservas por WhatsApp, SEO y fotos optimizadas."],
  ["02", "Taquilla y entradas con QR + SINPE", "Vender, comprobar pagos y validar una entrada una sola vez."],
  ["03", "Paneles admin que no piden manual", "El dueño crea, ve y responde sin llamar al desarrollador."],
  ["04", "Sistemas para coles y ferias", "Evaluaciones, votaciones y controles internos que cualquier profe puede abrir."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay }}>{children}</motion.div>;
}

function ProjectEntry({ project, index }) {
  return <Reveal delay={index * 0.05} className="project-entry"><div className="entry-meta"><span>{project.status}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.body}</p><p className="entry-stack">{project.stack}</p><div className="entry-links"><a href={project.code} target="_blank" rel="noreferrer">Código ↗</a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Ver sitio ↗</a>}</div></Reveal>;
}

export default function Home() {
  return <div className="wander-page">
    <header className="wander-header"><a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">✳</span><span>Greikol<br /><small>Quesada</small></span></a><nav aria-label="Navegación principal"><a href="#trabajo">Trabajo</a><a href="#proceso">Proceso</a><a href="#perfil">Quién soy</a><a href="#contacto">Contacto</a></nav><a className="header-note" href="mailto:greikolamador@gmail.com">ESCRIBIME<br /><span>QUEPOS, CR</span></a></header>
    <main id="inicio">
      <section className="dispatch" id="trabajo"><Reveal className="dispatch-main"><p className="eyebrow">DESDE QUEPOS, COSTA RICA</p><h1>Sistemas web<br /><em>que se usan</em><br />de verdad.</h1><p className="lead">Construyo herramientas claras para colegios, tours y negocios que necesitan cobrar, organizar y trabajar con menos pasos.</p><a className="outline-link" href="#proyectos">Ver proyectos ↓</a><div className="paper-note"><p className="eyebrow">UNA NOTA DEL TALLER</p><h2>Diseño primero.<br />Código después.</h2><p>Antes de programar, dibujo el flujo. Si una persona no entiende qué tocar, la interfaz todavía no está lista.</p><span className="stamp">HECHO EN<br />QUEPOS</span></div></Reveal><aside className="dispatch-aside"><div className="aside-title"><h2>Bitácora</h2><span>REPORTES</span></div><article><p className="eyebrow">01 / EN PRODUCCIÓN</p><h3>Taquilla multi-sede</h3><p>Vendedor genera. Portero valida con cámara. RLS separa cada sede.</p><a href="https://taquilla-quepos.vercel.app" target="_blank" rel="noreferrer">LEER MÁS ↗</a></article><article><p className="eyebrow">02 / COMPLETADO</p><h3>Jungle Wildlife Tours</h3><p>Web, panel e idiomas para que una empresa de tours pueda recibir reservas.</p><a href="https://jungle-wildlife-tours.vercel.app" target="_blank" rel="noreferrer">LEER MÁS ↗</a></article><div className="campfire" aria-hidden="true">♨</div></aside></section>
      <section className="project-section" id="proyectos"><Reveal><p className="eyebrow">TRABAJO RECIENTE</p><h2>Proyectos que<br /><em>salieron del papel.</em></h2></Reveal><div className="project-ledger">{projects.map((project, index) => <ProjectEntry key={project.title} project={project} index={index} />)}</div></section>
      <section className="process-section" id="proceso"><Reveal><p className="eyebrow">CÓMO TRABAJO</p><h2>Un camino corto<br /><em>hasta la demo.</em></h2></Reveal><div className="service-ledger">{services.map(([number, title, body], index) => <Reveal key={title} delay={index * 0.04} className="service-entry"><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></Reveal>)}</div></section>
      <section className="about-section" id="perfil"><Reveal><p className="eyebrow">QUIÉN SOY</p><h2>El desarrollador<br /><em>del otro lado.</em></h2></Reveal><div className="about-copy"><p>Soy Greikol Yanfred Quesada Amador, estudiante de Desarrollo Web en el CTP de Quepos. Empecé con colegios y negocios de la zona, resolviendo problemas muy concretos con sistemas pequeños.</p><p>Me gusta que una pantalla se entienda antes de que alguien tenga que pedir instrucciones. Por eso cada proyecto empieza con una conversación y termina con algo que se puede tocar.</p></div></section>
      <section className="contact-camp" id="contacto"><div className="contact-torn"><p className="eyebrow">ESCRIBIME</p><h2>¿Qué necesitás<br /><em>ordenar o construir?</em></h2><p>Contame qué pasa hoy. Te respondo directo si lo puedo resolver y cómo lo abordaría.</p><a className="contact-button" href="mailto:greikolamador@gmail.com">greikolamador@gmail.com ↗</a></div><div className="contact-card"><span>PARA: GREIKOL QUESADA</span><a href="https://wa.me/50661272074" target="_blank" rel="noreferrer">WhatsApp<br /><strong>6127-2074</strong></a><span>BASE: QUEPOS, CR</span><span className="postage">✳<br />COSTA RICA</span></div></section>
    </main>
    <footer className="wander-footer"><span>GREIKOL QUESADA · DESARROLLO WEB</span><span>© {new Date().getFullYear()} / HECHO A MANO</span></footer>
  </div>;
}
