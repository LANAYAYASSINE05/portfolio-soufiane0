import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Methodology from './components/Methodology'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <About />
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
