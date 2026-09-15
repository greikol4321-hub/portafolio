import "./globals.css";

export const metadata = {
  title: "Greikol Quesada — Desarrollo Web en Quepos",
  description:
    "Construyo y despliego sistemas web en uso: entradas con QR y SINPE, taquillas por sede, paneles para tours y reservas. Next.js, Flask, Supabase y PostgreSQL.",
  keywords: [
    "Greikol Quesada",
    "Quepos Costa Rica",
    "desarrollador web Costa Rica",
    "Next.js",
    "React",
    "Tailwind",
    "Flask",
    "Supabase",
    "PostgreSQL",
    "taquilla QR",
    "SINPE Movil",
  ],
  authors: [{ name: "Greikol Yanfred Quesada Amador" }],
  metadataBase: new URL("https://portafolio-greikol.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Greikol Quesada — Desarrollo Web en Quepos",
    description:
      "Sistemas en uso para colegios, negocios y turismo: entradas con QR, taquillas por sede y paneles que no necesitan manual.",
    url: "/",
    siteName: "Greikol Quesada — Desarrollo Web",
    type: "website",
    locale: "es_CR",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="overflow-x-hidden scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
