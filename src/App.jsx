import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
