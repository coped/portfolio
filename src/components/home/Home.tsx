import { ReactElement } from "react";
import {
  Banner,
  Navbar,
  About,
  Tools,
  Projects,
  Contact,
  Footer,
  Section,
} from "components/home";

export default function Home(): ReactElement {
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
