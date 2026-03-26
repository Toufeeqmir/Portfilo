import React from "react";
import { motion as Motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "bg-red-400/80",
      skills: [
        { name: "Java", level: 75 },
        { name: "Python", level: 75 },
        { name: "C++", level: 40 },
      ],
    },
    {
      title: "Frontend",
      color: "bg-blue-400/80",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      title: "Backend",
      color: "bg-green-400/80",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 65 },
        { name: "MySQL / SQL", level: 60 },
      ],
    },
    {
      title: "Tools",
      color: "bg-yellow-300/80",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 bg-gray-900 flex flex-col items-center px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-white mb-10">Technical Expertise</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {skillCategories.map((category, idx) => (
          <Motion.div
            key={idx}
            className="bg-gray-900/40 border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-white">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
            <Motion.div
                      className={`${category.color} h-3 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.2 }}
                    ></Motion.div>
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
