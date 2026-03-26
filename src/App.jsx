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
    <div className="min-h-screen bg-black text-white">
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
