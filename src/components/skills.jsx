import React from "react";
import { motion as Motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      accent: "from-indigo-500 to-sky-400",
      summary: "Core languages I use to write logic, solve problems, and build software foundations.",
      skills: ["Java", "Python", "C++", "JavaScript"],
    },
    {
      title: "Frontend Development",
      accent: "from-violet-500 to-fuchsia-400",
      summary: "Tools I use to craft responsive interfaces with clean structure and better user experience.",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      accent: "from-sky-500 to-indigo-500",
      summary: "Backend technologies I use for APIs, server logic, and working with data.",
      skills: ["Node.js", "Express.js", "MySQL", "SQL"],
    },
    {
      title: "Tools",
      accent: "from-amber-400 to-orange-500",
      summary: "Everyday tools that support version control, coding workflow, and API testing.",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 bg-transparent flex flex-col items-center px-6 md:px-20"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
            Skills
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Technical Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-8">
            A cleaner snapshot of the technologies I work with, grouped by the kind of work I enjoy doing most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {skillCategories.map((category, idx) => (
            <Motion.div
              key={idx}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm shadow-[0_22px_50px_rgba(2,6,23,0.28)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${category.accent}`} />
              <h3 className="mt-5 text-xl font-bold text-white">
                {category.title}
              </h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-slate-300">
                {category.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/12 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-100 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
