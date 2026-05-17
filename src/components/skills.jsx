import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiC,
  SiExpress,
  SiMysql,
  SiJavascript,
  SiSocketdotio,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-lg text-indigo-200" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg text-indigo-200" /> },
        { name: "HTML", icon: <FaHtml5 className="text-lg text-indigo-200" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-lg text-indigo-200" /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-lg text-violet-200" /> },
        { name: "Express.js", icon: <SiExpress className="text-lg text-violet-200" /> },
        { name: "MySQL", icon: <SiMysql className="text-lg text-violet-200" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-lg text-violet-200" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-lg text-indigo-200" /> },
        { name: "Java", icon: <FaJava className="text-lg text-indigo-200" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-lg text-indigo-200" /> },
        { name: "Python", icon: <FaPython className="text-lg text-indigo-200" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-lg text-violet-200" /> },
        { name: "GitHub", icon: <FaGithub className="text-lg text-violet-200" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-transparent px-6 py-20 md:px-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Technical Expertise.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Core technologies already used across my portfolio projects and learning work.
          </p>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-12 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.12 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {category.title}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
