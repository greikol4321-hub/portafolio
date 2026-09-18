import Reveal from "@/components/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import TextReveal from "@/components/TextReveal";
import ScrollProgress from "@/components/ScrollProgress";

const projects = [
  {
    title: "Entradas CTPM",
    status: "CTP MATAPALO · EN DESARROLLO",
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
    demoLabel: "Demo con acceso ↗",
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
  },
];

const skillGroups = [
  {
    title: "Construcción web",
    note: "Interfaces, lógica y sistemas que se pueden probar en producción.",
    items: ["HTML", "CSS", "JavaScript", "Python", "Java", "C#", "React", "Next.js"],
  },
  {
    title: "Datos y entrega",
    note: "Del almacenamiento al despliegue, con flujos claros y controlados.",
    items: ["Supabase", "MySQL / XAMPP", "Git / GitHub", "Vercel", "RLS", "PDF + QR"],
  },
  {
    title: "Forma de trabajar",
    note: "Responsabilidad, orden y comunicación para resolver problemas en equipo.",
    items: ["Trabajo en equipo", "Liderazgo", "Comunicación", "Ofimática intermedia", "Redes e IoT básicos"],
  },
];

const experience = [
  ["2025", "Expotécnica · CTP de Quepos", "Aplicación para consultar las paradas del sistema de buses según la ruta de cada estudiante. Desarrollo y presentación ante jurado y público."],
  ["2025", "Pasantía virtual · Yovoytech Costa Rica", "Asistente de desarrollo web durante dos semanas, trabajando con guías, plantillas y entregas para la empresa."],
];

const education = [
  ["2026", "Desarrollo Web · CTP de Quepos", "Duodécimo año, sección 12-3B · graduación esperada 2026"],
  ["2023", "Educación General Básica · CTP de Quepos", "Noveno año · graduado"],
  ["2020", "Educación primaria · Escuela Damitas", "Formación primaria completa"],
];

function CodeMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 7l5 5-5 5M12 19h7" /></svg>;
}

function ProjectCard({ project, index }) {
  return <div className="portfolio-card"><div className="card-topline"><span>{project.status}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><div className="case-copy"><p><b>Problema.</b> {project.problem}</p><p><b>Lo que hice.</b> {project.solution}</p></div><p className="project-highlight">{project.highlight}</p><div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{(project.code || project.demo) && <div className="project-actions">{project.code && <a href={project.code} target="_blank" rel="noreferrer">Código ↗</a>}{project.demo && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel || "Ver sitio ↗"}</a>}</div>}</div>;
}

export default function Home() {
  return <div className="wander-page">
    <ScrollProgress />
    <header className="wander-header"><a className="brand code-brand" href="#inicio" aria-label="Ir al inicio"><CodeMark /><span>Greikol<br /><small>Quesada · dev</small></span></a><nav aria-label="Navegación principal"><a href="#trabajo">Proyectos</a><a href="#experiencia">Trayectoria</a><a href="#perfil">Perfil</a><a href="#contacto">Contacto</a></nav><a className="header-note" href="https://mail.google.com/mail/?view=cm&fs=1&to=greikolamador@gmail.com" target="_blank" rel="noreferrer">ABIERTO A PRÁCTICA<br /><span>QUEPOS, CR</span></a></header>
    <main id="inicio">
      <section className="portfolio-hero"><Reveal><p className="eyebrow">PORTAFOLIO / DESARROLLO WEB / 2026</p><h1><TextReveal text="Software para" /><br /><em><TextReveal text="problemas reales." delay={0.12} /></em></h1><p className="lead">Soy Greikol Quesada, estudiante de Desarrollo Web y creador de sistemas que ya se usan en colegios, negocios y turismo.</p><p className="hero-kicker"><span className="status-dot" aria-hidden="true" /> Disponible para práctica profesional · tiempo completo</p><div className="hero-links"><a className="hero-primary" href="#trabajo">Ver proyectos</a><a href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer">GitHub ↗</a></div></Reveal><Reveal delay={0.15} direction="left" className="proof-board">
<p className="eyebrow">EN PRODUCCIÓN</p>
<StaggerReveal className="proof-grid">
<StaggerItem><div><strong>4</strong><span>proyectos<br />publicados</span></div></StaggerItem>
<StaggerItem><div><strong>2</strong><span>colegios<br />usándolo</span></div></StaggerItem>
</StaggerReveal>
<p className="proof-note">320 horas disponibles para práctica profesional.</p>
</Reveal></section>
      <section className="signal-strip"><span>QUEPOS, COSTA RICA</span><span>FLASK · NEXT.JS · SUPABASE</span><span>ESPAÑOL · INGLÉS A2</span><span>320 H DE PRÁCTICA</span></section>
      <section className="work-intro" id="trabajo"><Reveal><p className="eyebrow">CASOS DE ESTUDIO</p><h2><TextReveal text="No son ejercicios." /><br /><em><TextReveal text="Son sistemas en uso." delay={0.1} /></em></h2><p>Cada proyecto parte de un problema concreto y termina con una herramienta que se puede abrir, probar y mantener.</p></Reveal></section>
      <section className="project-section"><StaggerReveal className="project-ledger">{projects.map((project, index) => <StaggerItem key={project.title}><ProjectCard project={project} index={index} /></StaggerItem>)}</StaggerReveal><a className="github-all" href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer">Ver todos los repositorios en GitHub ↗</a></section>
      <section className="services-portfolio" id="servicios"><Reveal><p className="eyebrow">LO QUE PUEDO CONSTRUIR</p><h2><TextReveal text="De la idea" /><br /><em><TextReveal text="a algo usable." delay={0.08} /></em></h2></Reveal><StaggerReveal className="service-grid"><StaggerItem><h3>Webs y reservas</h3><p>Webs rápidas para tours y negocios, con reservas por WhatsApp, contenido editable y SEO desde el inicio.</p></StaggerItem><StaggerItem><h3>Entradas y QR</h3><p>Flujos de pago por SINPE, asientos, comprobantes, QR y validación en entrada.</p></StaggerItem><StaggerItem><h3>Paneles internos</h3><p>Herramientas para administrar usuarios, contenido, ventas, evaluaciones y reportes sin complicaciones.</p></StaggerItem></StaggerReveal></section>
      <section className="trajectory-section" id="experiencia"><Reveal><p className="eyebrow">TRAYECTORIA</p><h2><TextReveal text="Aprender haciendo." /></h2><p className="section-intro">Experiencia temprana, pero real: construir, presentar y mantener herramientas para personas que las necesitan.</p></Reveal><div className="trajectory-grid"><Reveal className="timeline-block"><p className="timeline-label">EXPERIENCIA</p>{experience.map(([year, title, copy]) => <article className="timeline-item" key={title}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</Reveal><Reveal delay={0.08} className="timeline-block"><p className="timeline-label">FORMACIÓN</p>{education.map(([year, title, copy]) => <article className="timeline-item" key={title}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</Reveal></div></section>
      <section className="stack-section"><Reveal><p className="eyebrow">HABILIDADES</p><h2><TextReveal text="Lo que sé hacer." /></h2><p className="skills-intro">Una mezcla de formación técnica, proyectos reales y criterio para convertir una necesidad en una herramienta usable.</p></Reveal><StaggerReveal className="skill-grid">{skillGroups.map(({ title, note, items }, index) => <StaggerItem key={title} className="skill-group"><div className="skill-heading"><span>0{index + 1}</span><h3>{title}</h3></div><p>{note}</p><div>{items.map((item) => <span key={item}>{item}</span>)}</div></StaggerItem>)}</StaggerReveal></section>
      <section className="about-section" id="perfil"><Reveal><p className="eyebrow">PERFIL</p><h2><TextReveal text="Menos fricción." /><br /><em><TextReveal text="Mejores resultados." delay={0.08} /></em></h2></Reveal><Reveal delay={0.08} className="about-copy"><p>Soy Greikol Yanfred Quesada Amador, estudiante de duodécimo año en Desarrollo Web en el Colegio Técnico Profesional de Quepos.</p><p>Me interesa realizar una práctica profesional de tiempo completo para fortalecer mis conocimientos en un entorno real. Aporto responsabilidad, comunicación y experiencia construyendo sistemas que ya se pueden abrir, probar y mantener.</p><div className="profile-facts"><span><b>Disponibilidad</b>Tiempo completo</span><span><b>Idiomas</b>Español · Inglés A2</span><span><b>Fortalezas</b>Equipo · liderazgo · orden</span></div></Reveal></section>
      <section className="contact-camp" id="contacto"><div className="contact-torn"><p className="eyebrow">CONTACTO</p><h2><TextReveal text="¿Tienes algo que" /><br /><em><TextReveal text="ordenar o construir?" delay={0.08} /></em></h2><p>Cuéntame el problema que necesitas resolver. Te respondo de forma directa cómo podemos abordarlo.</p><a className="contact-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=greikolamador@gmail.com" target="_blank" rel="noreferrer">Enviar correo por Gmail ↗</a></div><div className="contact-card contact-directory"><p>OTRAS FORMAS DE CONTACTARME</p><a className="contact-channel" href="https://wa.me/50661272074" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+506 6127-2074 ↗</strong></a><a className="contact-channel" href="https://github.com/greikol4321-hub" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@greikol4321-hub ↗</strong></a><a className="contact-channel" href="https://linkedin.com/in/greikol" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>/in/greikol ↗</strong></a><div className="contact-location"><CodeMark /><span>QUEPOS, COSTA RICA</span></div></div></section>
    </main>
    <footer className="wander-footer"><span>GREIKOL QUESADA · DESARROLLO WEB</span><span>© {new Date().getFullYear()} / HECHO EN QUEPOS</span></footer>
  </div>;
}
