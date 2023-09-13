import React from "react";
import About from "../About/About";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";

import ScrollTop from "../../Shared/ScrollTop/ScrollTop";
import Feature from "../Feature/Feature";
import Protect from "../Protect/Protect";

const Home = () => {
  return (
    <main>
      <Header />
      <About />
      <Feature />
      <Contact />
      <Protect />
      <Footer />
      <ScrollTop />
    </main>
  );
};

export default Home;
