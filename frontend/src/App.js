import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;