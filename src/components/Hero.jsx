import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen pt-28 pb-16 px-6 md:px-20 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-white/90 backdrop-blur rounded-[32px] border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.28)] px-6 sm:px-10 lg:px-14 py-12 sm:py-14">
          <div className="pointer-events-none absolute -top-12 right-0 h-44 w-44 rounded-full bg-gradient-to-br from-indigo-200/70 to-violet-200/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-0 h-52 w-52 rounded-full bg-gradient-to-tr from-sky-200/60 to-indigo-200/60 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700">
                Introduction
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Toufeeq Ahmad Mir
              </h1>

              <p className="mt-5 max-w-3xl text-lg sm:text-xl leading-8 text-slate-600">
                Computer Science engineering student building clean web experiences,
                practical software solutions, and user-focused digital products.
              </p>

              <p className="mt-4 max-w-3xl text-base sm:text-lg leading-8 text-slate-500">
                I enjoy working with Java, React, Node.js, SQL, and modern frontend
                tools while continuously improving my problem-solving and development
                skills through hands-on projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  Java
                </span>
                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  Full Stack Development
                </span>
                <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  Problem Solving
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition"
                >
                  View Projects
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 bg-slate-900 text-white font-semibold shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 bg-slate-900 text-white-700 font-semibold shadow-lg shadow-indigo-200/40 hover:bg-indigo-100 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-left shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Focus Areas
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Primary Strength</p>
                  <p className="mt-1 text-xl font-bold text-white">Java and web development</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Current Goal</p>
                  <p className="mt-1 text-base leading-7 text-slate-200">
                    Building real projects that improve coding depth, design quality,
                    and backend understanding.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-start gap-6 text-2xl text-indigo-300">
                <a
                  href="https://github.com/toufeeqmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-300 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/toufeeq-mir-2352a7203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-300 transition-colors"
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
