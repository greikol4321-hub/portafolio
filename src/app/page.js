"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

/* ————— datos reales — git pull de greikol4321-hub ————— */
const projects = [
  {
    id: "ctpm",
    kicker: "CTP Matapalo · En uso",
    title: "Entradas CTPM",
    problem:
      "El Gran Baile de Gala vendía entradas a mano. Filas, planilla en papel, mesas que nadie ubicaba. 12 mesas, 72 sillas, y doscientas familias preguntando '¿dónde me siento?'",
    solution:
      "Mapa real del gimnasio. Cada mesa es un círculo crema con 6 sillas que miran al centro — verde libre, rojo ocupada, naranja la que acabas de tocar. El cliente paga por SINPE con referencia tipo CTPM-GREIKOL-0347-M3, sube la captura y recibe recibo, no la entrada. La verdad es que la revisamos a mano y en 48h le llega el QR por WhatsApp. En puerta, una entrada = un escaneo. Y ya está.",
    stack: ["Flask 3.1", "Supabase Postgres", "qrcode + Pillow", "Vercel"],
    links: {
      code: "https://github.com/greikol4321-hub/entradas-ctpm",
      demo: "https://entradas-ctpm.vercel.app",
    },
    highlight: "QR de 5 letras (32M combinaciones), sin 0/O/I para no confundirse",
    accent: true,
  },
  {
    id: "taquilla",
    kicker: "Multi-sede · Producción",
    title: "Taquilla",
    problem:
      "Cada sede vendía por su lado y el portero no sabía si ese QR ya había entrado. Un QR de Quepos no puede validarse en Matapalo, pero antes sí pasaba.",
    solution:
      "Taquilla por lugar. Vendedor genera QR, portero escanea con la cámara — suena chime, marca usada —, admin de sede crea su equipo y ve solo lo suyo. Al fin y al cabo cada lugar ve solo lo suyo, y el admin general ve todo. Sin enredos.",
    stack: ["Flask", "Supabase + RLS", "Storage privado", "Vercel"],
    links: {
      code: "https://github.com/greikol4321-hub/taquilla",
      demo: "https://taquilla-quepos.vercel.app",
    },
    highlight: "private, max-age=8 + sessionStorage · cámara con fallback environment→user",
    accent: true,
  },
  {
    id: "jungle",
    kicker: "Turismo · Completado",
    title: "Jungle Wildlife Tours",
    problem:
      "Una operadora de la selva con fotos de verdad pero web que no vendía. Reservas por WhatsApp perdidas, sin panel para que el dueño tocara nada sin llamar al dev.",
    solution:
      "Panel para una sola persona: el dueño. Crea y edita tours con fotos, modera reseñas y responde contactos sin buscar botones escondidos. Si no hay tours, no te suelta un 'No data found' frío — te dice con una frase y un botón para crear el primero. Eso sí, todo respira, las tablas no parecen Excel.",
    stack: ["Next.js 16", "Tailwind v4", "Supabase", "TypeScript", "i18n"],
    links: {
      code: "https://github.com/greikol4321-hub/jungle-wildlife-tours",
      demo: "https://jungle-wildlife-tours.vercel.app",
    },
    highlight: "Un solo acento esmeralda: si es verde, se puede tocar. Punto.",
    accent: false,
  },
  {
    id: "evaluaciones",
    kicker: "MEP · 2 colegios",
    title: "Evaluación de Ferias — CTPQ",
    problem:
      "Ferias institucionales del MEP evaluadas en papel. Jueces perdiendo hojas, resultados que nadie consolidaba a tiempo.",
    solution:
      "Vanilla HTML/CSS/JS sin build, 7 páginas — login, usuarios, proyectos, asignaciones, resultados, observaciones, juez — con Supabase y RLS, exporta PDF con jsPDF. Es gemelo de Matapalo: mismo código, distinta llave Supabase y logo. Mira, si corrijo un bug aquí, lo aplico allá y ya está.",
    stack: ["HTML/CSS/JS", "Supabase + RLS", "jsPDF", "Vercel"],
    links: {
      code: "https://github.com/greikol4321-hub/evaluaciones-CTPQ",
      demo: "https://evaluaciones-ctpq.vercel.app",
    },
    highlight: "Sin framework, a propósito — para que cualquier profe lo abra y funcione",
    accent: false,
  },
];

const stackGroups = [
  {
    label: "Con lo que shippeo",
    items: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "JavaScript"],
  },
  {
    label: "Datos y deploy",
    items: ["Supabase", "PostgreSQL + RLS", "Vercel", "Flask 3.1", "psycopg"],
  },
  {
    label: "Lo que cuido",
    items: ["Accesibilidad AA", "QR sin reventa", "RLS por sede", "Foco visible 2px", "prefers-reduced-motion"],
  },
];

/* ————— helpers ————— */
function useReducedMotion() {
  const [rm, setRm] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setRm(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return rm;
}

function Fade({ children, delay = 0, y = 16, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const rm = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={rm ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: rm ? 0 : delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ————— page ————— */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Work />
        <Approach />
        <About />
        <StackSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Trabajo", href: "#trabajo" },
    { label: "Cómo trabajo", href: "#como-trabajo" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-5 md:px-6">
        <a href="#" className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 7l5 5-5 5M12 19h7" />
            </svg>
          </span>
          Greikol Q.A
          <span className="hidden text-xs font-normal text-muted md:inline">· Quepos, CR</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 inline-flex h-8 items-center rounded-full bg-accent px-4 text-sm font-medium text-[#07110d] transition-colors hover:bg-[#3dd68c]"
          >
            Hablemos
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-muted md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-surface md:hidden"
          >
            <div className="px-5 py-4">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-background hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="mailto:greikolamador@gmail.com"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-[#07110d]"
                >
                  greikolamador@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const rm = useReducedMotion();
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-[84px] md:px-6 md:pb-16 md:pt-[104px]">
      {/* topo + glow */}
      <div className="topo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-accent opacity-[0.07] blur-[90px]" />

      <div className="relative mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10">
        {/* left: thesis */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            Disponible para equipo o freelance — Quepos, Costa Rica
          </p>

          <h1 className="font-display text-[clamp(2rem,6vw,3.75rem)] font-[800] leading-[0.95] tracking-[-0.03em] text-foreground">
            Sistemas chicos
            <span className="block font-[400] italic tracking-[-0.02em] text-accent">que sí se usan.</span>
          </h1>

          <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.65] text-muted md:text-[16px]">
            Soy Greikol, de Quepos. La verdad es que no hago dashboards con neón ni landing con ocho secciones iguales. Hago lo justo para que
            200 padres hagan fila sin perderse — con un QR que entra una sola vez y un mapa que sí se entiende. Si necesita manual, está mal hecho.
            Y ya está.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#trabajo"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#07110d] shadow-[0_8px_24px_var(--accent-soft)] transition-all hover:brightness-[1.05] active:scale-[0.98]"
            >
              Ver sistemas en uso
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/50661161249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground hover:bg-surface-hover hover:border-border-strong"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M2.25 12a9.75 9.75 0 0013.5 9l3 1-1-3a9.75 9.75 0 00-15.5-7z" />
                <path d="M9 9c.2 1.1 1.1 2 2.2 2.2l1-.2c.4-.1.7-.4.8-.8l.2-1c.1-.5-.2-1-.7-1.1l-1-.2a1 1 0 00-1.1.7L9 9z" />
              </svg>
              WhatsApp directo
            </a>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-faint">
            Código abierto. Push a <span className="font-mono text-muted">master</span> despliega en ~12s. Sin humo.
          </p>
        </motion.div>

        {/* right: bento proof — 2 tickets reales */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: rm ? 0 : 0.12, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid gap-3"
        >
          {/* ticket CTPM */}
          <div className="ticket-perf relative overflow-hidden rounded-[16px] border border-border bg-surface p-4 pl-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">CTP Matapalo · Baile de Gala</p>
                <p className="font-display mt-1 text-lg font-semibold leading-none">Mesa M3 · 6 sillas</p>
                <p className="mt-1 text-xs text-muted">Ref: CTPM-GREIKOL-0347-M3 · ₡10.000</p>
              </div>
              <div className="grid h-[84px] w-[84px] place-items-center rounded-[12px] border border-border bg-background p-2">
                <div className="grid h-full w-full place-items-center rounded-md bg-[#EDE9E3] font-mono text-[10px] font-bold tracking-widest text-[#0b1410]">
                  QJPFG
                </div>
                <span className="mt-1 font-mono text-[9px] tracking-widest text-muted">QR 5 letras</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-dashed border-border pt-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Válida
              </span>
              <span className="font-mono text-[11px]">360×520 vertical</span>
              <span className="ml-auto hidden text-faint sm:inline">No se revende · 1 escaneo</span>
            </div>
          </div>

          {/* mini stats bento */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[14px] border border-border bg-surface p-4">
              <p className="font-display text-2xl font-bold leading-none text-foreground">3</p>
              <p className="mt-1 text-xs leading-tight text-muted">sistemas en producción</p>
            </div>
            <div className="rounded-[14px] border border-border bg-surface p-4">
              <p className="font-display text-2xl font-bold leading-none text-foreground">12</p>
              <p className="mt-1 text-xs leading-tight text-muted">mesas mapeadas 1:1 del gimnasio</p>
            </div>
            <div className="rounded-[14px] border border-accent/25 bg-accent/10 p-4">
              <p className="font-display text-2xl font-bold leading-none text-accent">2</p>
              <p className="mt-1 text-xs leading-tight text-foreground">colegios usando el mismo core</p>
            </div>
          </div>

          <p className="px-1 text-xs leading-relaxed text-faint">
            Mira, son capturas no renders. Abajo están los repos con el código tal cual quedó para el cole.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-border bg-surface/60 px-5 py-3 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent" /> Push a master → Vercel 12s
        </span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>Supabase RLS por sede</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>12 mesas · 6 sillas cada una</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>SINPE Móvil con referencia con nombre</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>QR de 5 letras, 33M combinaciones</span>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="trabajo" className="px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Trabajo — no demos, producción</p>
          <h2 className="font-display mt-2 max-w-[18ch] text-[clamp(1.6rem,4vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Si no sirve con 200 padres en fila, no sirve.
          </h2>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted">
            Cada proyecto tiene problema real, solución a medida y links para ver el código sin maquillaje. La verdad es que prefiero que lo
            abras y digas “ahora sí lo encuentro” a que parezca bonito y no se use.
          </p>
        </Fade>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={p.accent} index={i} />
          ))}
        </div>

        <Fade delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/greikol4321-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground hover:bg-surface-hover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Todos los repos
          </a>
          <span className="text-xs text-faint">13 repos públicos · mira el commit history, ahí está cómo trabajo de verdad</span>
        </Fade>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const rm = useReducedMotion();
  const col = featured ? "md:col-span-3" : "md:col-span-3";
  // make first two larger visually via min-height, but keep grid simple (2+2)
  return (
    <motion.div
      ref={ref}
      initial={rm ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: rm ? 0 : index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-[16px] border bg-surface ${featured ? "border-accent/20 shadow-[0_10px_40px_rgba(78,203,113,0.08)]" : "border-border"} ${col}`}
    >
      {/* perforación sutil izquierda solo en featured */}
      {featured && <span className="ticket-perf pointer-events-none absolute inset-y-0 left-0 w-4" />}

      <div className={`flex flex-col gap-4 p-5 md:p-6 ${featured ? "pl-7 md:pl-8" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${featured ? "border-accent/20 bg-accent/10 text-accent" : "border-border bg-background text-muted"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${featured ? "bg-accent" : "bg-muted"}`} />
            {project.kicker}
          </span>
          <span className="hidden font-mono text-[11px] text-faint sm:inline">{project.highlight}</span>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="mt-3 space-y-2.5 text-sm leading-relaxed">
            <p className="text-muted">
              <span className="font-medium text-foreground/90">Problema:</span> {project.problem}
            </p>
            <p className="text-muted">
              <span className="font-medium text-foreground/90">Lo que hice:</span> {project.solution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-xs font-medium text-muted hover:text-foreground hover:border-border-strong"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </a>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-accent px-3.5 text-xs font-medium text-[#07110d] hover:brightness-[1.06]"
          >
            Ver sitio
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7m10 0v10" />
            </svg>
          </a>
          <span className="ml-auto hidden text-xs text-faint md:inline">→ sin humo, código tal cual</span>
        </div>
      </div>
    </motion.div>
  );
}

function Approach() {
  const steps = [
    {
      n: "01",
      title: "Escucho y dibujo el gimnasio",
      text: "Antes de codear, pregunto cómo cobran hoy. Si me dicen 'con cuaderno', hago el mapa del gimnasio tal cual, no un grid genérico. Eso sí, si no se entiende a la primera, lo reescribo.",
    },
    {
      n: "02",
      title: "Lo justo, sin manual",
      text: "Un rol ve solo lo suyo — vendedor no ve admin, portero no ve mesas de otra sede. Si necesita tutorial, está mal hecho. La verdad es que me importa que la señora de admisión lo use sin llamarme.",
    },
    {
      n: "03",
      title: "Shippeo y me quedo cerca",
      text: "Push a master y Vercel despliega. Me quedo viendo los primeros QR en puerta, corrijo sillas que miraban al revés — nos pasó — y lo dejo respirando.",
    },
  ];
  return (
    <section id="como-trabajo" className="border-y border-border bg-surface/40 px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Cómo trabajo</p>
          <h2 className="font-display mt-2 max-w-[16ch] text-[clamp(1.5rem,4vw,2.2rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Tres pasos y ya está.
          </h2>
        </Fade>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Fade key={s.n} delay={i * 0.08} className="rounded-[14px] border border-border bg-background p-5 md:p-6">
              <p className="font-mono text-xs tracking-widest text-faint">{s.n}</p>
              <h3 className="mt-2 font-display text-base font-semibold leading-tight text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Fade>
          ))}
        </div>
        <p className="mt-6 max-w-[70ch] text-sm leading-relaxed text-faint">
          No hago apps con 50 features por si acaso. Al fin y al cabo, si no aguanta una tarde con 12 mesas moviéndose y el SINPE vibrando, no sirve.
          Mira, prefiero entregar 3 flujos que sí se usan que 20 que se ven bien en demo.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[1.05fr_0.85fr] md:gap-10">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Sobre mí</p>
          <h2 className="font-display mt-2 text-[clamp(1.5rem,4vw,2.3rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            De Quepos. Autodidacta. <span className="font-normal italic text-muted">Me gusta cuando el admin me dice “ahora sí”.</span>
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-[1.7] text-muted">
            <p>
              Soy Greikol. Hago sistemas chicos que se usan de verdad — no templates con lorem ipsum. Empecé ayudando a coles técnicos de
              Quepos y Matapalo, y sin ir más lejos terminé mapeando un gimnasio entero silla por silla porque 12 botones grises no le servían
              a nadie.
            </p>
            <p>
              La verdad es que me importa más que la señora de la entrada escanee sin trabarse a que el dashboard tenga neón. He desarrollado
              paneles para tours en la selva, taquillas multi-sede y evaluaciones de ferias del MEP — cada uno con su base Supabase y su deploy
              en Vercel, más o menos como los dejé para el cole. Si querés ver cómo trabajo, mirá el código, está todo ahí.
            </p>
            <p className="text-foreground/90">
              No hago apps que piden 10 permisos para mandar un aviso. Si necesita manual, está mal hecho — y eso sí lo repito bastante.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-muted">Quepos, Costa Rica · GMT-6</span>
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-muted">Español · Inglés técnico</span>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 font-medium text-accent">
              Buscando equipo · freelance también
            </span>
          </div>
        </Fade>

        <Fade delay={0.1} className="rounded-[16px] border border-border bg-surface p-5 md:p-6">
          <h3 className="font-display text-base font-semibold">Lo que busco</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Crecer en un equipo real donde pueda tocar producción, no solo Figma. Eso sí, me va lo de hacer que las cosas funcionen sin vueltas.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Proyectos donde el código llega a gente de verdad — no demos internas",
              "Gente que valore código legible y accesible más que animaciones que marean",
              "Stack moderno pero sin humo: Next.js, Supabase, Flask si hace falta",
              "Seguir construyendo software que quita trabajo, no que añade pasos",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-[12px] border border-dashed border-border bg-background p-4">
            <p className="font-mono text-xs uppercase tracking-wide text-faint">Cómo me ves trabajando</p>
            <p className="mt-1 text-sm italic leading-relaxed text-foreground/80">
              “Antes no sabía cuántas reservas tenía hasta abrir Excel. Ahora lo veo y ya está.” — dueño, Jungle Wildlife Tours
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className="border-y border-border bg-surface/40 px-5 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Stack — sin porcentajes inventados</p>
          <h2 className="font-display mt-2 text-[clamp(1.4rem,4vw,2rem)] font-bold tracking-[-0.02em]">Con esto shippeo hoy.</h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
            No pongo barras al 90% — mira, eso no dice nada. Agrupo por lo que toco cada semana y lo que cuido siempre. Si algo no lo domino
            al 100%, lo digo y ya está.
          </p>
        </Fade>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stackGroups.map((g, i) => (
            <Fade key={g.label} delay={i * 0.07} className="rounded-[14px] border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-faint">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </Fade>
          ))}
        </div>

        <p className="mt-6 text-xs text-faint">
          Tipografía: Fraunces para títulos, Geist para UI, JetBrains Mono para lo técnico. Radius siempre 12px, nada de mezclar píldoras y cuadrados.
          Movimiento solo de 150ms para feedback.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative px-5 py-14 md:px-6 md:py-20">
      <div className="pointer-events-none absolute inset-0 topo opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[840px] text-center">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contacto</p>
          <h2 className="font-display mx-auto mt-2 max-w-[16ch] text-[clamp(1.6rem,4.5vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            ¿Tenés un cole, un tour o una taquilla que ordenar?
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
            Estoy abierto a equipo o freelance. Si creés que puedo aportar, escribime — respondo yo, sin bot. Al fin y al cabo, si no te contesto
            en el día es que estoy en el gimnasio viendo sillas, pero vuelvo.
          </p>
        </Fade>

        <Fade delay={0.08} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:greikolamador@gmail.com"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#07110d] hover:brightness-[1.05] active:scale-[0.98] sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            greikolamador@gmail.com
          </a>
          <a
            href="https://wa.me/50661161249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground hover:bg-surface-hover sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +506 6116 1249
          </a>
          <a
            href="https://github.com/greikol4321-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground hover:bg-surface-hover sm:w-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </Fade>

        <p className="mx-auto mt-4 max-w-[52ch] text-xs leading-relaxed text-faint">
          Respondo más rápido por WhatsApp o mail que por LinkedIn — la verdad, casi no lo abro. Si me escribís con “vi tu mapa de 12 mesas”,
          ya sé por dónde vamos.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-6">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 text-xs text-faint md:flex-row">
        <p>© {new Date().getFullYear()} Greikol Q.A — Quepos, Costa Rica · Hecho sin plantilla, con Next.js 16 y Tailwind v4</p>
        <p className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Tip: mirá el código, no el mockup
          <a href="https://github.com/greikol4321-hub/portafolio" target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-muted">
            repo de este portafolio
          </a>
        </p>
      </div>
    </footer>
  );
}
