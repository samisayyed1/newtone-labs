"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine } from "@/components/ui/SectionHead";

export function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden bg-cream">
      <div className="dotted-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_55%,black,transparent_85%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blood/25 blur-[140px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-between px-6 pb-14 pt-[110px] sm:px-8 lg:px-20 lg:pb-16 lg:pt-[130px]">
        <h1 className="my-auto py-8 font-display text-[clamp(64px,12vw,200px)] uppercase leading-[0.92] tracking-[-0.01em] text-ink">
          <span className="block">
            <RevealLine>Bold</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance text-[0.92em] font-normal italic lowercase">visuals</span>
            </RevealLine>
            <span className="text-blood">.</span>
          </span>
          <span className="mt-2 block">
            <RevealLine>Fast</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance text-[0.92em] font-normal italic lowercase">delivery</span>
            </RevealLine>
            <span className="text-blood">.</span>
          </span>
          <span className="mt-2 block">
            <RevealLine>Real</RevealLine>{" "}
            <RevealLine>
              <span className="text-blood">IMPACT</span>
            </RevealLine>
            <span className="text-blood">.</span>
          </span>
        </h1>

        <div className="reveal-up h-[2px] w-[220px] origin-left bg-blood sm:w-[320px]" />

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
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
              <span className="grid h-9 w-9 place-items-center rounded-full border border-ink">↓</span>
              Scroll
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
