import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Qualification from "./components/qualification";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
