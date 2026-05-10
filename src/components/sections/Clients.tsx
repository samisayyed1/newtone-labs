"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type Client = {
  idx: string;
  year: string;
  name: string;
  industry: string;
  status?: string;
};

const CLIENTS: Client[] = [
  { idx: "01", year: "2018", name: "Arkose Labs", industry: "Cybersecurity · USA", status: "Active · 6 yrs" },
  { idx: "02", year: "2020", name: "Anomali", industry: "Cybersecurity · USA", status: "Active" },
  { idx: "03", year: "2021", name: "Simility by PayPal", industry: "Fintech · USA" },
  { idx: "04", year: "2022", name: "Monnai", industry: "Fintech · USA" },
  { idx: "05", year: "2022", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "06", year: "2023", name: "Aditya Birla Hospital", industry: "Healthcare · IN" },
  { idx: "07", year: "2023", name: "Leelavati Hospital", industry: "Healthcare · IN" },
  { idx: "08", year: "2024", name: "Supreme Furniture", industry: "Home decor · IN" },
  { idx: "09", year: "2024", name: "Maharaja Bhog", industry: "F&B · IN" },
  { idx: "10", year: "2024", name: "Five Fat Monks", industry: "F&B · IN" },
  { idx: "11", year: "2025", name: "Persian Darbar", industry: "F&B · IN", status: "Active" },
  { idx: "12", year: "2025", name: "Aquavera", industry: "FMCG · IN" },
];

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

        {/* Wordmark marquee — quiet, premium, no JS */}
        <div className="mt-10 overflow-hidden border-y border-ink/10 py-6 lg:mt-14">
          <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="font-display text-[20px] uppercase leading-none tracking-tight text-ink/70"
              >
                {c.name}
                <span className="mx-12 inline-block h-[6px] w-[6px] translate-y-[-3px] rounded-full bg-blood" />
              </span>
            ))}
          </div>
        </div>

        {/* Editorial credit list — wordmark on top, metadata below */}
        <ul className="mt-10 border-t border-ink/10 lg:mt-14">
          {CLIENTS.map((c, i) => (
            <li
              key={c.idx}
              className="reveal-up group relative border-b border-ink/10 transition-colors duration-300 hover:bg-ink"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <div className="px-2 py-7 transition-transform duration-500 group-hover:translate-x-3 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
                <div className="flex items-end justify-between gap-6">
                  <h3 className="font-display text-[clamp(36px,6.4vw,84px)] uppercase leading-[0.95] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-cream">
                    {c.name}
                  </h3>
                  <span className="-translate-x-3 text-[clamp(18px,2vw,28px)] text-whisper opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-blood group-hover:opacity-100">
                    →
                  </span>
                </div>

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
        </ul>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 50s linear infinite;
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
