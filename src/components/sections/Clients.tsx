"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type FeaturedClient = {
  idx: string;
  year: string;
  name: string;
  industry: string;
  status?: string;
};

const ALL_CLIENTS: string[] = [
  "Arkose Labs",
  "Anomali",
  "Simility by PayPal",
  "Monnai",
  "Bank of Ireland",
  "Aditya Birla Hospital",
  "Leelavati Hospital",
  "Supreme Furniture",
  "Maharaja Bhog",
  "Five Fat Monks",
  "Persian Darbar",
  "Aquavera",
];

const FEATURED: FeaturedClient[] = [
  { idx: "01", year: "2018", name: "Arkose Labs", industry: "Cybersecurity · USA", status: "Active · 6 yrs" },
  { idx: "02", year: "2020", name: "Anomali", industry: "Cybersecurity · USA", status: "Active" },
  { idx: "03", year: "2021", name: "Simility by PayPal", industry: "Fintech · USA" },
  { idx: "04", year: "2022", name: "Monnai", industry: "Fintech · USA" },
  { idx: "05", year: "2022", name: "Bank of Ireland", industry: "Banking · IE" },
];

const MORE_COUNT = 7;
const MORE_INDUSTRIES = "Healthcare · F&B · Home decor · FMCG";

export function Clients() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="clients" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="05" label="Clients">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>Trusted by teams</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>shipping to</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">30,000+</span>
              </RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>
                <span className="text-blood">followers</span>
              </RevealLine>
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        {/* Wordmark marquee — every client, scrolling on a 60s loop */}
        <div className="mt-12 overflow-hidden border-y border-ink/10 py-7 lg:mt-16">
          <div className="marquee-track flex w-max items-center whitespace-nowrap">
            {[...ALL_CLIENTS, ...ALL_CLIENTS].map((name, i) => (
              <span key={i} className="flex items-center">
                <span className="font-display text-[22px] uppercase leading-none tracking-tight text-ink/70">
                  {name}
                </span>
                <span className="mx-10 inline-block h-[6px] w-[6px] rounded-full bg-blood" />
              </span>
            ))}
          </div>
        </div>

        {/* Editorial credit list — five flagship accounts + closer */}
        <ul className="mt-12 border-t border-ink/10 lg:mt-16">
          {FEATURED.map((c, i) => (
            <li
              key={c.idx}
              className="reveal-up group relative border-b border-ink/10 transition-colors duration-300 hover:bg-ink"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <div className="px-2 py-8 transition-transform duration-500 group-hover:translate-x-3 sm:px-4 sm:py-9 lg:px-6 lg:py-10">
                <h3 className="font-display text-[clamp(36px,6.4vw,84px)] uppercase leading-[0.95] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-cream">
                  {c.name}
                </h3>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-eyebrow text-whisper transition-colors duration-300 group-hover:text-cream/55">
                  <span className="inline-flex items-center gap-3">
                    <span className="text-ink transition-colors duration-300 group-hover:text-cream">
                      {c.idx}
                    </span>
                    <span className="opacity-50">/</span>
                    <span>{c.year}</span>
                    <span className="opacity-50">·</span>
                    <span>{c.industry}</span>
                  </span>
                  {c.status ? (
                    <span className="inline-flex items-center gap-2 text-blood">
                      <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-blood" />
                      {c.status}
                    </span>
                  ) : (
                    <span className="opacity-60">—</span>
                  )}
                </div>
              </div>
            </li>
          ))}

          {/* Closing row — same padding rhythm, no hover invert */}
          <li className="reveal-up border-b border-ink/10">
            <div className="px-2 py-8 sm:px-4 sm:py-9 lg:px-6 lg:py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                <h3 className="font-display text-[clamp(28px,4.4vw,56px)] uppercase leading-[0.95] tracking-[-0.01em] text-whisper">
                  &amp; <span className="font-romance italic font-normal lowercase text-ink">many</span> more
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                  +{MORE_COUNT} accounts · {MORE_INDUSTRIES}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
