import React from 'react';
import './App.css';
import Banner from 'components/Banner/Banner';
import Navbar from 'components/Navbar/Navbar';
import About from 'components/About/About';
import Tools from 'components/Tools/Tools';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Navbar />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
