"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = React.PropsWithChildren<{
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  pull?: number;
}>;

export function MagneticButton({ children, className = "", href, onClick, type = "button", pull = 0.3 }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const within =
      Math.abs(e.clientX - cx) < r.width / 2 + 80 && Math.abs(e.clientY - cy) < r.height / 2 + 80;
    if (!within) return;
    x.set((e.clientX - cx) * pull);
    y.set((e.clientY - cy) * pull);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        style={{ x: sx, y: sy }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
