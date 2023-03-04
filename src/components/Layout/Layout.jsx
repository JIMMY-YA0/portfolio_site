import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
