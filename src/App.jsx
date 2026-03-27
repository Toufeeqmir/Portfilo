import './App.css'
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from './components/skills'

import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/footer';
import Resume from "./components/Resume";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-violet-50 text-gray-900">
      <Navbar />
       <Hero />
       <About/>
       <Skills/>
         <Projects/>
      <Contact />
      <Resume />
      <Footer/>
    </div>
  );
}

export default App;
