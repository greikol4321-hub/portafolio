"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const projects = [
  {
    title: "Jungle Wildlife Tours",
    description:
      "Panel administrativo para operador turístico de vida silvestre. CRUD de tours con imágenes vía Supabase Storage, moderación de reseñas, gestión de contactos y dashboard tipo admin diario.",
    tags: ["Next.js 16", "Supabase", "Tailwind v4", "TypeScript", "i18n"],
    href: "https://github.com/greikol4321-hub/jungle-wildlife-tours",
    hrefDemo: "https://jungle-wildlife-tours.vercel.app",
    status: "Completado",
  },
];

const techSkills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Supabase", level: 75 },
  { name: "PostgreSQL", level: 65 },
  { name: "Node.js", level: 70 },
  { name: "Git / GitHub", level: 85 },
  { name: "HTML / CSS", level: 95 },
  { name: "Vercel", level: 85 },
  { name: "Figma", level: 50 },
];

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const dir = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerList({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Skills", href: "#skills" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 z-50 w-full border-b border-stone-800/50 bg-stone-950/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-6">
        <span className="text-sm font-semibold tracking-tight text-stone-100">
          Greikol Q.A
        </span>
        <div className="hidden items-center gap-8 text-sm text-stone-400 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center text-stone-400 md:hidden"
          aria-label="Menú"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-stone-800/50 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-stone-400 transition-colors hover:bg-stone-800 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const [rm, setRm] = useState(false);
  useEffect(() => {
    setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 pt-14 md:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.75" fill="#a8a29e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>
      <motion.div
        initial={rm ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.p
          initial={rm ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: rm ? 0 : 0.15 }}
          className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-accent md:text-xs"
        >
          Desarrollador Web Junior
        </motion.p>
        <motion.h1
          initial={rm ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: rm ? 0 : 0.25 }}
          className="mb-6 text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-[1.1] tracking-tight"
        >
          Construyo software que
          <span className="mt-1 block text-accent">
            resuelve problemas reales
          </span>
        </motion.h1>
        <motion.p
          initial={rm ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: rm ? 0 : 0.35 }}
          className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-stone-400 md:text-base"
        >
          Costarricense, autodidacta y enfocado. Convierto necesidades
          institucionales y de negocio en aplicaciones web funcionales con
          tecnologías modernas.
        </motion.p>
        <motion.div
          initial={rm ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: rm ? 0 : 0.45 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.a
            whileHover={rm ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#proyectos"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-stone-950 shadow-lg shadow-accent/15 transition-shadow hover:bg-emerald-400 hover:shadow-xl hover:shadow-accent/25 sm:w-auto"
          >
            Ver proyectos
          </motion.a>
          <motion.a
            whileHover={rm ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-stone-700 px-6 text-sm font-medium text-stone-300 shadow-lg shadow-black/10 transition-shadow hover:border-stone-600 hover:bg-stone-800 hover:shadow-xl hover:shadow-black/20 sm:w-auto"
          >
            Contactar
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="sobre-mi" ref={ref} className="border-t border-stone-800/50 px-5 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
            Sobre mí
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:mb-8 md:text-4xl">
            Desarrollador web de{" "}
            <span className="text-accent">Costa Rica</span>
          </h2>
        </FadeIn>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-4 text-sm leading-relaxed text-stone-400">
              <p>
                Soy un desarrollador web junior apasionado por crear
                aplicaciones que realmente se usan. Mi enfoque está en construir
                software funcional, bien diseñado y accesible, principalmente
                para el sector educativo y turístico en Costa Rica.
              </p>
              <p>
                He trabajado en proyectos para colegios técnicos profesionales
                (CTP), el Ministerio de Educación Pública y emprendimientos
                locales, desarrollando desde sistemas de votación estudiantil
                hasta paneles administrativos completos.
              </p>
              <p>
                Trabajo con Next.js, React, Supabase y Tailwind CSS como stack
                principal, y busco constantemente aprender y mejorar mi
                oficio. Creo en el código limpio, la accesibilidad y las
                interfaces que ponen al usuario primero.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} direction="left">
            <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-5 md:p-6">
              <h3 className="mb-4 text-sm font-semibold text-stone-200">
                Lo que busco
              </h3>
              <ul className="space-y-3 text-sm text-stone-400">
                {[
                  "Oportunidades para crecer como desarrollador profesional",
                  "Proyectos donde pueda aplicar y expandir mi stack técnico",
                  "Colaborar en equipos que valoren la calidad del código",
                  "Seguir construyendo software que tenga impacto real",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ raw }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const [rm, setRm] = useState(false);
  const target = parseInt(raw.replace(/[^0-9]/g, ""), 10);
  const suffix = raw.replace(/[0-9]/g, "");

  useEffect(() => {
    setRm(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (rm) { setCount(target); return; }
    const dur = 1500;
    const start = performance.now();
    let raf;
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      setCount(Math.floor(t * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, rm]);

  return (
    <span ref={ref} className="mb-1 text-2xl font-bold text-accent md:text-4xl">
      {count}{suffix}
    </span>
  );
}

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: "6", label: "Proyectos en GitHub" },
    { value: "4", label: "Instituciones educativas" },
    { value: "3", label: "Tecnologías del stack" },
    { value: "100%", label: "Código desde cero" },
  ];

  return (
    <section ref={ref} className="border-t border-stone-800/50 px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 divide-x divide-stone-800 overflow-hidden rounded-xl border border-stone-800 bg-stone-900 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center bg-stone-950 px-3 py-8 text-center md:px-4 md:py-10"
            >
              <AnimatedCounter raw={stat.value} />
              <span className="text-[10px] text-stone-500 md:text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="proyectos" className="border-t border-stone-800/50 px-5 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
            Trabajos
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mb-10 max-w-lg text-sm leading-relaxed text-stone-400 md:mb-14">
            Una selección de los sistemas web que he desarrollado, desde
            portales educativos hasta plataformas turísticas.
          </p>
        </FadeIn>
        <StaggerList className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </StaggerList>
        <FadeIn delay={0.4}>
          <div className="mt-10 text-center md:mt-12">
            <a
              href="https://github.com/greikol4321-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-lg border border-stone-700 px-6 text-sm font-medium text-stone-300 transition-all hover:border-stone-600 hover:bg-stone-800 active:scale-[0.97]"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-[4deg]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver repositorios en GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-xl border border-stone-800 bg-stone-900/50 p-5 transition-colors hover:border-stone-700 hover:bg-stone-900 md:p-6"
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent/60" />
        <span className="text-[10px] font-medium uppercase tracking-wider text-stone-500">
          {project.status}
        </span>
      </div>
      <h3 className="mb-3 text-base font-semibold text-stone-200 transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-stone-400">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-stone-800 bg-stone-950 px-2 py-0.5 text-[10px] font-medium text-stone-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-3">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 transition-colors hover:text-accent"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Código
        </a>
        {project.hrefDemo && (
          <a
            href={project.hrefDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 transition-colors hover:text-accent"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-stone-800/50 px-5 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
            Stack
          </p>
          <h2 className="mb-10 text-2xl font-bold tracking-tight md:mb-14 md:text-4xl">
            Tecnologías que domino
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techSkills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div
      ref={ref}
      className="rounded-lg border border-stone-800 bg-stone-900/50 p-4"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-stone-200">{skill.name}</span>
        <span className="text-xs text-stone-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-stone-800">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="border-t border-stone-800/50 px-5 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn delay={0.1}>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
            Contacto
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-stone-400">
            Estoy abierto a oportunidades laborales, proyectos freelance y
            colaboraciones. Si creés que puedo aportar a tu equipo, escribime.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:greikol4321@gmail.com"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 text-sm font-medium text-stone-950 transition-all hover:bg-emerald-400 sm:w-auto"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              greikol4321@gmail.com
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+50661161249"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-stone-700 px-8 text-sm font-medium text-stone-300 transition-all hover:border-stone-600 hover:bg-stone-800 sm:w-auto"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +506 6116 1249
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/greikol4321-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-stone-700 px-8 text-sm font-medium text-stone-300 transition-all hover:border-stone-600 hover:bg-stone-800 sm:w-auto"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-800/50 px-5 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-stone-600 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Greikol Q.A &mdash; Costa Rica</p>
        <p>
          Hecho con Next.js, Tailwind CSS y{" "}
          <a
            href="https://motion.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-stone-400"
          >
            Motion
          </a>
        </p>
      </div>
    </footer>
  );
}
