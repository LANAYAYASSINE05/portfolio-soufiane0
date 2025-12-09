import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Technologies = lazy(() => import('./components/Technologies'))
const Methodology = lazy(() => import('./components/Methodology'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#0077B6] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Header />
      <main className="pt-8 md:pt-10">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Technologies />
          <Methodology />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
