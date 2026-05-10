"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#why", label: "Why us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[150] h-[80px] transition-colors duration-300 ${
        scrolled ? "bg-cream/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-page items-center justify-between px-6 sm:px-8 lg:px-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="block h-[8px] w-[8px] animate-pulse rounded-full bg-blood" />
          <span className="font-display text-[18px] uppercase tracking-tight text-ink">Newtone</span>
        </a>

        <nav className="hidden gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] uppercase tracking-eyebrow text-ink/85 transition-opacity hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px origin-right scale-x-0 bg-blood transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group hidden rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-all duration-200 hover:bg-ink hover:text-cream md:inline-flex md:items-center md:gap-2"
        >
          Start a project
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[140] flex flex-col bg-cream px-6 pt-[80px] md:hidden">
          <div className="mt-12 flex flex-col gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[44px] uppercase leading-none tracking-tight text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-eyebrow"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
