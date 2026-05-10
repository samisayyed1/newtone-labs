"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RedSquare, RevealLine, SectionHead } from "@/components/ui/SectionHead";

const WORK = [
  { span: "lg:col-span-7", ratio: "16/10", title: "State of Fraud Report 2025", meta: "Arkose Labs · Whitepaper", num: "W—01 / 06" },
  { span: "lg:col-span-5", ratio: "4/5", title: "Bot Defender Launch", meta: "Anomali · Social", num: "W—02 / 06" },
  { span: "lg:col-span-5", ratio: "16/10", title: "Investor Deck — Series C", meta: "Monnai · Presentation", num: "W—03 / 06" },
  { span: "lg:col-span-7", ratio: "16/10", title: "Product Render Series", meta: "Supreme Furniture · 3D", num: "W—04 / 06" },
  { span: "lg:col-span-4", ratio: "4/5", title: "Capabilities Brochure", meta: "Bank of Ireland · Print", num: "W—05 / 06" },
  { span: "lg:col-span-8", ratio: "16/10", title: "Brand Campaign 2024", meta: "Five Fat Monks · F&B", num: "W—06 / 06" },
];

export function Work() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="work" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="03" label="Selected work">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>Recent</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">work</span>
              </RevealLine>{" "}
              <RevealLine>for</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>
                clients <span className="text-blood">we love</span>
              </RevealLine>
              <RedSquare />
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
          {WORK.map((w, i) => (
            <article key={i} className={`reveal-up ${w.span}`} data-cursor="media">
              <figure
                className="relative flex w-full items-center justify-center border border-ink/15 bg-gradient-to-b from-ink/[0.03] to-ink/[0.08] transition-all duration-500 hover:border-blood"
                style={{ aspectRatio: w.ratio }}
              >
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
                  {w.num}
                </span>
                <span
                  className="absolute right-4 top-4 h-[10px] w-[10px] border-r border-t border-blood transition-transform duration-300"
                  aria-hidden
                />
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                  Drop visual to replace
                </span>
              </figure>
              <figcaption className="mt-5 flex items-baseline justify-between gap-6 border-t border-ink/10 pt-4">
                <span className="font-display text-[18px] uppercase tracking-tight text-ink">{w.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                  {w.meta}
                </span>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
