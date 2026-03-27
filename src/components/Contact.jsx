import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    // Opens the user's email client (no backend required).
    window.location.href = `mailto:toufeeqmir@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 bg-transparent flex flex-col items-center px-4 md:px-20"
    >
      {/* Section Heading */}
      <Motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-200"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </Motion.h2>

      {/* Intro Message */}
      <Motion.p
        className="text-md md:text-lg text-slate-200 text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Got an idea or want to collaborate? I’m open to learning and creating amazing projects together.  
        Just drop me a message below—or connect with me directly through my contact details!
      </Motion.p>

      {/* Contact Details */}
      <Motion.div
        className="text-white/90 text-center mb-8 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg flex items-center justify-center gap-2">
          <FaPhone className="text-indigo-600" /> 
          <span className="font-semibold">+91 6005460432</span>
        </p>
        <p className="text-lg flex items-center justify-center gap-2">
          <FaEnvelope className="text-indigo-600" /> 
          <span className="font-semibold">toufeeqmir@example.com</span>
        </p>
      </Motion.div>

      {/* Animated Form */}
      <Motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300/40 transition duration-200 text-white placeholder:text-white/50"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300/40 transition duration-200 text-white placeholder:text-white/50"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
          className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300/40 transition duration-200 resize-none text-white placeholder:text-white/50"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-3 md:px-6 md:py-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition duration-200"
        >
          Send Message
        </button>
      </Motion.form>
    </section>
  );
}

export default Contact;
