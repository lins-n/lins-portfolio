import React from "react";
import Header from "./Components/Header Comp/Header";
import Nav from "./Components/Nav Comp/Nav";
import About from "./Components/About Comp/About";
import Experience from "./Components/Experience Comp/Experience";
import Services from "./Components/Services Comp/Services";
import Portfolio from "./Components/Portfolio Comp/Portfolio";
import Contact from "./Components/Contact Comp/Contact";
import Footer from "./Components/Footer Comp/Footer";
import Reviews from "./Components/Reviews Comp/Reviews";
import Logo from "./Components/Logo Comp/Logo";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Logo />
      <Services />
      <Portfolio />
      {/* <Reviews/> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
