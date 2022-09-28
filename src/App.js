import React from "react";
import "./App.css";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Navbar from "./components/UI/Navbar";
import About from "./Sections/about";
import Prizes from "./Sections/prizes";
import Sponsers from "./Sections/sponsers";
import Milestones from "./Sections/milestones";
import Speakers from "./Sections/speakers";
import Accordion from "./Sections/faq";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <Milestones />
      <Prizes />

      <Speakers />

      <Sponsers />
      <Accordion />

      <Footer />
    </div>
  );
}

export default App;
