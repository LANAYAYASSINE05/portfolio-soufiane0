import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] flex items-center overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0180FA]/5 via-[#0180FA]/3 to-white/20" />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#0180FA]/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#0180FA]/10 rounded-full blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#0180FA]/10 border border-[#0180FA]/30 rounded-full text-[#0180FA] text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-[#0180FA] rounded-full mr-2 animate-pulse"></span>
              Disponible pour de nouveaux projets
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-700 block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-2">Portfolio de</span>
              <span className="bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent block">
               Traffic Manager
              </span>
            </motion.h1>

            {/* Name */}
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              SOUFIANE BENNANI
            </motion.h2>

            {/* Signature Identity */}
            <motion.div
              className="relative mb-4 sm:mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Signature Phrase */}
              <div className="relative bg-gradient-to-r from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/30 rounded-xl p-3 sm:p-4 lg:p-6 shadow-2xl">
                <motion.div
                  className="text-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {/* Single Line */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                      Renforcer{' '}
                      <span className="bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
                        communauté
                      </span>
                    </span>
                  </motion.div>
                  
                  {/* Divider */}
                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-[#0180FA] via-[#0180FA] to-[#0180FA] rounded-full mx-auto mb-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  />
                  
                  {/* Single Line */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                      trafic pour{' '}
                      <span className="bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
                        impact digital
                      </span>
                      .
                    </span>
                  </motion.div>
                </motion.div>
                
                {/* Floating Accent Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-[#0180FA] rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#0180FA] rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 max-w-2xl leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              Junior Community & Traffic Manager, je crée des contenus visuels pour animer et développer les communautés, 
              tout en participant à l'optimisation des campagnes publicitaires selon les objectifs pour maximiser l'impact digital.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
            >
              {['Meta Ads', 'Google Ads', 'SEA', 'Analytics', 'A/B Testing', 'ROI Optimization'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#ECF6FF] border border-[#0180FA]/30 rounded-full text-[#0180FA] text-xs sm:text-sm font-medium hover:border-[#0180FA] hover:text-[#0180FA] hover:bg-[#0180FA]/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.9 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.5 }}
            >
              <motion.button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/uploads/RHANIM MEHDI CV.pdf'
                  link.download = 'RHANIM_MEHDI_CV.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="px-5 py-2.5 bg-[#0180FA] text-white rounded-lg font-semibold hover:bg-[#0180FA]/90 transition-all duration-300 flex items-center justify-center gap-2 glow-effect text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger le CV
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 border border-gray-400 text-gray-700 rounded-lg font-semibold hover:border-[#0180FA] hover:text-[#0180FA] hover:bg-[#0180FA]/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#0180FA"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.button>

            </motion.div>

          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:block hidden">
            <motion.div
              className="relative w-full h-96 lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Main Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              
              {/* Overlay Shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform -rotate-3"></div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-3 h-3 bg-primary rounded-full ${
                    i % 2 === 0 ? 'bg-primary' : 'bg-accent'
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-text-muted rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero