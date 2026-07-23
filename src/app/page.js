const projects = [
  {
    title: "Jungle Wildlife Tours",
    description:
      "Panel administrativo para un operador turístico de vida silvestre en Costa Rica. CRUD de tours con imágenes, moderación de reseñas y gestión de contactos.",
    tags: ["Next.js 16", "Supabase", "Tailwind v4", "TypeScript"],
    href: "https://github.com/greikol4321-hub/jungle-wildlife-tours",
    status: "En desarrollo",
    color: "emerald",
  },
  {
    title: "CTP de Matapalo",
    description:
      "Sitio web institucional del Colegio Técnico Profesional de Matapalo. Boletas disciplinarias, galería con Supabase, comunicados y autenticación por roles.",
    tags: ["HTML/CSS/JS", "Supabase", "EmailJS", "Vercel"],
    href: "https://github.com/melissafrutosumana-ctrl/Cole",
    status: "Completado",
    color: "blue",
  },
  {
    title: "Evaluación de Ferias MEP",
    description:
      "Sistema de evaluación para jueces de ferias educativas del Ministerio de Educación. Login por roles, gestión de proyectos y puntajes por tipo de feria.",
    tags: ["JavaScript", "ES Modules", "Vercel", "CSS3"],
    href: "https://github.com/melissafrutosumana-ctrl/EvaluacionFerias",
    status: "En desarrollo",
    color: "amber",
  },
  {
    title: "CTP Quepos Notificaciones",
    description:
      "Sistema de notificaciones institucionales con gestión de ausencias vía WhatsApp, comunicados por email y galería de imágenes con Supabase.",
    tags: ["Next.js 15", "Supabase", "Tailwind v4", "TypeScript"],
    href: "https://github.com/greikol4321-hub/Notificaciones-CTP-De-Quepos",
    status: "En desarrollo",
    color: "violet",
  },
  {
    title: "Horizonte Educativo Integral",
    description:
      "Sitio profesional para consultoría educativa con catálogo dinámico de cursos, animaciones en Canvas y enlace directo a WhatsApp Business.",
    tags: ["HTML/CSS/JS", "Canvas API", "Responsive", "Vercel"],
    href: "https://github.com/greikol4321-hub/Horizonte-Educativo-Integral",
    status: "En espera",
    color: "cyan",
  },
  {
    title: "Votaciones Escuela Corea",
    description:
      "Sistema electoral estudiantil con votación por partidos, bloqueo por contraseña, envío a Google Sheets y modo administrador.",
    tags: ["JavaScript", "Google Apps Script", "HTML/CSS"],
    href: "https://github.com/greikol4321-hub/Votaciones_Corea",
    status: "Completado",
    color: "rose",
  },
];

const skills = [
  { name: "Next.js", level: "Avanzado" },
  { name: "React", level: "Avanzado" },
  { name: "JavaScript", level: "Avanzado" },
  { name: "TypeScript", level: "Intermedio" },
  { name: "Tailwind CSS", level: "Avanzado" },
  { name: "Supabase", level: "Intermedio" },
  { name: "PostgreSQL", level: "Intermedio" },
  { name: "Node.js", level: "Intermedio" },
  { name: "Git / GitHub", level: "Avanzado" },
  { name: "HTML / CSS", level: "Avanzado" },
  { name: "Vercel", level: "Avanzado" },
  { name: "Figma", level: "Básico" },
];

const colorMap = {
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800",
};

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900"
    >
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${colorMap[project.color]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {project.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-[var(--background)]/80 backdrop-blur-sm dark:border-stone-800/60">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight">Greikol</span>
        <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
          <a href="#proyectos" className="hover:text-emerald-600 transition-colors">Proyectos</a>
          <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
          <a href="#contacto" className="hover:text-emerald-600 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 pt-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Desarrollador Web Junior
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-100 md:text-5xl lg:text-6xl">
          Construyo soluciones web
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            para la educación y el turismo
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
          Soy un desarrollador costarricense apasionado por crear aplicaciones
          web funcionales y bien diseñadas. Especializado en Next.js, React y
          tecnologías modernas para resolver problemas reales.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex h-11 items-center rounded-lg bg-stone-900 px-6 text-sm font-medium text-white transition-all hover:bg-stone-800 active:scale-[0.97] dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex h-11 items-center rounded-lg border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-all hover:bg-stone-100 active:scale-[0.97] dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-stone-200 px-6 py-24 dark:border-stone-800"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Stack
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Tecnologías que uso
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"
            >
              <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {skill.name}
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-500">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-stone-200 px-6 py-24 dark:border-stone-800"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Trabajos
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Proyectos destacados
        </h2>
        <p className="mb-12 max-w-lg text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Una selección de los sistemas web que he desarrollado, desde portales
          educativos hasta plataformas turísticas.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/greikol4321-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-all hover:bg-stone-100 active:scale-[0.97] dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-stone-200 px-6 py-24 dark:border-stone-800"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Contacto
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Trabajemos juntos
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          ¿Tienes un proyecto en mente o necesitas un desarrollador para tu
          equipo? Estoy abierto a nuevas oportunidades.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:greikol4321@gmail.com"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 text-sm font-medium text-white transition-all hover:bg-stone-800 active:scale-[0.97] dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 sm:w-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            greikol4321@gmail.com
          </a>
          <a
            href="https://github.com/greikol4321-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-all hover:bg-stone-100 active:scale-[0.97] dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 sm:w-auto"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 py-8 dark:border-stone-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-stone-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Greikol. Hecho en Costa Rica.</p>
        <p>Diseñado y construido con Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
