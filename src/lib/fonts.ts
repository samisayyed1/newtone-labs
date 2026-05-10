import { Anton, Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

export const fontDisplay = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export const fontRomance = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["italic"],
  display: "swap",
  variable: "--font-romance",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});
