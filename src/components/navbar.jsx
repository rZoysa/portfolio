import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/0 backdrop-blur-lg text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Rithik Zoysa</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex font-bold text-gray-300">
          <a href="#" className="mx-3 hover:text-white hover:scale-110 transition-transform duration-200">Home</a>
          <a href="#about" className="mx-3 hover:text-white hover:scale-110 transition-transform duration-200">About</a>
          <a href="#experience" className="mx-3 hover:text-white hover:scale-110 transition-transform duration-200">Experience</a>
          <a href="#projects" className="mx-3 hover:text-white hover:scale-110 transition-transform duration-200">Projects</a>
          <a href="#contact" className="mx-3 hover:text-white hover:scale-110 transition-transform duration-200">Contact</a>
        </div>
      </div>

      {/* Mobile Menu - Fix with Height Animation */}
      <div
        className={`overflow-hidden text-white flex flex-col items-center font-bold
        transition-all duration-300 ease-in-out 
        ${isOpen ? "h-auto py-4 opacity-100" : "h-0 py-0 opacity-0"}`}
      >
        <a href="#" className="py-2 text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="py-2 text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
        <a href="#experience" className="py-2 text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" className="py-2 text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" className="py-2 text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
