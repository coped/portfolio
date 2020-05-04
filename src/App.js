import React from "react";
import "./App.css";
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

export default function App() {
  return (
    <React.Fragment>
      <Banner />
      <Navbar />
      <Section id="about" name="About Me" wide={false} component={<About />} />
      <Section
        id="tools"
        name="My Favorite Tools"
        wide={true}
        component={<Tools />}
      />
      <Section
        id="projects"
        name="Projects"
        wide={true}
        component={<Projects />}
      />
      <Section
        id="contact"
        name="Contact"
        wide={false}
        component={<Contact />}
      />
      <Footer />
    </React.Fragment>
  );
}
