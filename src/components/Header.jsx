import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToMobileMenuItem = (sectionId, buttonRef) => {
    // Fermer le menu mobile après un délai pour permettre l'animation
    setTimeout(() => {
      setIsMobileMenuOpen(false)
    }, 100)
    
    // Scroll vers la section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Auto-scroll du menu vers l'élément sélectionné
    if (buttonRef && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      }, 50)
    }
  }

  const handleDownloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a')
    link.href = '/uploads/Soufiane Bennani Cv.pdf'
    link.download = 'SOUFIANE_BENNANI_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { name: 'Accueil', id: 'hero' },
    { name: 'À propos', id: 'about' },
    { name: 'Technologies', id: 'technologies' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Expérience', id: 'experience' },
    { name: 'Formation', id: 'education' },
    { name: 'Méthodologie', id: 'methodology' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#ECF6FF]/95 backdrop-blur-md border-b border-[#0077B6]/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-base sm:text-xl lg:text-2xl font-bold text-[#0077B6] hover:text-[#0077B6]/80 transition-colors duration-300"
            >
              SOUFIANE BENNANI
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#0077B6] transition-colors duration-300 font-medium text-xs xl:text-sm whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CV Download Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handleDownloadCV}
              className="px-3 xl:px-4 py-2 border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 rounded-lg font-semibold text-xs xl:text-sm whitespace-nowrap"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 119, 182, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden xl:inline">Télécharger le CV</span>
              <span className="xl:hidden">CV</span>
            </motion.button>
          </motion.div>

          {/* Mobile CV Download Button */}
          <motion.button
            onClick={handleDownloadCV}
            className="lg:hidden px-3 py-2 border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 rounded-lg font-semibold text-xs mr-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Télécharger le CV
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
                className="lg:hidden text-gray-600 hover:text-[#0077B6] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="w-5 h-5 bg-gray-600/20 rounded-full flex items-center justify-center"
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm">
                {isMobileMenuOpen ? '❌' : '☰'}
              </span>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4 border-t border-[#0077B6]/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => {
              const buttonRef = useRef(null)
              return (
                <motion.button
                  key={item.name}
                  ref={buttonRef}
                  onClick={() => scrollToMobileMenuItem(item.id, buttonRef)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#0077B6] hover:bg-[#0077B6]/10 transition-colors duration-300 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              )
            })}
            
            {/* Mobile CV Download Button */}
            <motion.div
              className="px-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="w-full px-4 py-2 border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 rounded-lg font-semibold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Télécharger le CV
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header