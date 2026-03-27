import React from "react";
import { motion as Motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "bg-indigo-600",
      skills: [
        { name: "Java", level: 75 },
        { name: "Python", level: 75 },
        { name: "C++", level: 40 },
      ],
    },
    {
      title: "Frontend",
      color: "bg-violet-600",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      title: "Backend",
      color: "bg-indigo-600",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 65 },
        { name: "MySQL / SQL", level: 60 },
      ],
    },
    {
      title: "Tools",
      color: "bg-violet-600",
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
      className="w-full py-16 bg-transparent flex flex-col items-center px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
        Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {skillCategories.map((category, idx) => (
          <Motion.div
            key={idx}
            className="bg-white/80 border border-gray-200 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-gray-800">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <Motion.div
                      className={`${category.color} h-2.5 rounded-full`}
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
