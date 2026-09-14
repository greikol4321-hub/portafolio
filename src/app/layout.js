import "./globals.css";

export const metadata = {
  title: "Greikol Yanfred Quesada Amador — Estudiante de Desarrollo Web",
  description:
    "Estudiante de Desarrollo Web en el CTP de Quepos. Construyo, despliego y vendo sistemas web propios: entradas con QR y SINPE, taquillas por sede, paneles para tours. Java, Python, C#, SQL, Git/GitHub.",
  keywords: [
    "Greikol Quesada",
    "Quepos Costa Rica",
    "desarrollador web Costa Rica",
    "estudiante desarrollo web",
    "Next.js",
    "Supabase",
    "Flask",
    "taquilla QR",
    "SINPE Movil",
    "Java Python C#",
  ],
  authors: [{ name: "Greikol Yanfred Quesada Amador" }],
  openGraph: {
    title: "Greikol Quesada — Estudiante de Desarrollo Web",
    description:
      "De Quepos para colegios y negocios reales. QR que no se revende, mapas de mesas que sí se entienden, paneles que no piden manual.",
    type: "website",
    locale: "es_CR",
  },
  metadataBase: new URL("https://portafolio-greikol.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="overflow-x-hidden scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
