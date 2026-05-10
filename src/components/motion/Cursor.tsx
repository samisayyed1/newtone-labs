"use client";

import { useEffect, useRef, useState } from "react";

const BASE = "fixed left-0 top-0 z-[9999] pointer-events-none mix-blend-difference";

type CursorState = "default" | "link" | "media";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-cursor");
    return () => document.body.classList.remove("has-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let mx = -100,
      my = -100;
    let dx = mx,
      dy = my;
    let rx = mx,
      ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const inspect = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return setState("default");
      if (target.closest("[data-cursor='media']")) return setState("media");
      if (target.closest("a, button, [role='button'], input, textarea, [data-cursor='link']"))
        return setState("link");
      setState("default");
    };

    const onOver = (e: MouseEvent) => inspect(e.target);

    let raf = 0;
    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringSize =
    state === "media"
      ? "h-[90px] w-[90px] bg-blood text-cream font-display text-[14px] tracking-[0.12em]"
      : state === "link"
      ? "h-[48px] w-[48px] border border-blood"
      : "h-[12px] w-[12px] opacity-0";

  return (
    <>
      <div ref={dotRef} className={`${BASE} h-[8px] w-[8px] rounded-full bg-cream`} aria-hidden />
      <div
        ref={ringRef}
        className={`${BASE} flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out ${ringSize}`}
        aria-hidden
      >
        {state === "media" && <span>VIEW</span>}
      </div>
    </>
  );
}
