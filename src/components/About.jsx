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
    <section id="about" className="py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#0180FA]/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Picture */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Profile Circle */}
              <motion.div
                className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#0180FA]/20 to-[#0180FA]/20 border-4 border-[#0180FA]/30 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <motion.img
                  src="/assets/profil.png"
                  alt="Rhanim Mehdi"
                  className="w-full h-full object-cover rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-4 h-4 bg-[#0180FA] rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-[#0180FA] rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 left-4 w-3 h-3 bg-[#0180FA] rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#0180FA]/20 rounded-full border border-[#0180FA]/30"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#0180FA]/20 rounded-full border border-[#0180FA]/30"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-800">À propos de</span>
              <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
                SOUFIANE BENNANI
              </span>
            </motion.h2>

            {/* Role */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#0180FA] mb-2">Community Manager & Traffic Manager</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0180FA] to-[#0180FA] rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                Junior en Community & Traffic Management, je participe au développement de la visibilité 
                et de la notoriété digitale des marques en transformant leurs objectifs business en actions concrètes.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Je crée des contenus visuels pour engager les communautés, sélectionne et optimise les 
                campagnes publicitaires selon les objectifs, et analyse les performances pour contribuer à 
                une croissance digitale mesurable et durable.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Communautés</h4>
                <p className="text-gray-600 text-xs">Création de contenus visuels et rédactionnels pour engager et développer les communautés digitales.</p>
              </div>
              <div className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Acquisition</h4>
                <p className="text-gray-600 text-xs">Planification et optimisation des campagnes publicitaires selon les objectifs pour générer du trafic qualifié et maximiser l'impact digital.</p>
              </div>
              <div className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Croissance digitale</h4>
                <p className="text-gray-600 text-xs">Stratégie intégrée combinant engagement des communautés et acquisition pour renforcer la visibilité et la notoriété de la marque.</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-[#0180FA] text-white rounded-lg font-semibold hover:bg-[#0180FA]/90 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-gray-600 text-gray-600 rounded-lg font-semibold hover:border-[#0180FA] hover:text-[#0180FA] hover:bg-[#0180FA]/10 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#0180FA"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About