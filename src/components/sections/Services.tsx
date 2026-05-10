"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type Service = {
  num: string;
  title: [string, string?];
  desc: string;
  tags: string[];
  preview: keyof typeof PREVIEWS;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: ["Social", "creatives"],
    desc: "Always-on feeds that earn the scroll. Static, motion, and carousel ready for paid and organic.",
    tags: ["Static", "Motion", "Carousel", "Reels"],
    preview: "social",
  },
  {
    num: "02",
    title: ["Long-form", "documents"],
    desc: "Whitepapers, threat reports, and case studies built around the page — not poured into a template.",
    tags: ["Whitepapers", "Reports", "Case studies", "eBooks"],
    preview: "doc",
  },
  {
    num: "03",
    title: ["Presentations", "& decks"],
    desc: "Investor and sales decks engineered for the room. One narrative, one type system, every slide on-spec.",
    tags: ["Google Slides", "PowerPoint", "Sales", "Investor"],
    preview: "deck",
  },
  {
    num: "04",
    title: ["Motion", "& video"],
    desc: "Explainers, sizzle reels, product walkthroughs. Storyboarded in-house, animated frame by frame.",
    tags: ["Promo", "Character", "Editing", "After Effects"],
    preview: "motion",
  },
  {
    num: "05",
    title: ["3D", "& product"],
    desc: "Renders, lifestyle composites, and modular product sets ready for ecommerce and packaging.",
    tags: ["Blender", "Modeling", "Render"],
    preview: "cube",
  },
  {
    num: "06",
    title: ["UI / UX", "design"],
    desc: "Marketing pages, dashboards, and onboarding flows. Figma-native, dev-handoff-ready, accessible by default.",
    tags: ["Figma", "Web", "Mobile"],
    preview: "ui",
  },
  {
    num: "07",
    title: ["Print", "& brand"],
    desc: "Brochures, booth graphics, stationery — all calibrated to print, all signed off on real proofs.",
    tags: ["Brochures", "Stationery", "Booth", "Pull-up"],
    preview: "print",
  },
  {
    num: "08",
    title: ["Ad", "banners"],
    desc: "Display, social, and animated ad sets sized to every placement. Variants ship in one drop.",
    tags: ["Display", "Social", "Animated"],
    preview: "ads",
  },
  {
    num: "09",
    title: ["Merch", "& apparel"],
    desc: "Internal swag, conference giveaways, and packaging built for the line, not just the mockup.",
    tags: ["T-shirts", "Goodies", "Packaging"],
    preview: "merch",
  },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="services" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
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
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 grid grid-cols-1 border-t border-cream/15 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc, tags, preview }: Service) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const Preview = PREVIEWS[preview];
  return (
    <article
      onMouseMove={onMove}
      className="group relative flex min-h-[340px] flex-col justify-between gap-8 border-b border-r border-cream/15 p-7 transition-colors duration-500 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:p-9"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(230,57,70,0.16), transparent 60%)",
        }}
      />

      <div className="relative flex items-start justify-between font-mono text-[10px] uppercase tracking-eyebrow text-cream/55">
        <span>{num}</span>
        <span className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blood">
          ↗
        </span>
      </div>

      <div className="relative flex flex-1 items-end">
        <Preview />
      </div>

      <div className="relative">
        <h3 className="font-display text-[28px] uppercase leading-[1.05] tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
          <span className="block">{title[0]}</span>
          {title[1] && <span className="block">{title[1]}</span>}
        </h3>
        <p className="mt-3 max-w-[32ch] text-[13px] leading-[1.6] text-cream/60">{desc}</p>
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
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────
   Per-service mini previews — pure CSS/inline SVG, no images.
   Each one lives in a 96×64 area and animates subtly on hover.
   ────────────────────────────────────────────────────────────── */

const stroke = "currentColor";

function Frame({ children }: React.PropsWithChildren) {
  return (
    <div className="text-cream/45 transition-all duration-500 group-hover:text-blood group-hover:translate-y-[-2px]">
      {children}
    </div>
  );
}

const PREVIEWS = {
  social: function SocialPreview() {
    return (
      <Frame>
        <svg width="104" height="64" viewBox="0 0 104 64" fill="none" aria-hidden>
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => (
              <rect
                key={`${c}-${r}`}
                x={c * 36}
                y={r * 36}
                width="28"
                height="28"
                stroke={stroke}
                strokeWidth="1"
                fill="none"
              />
            )),
          )}
        </svg>
      </Frame>
    );
  },
  doc: function DocPreview() {
    return (
      <Frame>
        <svg width="80" height="64" viewBox="0 0 80 64" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="63" height="63" stroke={stroke} />
          <line x1="8" y1="14" x2="56" y2="14" stroke={stroke} />
          <line x1="8" y1="22" x2="48" y2="22" stroke={stroke} />
          <line x1="8" y1="30" x2="56" y2="30" stroke={stroke} />
          <line x1="8" y1="38" x2="40" y2="38" stroke={stroke} />
          <line x1="8" y1="46" x2="56" y2="46" stroke={stroke} />
          <line x1="8" y1="54" x2="32" y2="54" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  deck: function DeckPreview() {
    return (
      <Frame>
        <svg width="104" height="64" viewBox="0 0 104 64" fill="none" aria-hidden>
          <rect x="0.5" y="14.5" width="64" height="40" stroke={stroke} />
          <rect x="14.5" y="8.5" width="64" height="40" stroke={stroke} fill="#0A0A0A" />
          <rect x="28.5" y="2.5" width="64" height="40" stroke={stroke} fill="#0A0A0A" />
          <line x1="36" y1="14" x2="84" y2="14" stroke={stroke} />
          <line x1="36" y1="22" x2="68" y2="22" stroke={stroke} />
          <line x1="36" y1="30" x2="76" y2="30" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  motion: function MotionPreview() {
    return (
      <Frame>
        <svg width="80" height="64" viewBox="0 0 80 64" fill="none" aria-hidden>
          <circle cx="40" cy="32" r="30" stroke={stroke} />
          <path d="M33 20 L33 44 L52 32 Z" fill={stroke} />
        </svg>
      </Frame>
    );
  },
  cube: function CubePreview() {
    return (
      <Frame>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
          <path d="M40 6 L70 22 L70 54 L40 70 L10 54 L10 22 Z" stroke={stroke} />
          <path d="M40 6 L40 38 L10 22 M40 38 L70 22 M40 38 L40 70" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  ui: function UIPreview() {
    return (
      <Frame>
        <svg width="120" height="68" viewBox="0 0 120 68" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="119" height="67" stroke={stroke} />
          <line x1="0" y1="14" x2="120" y2="14" stroke={stroke} />
          <circle cx="8" cy="7" r="1.6" fill={stroke} />
          <circle cx="14" cy="7" r="1.6" fill={stroke} />
          <circle cx="20" cy="7" r="1.6" fill={stroke} />
          <rect x="10" y="22" width="30" height="38" stroke={stroke} />
          <line x1="46" y1="24" x2="110" y2="24" stroke={stroke} />
          <line x1="46" y1="32" x2="100" y2="32" stroke={stroke} />
          <line x1="46" y1="40" x2="90" y2="40" stroke={stroke} />
          <rect x="46" y="48" width="36" height="10" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  print: function PrintPreview() {
    return (
      <Frame>
        <svg width="100" height="68" viewBox="0 0 100 68" fill="none" aria-hidden>
          <path d="M0.5 4.5 L60 0.5 L99.5 6.5 L40 65.5 L0.5 60 Z" stroke={stroke} />
          <path d="M40 65.5 L60 0.5" stroke={stroke} />
          <line x1="14" y1="22" x2="34" y2="20" stroke={stroke} />
          <line x1="14" y1="30" x2="32" y2="28" stroke={stroke} />
          <line x1="14" y1="38" x2="36" y2="36" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  ads: function AdsPreview() {
    return (
      <Frame>
        <svg width="120" height="64" viewBox="0 0 120 64" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="119" height="14" stroke={stroke} />
          <rect x="0.5" y="22.5" width="80" height="14" stroke={stroke} />
          <rect x="88.5" y="22.5" width="31" height="14" stroke={stroke} />
          <rect x="0.5" y="44.5" width="48" height="18" stroke={stroke} />
          <rect x="56.5" y="44.5" width="63" height="18" stroke={stroke} />
        </svg>
      </Frame>
    );
  },
  merch: function MerchPreview() {
    return (
      <Frame>
        <svg width="84" height="68" viewBox="0 0 84 68" fill="none" aria-hidden>
          <path
            d="M14 8 L28 2 C32 8 52 8 56 2 L70 8 L78 22 L62 28 L62 64 L22 64 L22 28 L6 22 Z"
            stroke={stroke}
          />
        </svg>
      </Frame>
    );
  },
};
