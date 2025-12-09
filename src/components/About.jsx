import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-28 bg-white overflow-hidden"
    >
      {/* Creative Background with Geometric Shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Titre section - Centered with accent */}
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#0077B6] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            À PROPOS
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#333333] leading-[1.1] mt-4">
            Qui se cache derrière le{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
                trafic
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#0077B6]/20 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
            ?
          </h2>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Profile Section - Top Center */}
          <motion.div
            className="flex flex-col items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {/* Large Profile Image */}
            <motion.div
              className="relative mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-[#0077B6]/20 to-[#0099CC]/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                initial={{ rotate: -5, scale: 0.8, rotateY: -15 }}
                animate={{ rotate: 0, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  rotateY: [0, 10, -10, 0],
                  scale: 1.05,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(0, 119, 182, 0.3)"
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                {/* Animated corner decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full z-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img
                  src="/assets/profil.png"
                  alt="Soufiane Bennani"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
            {/* Name and Title */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-black text-[#333333] mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                Soufiane Bennani
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base uppercase tracking-[0.2em] text-[#0077B6] font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
              >
                Community & Traffic Manager
              </motion.p>
              <motion.p
                className="text-sm sm:text-base text-[#666666]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                Social Media · Paid Media · Reporting
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Description Card */}
          <motion.div
            className="bg-gradient-to-br from-[#ECF6FF]/50 to-white rounded-3xl p-6 sm:p-8 md:p-10 mb-12 border border-[#0077B6]/10 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              boxShadow: "0 20px 60px rgba(0, 119, 182, 0.15)"
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {/* Animated corner decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#0077B6]/5 via-transparent to-[#0099CC]/5 opacity-0 hover:opacity-100 transition-opacity"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.h3
              className="text-xl sm:text-2xl font-black text-[#333333] mb-4 text-center relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              De la communauté aux campagnes media
            </motion.h3>
            <div className="space-y-4 text-center relative z-10">
              <motion.p
                className="text-base sm:text-lg text-[#666666] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                Junior en Community & Traffic Management, j'accompagne les marques sur deux
                volets complémentaires : faire vivre leurs communautés au quotidien, et
                piloter leurs campagnes publicitaires pour atteindre des objectifs concrets
                (visibilité, trafic, conversions…).
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-[#666666] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
              >
                Je m'appuie autant sur la créativité (contenus, angles, formats) que sur
                l'analyse des chiffres pour améliorer en continu les résultats et proposer
                des actions alignées avec la stratégie globale.
              </motion.p>
            </div>
          </motion.div>

          {/* Process Steps - Horizontal Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              {
                title: 'Comprendre',
                desc: "Analyse du positionnement et des objectifs business",
                icon: '1'
              },
              {
                title: 'Construire',
                desc: "Création de contenus qui engagent",
                icon: '2'
              },
              {
                title: 'Piloter',
                desc: "Optimisation des campagnes",
                icon: '3'
              },
              {
                title: 'Mesurer',
                desc: "Analyse et recommandations",
                icon: '4'
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="group relative bg-white rounded-2xl p-6 border-2 border-[#0077B6]/10 hover:border-[#0077B6] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -5, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  rotateY: [0, 5, -5, 0],
                  z: 50,
                  boxShadow: "0 20px 40px rgba(0, 119, 182, 0.2)"
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                {/* Animated corner decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-[#0099CC]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] text-white font-black text-2xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 10, -10, 0]
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 10px 30px rgba(0, 119, 182, 0.3)",
                        "0 15px 40px rgba(0, 119, 182, 0.4)",
                        "0 10px 30px rgba(0, 119, 182, 0.3)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.h4
                    className="text-lg font-black text-[#333333] mb-2 group-hover:text-[#0077B6] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.title}
                  </motion.h4>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Points - Horizontal */}
          <motion.div
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0077B6]/10 shadow-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black text-[#333333] mb-6 text-center">
              Points clés
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Création de contenus & plateformes publicitaires",
                "Suivi des KPIs (CPC, CPM, CTR, conversion)",
                "Apprentissage continu & performance media"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#ECF6FF]/50 hover:bg-[#ECF6FF] transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0077B6] mt-2" />
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons - Centered */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center rounded-xl bg-[#0077B6] px-8 py-4 text-base font-bold text-white hover:bg-[#006699] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir quelques cas concrets
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#0077B6] px-8 py-4 text-base font-bold text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Échanger sur vos besoins
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About