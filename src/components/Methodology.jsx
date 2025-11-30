import React from 'react'
import { motion } from 'framer-motion'

const Methodology = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const phases = [
    {
      number: "01",
      title: "Audit",
      description: "Analyse complète de l'existant : positionnement, concurrence, canaux actuels et performance. Identification des opportunités d'amélioration et des leviers de croissance.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      number: "02",
      title: "Plan Média & Stratégie",
      description: "Définition de la stratégie digitale globale, sélection des canaux pertinents, allocation budgétaire optimisée et calendrier de déploiement des campagnes.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      number: "03",
      title: "Exécution",
      description: "Mise en place des campagnes sur les plateformes sélectionnées, création des créatifs, configuration des audiences cibles et lancement des actions.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      number: "04",
      title: "Optimisation",
      description: "Ajustement continu des campagnes en temps réel : optimisation des audiences, créatifs, budgets et placements pour maximiser les performances.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      number: "05",
      title: "Reporting",
      description: "Analyse détaillée des résultats, rapport de performance avec insights clés et recommandations stratégiques pour les prochaines actions.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    }
  ]

  return (
    <section id="methodology" className="py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#0180FA]/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Méthodologie de</span>
            <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
              Travail
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#0180FA] to-[#0180FA] rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Ma méthodologie est centrée sur la performance et repose sur une approche en cinq phases 
            pour garantir l'efficacité de chaque projet. Chaque étape est conçue pour maximiser le 
            retour sur investissement et assurer une croissance durable et mesurable.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Phase Card */}
              <motion.div
                className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(1, 128, 250, 0.1)"
                }}
              >
                {/* Phase Number */}
                <motion.div
                  className="text-4xl font-bold mb-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
                    {phase.number}
                  </span>
                </motion.div>

                {/* Separator Line */}
                <motion.div
                  className="w-full h-0.5 bg-gradient-to-r from-[#0180FA]/50 to-[#0180FA]/50 mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />

                {/* Phase Icon */}
                <motion.div
                  className="text-3xl mb-3 text-[#0180FA]"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {phase.icon}
                </motion.div>

                {/* Phase Title */}
                <motion.h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {phase.title}
                </motion.h3>

                {/* Phase Description */}
                <motion.p
                  className="text-gray-600 leading-relaxed text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {phase.description}
                </motion.p>
              </motion.div>

              {/* Connecting Line (except for last phase) */}
              {index < phases.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0180FA]/50 to-[#0180FA]/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-[#0180FA] text-white rounded-lg font-semibold hover:bg-[#0180FA]/90 transition-all duration-300 flex items-center mx-auto glow-effect"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer un projet
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
