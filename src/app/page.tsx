import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/sections/Work";
import { WhyUs } from "@/components/sections/WhyUs";
import { Cursor } from "@/components/motion/Cursor";
import { Preloader } from "@/components/motion/Preloader";
import { ScrollIndicator } from "@/components/motion/ScrollIndicator";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export default function Page() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <ScrollIndicator />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Work />
        <Process />
        <Clients />
        <WhyUs />
        <Contact />
      </main>
    </>
  );
}
