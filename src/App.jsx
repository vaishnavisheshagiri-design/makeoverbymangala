import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import SignatureLooks from "./components/SignatureLooks";
import Portfolio from "./components/Portfolio";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#171513]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <SignatureLooks />
        <Portfolio />
        <Transformations />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;