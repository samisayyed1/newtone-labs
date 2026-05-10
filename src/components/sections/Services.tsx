"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RedSquare, RevealLine, SectionHead } from "@/components/ui/SectionHead";

const SERVICES = [
  { num: "01", title: ["Social", "creatives"], tags: ["Static", "Motion", "Carousel", "Reels"] },
  { num: "02", title: ["Long-form", "documents"], tags: ["Whitepapers", "Reports", "Case studies", "eBooks"] },
  { num: "03", title: ["Presentations", "& decks"], tags: ["Google Slides", "PowerPoint", "Sales", "Investor"] },
  { num: "04", title: ["Motion", "& video"], tags: ["Promo", "Character", "Editing", "After Effects"] },
  { num: "05", title: ["3D", "& product"], tags: ["Blender", "Modeling", "Render"] },
  { num: "06", title: ["UI / UX", "design"], tags: ["Figma", "Web", "Mobile"] },
  { num: "07", title: ["Print", "& brand"], tags: ["Brochures", "Stationery", "Booth", "Pull-up"] },
  { num: "08", title: ["Ad", "banners"], tags: ["Display", "Social", "Animated"] },
  { num: "09", title: ["Merch", "& apparel"], tags: ["T-shirts", "Goodies", "Packaging"] },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="services" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-page px-6 py-32 sm:px-8 lg:px-20 lg:py-40">
        <SectionHead index="02" label="Services" dark>
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em]">
            <span className="block">
              <RevealLine>Everything a brand</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">needs</span>
              </RevealLine>
              ,
            </span>
            <span className="mt-2 block">
              <RevealLine>
                under <span className="text-blood">one</span> roof
              </RevealLine>
              <RedSquare />
            </span>
          </h2>
        </SectionHead>

        <div className="mt-16 grid grid-cols-1 border-t border-cream/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, tags }: { num: string; title: string[]; tags: string[] }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className="group relative flex min-h-[260px] flex-col justify-between border-b border-r border-cream/15 p-7 transition-colors duration-500 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:p-9"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(230,57,70,0.18), transparent 60%)",
        }}
      />
      <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-eyebrow text-cream/55">
        <span>{num}</span>
        <span className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blood">
          ↗
        </span>
      </div>
      <div>
        <h3 className="font-display text-[28px] uppercase leading-[1.05] tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
          {title.map((t, i) => (
            <span key={i} className="block">
              {t}
            </span>
          ))}
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-cream/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-cream/55"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
