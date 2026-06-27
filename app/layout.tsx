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
  title: "Jugia Jabar · Full-Stack & Web3 Automation Engineer",
  description:
    "Full-Stack and Web3 Automation Engineer building on-chain analytics, AI agent platforms, EVM integrations, and automation systems that run unattended in production.",
  keywords: [
    "Jugia Jabar",
    "Full Stack Developer",
    "Web3 Developer",
    "Web3 Automation Engineer",
    "Smart Contracts",
    "EVM",
    "Solidity",
    "Next.js",
    "React",
    "Node.js",
    "Automation",
    "API Development",
  ],
  authors: [{ name: "Jugia Jabar" }],
  openGraph: {
    title: "Jugia Jabar · Full-Stack & Web3 Automation Engineer",
    description:
      "On-chain analytics, AI agent platforms, EVM integrations, and automation systems that run unattended in production.",
    type: "website",
    siteName: "Jugia Jabar",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ogzulla",
    title: "Jugia Jabar · Full-Stack & Web3 Automation Engineer",
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