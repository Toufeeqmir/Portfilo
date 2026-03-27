import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCloudSun, FaSpotify, FaGamepad, FaHotel } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive weather app built with real-time API integration to fetch and display accurate weather updates.",
      icon: <FaCloudSun className="text-5xl text-blue-400" />,
    },
    {
      title: "Airbnb Clone",
      description:
        "A feature-rich Airbnb clone with login, registration, property listings, and booking functionality.",
      icon: <FaHotel className="text-5xl text-pink-500" />,
    },
    {
      title: "Brick Breaker Game (Java)",
      description:
        "A fun arcade-style game built using Java with smooth controls and exciting gameplay.",
      icon: <FaGamepad className="text-5xl text-green-400" />,
    },
    {
      title: "Spotify Clone",
      description:
        "A Spotify-inspired music streaming clone with playlists, albums, and a clean UI.",
      icon: <FaSpotify className="text-5xl text-green-500" />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent py-16 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-200"
        >
          My Projects
        </Motion.h2>

        {/* Projects Grid */}
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
              {/* Icon */}
              <div className="mb-6">{project.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-200">{project.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
