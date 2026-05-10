"use client";

import { useEffect, useState } from "react";

const NAME = "Newtone";

export function Preloader() {
  const [phase, setPhase] = useState<"typing" | "line" | "done">("typing");
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("done");
      return;
    }
    let cancelled = false;
    let i = 0;
    const interval = setInterval(() => {
      if (cancelled) return;
      i += 1;
      setChars(i);
      if (i >= NAME.length) {
        clearInterval(interval);
        setTimeout(() => !cancelled && setPhase("line"), 220);
        setTimeout(() => !cancelled && setPhase("done"), 900);
      }
    }, 60);
    const ceiling = setTimeout(() => !cancelled && setPhase("done"), 1600);
    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(ceiling);
    };
  }, []);

  if (phase === "done") return null;

  const visible = NAME.slice(0, chars);
  const lineState = phase === "line" ? "scale-x-100" : "scale-x-0";

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-cream" aria-hidden>
      <div className="relative flex items-center gap-3">
        <span className="font-display text-[32px] uppercase tracking-tight text-ink sm:text-[44px]">
          {visible}
          <span className="ml-1 inline-block h-[0.7em] w-[0.06em] translate-y-[0.04em] animate-pulse bg-ink" />
        </span>
        {phase !== "typing" && <span className="redsq h-[16px] w-[16px]" />}
      </div>
      <div
        className={`absolute left-0 top-0 h-[2px] w-full origin-left bg-blood transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${lineState}`}
      />
    </div>
  );
}
