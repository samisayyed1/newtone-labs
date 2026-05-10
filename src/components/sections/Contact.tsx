"use client";

import { useState } from "react";
import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine } from "@/components/ui/SectionHead";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "email", "company"];
    const errs: Record<string, boolean> = {};
    for (const k of required) {
      const v = String(data.get(k) || "").trim();
      if (!v) errs[k] = true;
      if (k === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) errs[k] = true;
    }
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="relative bg-blood text-ink">
      <div className="mx-auto max-w-page px-6 pb-16 pt-20 sm:px-8 lg:px-20 lg:pt-28">
        <h2 className="font-display text-[clamp(72px,15vw,260px)] uppercase leading-[0.98] tracking-[-0.02em] text-ink">
          <span className="block">
            <RevealLine>Let&apos;s</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance font-normal italic lowercase">make</span>
            </RevealLine>
          </span>
          <span className="mt-2 block">
            <RevealLine>something</RevealLine>{" "}
            <RevealLine romance>
              <span className="font-romance font-normal italic lowercase">loud</span>
            </RevealLine>
            .
          </span>
        </h2>

        {!sent ? (
          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal-up mt-16 grid max-w-[1100px] grid-cols-1 gap-10 border-t border-cream/30 pt-10 lg:mt-20 lg:gap-12 lg:pt-14"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <Field name="name" label="Full name" required error={errors.name} placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" required error={errors.email} placeholder="jane@company.com" />
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <Field name="phone" type="tel" label="Phone / WhatsApp" placeholder="+1 555 0123" />
              <Field name="company" label="Company or website" required error={errors.company} placeholder="Acme Inc · acme.com" />
            </div>
            <Field
              name="notes"
              label="What are we shipping?"
              placeholder="A few lines on the deliverable, channels, and timing."
              textarea
            />
            <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-5 font-display text-[16px] uppercase tracking-[0.06em] text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
              >
                Send brief <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <p className="max-w-[36ch] font-mono text-[10px] uppercase tracking-eyebrow text-cream/85">
                By submitting, you agree we may contact you about your enquiry.
              </p>
            </div>
          </form>
        ) : (
          <div className="reveal-up mt-16 max-w-[640px] border-t border-cream/30 pt-10 text-cream lg:mt-20 lg:pt-14">
            <div className="font-display text-[40px] uppercase leading-[1.05] sm:text-[56px]">
              <span className="font-romance italic font-normal lowercase">sent.</span>
            </div>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.65]">
              Thanks. We&apos;ll be back within one business day at the email you provided. If it&apos;s
              urgent, ping <strong>+91 83560 47062</strong> on WhatsApp.
            </p>
          </div>
        )}

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-cream/30 pt-10 lg:mt-28 lg:grid-cols-3 lg:gap-16">
          <FooterCol label="Email">
            <a className="block text-cream hover:underline" href="mailto:info@newtone.design">
              info@newtone.<br />design
            </a>
          </FooterCol>
          <FooterCol label="Phone / WhatsApp">
            <a className="block text-cream hover:underline" href="tel:+918356047062">
              +91 83560<br />47062
            </a>
          </FooterCol>
          <FooterCol label="Studio">
            <p className="text-[16px] font-medium leading-[1.5] normal-case text-cream">
              Newtone Creative Labs<br />
              Nerul, Navi Mumbai 400706<br />
              India · IST (UTC+5:30)
            </p>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/30 pt-6 font-mono text-[10px] uppercase tracking-eyebrow text-cream/85 sm:flex-row sm:items-center">
          <span>© 2026 Newtone Creative Labs Pvt. Ltd.</span>
          <span className="flex gap-6">
            <a href="https://behance.net" className="hover:text-cream">Behance →</a>
            <a href="https://linkedin.com" className="hover:text-cream">LinkedIn →</a>
            <a href="https://instagram.com" className="hover:text-cream">Instagram →</a>
          </span>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  error?: boolean;
}) {
  const id = `f-${name}`;
  const baseInput =
    "block w-full bg-transparent px-0 py-3 text-[18px] text-cream placeholder:text-cream/45 caret-cream outline-none transition-[border-color,border-width] duration-300";
  const border = error ? "border-cream" : "border-cream/45";
  const focus = "focus:border-cream focus:border-b-2";
  return (
    <label htmlFor={id} className="block">
      <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-cream">
        {label}
        {required && <span className="ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={`${baseInput} resize-y border-0 border-b ${border} ${focus} mt-2`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`${baseInput} border-0 border-b ${border} ${focus} mt-2`}
        />
      )}
    </label>
  );
}

function FooterCol({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 font-mono text-[10px] uppercase tracking-eyebrow text-cream/80">{label}</div>
      <div className="font-display text-[clamp(22px,2.4vw,30px)] uppercase leading-[1.15] tracking-tight text-cream">
        {children}
      </div>
    </div>
  );
}
