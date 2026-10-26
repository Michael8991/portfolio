import type { Metadata } from "next";
import { SITE_NAME, siteUrl } from "@/lib/seo";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Michael Rodríguez · Full-Stack Developer",
    template: "%s | Michael Rodríguez",
  },
  description:
    "Portfolio of Michael Rodríguez, a full-stack developer specializing in React, Next.js, TypeScript, and Node.js.",
  applicationName: SITE_NAME,
  authors: [{ name: "Michael Rodríguez", url: siteUrl }],
  creator: "Michael Rodríguez",
  robots: {
    index: true,
    follow: true,
  },
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
