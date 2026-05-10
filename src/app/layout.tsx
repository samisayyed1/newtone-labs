import type { Metadata, Viewport } from "next";
import { fontBody, fontDisplay, fontMono, fontRomance } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newtone.design"),
  title: "Newtone Creative Labs — Bold Visuals, Fast Delivery, Real Impact",
  description:
    "A three-designer studio in Navi Mumbai shipping social, decks, motion, 3D and UI for cybersecurity, fintech and healthcare teams worldwide. 6+ years embedded with global clients. Retainers from $26/hr.",
  openGraph: {
    title: "Newtone Creative Labs",
    description:
      "Bold visuals. Fast delivery. Real impact. A three-designer studio embedded with cybersecurity, fintech and healthcare teams worldwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newtone Creative Labs",
    description: "Bold visuals. Fast delivery. Real impact.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F2EBE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontRomance.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
