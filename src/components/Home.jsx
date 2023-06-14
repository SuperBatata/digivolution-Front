import React from "react";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";
import Work from "./Work";
import Contact from "./Contact";
import Nav from "./Navbar";
import Prices from "./prices";
function Home() {
  return (
    <>
      <Nav />
      <About />
      <Services />
      <Clients />
      <Work />
      <Prices />
      <Contact />
    </>
  );
}

export default Home;
