import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#ECF6FF] via-white to-white overflow-hidden"
    >
      {/* Creative Background with Geometric Shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 via-transparent to-[#0077B6]/10" />
        
        {/* Animated geometric shapes - reduced on mobile */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-20 right-10 w-32 h-32 border-2 border-[#0077B6]/20 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-24 h-24 border-2 border-[#0099CC]/20 rotate-45"
              animate={{ 
                rotate: [45, 405],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#0077B6]/10 rounded-full blur-xl"
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating shapes - responsive sizes */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#0077B6]/8 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#0099CC]/6 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* LEFT: Large Profile Image with Stats */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={isMobile ? false : { opacity: 0, x: -50, scale: 0.95 }}
            animate={isMobile ? false : { opacity: 1, x: 0, scale: 1 }}
            transition={isMobile ? {} : { 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <div className="relative">
              {/* Decorative elements - hidden on mobile with animation */}
              {!isMobile && (
                <>
                  <motion.div
                    className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-[#0077B6]/20 rounded-2xl rotate-12 blur-sm"
                    animate={{ 
                      rotate: [12, 18, 12],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-[#0099CC]/15 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </>
              )}
              
              {/* Main image container */}
              <div className="relative z-10">
                <motion.div
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  {/* Image with border - responsive and 3D effect */}
                  <motion.div
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-4 sm:border-6 lg:border-8 border-white"
                    initial={isMobile ? false : { opacity: 0, scale: 0.9, rotateY: -15 }}
                    animate={isMobile ? false : { opacity: 1, scale: 1, rotateY: 0 }}
                    transition={isMobile ? {} : { delay: 0.5, duration: 0.6, type: "spring" }}
                    whileHover={isMobile ? {} : { 
                      rotateY: [0, 5, -5, 0],
                      scale: 1.05,
                      z: 50
                    }}
                    style={isMobile ? {} : { transformStyle: "preserve-3d", perspective: 1000 }}
                  >
                    {/* Animated corner decoration - reduced on mobile */}
                    {!isMobile && (
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                    <img
                      src="/assets/profil.png"
                      alt="Soufiane Bennani"
                      width="400"
                      height="400"
                      className="w-full h-auto object-cover relative z-10"
                      fetchPriority="high"
                      decoding="sync"
                      loading="eager"
                      style={{ contentVisibility: 'auto' }}
                    />
                    {/* Gradient overlay - static on mobile */}
                    {!isMobile ? (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/20 via-transparent to-transparent z-20"
                        animate={{ opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/20 via-transparent to-transparent z-20" />
                    )}
                  </motion.div>
                  
                  {/* Floating stats badges - static on mobile */}
                  {isMobile ? (
                    <>
                      <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:p-4 border border-[#0077B6]/20">
                        <div className="text-center">
                          <p className="text-lg sm:text-xl lg:text-2xl font-black text-[#0077B6]">+120%</p>
                          <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666] font-semibold">Croissance</p>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:p-4 border border-[#0077B6]/20">
                        <div className="text-center">
                          <p className="text-lg sm:text-xl lg:text-2xl font-black text-[#0077B6]">+50</p>
                          <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666] font-semibold">Campagnes</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:p-4 border border-[#0077B6]/20"
                        initial={{ scale: 0, rotate: -20, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          rotate: 0,
                          opacity: 1,
                          y: [0, -5, 0]
                        }}
                        transition={{ 
                          delay: 0.8, 
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 8,
                          boxShadow: "0 20px 40px rgba(0, 119, 182, 0.3)"
                        }}
                      >
                        <div className="text-center">
                          <motion.p
                            className="text-lg sm:text-xl lg:text-2xl font-black text-[#0077B6]"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            +120%
                          </motion.p>
                          <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666] font-semibold">Croissance</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-2 sm:p-3 lg:p-4 border border-[#0077B6]/20"
                        initial={{ scale: 0, rotate: 20, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          rotate: 0,
                          opacity: 1,
                          y: [0, 5, 0]
                        }}
                        transition={{ 
                          delay: 1, 
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: -8,
                          boxShadow: "0 20px 40px rgba(0, 119, 182, 0.3)"
                        }}
                      >
                        <div className="text-center">
                          <motion.p
                            className="text-lg sm:text-xl lg:text-2xl font-black text-[#0077B6]"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2.2, repeat: Infinity }}
                          >
                            +50
                          </motion.p>
                          <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#666666] font-semibold">Campagnes</p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            className="relative order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
            initial={isMobile ? false : { opacity: 0, x: 50 }}
            animate={isMobile ? false : { opacity: 1, x: 0 }}
            transition={isMobile ? {} : { duration: 0.8, delay: 0.4 }}
          >
            {/* Badge Status */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#0077B6]/30 px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg"
              initial={isMobile ? false : { opacity: 0, y: -20, scale: 0.8 }}
              animate={isMobile ? false : { opacity: 1, y: 0, scale: 1 }}
              transition={isMobile ? {} : { 
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
            >
              <motion.span
                className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-[#00D26A]"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] sm:text-xs font-semibold text-[#0077B6]">Disponible pour de nouveaux projets</span>
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.p
                className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#0077B6] font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
              >
                Portfolio
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]"
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? false : { opacity: 1, y: 0 }}
                transition={isMobile ? {} : { 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <motion.span
                  className="block text-[#333333]"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  SOUFIANE
                </motion.span>
                <motion.span
                  className="block text-[#333333]"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  BENNANI
                </motion.span>
                <motion.span
                  className="block mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent bg-[length:200%_auto]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ['0% center', '200% center']
                  }}
                  transition={{ 
                    opacity: { delay: 1.1, duration: 0.6 },
                    backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
                  }}
                >
                  Community & Traffic Manager
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.2,
                type: "spring",
                stiffness: 100
              }}
            >
              Junior Community & Traffic Manager, je crée des contenus visuels qui engagent
              vos communautés et j'optimise vos campagnes media pour transformer le trafic
              en résultats mesurables. Mon objectif : connecter votre marque aux bonnes
              audiences et maximiser votre impact digital.
            </motion.p>

            {/* Key Stats - Inline */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-3 sm:py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { value: '+3', label: 'Marques' },
                { value: '+50', label: 'Campagnes' },
                { value: '+120%', label: 'Croissance' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-baseline gap-1.5 sm:gap-2 group cursor-default"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.5 + index * 0.15,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <motion.span
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0077B6]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-xs sm:text-sm font-semibold text-[#666666] group-hover:text-[#0077B6] transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              {[
                'Meta Ads',
                'Google Ads',
                'Social Media Strategy',
                'Analytics',
                'A/B Testing',
                'ROI Optimization'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-[#0077B6]/20 text-[#0077B6] text-xs sm:text-sm font-semibold hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-all duration-300 shadow-sm cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    rotate: [0, -2, 2, 0],
                    boxShadow: "0 10px 25px rgba(0, 119, 182, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.8 + index * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              className="relative pl-4 sm:pl-6 border-l-3 sm:border-l-4 border-[#0077B6] max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                delay: 2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <motion.p
                className="text-sm sm:text-base text-[#333333] italic leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                "Renforcer les communautés, piloter le trafic,{" "}
                <motion.span
                  className="text-[#0077B6] font-bold not-italic inline-block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  créer un impact digital durable.
                </motion.span>"
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <motion.button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/uploads/Soufiane Bennani Cv.pdf'
                  link.download = 'SOUFIANE_BENNANI_CV.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#0077B6] text-white font-bold text-sm sm:text-base shadow-[0_10px_40px_rgba(0,119,182,0.4)] hover:shadow-[0_15px_50px_rgba(0,119,182,0.5)] transition-all duration-300 overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0099CC] to-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Télécharger le CV
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ y: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white border-2 border-[#0077B6] text-[#0077B6] font-bold text-sm sm:text-base hover:bg-[#0077B6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Discutons de votre projet
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#0077B6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="text-[10px] sm:text-xs font-medium">Scroll</span>
          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#0077B6]/30 flex items-start justify-center p-1.5 sm:p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0077B6]"
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero