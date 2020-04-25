import React from 'react';
import './App.css';
import Banner from 'components/Banner/Banner';
import Navbar from 'components/Navbar/Navbar';
import About from 'components/About/About';
import Tools from 'components/Tools/Tools';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';
import Section from 'components/Section/Section';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Navbar />
      <Section 
        id="about"
        name="About Me"
        wide={false}
        component={<About />}
      />
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

export default App;
