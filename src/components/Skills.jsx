import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const hardSkills = [
    {
      title: "Publicité digitale",
      description: "Meta Ads, Google Ads, TikTok Ads avec stratégies full-funnel et optimisation ROAS.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1V2m0 0h10M9 8h6m-6 4h6m-6 4h4" />
        </svg>
      )
    },
    {
      title: "Stratégie média",
      description: "Plans médias sur mesure et allocation budgétaire optimisée.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Optimisation & performance",
      description: "Analyse data-driven et maximisation du ROI.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Analyse & reporting",
      description: "GA4, GTM, dashboards Data Studio et suivi des conversions.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Gestion de budget",
      description: "Pilotage et réallocation dynamique selon les performances.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const softSkills = [
    {
      title: "Vision ROIste",
      description: "Traduction des données en actions concrètes.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Orientation résultats",
      description: "Génération de valeur mesurable.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Esprit stratégique",
      description: "Stratégies digitales globales intégrées.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Gestion de projet",
      description: "Coordination entre équipes créatives et techniques.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Innovation créative",
      description: "Nouvelles approches publicitaires (UGC, storytelling).",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#0180FA]/5 rounded-full blur-3xl"
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
            <span className="text-gray-800">Compétences</span>
            <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
              Clés
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

        {/* Skills Grid */}
        <div className="mb-16">
          {/* Titles Row */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            <motion.h3
              className="text-2xl font-bold text-gray-800 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-[#0180FA] rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Hard Skills
            </motion.h3>
            
            <motion.h3
              className="text-2xl font-bold text-gray-800 flex items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-[#0180FA] rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              Soft Skills
            </motion.h3>
          </div>
          
          {/* Content Row */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Hard Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >

            {hardSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-6 group shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(1, 128, 250, 0.1)"
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-3xl text-[#0180FA]"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0180FA] transition-colors duration-300">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-6 group shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(1, 128, 250, 0.1)"
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-3xl text-[#0180FA]"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0180FA] transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          className="bg-gradient-to-r from-[#0180FA]/10 to-[#0180FA]/10 p-8 rounded-2xl border border-[#0180FA]/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mon expertise me permet de traduire les objectifs d'une entreprise en une stratégie 
            d'acquisition concrète, de sélectionner les canaux les plus performants, et d'analyser 
            les données pour garantir une croissance mesurable et durable.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-[#0180FA] text-white rounded-lg font-semibold hover:bg-[#0180FA]/90 transition-all duration-300 flex items-center mx-auto gap-3"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer un projet
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills