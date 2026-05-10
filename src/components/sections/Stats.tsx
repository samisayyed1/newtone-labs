"use client";

import { useEffect, useRef } from "react";

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
          const dur = 1200;
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

export function Stats() {
  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 pb-32 sm:px-8 lg:px-20 lg:pb-40">
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="reveal-up border-t border-whisper/30 pt-8 lg:pt-12"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(72px,10vw,160px)] ${
                  s.red ? "text-blood" : "text-ink"
                }`}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.55] text-whisper">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
