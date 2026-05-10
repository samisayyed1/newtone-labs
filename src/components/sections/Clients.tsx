"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type Client = {
  name: [string, string?];
  ind: string;
  status?: string;
  highlight?: boolean;
};

const CLIENTS: Client[] = [
  { name: ["Arkose", "Labs"], ind: "Cybersecurity · USA", status: "Active · 6 yrs" },
  { name: ["Anomali"], ind: "Cybersecurity · USA", status: "Active" },
  { name: ["Simility", "by PayPal"], ind: "Fintech · USA" },
  { name: ["Monnai"], ind: "Fintech · USA" },
  { name: ["Bank of", "Ireland"], ind: "Banking · IE" },
  { name: ["Aditya Birla", "Hospital"], ind: "Healthcare · IN" },
  { name: ["Leelavati", "Hospital"], ind: "Healthcare · IN" },
  { name: ["Supreme", "Furniture"], ind: "Home decor · IN" },
  { name: ["Maharaja", "Bhog"], ind: "F&B · IN" },
  { name: ["Five Fat", "Monks"], ind: "F&B · IN" },
  { name: ["Persian", "Darbar"], ind: "F&B · IN", highlight: true },
  { name: ["Aquavera"], ind: "FMCG · IN" },
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
                <span className="font-romance italic font-normal lowercase">30,000+</span>
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

        <div className="reveal-up mt-10 grid grid-cols-1 border-l border-t border-whisper/30 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {CLIENTS.map((c, i) => (
            <article
              key={i}
              className={`group relative flex min-h-[200px] flex-col justify-between gap-8 border-b border-r border-whisper/30 p-7 transition-all duration-300 lg:p-9 ${
                c.highlight ? "bg-bone text-blood" : "bg-cream text-ink hover:bg-ink hover:text-cream"
              }`}
            >
              {c.status && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-eyebrow text-blood">
                  <span className="block h-[5px] w-[5px] animate-pulse rounded-full bg-blood" />
                  {c.status}
                </span>
              )}
              <div />
              <div>
                <h3 className="font-display text-[26px] uppercase leading-[1.05] tracking-tight">
                  {c.name[0]}
                  {c.name[1] && (
                    <>
                      <br />
                      {c.name[1]}
                    </>
                  )}
                </h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-eyebrow text-whisper transition-colors group-hover:text-cream/55">
                  {c.ind}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
