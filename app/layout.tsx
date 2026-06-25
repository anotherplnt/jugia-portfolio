import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zulla.site"),
  title: "Jugia Jabar — Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications, backend systems, automation workflows, and AI-powered features. From idea to deployment.",
  keywords: [
    "Jugia Jabar",
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Node.js",
    "Automation",
    "API Development",
  ],
  authors: [{ name: "Jugia Jabar" }],
  openGraph: {
    title: "Jugia Jabar — AI Builder & Full Stack Developer",
    description:
      "Building AI-powered products, automation systems, and scalable web applications.",
    type: "website",
    siteName: "Jugia Jabar",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ogzulla",
    title: "Jugia Jabar — AI Builder & Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}