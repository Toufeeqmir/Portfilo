import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-transparent text-slate-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed">
          <p>
            I am a passionate and dedicated Computer Science engineering student with a strong interest in software
            development, problem-solving, and building impactful digital solutions. I have a solid foundation in data
            structures and algorithms, and I enjoy applying my skills to develop real-world projects that combine both
            functionality and user experience.
          </p>
          <p>
            I am currently pursuing my Computer Science engineering degree at the Islamic University of Science and
            Technology, Awantipora, and my average CGPA till now is 7.0222.
          </p>
          <p>
            I am particularly interested in emerging technologies such as artificial intelligence and web development,
            and I continuously strive to expand my knowledge by working on practical projects and exploring new tools.
            I am a quick learner, a collaborative team player, and someone who values clean, efficient, and scalable
            code.
          </p>
          <p>
            Currently, I am focused on enhancing my technical expertise while contributing to meaningful projects that
            solve real-life problems. My goal is to grow as a skilled engineer and create innovative solutions that make
            a positive impact.
          </p>
        </div>

        {/* Skills Highlights */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
          <span className="px-4 py-2 bg-white/5 text-indigo-200 rounded-full ring-1 ring-white/10">
            React
          </span>
          <span className="px-4 py-2 bg-white/5 text-violet-200 rounded-full ring-1 ring-white/10">
            Node.js
          </span>
          <span className="px-4 py-2 bg-white/5 text-indigo-200 rounded-full ring-1 ring-white/10">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-white/5 text-violet-200 rounded-full ring-1 ring-white/10">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-white/5 text-indigo-200 rounded-full ring-1 ring-white/10">
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
