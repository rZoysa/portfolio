export default function Navbar() {
  return (
    <nav className="bg-white/0 backdrop-blur-lg text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Rithik Zoysa</h1>
        <div className="font-bold text-gray-300">
          <a href="#" className="mx-3 hover:text-white hover:scale-110 inline-block transition-transform duration-200">Home</a>
          <a href="#about" className="mx-3 hover:text-white hover:scale-110 inline-block transition-transform duration-200">About</a>
          <a href="#experience" className="mx-3 hover:text-white hover:scale-110 inline-block transition-transform duration-200">Experience</a>
          <a href="#projects" className="mx-3 hover:text-white hover:scale-110 inline-block transition-transform duration-200">Projects</a>
          <a href="#contact" className="mx-3 hover:text-white hover:scale-110 inline-block transition-transform duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}
