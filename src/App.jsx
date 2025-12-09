import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Methodology from './components/Methodology'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Header />
      <main className="pt-8 md:pt-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Technologies />
        <Methodology />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
