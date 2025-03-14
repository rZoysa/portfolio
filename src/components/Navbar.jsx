export default function Navbar() {
  return (
    <nav className="bg-white/20 backdrop-blur-lg text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <a href="#" className="mx-3">Home</a>
          <a href="#about" className="mx-3">About</a>
          <a href="#experience" className="mx-3">Experience</a>
          <a href="#projects" className="mx-3">Projects</a>
          <a href="#contact" className="mx-3">Contact</a>
        </div>
      </div>
    </nav>
  );
}
