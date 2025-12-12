import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Methodology from './components/Methodology'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
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
      
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/212719109122?text=Bonjour%20Soufiane,%20je%20souhaite%20discuter%20de%20mon%20projet%20marketing%20digital"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors whatsapp-button"
        aria-label="Contacter sur WhatsApp"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: 0,
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.9,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
      >
        <motion.svg
          className="w-8 h-8 sm:w-7 sm:h-7 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </motion.svg>
        
        {/* Multiple Pulse Animations */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.8, 0, 0.8] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 bg-green-300 rounded-full"
          animate={{ 
            scale: [1, 1.8, 1], 
            opacity: [0.6, 0, 0.6] 
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-green-200 rounded-full"
          animate={{ 
            scale: [1, 2.2, 1], 
            opacity: [0.4, 0, 0.4] 
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </motion.a>
    </div>
  )
}

export default App
