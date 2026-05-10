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

        {/* Top wordmark marquee — quiet credibility strip */}
        <div className="mt-10 overflow-hidden border-y border-ink/10 py-6 lg:mt-14">
          <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap will-change-transform">
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

        {/* Editorial credit list — the real presentation */}
        <ul className="mt-10 border-t border-ink/10 lg:mt-14">
          {CLIENTS.map((c, i) => (
            <li
              key={c.idx}
              className="reveal-up group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-ink/10 py-6 transition-colors duration-300 hover:bg-ink hover:text-cream sm:grid-cols-[64px_72px_1fr_auto_220px] sm:gap-x-8 sm:py-7 lg:py-9"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper transition-colors group-hover:text-cream/55">
                {c.idx}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-eyebrow text-whisper transition-colors group-hover:text-cream/55 sm:block">
                {c.year}
              </span>

              <h3 className="font-display text-[clamp(28px,5vw,68px)] uppercase leading-[0.96] tracking-[-0.01em] sm:col-span-1">
                {c.name}
                <span className="ml-3 inline-block translate-x-[-8px] align-middle text-[0.55em] text-whisper opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-blood group-hover:opacity-100">
                  →
                </span>
              </h3>

              <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-blood sm:inline-flex">
                {c.status ? (
                  <>
                    <span className="block h-[6px] w-[6px] animate-pulse rounded-full bg-blood" />
                    {c.status}
                  </>
                ) : (
                  <span className="text-whisper transition-colors group-hover:text-cream/40">—</span>
                )}
              </span>
              <span className="col-span-3 font-mono text-[10px] uppercase tracking-eyebrow text-whisper transition-colors group-hover:text-cream/55 sm:col-span-1 sm:text-right">
                {c.industry}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
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
