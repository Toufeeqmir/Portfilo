import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
<section
  id="hero"
  className="w-full min-h-screen pt-28 pb-16 px-6 md:px-20 flex items-center justify-center"
>
  <div className="w-full max-w-4xl mx-auto">
    <div className="relative bg-white/85 backdrop-blur rounded-[28px] border border-gray-200 shadow-sm px-6 sm:px-10 py-10 text-center">
      {/* subtle accent */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200/60 to-violet-200/60 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-200/60 to-indigo-200/60 blur-2xl" />

      {/* Photo */}
      <div className="mx-auto w-[230px] sm:w-[260px]">
        <div className="rounded-3xl bg-gray-50 border border-gray-200 p-3">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/photo.jpeg"
              alt="profile"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name + details */}
      <h1 className="mt-7 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
        Toufeeq Ahmad Mir
      </h1>
      <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        A passionate and dedicated Computer Science engineering student focused on software development,
        problem-solving, and building impactful digital solutions.
      </p>

      {/* Primary actions */}
      <div className="mt-7 flex flex-wrap gap-3 justify-center">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          View Projects
        </a>
        <a
          href="#resume"
          className="px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition"
        >
          Contact
        </a>
      </div>

      {/* Socials */}
      <div className="mt-8 flex items-center justify-center gap-6 text-2xl text-indigo-600">
        <a
          href="https://github.com/toufeeqmir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/toufeeq-mir-2352a7203/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="hover:text-violet-600 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-violet-600 transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
