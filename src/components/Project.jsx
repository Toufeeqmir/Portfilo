import React from "react";
import { motion as Motion } from "framer-motion";
import { RiRobot2Fill } from "react-icons/ri";
import {
  FaCloudSun,
  FaHotel,
  FaUsers,
  FaRobot,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive weather app built with real-time API integration to fetch and display accurate weather updates.",
      icon: <FaCloudSun className="text-5xl text-blue-400" />,
      githubUrl: "https://github.com/toufeeqmir/weather-app",
    },
    {
      title: "Airbnb Clone",
      description:
        "A feature-rich Airbnb clone with login, registration, property listings, and booking functionality.",
      icon: <FaHotel className="text-5xl text-pink-500" />,
      githubUrl: "https://github.com/toufeeqmir/airbnb-clone",
    },
    {
      title: "Smart-ai-note-app",
      description:
        "An AI-powered note-taking web app built with React and Tailwind CSS featuring smart summarization, auto-tagging, and note cleanup powered by OpenRouter.",
      icon: <RiRobot2Fill className="text-5xl text-violet-500" />,
      liveLink: "https://toufeeq-ai-note-app.vercel.app",
      githubUrl: "https://github.com/toufeeqmir/ai-note-app",
    },
    {
      title: "Dev-Circle",
      description:
        "A community platform for developers to share knowledge, collaborate on projects, and connect with like-minded individuals.",
      icon: <FaUsers className="text-5xl text-green-400" />,
      githubUrl: "https://github.com/toufeeqmir/dev-circle",
    },
    {
      title: "Real Time AI Powered Trainer for Speech and Body Language",
      description:
        "A real-time AI-powered trainer for improving speech and body language skills.",
      icon: <FaRobot className="text-5xl text-green-400" />,
      githubUrl:
        "https://github.com/toufeeqmir/ai-speech-body-language-trainer",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent py-16 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-200"
        >
          My Projects
        </Motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition"
            >
              <div className="mb-6">{project.icon}</div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-slate-200 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-indigo-200 hover:bg-white/10 hover:text-white transition"
                  >
                    <FaGithub className="text-lg" />
                    View on GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-300 hover:bg-violet-500/20 hover:text-white transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;