"use client";

import { useEffect, useRef } from "react";
import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

const STATS = [
  { value: 3, suffix: "", red: true, label: "Designers in-house. No contractors, no overflow shop." },
  { value: 9, suffix: "+", label: "Combined years of design experience on the team." },
  { value: 250, suffix: "h", label: "Average monthly output per active retainer." },
  { value: 12, suffix: "", label: "Active client accounts across four time zones." },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const start = performance.now();
          const dur = 1100;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 4);
            el.textContent = `${Math.round(to * eased)}${t === 1 ? suffix : ""}`;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return <span ref={ref}>0</span>;
}

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="01" label="About">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>A small studio with a</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">long</span>
              </RevealLine>{" "}
              <RevealLine>memory</RevealLine>
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-up space-y-6 text-[17px] leading-[1.55] text-ink">
            <p className="max-w-[44ch]">
              Newtone is a Navi Mumbai studio built for teams that need{" "}
              <span className="font-romance italic">more</span> than a freelancer and{" "}
              <span className="font-romance italic">less</span> than a 60-person agency. Our work moves at the pace of in-house, with the consistency of a system.
            </p>
            <p className="max-w-[44ch]">
              We don&apos;t pitch what we don&apos;t ship ourselves. Every discipline — print to 3D, deck to UI — is handled by the same people who took the brief.
            </p>
          </div>
          <div className="reveal-up space-y-6 text-[17px] leading-[1.55] text-ink">
            <p className="max-w-[44ch]">
              The posture is the product:{" "}
              <span className="font-romance italic">quiet, exact, finished</span>. Decisions land fast, files are named the way your team likes, and edge cases are caught before review.
            </p>
            <p className="max-w-[44ch]">
              We grow only when a specific kind of work calls for a specific kind of designer. Slowly, on purpose.
            </p>
          </div>
        </div>

        {/* stats — embedded right under the manifesto so there's no dead space */}
        <div className="mt-14 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-12 lg:pt-12">
          {STATS.map((s, i) => (
            <div key={i} className="reveal-up" style={{ transitionDelay: `${i * 60}ms` }}>
              <div
                className={`font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(56px,8vw,112px)] ${
                  s.red ? "text-blood" : "text-ink"
                }`}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 max-w-[28ch] text-[13px] leading-[1.55] text-whisper">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
