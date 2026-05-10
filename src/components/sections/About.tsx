"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RedSquare, RevealLine, SectionHead } from "@/components/ui/SectionHead";

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="01" label="About">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>A small studio with a</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">long</span>
              </RevealLine>{" "}
              <RevealLine>memory</RevealLine>
              <RedSquare />
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-up space-y-6 text-[17px] leading-[1.55] text-ink">
            <p className="max-w-[44ch]">
              Newtone is a Navi Mumbai studio built for teams that need{" "}
              <span className="font-romance italic">more</span> than a freelancer and{" "}
              <span className="font-romance italic">less</span> than a 60-person agency. Our work moves at the pace of in-house, with the consistency of a system.
            </p>
            <p className="max-w-[44ch]">
              We don&apos;t pitch what we don&apos;t ship ourselves. Every discipline — print to 3D, deck to UI — is handled by the same people who took the brief.
            </p>
          </div>
          <div className="reveal-up space-y-6 text-[17px] leading-[1.55] text-ink">
            <p className="max-w-[44ch]">
              The posture is the product:{" "}
              <span className="font-romance italic">quiet, exact, finished</span>. Decisions land fast, files are named the way your team likes, and edge cases are caught before review.
            </p>
            <p className="max-w-[44ch]">
              We grow only when a specific kind of work calls for a specific kind of designer. Slowly, on purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
