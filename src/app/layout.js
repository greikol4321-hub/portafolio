import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Greikol Q.A | Desarrollador Web - Costa Rica",
  description:
    "Portafolio de Greikol Q.A, desarrollador web junior de Costa Rica. Enfocado en aplicaciones web para el sector turístico con Next.js, React, Supabase y TypeScript.",
  keywords: [
    "desarrollador web",
    "Costa Rica",
    "Next.js",
    "React",
    "Supabase",
    "portafolio",
    "programador",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
