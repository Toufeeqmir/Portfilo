import React from "react";
import photo from "../images/photo.jpeg";
function Hero() {
  return (
<section
  id="hero"
  className="w-full min-h-screen pt-24 pb-14 flex flex-col items-center justify-center text-center md:text-left px-6 md:px-20 bg-gradient-to-b from-gray-800/60 via-gray-900 to-black text-white"
>
  <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
    {/* Left Content */}
    <div className="flex-1 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300">Toufeeq Mir</span>
      </h1>

      <p className="text-lg md:text-2xl max-w-lg">
        A passionate <span className="font-semibold">Web Developer</span> who loves building creative and functional digital experiences.
        Curious mind, eager learner, and always open for collaboration.
      </p>

      <p className="text-md md:text-lg italic text-yellow-200">
        Web Developer | Problem Solver | Open Source Enthusiast
      </p>

      <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-1">
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg ring-1 ring-yellow-300/40 hover:bg-yellow-300 transition duration-200"
        >
          View Projects
        </a>
        <a
          href="#resume"
          className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 hover:text-white transition duration-200"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 hover:text-white transition duration-200"
        >
          Contact Me
        </a>
        <a
          href="#skills"
          className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 hover:text-white transition duration-200"
        >
          Skills
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center w-full md:w-auto">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-2">
        <img
          src={photo}
          alt="Toufeeq Mir"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl ring-1 ring-white/10"
        />
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
