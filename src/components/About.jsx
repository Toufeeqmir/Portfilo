import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300 mb-5">
        I am a passionate and dedicated Computer Science engineering student with a strong interest in software development, problem-solving, and building impactful digital solutions. I have a solid foundation in data structures and algorithms, and I enjoy applying my skills to develop real-world projects that combine both functionality and user experience.

I am particularly interested in emerging technologies such as artificial intelligence and web development, and I continuously strive to expand my knowledge by working on practical projects and exploring new tools. I am a quick learner, a collaborative team player, and someone who values clean, efficient, and scalable code.

Currently, I am focused on enhancing my technical expertise while contributing to meaningful projects that solve real-life problems. My goal is to grow as a skilled engineer and create innovative solutions that make a positive impact.

        </p>
        <p className="text-lg text-gray-300 mb-8">
          I’m continuously learning new technologies, exploring creative solutions, and focusing on user experience 
          to make my projects stand out.
        </p>

        {/* Skills Highlights */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <span className="px-4 py-2 bg-purple-600/70 text-white rounded-full ring-1 ring-white/10 transition duration-200">
            React
          </span>
          <span className="px-4 py-2 bg-pink-500/70 text-white rounded-full ring-1 ring-white/10 transition duration-200">
            Node.js
          </span>
          <span className="px-4 py-2 bg-yellow-400/90 text-black rounded-full ring-1 ring-yellow-200/30 transition duration-200">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-indigo-500/70 text-white rounded-full ring-1 ring-white/10 transition duration-200">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-green-500/70 text-white rounded-full ring-1 ring-white/10 transition duration-200">
            HTML & CSS
          </span>
        </div>
      </div>

      {/* Optional Image */}
      {/* <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/img1.jpg"
          alt="About Me"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl"
        /> */}
      {/* </div> */}
    </section>
  );
}

export default About;
