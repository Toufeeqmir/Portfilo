import './App.css'
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


import Projects from "./components/Project";
import Skills from './components/skills'
import Contact from "./components/Contact";
import Footer from './components/footer';
import Resume from "./components/Resume";
function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
       <Hero />
       <About/>
        <Projects/>
       <Skills/>
        
      <Contact />
      <Resume />
      <Footer/>
    </div>
  );
}

export default App;
