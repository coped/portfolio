import { ReactElement } from "react";
import { Banner } from "components/home/Banner";
import { Navbar } from "components/home/Navbar";
import { About } from "components/home/About";
import { Tools } from "components/home/Tools";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";
import { Footer } from "components/home/Footer";
import { Section } from "components/ui/Section";

export function Home(): ReactElement {
  return (
    <div>
      <Banner />
      <Navbar />
      <Section id="about" name="About Me" wide={false}>
        <About />
      </Section>
      <Section id="tools" name="My Favorite Tools" wide={true}>
        <Tools />
      </Section>
      <Section id="projects" name="Projects" wide={true}>
        <Projects />
      </Section>
      <Section id="contact" name="Contact" wide={false}>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
