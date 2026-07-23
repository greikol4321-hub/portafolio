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
  title: "Greikol | Portafolio - Desarrollador Web",
  description:
    "Portafolio de Greikol, desarrollador web junior especializado en sistemas educativos y aplicaciones con Next.js, React y Supabase en Costa Rica.",
  keywords: [
    "desarrollador web",
    "Costa Rica",
    "Next.js",
    "React",
    "portafolio",
    "programador junior",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
