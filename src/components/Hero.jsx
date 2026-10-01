import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen pt-28 pb-16 px-6 md:px-20 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-[#112240]/70 backdrop-blur rounded-[32px] border border-[#233554] shadow-[0_30px_80px_rgba(2,12,27,0.45)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14">
          <div className="pointer-events-none absolute -top-12 right-0 h-44 w-44 rounded-full bg-[#64ffda]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-0 h-52 w-52 rounded-full bg-[#8892b0]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-[#64ffda]/35 bg-[#64ffda]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#64ffda]">
                Introduction
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e6f1ff]">
                Toufeeq Ahmad Mir
              </h1>

              <p className="mt-5 text-base sm:text-lg font-semibold text-[#ccd6f6]">
                Full Stack Developer
                <span className="mx-3 text-[#64ffda]">&bull;</span>
                Kashmir, India
              </p>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-8 text-[#8892b0]">
                I build clean, responsive web applications with modern frontend
                interfaces and reliable backend systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="rounded-full bg-[#0a192f] px-4 py-2 text-sm font-semibold text-[#e6f1ff] border border-[#233554]">
                  Java
                </span>
                <span className="rounded-full bg-[#64ffda]/10 px-4 py-2 text-sm font-semibold text-[#64ffda] border border-[#64ffda]/20">
                  Full Stack Development
                </span>
                <span className="rounded-full bg-[#233554] px-4 py-2 text-sm font-semibold text-[#ccd6f6]">
                  Problem Solving
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#64ffda] text-[#0a192f] font-semibold shadow-lg shadow-[#64ffda]/10 hover:bg-[#9effe5] transition"
                >
                  View Projects
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#64ffda]/50 bg-transparent text-[#64ffda] font-semibold hover:bg-[#64ffda]/10 transition"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#233554] bg-[#233554]/55 text-[#ccd6f6] font-semibold hover:border-[#64ffda]/40 hover:text-[#64ffda] transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-[#233554] bg-[#0a192f] p-6 text-left shadow-[0_24px_60px_rgba(2,12,27,0.35)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#64ffda]">
                Focus Areas
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-[#8892b0]">Primary Strength</p>
                  <p className="mt-1 text-xl font-bold text-[#e6f1ff]">Java and web development</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-[#8892b0]">Current Goal</p>
                  <p className="mt-1 text-base leading-7 text-[#ccd6f6]">
                    Building real projects that improve coding depth, design quality,
                    and backend understanding.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-start gap-6 text-2xl text-[#64ffda]">
                <a
                  href="https://github.com/toufeeqmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6f1ff] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/toufeeq-mir-2352a7203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6f1ff] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                {/* <a
                  href="#"
                  className="hover:text-violet-300 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-violet-300 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
