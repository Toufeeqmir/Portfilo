import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-white/60 backdrop-blur border-t border-gray-200 text-gray-800 py-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
      {/* Left side: Name & rights */}
      <p className="text-sm md:text-md mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Toufeeq Mir. All rights reserved.
      </p>

      {/* Right side: Social icons */}
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://github.com/toufeeqmir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-700 transition duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/toufeeq-mir-2352a7203/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-700 transition duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://Toufeeqmir124@gmail.com"
          className="hover:text-indigo-700 transition duration-200"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
