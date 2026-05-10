"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type Step = {
  num: string;
  day: string;
  title: string;
  duration: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    day: "Mon",
    title: "Brief",
    duration: "30 min",
    desc: "30-min kickoff. We map the deliverables, channels and dates onto a shared sprint.",
  },
  {
    num: "02",
    day: "Tue",
    title: "Draft",
    duration: "24–48 hrs",
    desc: "First-pass concepts within 24–48 hours. Real layouts, real copy slots, no lorem.",
  },
  {
    num: "03",
    day: "Thu",
    title: "Refine",
    duration: "2 rounds",
    desc: "Two structured rounds. We track changes in your tool of choice — Figma, Slides or Slack.",
  },
  {
    num: "04",
    day: "Fri",
    title: "Ship",
    duration: "Same day",
    desc: "Source files, exports, and any motion variants. Archived and named the way your team likes.",
  },
];

export function Process() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="process" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 pt-20 pb-16 sm:px-8 lg:px-20 lg:pt-28 lg:pb-20">
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
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        {/* Sprint-week label */}
        <div className="mt-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-whisper lg:mt-16">
          <span>Sprint week — typical cadence</span>
          <span className="hidden sm:inline">Mon → Fri</span>
        </div>

        {/* Timeline + steps */}
        <div className="relative mt-6 lg:mt-8">
          {/* Day labels (desktop only — sit just above the line) */}
          <div className="relative hidden lg:grid lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.num} className="pl-0 pr-6">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-whisper">
                  {s.day}
                </span>
              </div>
            ))}
          </div>

          {/* Connector line + dots (desktop only) */}
          <div className="relative mt-4 hidden h-3 lg:block">
            {/* base line — draws left to right when section enters */}
            <div className="absolute left-1.5 right-1.5 top-1/2 h-px -translate-y-1/2 bg-ink/15" />
            <div className="process-line absolute left-1.5 right-1.5 top-1/2 h-[1.5px] -translate-y-1/2 bg-blood" />
            {/* dots */}
            <div className="relative grid h-full grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.num} className="relative">
                  <span
                    className="process-dot absolute left-0 top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full border border-ink bg-cream"
                    style={{ transitionDelay: `${i * 240}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Step content */}
          <div className="mt-10 grid grid-cols-1 gap-y-12 gap-x-0 sm:grid-cols-2 sm:gap-x-8 lg:mt-8 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="reveal-up relative pr-6 lg:pr-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* mobile day label */}
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-eyebrow text-whisper lg:hidden">
                  {s.day}
                </span>

                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-blood">{s.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                    {s.duration}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[clamp(32px,4vw,52px)] uppercase leading-[0.95] tracking-tight text-ink">
                  {s.title}
                </h3>

                <p className="mt-4 max-w-[30ch] text-[14px] leading-[1.65] text-whisper">{s.desc}</p>

                {/* tiny progress preview — small bars representing the day's work */}
                <div className="mt-5 flex items-end gap-1">
                  {[0, 1, 2, 3, 4].map((b) => (
                    <span
                      key={b}
                      className="block w-3 origin-bottom rounded-[1px] bg-ink/15"
                      style={{
                        height: [10, 16, 22, 14, 8][b] + (i % 2 === 0 ? 0 : 2) + "px",
                        animationDelay: `${i * 100 + b * 60}ms`,
                      }}
                    />
                  ))}
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-eyebrow text-whisper">
                    Cycle {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closer caption */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[10px] uppercase tracking-eyebrow text-whisper lg:mt-16">
          <span>
            Loop on for <span className="text-ink">52</span> weeks a year.
          </span>
          <span className="inline-flex items-center gap-2 text-blood">
            <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-blood" />
            Studio open · Mon–Fri · IST
          </span>
        </div>
      </div>

      <style jsx>{`
        .process-line {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 1500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms;
        }
        :global(.is-in) .process-line {
          transform: scaleX(1);
        }
        .process-dot {
          transition: background-color 600ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 600ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        :global(.is-in) .process-dot {
          background-color: #e63946;
          border-color: #e63946;
          transform: translateY(-50%) scale(1.15);
        }
        @media (prefers-reduced-motion: reduce) {
          .process-line,
          .process-dot {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
