"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

/* ————— lo que ofrezco — forward, no retrospective ————— */
const services = [
  {
    title: "Webs para tours y negocios",
    desc: "Te armo una página que carga rápido en el cel del cliente — que es donde importa — con reservas por WhatsApp, SEO listo y fotos optimizadas. De landing que convierte a web con catálogo. Sin plantillas que se ven todas iguales.",
    bullets: ["Next.js 16 + Tailwind", "WhatsApp / reservas integradas", "SEO y Core Web Vitals desde el día 1"],
    icon: "◐",
  },
  {
    title: "Taquilla y entradas con QR + SINPE",
    desc: "Si vendés entradas para un baile, feria o tour, te dejo el flujo completo: el cliente elige lugar, paga por SINPE con referencia con su nombre, sube comprobante y recibe QR por WhatsApp. En puerta, una entrada = un escaneo. Y ya está.",
    bullets: ["Mapa de mesas silla por silla si hace falta", "QR de 5 letras (33M combos, sin 0/O/I)", "Validación que no se revende"],
    icon: "◧",
  },
  {
    title: "Paneles admin que no piden manual",
    desc: "Te dejo un panel donde el dueño crea tours, ve reservas y responde mensajes sin llamar al dev. Cada rol ve solo lo suyo — vendedor no ve admin — y si no hay datos, te lo dice con una frase y un botón, no con un 'No data found' frío.",
    bullets: ["Supabase + RLS por sede/rol", "Tablas que no parecen Excel", "Un solo acento verde: si es verde, se toca"],
    icon: "▤",
  },
  {
    title: "Sistemas livianos para coles y ferias",
    desc: "Para evaluación de ferias, votaciones o controles internos. Si hace falta que cualquier profe lo abra sin build, lo hago en vanilla JS. Gemelo por colegio con la misma base, distinta key y logo. Mira, eso lo tengo probado con el MEP.",
    bullets: ["Vanilla o Next según el caso", "Exporta PDF, filtra por estado", "Sin dependencias que pesan"],
    icon: "▭",
  },
  {
    title: "Optimización y SEO técnico",
    desc: "Si tu web ya existe pero carga lento o Google no la encuentra, la reviso: imágenes, Core Web Vitals, metadata, estructura. Te digo qué tocar y lo toco. Sin humo.",
    bullets: ["Lighthouse 90+ como estándar", "Imágenes y fuentes optimizadas", "Metadata y sitemap que sí sirven"],
    icon: "◎",
  },
  {
    title: "Soporte, hosting y evolutivos",
    desc: "Te dejo dominio, hosting en Vercel y soporte para cambios chicos. Push a master despliega en ~12s. Me quedo cerca las primeras semanas por si hay que girar una silla que miraba al revés — nos pasó.",
    bullets: ["Deploy automático", "Storage privado + backups", "Cambios por WhatsApp, sin ticket eterno"],
    icon: "↻",
  },
];

/* prueba social — mencionado pero no protagonista */
const recentWork = [
  {
    title: "Entradas CTPM",
    oneLiner: "Mapa 1:1 del gimnasio (12 mesas, 72 sillas) + flujo SINPE → QR 48h.",
    stack: ["Flask", "Supabase"],
    links: { code: "https://github.com/greikol4321-hub/entradas-ctpm", demo: "https://entradas-ctpm.vercel.app" },
    note: "En uso — CTP Matapalo",
  },
  {
    title: "Taquilla",
    oneLiner: "Taquilla multi-sede: vendedor genera, portero valida con cámara, RLS por sede.",
    stack: ["Flask", "Supabase"],
    links: { code: "https://github.com/greikol4321-hub/taquilla", demo: "https://taquilla-quepos.vercel.app" },
    note: "Producción",
  },
  {
    title: "Jungle Wildlife Tours",
    oneLiner: "Web + panel para operadora de selva: CRUD tours, reseñas, i18n.",
    stack: ["Next.js", "Tailwind"],
    links: { code: "https://github.com/greikol4321-hub/jungle-wildlife-tours", demo: "https://jungle-wildlife-tours.vercel.app" },
    note: "Completado",
  },
  {
    title: "Evaluación Ferias CTPQ",
    oneLiner: "7 páginas vanilla, RLS, PDF con jsPDF — gemelo Matapalo.",
    stack: ["Vanilla JS", "Supabase"],
    links: { code: "https://github.com/greikol4321-hub/evaluaciones-CTPQ", demo: "https://evaluaciones-ctpq.vercel.app" },
    note: "MEP · 2 colegios",
  },
];

const stackGroups = [
  {
    label: "Con lo que te lo armo",
    items: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "JavaScript"],
  },
  {
    label: "Datos y deploy",
    items: ["Supabase + RLS", "PostgreSQL", "Vercel", "Flask 3.1", "psycopg"],
  },
  {
    label: "Lo que cuido siempre",
    items: ["Accesibilidad AA", "Foco 2px esmeralda", "RLS por rol", "QR sin reventa", "150ms motion"],
  },
];

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Approach />
        <StackSection />
        <RecentWork />
        <About />
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
    { label: "Qué hago", href: "#que-hago" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Trabajo", href: "#trabajo" },
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
    <section className="relative overflow-hidden px-5 pb-10 pt-[84px] md:px-6 md:pb-14 md:pt-[104px]">
      <div className="topo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-accent opacity-[0.07] blur-[90px]" />

      <div className="relative mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10">
        <motion.div
          initial={rm ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            Disponible para freelance o equipo — Quepos, Costa Rica
          </p>

          <h1 className="font-display text-[clamp(2rem,6vw,3.75rem)] font-[800] leading-[0.95] tracking-[-0.03em] text-foreground">
            Te hago una web
            <span className="block font-[400] italic tracking-[-0.02em] text-accent">que la gente sí usa.</span>
          </h1>

          <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.65] text-muted md:text-[16px]">
            No es “he hecho tal”. Es lo que te puedo armar: webs rápidas para tours y negocios, taquillas con QR + SINPE que no se revenden,
            paneles donde el admin no tiene que adivinar. La verdad es que si necesita manual, está mal hecha. Corto y sin humo.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#que-hago"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-[#07110d] shadow-[0_8px_24px_var(--accent-soft)] transition-all hover:brightness-[1.05] active:scale-[0.98]"
            >
              Ver qué te puedo armar
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
              WhatsApp directo
            </a>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-faint">
            De Quepos para Costa Rica. Respondo yo, sin bot. Push a <span className="font-mono text-muted">master</span> despliega en ~12s.
          </p>
        </motion.div>

        <motion.div
          initial={rm ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: rm ? 0 : 0.12, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid gap-3"
        >
          <div className="ticket-perf relative overflow-hidden rounded-[16px] border border-border bg-surface p-4 pl-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Ejemplo — no es el foco</p>
                <p className="font-display mt-1 text-lg font-semibold leading-none">Mesa M3 · 6 sillas</p>
                <p className="mt-1 text-xs text-muted">QR 5 letras · 1 escaneo · SINPE con referencia</p>
              </div>
              <div className="grid h-[84px] w-[84px] place-items-center rounded-[12px] border border-border bg-background p-2">
                <div className="grid h-full w-full place-items-center rounded-md bg-[#EDE9E3] font-mono text-[10px] font-bold tracking-widest text-[#0b1410]">
                  QJPFG
                </div>
                <span className="mt-1 font-mono text-[9px] tracking-widest text-muted">QR</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-dashed border-border pt-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Válida
              </span>
              <span className="font-mono text-[11px]">Flask + Supabase + Vercel</span>
              <span className="ml-auto hidden text-faint sm:inline">Mencionado, no protagonista</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-[14px] border border-border bg-surface p-4">
              <p className="font-display text-lg font-bold leading-none text-foreground">Webs</p>
              <p className="mt-1 text-xs leading-tight text-muted">que cargan en cel</p>
            </div>
            <div className="rounded-[14px] border border-border bg-surface p-4">
              <p className="font-display text-lg font-bold leading-none text-foreground">QR + SINPE</p>
              <p className="mt-1 text-xs leading-tight text-muted">sin reventa</p>
            </div>
            <div className="rounded-[14px] border border-accent/25 bg-accent/10 p-4">
              <p className="font-display text-lg font-bold leading-none text-accent">Panel</p>
              <p className="mt-1 text-xs leading-tight text-foreground">sin manual</p>
            </div>
          </div>
          <p className="px-1 text-xs leading-relaxed text-faint">Mira, esto es solo una muestra de cómo queda. Abajo está lo que te ofrezco.</p>
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
          <span className="h-1 w-1 rounded-full bg-accent" /> Next.js · Supabase · Flask · Vercel
        </span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>RLS por rol/sede</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>QR 1 escaneo</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>SINPE con referencia con nombre</span>
        <span className="hidden h-3 w-px bg-border md:block" />
        <span>Deploy 12s</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="que-hago" className="px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Qué te puedo armar — no es “de todo un poco”</p>
          <h2 className="font-display mt-2 max-w-[20ch] text-[clamp(1.6rem,4vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Seis cosas que sí hago bien.
          </h2>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted">
            La verdad es que no te voy a decir “he hecho tal proyecto” como si fuera medalla. Te digo qué te resuelvo, con qué y en cuánto
            tiempo, y ya está. Si querés ver código, abajo hay pruebas, pero no es el centro.
          </p>
        </Fade>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <Fade delay={0.2} className="mt-6 rounded-[14px] border border-dashed border-border bg-surface/60 p-4 md:p-5">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-foreground">¿No está lo tuyo?</span> Al fin y al cabo, si es una web que tiene que vender,
            reservar o controlar entradas, aunque claro, cada negocio tiene su vuelta, lo vemos. Si no soy el indicado, te digo y te paso a alguien.
            Sin vueltas.
          </p>
        </Fade>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const rm = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={rm ? false : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: rm ? 0 : index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      className="group flex flex-col rounded-[16px] border border-border bg-surface p-5 transition-colors hover:border-accent/20 hover:bg-surface-hover md:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background font-mono text-sm text-accent">
          {service.icon}
        </span>
        <span className="rounded-full bg-background px-2.5 py-1 font-mono text-[11px] text-faint">Te entrego</span>
      </div>
      <h3 className="font-display mt-4 text-base font-semibold leading-tight text-foreground group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
      <ul className="mt-4 space-y-1.5">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-xs leading-relaxed text-muted">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Approach() {
  const steps = [
    {
      n: "01",
      title: "Me contás cómo cobrás hoy",
      text: "Sin form largo. Me decís si cobrás con cuaderno, SINPE o link, y dibujo el flujo tal cual. Si no se entiende a la primera, lo reescribo, no le añado otro párrafo.",
    },
    {
      n: "02",
      title: "Te muestro clickeable antes de codear",
      text: "Wire en Figma o demo en staging. Vos tocás, yo ajusto. Eso sí, te digo qué no hacer — 50 features por si acaso no.",
    },
    {
      n: "03",
      title: "Shippeo y me quedo cerca",
      text: "Deploy a Vercel y te paso acceso. Las primeras dos semanas estoy por WhatsApp por si hay que girar una silla o cambiar un texto.",
    },
  ];
  return (
    <section className="border-y border-border bg-surface/40 px-5 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Cómo trabajo con vos</p>
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
          Al fin y al cabo, prefiero entregarte 3 flujos que sí usa tu equipo a 20 pantallas que se ven bien en demo. Vamos.
        </p>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="habilidades" className="px-5 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Habilidades — con qué te lo armo</p>
          <h2 className="font-display mt-2 text-[clamp(1.4rem,4vw,2rem)] font-bold tracking-[-0.02em]">Stack sin porcentajes inventados.</h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
            No te pongo barras al 90% — eso no dice nada. Te digo con qué shippeo cada semana y qué cuido siempre. Si algo no lo domino al 100%,
            te aviso.
          </p>
        </Fade>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stackGroups.map((g, i) => (
            <Fade key={g.label} delay={i * 0.07} className="rounded-[14px] border border-border bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-faint">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </Fade>
          ))}
        </div>
        <p className="mt-6 text-xs text-faint">
          Tipografía Fraunces para títulos, Geist para UI, Mono para tickets. Radius 12px siempre. Motion 150ms solo para feedback.
        </p>
      </div>
    </section>
  );
}

function RecentWork() {
  return (
    <section id="trabajo" className="border-y border-border bg-surface/40 px-5 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1120px]">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Trabajo reciente — mencionado, no protagonista</p>
          <h2 className="font-display mt-2 text-[clamp(1.4rem,3.5vw,1.9rem)] font-bold tracking-[-0.02em]">Por si querés ver cómo queda.</h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
            La verdad es que no es el centro de la página, pero te dejo 4 cosas que ya están en uso — por si querés abrir el código y ver cómo trabajo,
            más o menos tal cual quedó para el cole.
          </p>
        </Fade>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {recentWork.map((w, i) => (
            <RecentCard key={w.title} work={w} index={i} />
          ))}
        </div>

        <Fade delay={0.15} className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/greikol4321-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs font-medium text-foreground hover:bg-surface"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver todos los repos
          </a>
          <span className="text-xs text-faint">13 repos · código tal cual, sin maquillaje</span>
        </Fade>
      </div>
    </section>
  );
}

function RecentCard({ work, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const rm = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={rm ? false : { opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: rm ? 0 : index * 0.05 }}
      className="flex flex-col rounded-[14px] border border-border bg-background p-4 transition-colors hover:border-accent/20"
    >
      <span className="font-mono text-[11px] uppercase tracking-wide text-faint">{work.note}</span>
      <h3 className="font-display mt-1 text-sm font-semibold text-foreground">{work.title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{work.oneLiner}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {work.stack.map((s) => (
          <span key={s} className="rounded-full bg-surface px-2 py-1 font-mono text-[11px] text-muted">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-2 border-t border-border pt-3">
        <a
          href={work.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-muted hover:text-foreground"
        >
          Código →
        </a>
        <a
          href={work.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent hover:brightness-110"
        >
          Demo →
        </a>
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section className="px-5 py-14 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Quién soy</p>
          <h2 className="font-display mt-2 text-[clamp(1.4rem,4vw,2rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            De Quepos. Autodidacta. <span className="font-normal italic text-muted">Me importa que digas “ahora sí”.</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-[1.7] text-muted">
            <p>
              Soy Greikol. La verdad es que hago sistemas chicos que quitan trabajo, no que añaden pasos. Empecé con coles técnicos de Quepos
              y Matapalo y sin ir más lejos terminé dibujando un gimnasio silla por silla porque 12 botones grises no le servían a nadie.
            </p>
            <p>
              Si te sirve, te armo lo tuyo con el mismo cuidado: rápido en el cel, sin manual, y con el código abierto para que lo veas. Mira,
              prefiero que abras el repo y digas “se entiende” a que parezca bonito y no se use.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-muted">Quepos · GMT-6</span>
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-muted">ES · EN técnico</span>
          </div>
        </Fade>

        <Fade delay={0.08} className="rounded-[16px] border border-border bg-surface p-5 md:p-6">
          <h3 className="font-display text-base font-semibold">Qué gano si trabajamos juntos</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">No es “he hecho”, es lo que te llevás vos.</p>
          <ul className="mt-5 space-y-3">
            {[
              "Una web o sistema que tu equipo usa sin llamarme cada vez",
              "Código legible y deploy en Vercel que podés tocar sin miedo",
              "Accesibilidad y performance cuidadas, no como extra al final",
              "Comunicación por WhatsApp, demo clickeable antes de codear",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-[12px] border border-dashed border-border bg-background p-4">
            <p className="font-mono text-xs uppercase tracking-wide text-faint">Lo que dice alguien que lo usa</p>
            <p className="mt-1 text-sm italic leading-relaxed text-foreground/80">
              “Antes no sabía cuántas reservas tenía hasta abrir Excel. Ahora lo veo y ya está.” — operadora, Jungle
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative border-t border-border px-5 py-14 md:px-6 md:py-20">
      <div className="pointer-events-none absolute inset-0 topo opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[840px] text-center">
        <Fade>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contacto</p>
          <h2 className="font-display mx-auto mt-2 max-w-[16ch] text-[clamp(1.6rem,4.5vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            ¿Armamos lo tuyo?
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
            Contame en 2 líneas qué vendés o qué querés ordenar — te digo si te lo puedo armar, con qué y en cuánto. Al fin y al cabo, si no soy el
            indicado, te lo digo de una.
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
          Respondo más rápido por WhatsApp o mail que por LinkedIn — casi no lo abro. Si me escribís “vi lo de QR + SINPE”, ya sé por dónde vamos.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-6">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 text-xs text-faint md:flex-row">
        <p>© {new Date().getFullYear()} Greikol Q.A — Quepos, Costa Rica · Next.js 16 + Tailwind v4</p>
        <p className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Mirá el código, no el mockup
          <a
            href="https://github.com/greikol4321-hub/portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:text-muted"
          >
            repo
          </a>
        </p>
      </div>
    </footer>
  );
}
