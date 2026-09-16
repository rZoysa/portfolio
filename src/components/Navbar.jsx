import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Rithik Zoysa, back to top"
        >
          rithik<span className="brand-dot">.</span>
          <span className="brand-surname">zoysa</span>
        </a>
        <div className="nav-links">
          {navigation.map(({ name, href }) => (
            <a key={href} href={href}>
              {name}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Let's talk <FiArrowUpRight aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className="mobile-navigation container"
        hidden={!menuOpen}
      >
        {navigation.map(({ name, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {name}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>
          Contact <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
