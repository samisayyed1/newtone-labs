"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, RedSquare } from "@/components/ui/SectionHead";

function useIstClock() {
  const [time, setTime] = useState("—:—");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 3600000);
      setTime(`${String(ist.getHours()).padStart(2, "0")}:${String(ist.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Hero() {
  const ref = useReveal<HTMLElement>();
  const glowRef = useRef<HTMLDivElement>(null);
  const time = useIstClock();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = glowRef.current;
    if (!el) return;
    let raf = 0,
      tx = 0,
      ty = 0,
      x = 0,
      y = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 60;
      ty = (e.clientY / window.innerHeight - 0.5) * 60;
    };
    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden bg-cream">
      <div className="dotted-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_55%,black,transparent_85%)]" />

      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blood/30 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-between px-6 pb-16 pt-[120px] sm:px-8 lg:px-20 lg:pb-20 lg:pt-[140px]">
        <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 font-mono text-[10px] uppercase tracking-eyebrow text-ink sm:text-[11px]">
          <span>
            Newtone Creative Labs <span className="text-whisper">/ v.04 / 2026</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-blood" />
            Live · IST {time}
          </span>
        </div>

        <h1 className="my-auto py-12 font-display text-[clamp(64px,12vw,200px)] uppercase leading-[0.92] tracking-[-0.01em] text-ink">
          <span className="block">
            <RevealLine>Bold</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance text-[0.92em] font-normal italic lowercase">visuals</span>
            </RevealLine>
            <RedSquare />
          </span>
          <span className="mt-2 block">
            <RevealLine>Fast</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance text-[0.92em] font-normal italic lowercase">delivery</span>
            </RevealLine>
            <RedSquare />
          </span>
          <span className="mt-2 block">
            <RevealLine>Real</RevealLine>{" "}
            <RevealLine>
              <span className="text-blood">IMPACT</span>
            </RevealLine>
            <RedSquare />
          </span>
        </h1>

        <div className="reveal-up h-[2px] w-[220px] origin-left bg-blood sm:w-[320px]" />

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="reveal-up lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">The studio</div>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.65] text-ink">
              A three-designer creative lab. Embedded with cybersecurity, fintech and healthcare teams across four time zones.
            </p>
          </div>

          <div className="reveal-up lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">Output, last 12 months</div>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.65] text-ink">
              1,500+ social creatives. 700+ long-form documents. 80+ landing pages. 30+ investor decks.
            </p>
          </div>

          <a
            href="#about"
            className="reveal-up flex items-end justify-end font-mono text-[10px] uppercase tracking-eyebrow text-ink lg:col-span-2"
          >
            <span className="inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-ink">
                <span className="animate-bounce">↓</span>
              </span>
              Scroll
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
