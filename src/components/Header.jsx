import React, { useState } from 'react'
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

  const handleDownloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a')
    link.href = '/uploads/RHANIM MEHDI CV.pdf'
    link.download = 'SOUFIANNE_BENNANI_CV.pdf'
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
      className="fixed top-0 left-0 right-0 z-50 bg-[#ECF6FF]/95 backdrop-blur-md border-b border-[#0180FA]/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Brand */}
          <motion.div 
            className="flex items-center mr-8 lg:mr-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-[#0180FA] hover:text-[#0180FA]/80 transition-colors duration-300 whitespace-nowrap"
            >
              SOUFIANE BENNANI
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#0180FA] transition-colors duration-300 font-medium text-sm whitespace-nowrap"
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
            className="hidden lg:block ml-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handleDownloadCV}
              className="px-4 py-2 border border-[#0180FA] text-[#0180FA] hover:bg-[#0180FA] hover:text-white transition-all duration-300 rounded-md font-semibold text-sm whitespace-nowrap"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger le CV
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
                className="lg:hidden text-gray-600 hover:text-[#0180FA] p-2"
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
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4 border-t border-[#0180FA]/20">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#0180FA] hover:bg-[#0180FA]/10 transition-colors duration-300 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            
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
                className="w-full px-4 py-2 border border-[#0180FA] text-[#0180FA] hover:bg-[#0180FA] hover:text-white transition-all duration-300 rounded-md font-semibold text-sm"
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