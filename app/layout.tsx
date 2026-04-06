import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: "Portfolio — Michael Rodríguez",
  description:
    "Portfolio profesional de Michael Rodríguez, Frontend / Full-Stack Developer especializado en React, Next.js y Node.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Full-Stack",
    "React",
    "Next.js",
    "Node",
    "Tailwind",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
