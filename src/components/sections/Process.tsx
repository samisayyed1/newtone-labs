"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type Step = {
  num: string;
  title: string;
  duration: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Brief",
    duration: "30 min",
    desc: "Kickoff call. We map the deliverables, channels and dates onto a shared sprint.",
  },
  {
    num: "02",
    title: "Draft",
    duration: "24–48 hrs",
    desc: "First-pass concepts within 24–48 hours. Real layouts, real copy slots, no lorem.",
  },
  {
    num: "03",
    title: "Refine",
    duration: "2 rounds",
    desc: "Two structured rounds. We track changes in your tool of choice — Figma, Slides or Slack.",
  },
  {
    num: "04",
    title: "Ship",
    duration: "Same cycle",
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

        {/* Timeline + steps */}
        <div className="relative mt-12 lg:mt-16">
          {/* Connector line + dots (desktop only) */}
          <div className="relative hidden h-3 lg:block">
            <div className="absolute left-1.5 right-1.5 top-1/2 h-px -translate-y-1/2 bg-ink/15" />
            <div className="process-line absolute left-1.5 right-1.5 top-1/2 h-[1.5px] -translate-y-1/2 bg-blood" />
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
          <div className="mt-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:mt-10 lg:grid-cols-4 lg:gap-x-0">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="reveal-up relative pr-6 lg:pr-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
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

                {/* Activity histogram — bars breathe continuously, never settle */}
                <div className="mt-6 flex h-8 items-end gap-1.5" aria-hidden>
                  {[0, 1, 2, 3, 4, 5, 6].map((b) => (
                    <span
                      key={b}
                      className={`process-bar block w-2 origin-bottom rounded-[1px] ${
                        b === 3 ? "bg-blood" : "bg-ink/45"
                      }`}
                      style={{
                        height: "100%",
                        animationDelay: `${i * 0.2 + b * 0.14}s`,
                        animationDuration: `${1.8 + (b % 4) * 0.35}s`,
                      }}
                    />
                  ))}
                  <span className="ml-3 self-center font-mono text-[9px] uppercase tracking-eyebrow text-whisper">
                    Cycle {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closer — no day or timezone references */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[10px] uppercase tracking-eyebrow text-whisper lg:mt-16">
          <span>
            An <span className="text-ink">always-on</span> cadence.
          </span>
          <span className="inline-flex items-center gap-2 text-blood">
            <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-blood" />
            12 active retainers
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
        .process-bar {
          animation: barBreathe 2.4s ease-in-out infinite;
          will-change: transform, opacity;
        }
        @keyframes barBreathe {
          0%, 100% {
            transform: scaleY(0.32);
            opacity: 0.55;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-line,
          .process-dot {
            transition: none;
            transform: none;
          }
          .process-bar {
            animation: none;
            transform: scaleY(0.7);
          }
        }
      `}</style>
    </section>
  );
}
