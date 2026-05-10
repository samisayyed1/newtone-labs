"use client";

import { useReveal } from "@/components/motion/RevealHooks";

type Props = {
  index: string;
  label: string;
  children: React.ReactNode;
  dark?: boolean;
};

export function SectionHead({ index, label, children, dark = false }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <header ref={ref} className={`relative border-t pt-6 sm:pt-8 ${dark ? "border-white/15" : "border-ink/10"}`}>
      <div
        className={`flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-eyebrow ${
          dark ? "text-cream/55" : "text-whisper"
        }`}
      >
        <span>
          <span className={dark ? "text-cream" : "text-ink"}>{index}</span>
          <span className="mx-2 opacity-50">/</span>
          {label}
        </span>
      </div>
      <div className="mt-8 sm:mt-12">{children}</div>
    </header>
  );
}

type LineProps = React.PropsWithChildren<{ romance?: boolean; className?: string }>;

export function RevealLine({ children, romance = false, className = "" }: LineProps) {
  return (
    <span className={`reveal-line ${romance ? "romance" : ""} ${className}`}>
      <span>{children}</span>
    </span>
  );
}

export function RedSquare({ className = "" }: { className?: string }) {
  return <span className={`redsq ${className}`} aria-hidden />;
}
