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
      description:
        "Meta Ads (Facebook & Instagram), TikTok Ads, campagnes full-funnel, optimisation ROI.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1V2m0 0h10M9 8h6m-6 4h6m-6 4h4" />
        </svg>
      )
    },
    {
      title: "Création et gestion de contenu",
      description:
        "Visuels, vidéos et légendes engageantes adaptées aux réseaux sociaux.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Analyse & reporting",
      description:
        "Suivi des performances via MBS (Meta Business Suite) et ajustement stratégique selon les KPIs.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Gestion de budget publicitaire",
      description:
        "Allocation des investissements selon l'étude et la stratégie marketing pour des campagnes performantes.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Community Management",
      description:
        "Animation et engagement des communautés, modération, interactions et veille concurrentielle.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ]

  const softSkills = [
    {
      title: "Orientation résultats",
      description: "Atteinte des objectifs marketing et commerciaux.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Vision stratégique",
      description: "Décisions basées sur les tendances et les contenus performants.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Gestion de projet",
      description: "Organisation selon l'objectif à atteindre et l'étude de marché.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Innovation créative",
      description: "Contenus visuels originaux et adaptés aux tendances.",
      icon: (
        <svg className="w-8 h-8 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ]

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 bg-white overflow-hidden"
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#0099CC]/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#0077B6] mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            COMPÉTENCES
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            Hard skills &{' '}
            <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
              Soft skills
            </span>
          </motion.h2>
        </motion.div>

        {/* Skills Container - Minimalist List Style */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Hard Skills */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#333333]">Hard Skills</h3>
            </div>

            <div className="space-y-3">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <div className="relative rounded-xl bg-white border-2 border-[#0077B6]/10 p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Animated corner decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#ECF6FF] to-white border-2 border-[#0077B6]/20 flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, 10, -10, 0],
                          backgroundColor: "#0077B6",
                          borderColor: "#0077B6"
                        }}
                        transition={{ 
                          duration: 0.4,
                          rotate: { duration: 0.5 }
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.icon}
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="text-base font-black text-[#333333] mb-1 group-hover:text-[#0077B6] transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          {skill.title}
                        </motion.h4>
                        <p className="text-sm text-[#666666] leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0099CC] to-[#0077B6] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#333333]">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <div className="relative rounded-xl bg-white border-2 border-[#0099CC]/10 p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Animated corner decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0099CC]/20 to-transparent rounded-bl-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#0099CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: '100%' }}
                      whileHover={{ x: '-100%' }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="relative z-10 flex items-center gap-3">
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#E0F5FF] to-white border-2 border-[#0099CC]/20 flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          backgroundColor: "#0099CC",
                          borderColor: "#0099CC"
                        }}
                        transition={{ 
                          duration: 0.4,
                          rotate: { duration: 0.5 }
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.icon}
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="text-sm font-black text-[#333333] mb-1 group-hover:text-[#0099CC] transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.title}
                        </motion.h4>
                        <p className="text-xs text-[#666666] leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir les projets
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
