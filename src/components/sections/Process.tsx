"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RedSquare, RevealLine, SectionHead } from "@/components/ui/SectionHead";

const STEPS = [
  { num: "01", title: "Brief", desc: "30-min kickoff. We map the deliverables, channels and dates onto a shared sprint." },
  { num: "02", title: "Draft", desc: "First-pass concepts within 24–48 hours. Real layouts, real copy slots, no lorem." },
  { num: "03", title: "Refine", desc: "Two structured rounds. We track changes in your tool of choice — Figma, Slides or Slack." },
  { num: "04", title: "Ship", desc: "Source files, exports, and any motion variants. Archived and named the way your team likes." },
];

export function Process() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="process" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-32 sm:px-8 lg:px-20 lg:py-40">
        <SectionHead index="04" label="Process">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>Four</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">steps</span>
              </RevealLine>
              , repeated
            </span>
            <span className="mt-2 block">
              <RevealLine>
                <span className="text-blood">weekly</span>
              </RevealLine>
              <RedSquare />
            </span>
          </h2>
        </SectionHead>

        <div className="relative mt-20 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="reveal-up relative lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-ink/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-blood">{s.num}</div>
              <h3 className="mt-4 font-display text-[28px] uppercase tracking-tight text-ink">{s.title}</h3>
              <p className="mt-3 max-w-[28ch] text-[14px] leading-[1.6] text-whisper">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
