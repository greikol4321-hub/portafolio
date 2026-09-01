import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Greikol Q.A — Sistemas que usan colegios y tours de Costa Rica",
  description:
    "Soy Greikol, de Quepos. Hago sistemas chicos que ya están en producción: venta de entradas con QR y SINPE, taquillas por sede, paneles para tours en la selva. Sin humo, código abierto, funcionan con 200 padres en fila.",
  keywords: [
    "Greikol",
    "Quepos Costa Rica",
    "desarrollador web Costa Rica",
    "Next.js",
    "Supabase",
    "Flask",
    "taquilla QR",
    "SINPE Movil",
    "tours Costa Rica",
  ],
  authors: [{ name: "Greikol Q.A" }],
  openGraph: {
    title: "Greikol Q.A — Sistemas que ya están en uso",
    description:
      "De Quepos para colegios y negocios reales. QR que no se revende, mapas de mesas que sí se entienden, paneles que no piden manual.",
    type: "website",
    locale: "es_CR",
  },
  metadataBase: new URL("https://portafolio-greikol.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} overflow-x-hidden scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
