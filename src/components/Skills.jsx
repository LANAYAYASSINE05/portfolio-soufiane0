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
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1V2m0 0h10M9 8h6m-6 4h6m-6 4h4" />
        </svg>
      )
    },
    {
      title: "Création et gestion de contenu",
      description:
        "Visuels, vidéos et légendes engageantes adaptées aux réseaux sociaux.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Analyse & reporting",
      description:
        "Suivi des performances via MBS (Meta Business Suite) et ajustement stratégique selon les KPIs.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Gestion de budget publicitaire",
      description:
        "Allocation des investissements selon l’étude et la stratégie marketing pour des campagnes performantes.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Community Management",
      description:
        "Animation et engagement des communautés, modération, interactions et veille concurrentielle.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Vision stratégique",
      description: "Décisions basées sur les tendances et les contenus performants.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Gestion de projet",
      description: "Organisation selon l’objectif à atteindre et l’étude de marché.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Innovation créative",
      description: "Contenus visuels originaux et adaptés aux tendances.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    }
  ]

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] overflow-hidden"
    >
      {/* Fond décoratif */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#0180FA]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0180FA]/5 blur-3xl" />
      </motion.div>

      <div className="container-custom relative px-4 sm:px-6">
        {/* Titre section */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#0180FA]">
            COMPÉTENCES
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Hard skills & Soft skills, clairement séparés
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            À gauche, les compétences techniques liées aux outils. À droite, les qualités qui
            guident ma façon de travailler au quotidien.
          </p>
        </motion.div>

        {/* Deux colonnes : Hard / Soft */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Colonne Hard skills avec icônes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Hard skills
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Les leviers que j&apos;utilise
                </p>
              </div>
              <span className="rounded-full bg-[#ECF6FF] px-3 py-1 text-[11px] font-medium text-[#0180FA]">
                Outils & plateformes
              </span>
            </div>

            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="rounded-2xl border border-white/70 bg-white/90 px-4 py-4 shadow-[0_10px_26px_rgba(15,23,42,0.06)] backdrop-blur group"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECF6FF] text-[#0180FA]"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[#0180FA] transition-colors">
                        {skill.title}
                      </p>
                      <p className="mt-1 text-[12px] text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne Soft skills avec icônes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Soft skills
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  Ma manière de travailler
                </p>
              </div>
              <span className="rounded-full bg-[#E0F5FF] px-3 py-1 text-[11px] font-medium text-[#0180FA]">
                Posture & organisation
              </span>
            </div>

            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="rounded-2xl border border-white/70 bg-white/90 px-4 py-4 shadow-[0_10px_26px_rgba(15,23,42,0.06)] backdrop-blur group"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0F5FF] text-[#0180FA]"
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-[#0180FA] transition-colors">
                        {skill.title}
                      </p>
                      <p className="mt-1 text-[12px] text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center rounded-full border border-[#0180FA] bg-white px-6 py-2.5 text-sm font-semibold text-[#0180FA] hover:bg-[#ECF6FF] transition-colors"
          >
            Voir comment ces compétences se traduisent en projets
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills