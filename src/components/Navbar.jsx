import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#0a192f]/85 shadow-sm border-b border-[#233554]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 flex items-center justify-center bg-[#112240] rounded-full ring-1 ring-[#64ffda]/30 transition">
            <span className="text-sm md:text-base font-bold tracking-widest text-[#64ffda]">
              S/W
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#e6f1ff]">
            My Portfolio
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#ccd6f6] font-semibold text-lg hover:text-[#64ffda] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#112240] hover:bg-[#233554] text-[#e6f1ff] transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a192f]/95 border-t border-[#233554]">
          <ul className="px-6 pb-4 pt-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#ccd6f6] font-semibold text-lg hover:text-[#64ffda] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
