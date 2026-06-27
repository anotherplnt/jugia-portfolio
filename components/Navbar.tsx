"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="text-sm font-medium tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            Jugia<span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="text-sm px-4 py-2 rounded-md bg-zinc-100 text-ink hover:bg-white transition-colors font-medium"
            >
              Let's talk
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-300 hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-border/40 bg-ink/95 backdrop-blur-xl -mx-6 px-6 pb-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-sm px-3 py-2.5 rounded-md bg-zinc-100 text-ink text-center font-medium"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}