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
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-slate-950/55 shadow-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-full ring-1 ring-white/15 transition">
            <span className="text-sm md:text-base font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-300">
              TM
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-200">
            My Portfolio
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/90 font-semibold text-lg hover:text-indigo-200 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/15 text-white transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/85 border-t border-white/10">
          <ul className="px-6 pb-4 pt-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/90 font-semibold text-lg hover:text-indigo-200 transition-colors"
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
