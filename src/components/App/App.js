import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Tools from '../Tools/Tools';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
