import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      className="fixed top-0 left-0 right-0 z-50 bg-[#ECF6FF]/95 backdrop-blur-md border-b border-[#0077B6]/20 relative overflow-hidden"
      initial={isMobile ? false : { y: -100, opacity: 0 }}
      animate={isMobile ? false : { y: 0, opacity: 1 }}
      transition={isMobile ? {} : { duration: 0.6, ease: "easeOut" }}
    >
      {/* Creative Background Elements */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-1/2 right-10 w-16 h-16 border border-[#0077B6]/10 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
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
              className="text-xl font-bold text-[#0077B6] hover:text-[#0077B6]/80 transition-colors duration-300 whitespace-nowrap"
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
                className="relative text-gray-600 hover:text-[#0077B6] transition-colors duration-300 font-medium text-sm whitespace-nowrap group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  y: -3,
                  scale: 1.05
                }}
              >
                {item.name}
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0077B6] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
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
              className="relative px-4 py-2 border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 rounded-md font-semibold text-sm whitespace-nowrap overflow-hidden group"
              whileHover={{ 
                scale: 1.08,
                y: -2,
                boxShadow: "0 15px 35px rgba(0, 119, 182, 0.4)"
              }}
              whileTap={{ scale: 0.92 }}
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(0, 119, 182, 0)",
                  "0 5px 15px rgba(0, 119, 182, 0.2)",
                  "0 0 0px rgba(0, 119, 182, 0)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Télécharger le CV</span>
            </motion.button>
          </motion.div>

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
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4 border-t border-[#0077B6]/20">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
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
                className="w-full px-4 py-2 border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 rounded-md font-semibold text-sm"
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