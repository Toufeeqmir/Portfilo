import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 shadow-inner">
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
          className="hover:text-yellow-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/toufeeq-mir-2352a7203/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://Toufeeqmir124@gmail.com"
          className="hover:text-red-500 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
