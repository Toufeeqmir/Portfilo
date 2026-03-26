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
      className="w-full min-h-screen py-16 bg-gray-800 flex flex-col items-center px-4 md:px-20"
    >
      {/* Section Heading */}
      <Motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </Motion.h2>

      {/* Intro Message */}
      <Motion.p
        className="text-md md:text-lg text-gray-200 text-center max-w-2xl mb-10"
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
        className="text-white text-center mb-8 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg flex items-center justify-center gap-2">
          <FaPhone className="text-yellow-400" /> 
          <span className="font-semibold">+91 6005460432</span>
        </p>
        <p className="text-lg flex items-center justify-center gap-2">
          <FaEnvelope className="text-yellow-400" /> 
          <span className="font-semibold">toufeeqmir@example.com</span>
        </p>
      </Motion.div>

      {/* Animated Form */}
      <Motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900/40 border border-white/10 rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-4"
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
          className="p-3 md:p-4 rounded-lg border border-yellow-300/70 bg-black/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 text-white placeholder:text-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 md:p-4 rounded-lg border border-yellow-300/70 bg-black/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 text-white placeholder:text-gray-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
          className="p-3 md:p-4 rounded-lg border border-yellow-300/70 bg-black/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 resize-none text-white placeholder:text-gray-400"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-3 md:px-6 md:py-4 bg-pink-500 text-black font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
        >
          Send Message
        </button>
      </Motion.form>
    </section>
  );
}

export default Contact;
