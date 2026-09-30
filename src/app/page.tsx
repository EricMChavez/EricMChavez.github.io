import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Interests />
      <Contact />
    </main>
  );
}
