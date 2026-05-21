import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { RiRobot2Fill } from "react-icons/ri";
import { FaReceipt } from "react-icons/fa6";
import {
  FaHotel,
  FaUsers,
  FaRobot,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

         {
      title: "AI Prep. Hub",
      shortDescription:
        "An AI interview prep dashboard with analytics, mock practice, and progress tracking.",
      description:
        "This project is a modern AI-powered interview preparation dashboard built with React and Tailwind CSS, redesigned as a premium AI Command Center while preserving all existing logic, API calls, and functionality. Users can experience an interactive and responsive dashboard with smart analytics, performance tracking, practice and mock interview actions, AI-style insight panels, readiness progress indicators, streak-based gamification, and activity timelines that make preparation feel more structured, engaging, and personalized.",
      technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "JavaScript", "REST API"],
      details: [
        "Built a dashboard for structured interview preparation and progress visibility.",
        "Included analytics, readiness tracking, and mock practice actions.",
        "Focused on making preparation feel more interactive, engaging, and organized.",
      ],
      icon: <FaRobot className="text-5xl text-green-400" />,
      githubUrl: "https://github.com/toufeeqmir/VivaCoach-AI",
      liveLink: "https://viva-coach-ai.vercel.app"
    },
    {
      title: "Bill-Bond",
      shortDescription:
        "A shared billing web app for organizing expenses and user communication.",
      description:
        "Bill-Bond is a web application designed to simplify shared billing and communication between users. It helps organize bill-related interactions, improve clarity, and create a smoother experience for managing connected financial activities.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Socket.io", "JavaScript"],
      details: [
        "Built a shared billing workflow to help users manage connected expenses more clearly.",
        "Designed a smoother communication flow around billing-related interactions.",
        "Focused on making expense coordination simpler and easier to understand.",
      ],
      icon: <FaReceipt className="text-5xl text-blue-500" />,
      githubUrl: "https://github.com/toufeeqmir/smart-split-ai",
    },
    {
      title: "Airbnb Clone",
      shortDescription:
        "A booking platform with property listings, authentication, and stay management.",
      description:
        "A feature-rich Airbnb clone with login, registration, property listings, and booking functionality.",
      technologies: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript"],
      details: [
        "Implemented authentication flows for account access and protected actions.",
        "Built listing and booking features to simulate a real rental platform experience.",
        "Structured the app around property browsing, stay details, and reservation handling.",
      ],
      icon: <FaHotel className="text-5xl text-pink-500" />,
      githubUrl: "https://github.com/toufeeqmir/airbnb-clone",
    },
    {
      title: "Smart-ai-note-app",
      shortDescription:
        "An AI note-taking app with summarization, auto-tagging, and cleanup tools.",
      description:
        "An AI-powered note-taking web app built with React and Tailwind CSS featuring smart summarization, auto-tagging, and note cleanup powered by OpenRouter.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "OpenRouter", "REST API"],
      details: [
        "Added AI-powered summarization to make notes easier to review quickly.",
        "Used auto-tagging and cleanup flows to improve note organization.",
        "Built a clean interface for writing, managing, and refining notes efficiently.",
      ],
      icon: <RiRobot2Fill className="text-5xl text-violet-500" />,
      liveLink: "https://toufeeq-ai-note-app.vercel.app",
      githubUrl: "https://github.com/toufeeqmir/ai-note-app",
    },
    {
      title: "Dev-Circle",
      shortDescription:
        "A developer community platform for sharing ideas and collaborating on projects.",
      description:
        "A community platform for developers to share knowledge, collaborate on projects, and connect with like-minded individuals.",
      technologies: ["React", "Node.js", "Express.js", "JavaScript", "HTML", "CSS", "REST API"],
      details: [
        "Created a space where developers can share knowledge and interact around projects.",
        "Focused on community-driven collaboration and idea exchange.",
        "Designed the experience to feel approachable for discussion and contribution.",
      ],
      icon: <FaUsers className="text-5xl text-green-400" />,
      githubUrl: "https://github.com/toufeeqmir/dev-circle",
    },

  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent px-6 py-16"
    >
      <div className="mx-auto max-w-7xl text-center">
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 bg-gradient-to-r from-indigo-200 to-violet-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        >
          Featured Work
        </Motion.h2>

        <p className="mx-auto -mt-5 mb-10 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          A snapshot of projects built while learning and experimenting with modern web technologies.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:bg-white/10"
            >
              <div className="mb-6">{project.icon}</div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-slate-200">{project.shortDescription}</p>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-300 transition hover:text-white"
              >
                Details
              </button>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-indigo-200 transition hover:bg-white/10 hover:text-white"
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
                    className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/20 hover:text-white"
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

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-8">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-white/10 bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10">
              <h3 className="text-2xl font-bold text-white sm:text-4xl">
                {selectedProject.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-12 w-12 items-center justify-center border border-white/10 text-2xl font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
                aria-label="Close project details"
              >
                x
              </button>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Technologies
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Project Details
                </p>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    {selectedProject.title}
                  </h4>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-white/10" />

                  <h5 className="mt-6 text-xl font-bold text-white">
                    Features
                  </h5>
                  <ul className="mt-4 space-y-3 text-base leading-8 text-slate-300">
                    {selectedProject.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-indigo-200 transition hover:bg-white/10 hover:text-white"
                      >
                        <FaGithub className="text-lg" />
                        View on GitHub
                      </a>
                    )}

                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/20 hover:text-white"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
