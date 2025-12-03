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
      title: "Analyse & création",
      description:
        "Analyse des tendances, étude de la concurrence et identification des contenus visuels performants pour le public cible.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      number: "02",
      title: "Planification & publication",
      description:
        "Création de contenus visuels et créatifs (images, Reels, Stories, vidéos) respectant la ligne éditoriale et diffusion selon le calendrier éditorial pour maximiser l’engagement.",
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
      description:
        "Analyse détaillée des résultats, suivi des KPIs via MBS et Ads Manager, rapport de performance avec insights clés et recommandations stratégiques pour les prochaines actions.",
      icon: (
        <svg className="w-8 h-8 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-[#0180FA] to-[#0180FA]/80"
    }
  ]

  return (
    <section
      id="methodology"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] overflow-hidden"
    >
      {/* Décor de fond */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0180FA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0180FA]/5 blur-3xl" />
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
            MÉTHODOLOGIE
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Comment je travaille, étape par étape
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            De l&apos;analyse initiale au reporting final, chaque phase a un objectif clair
            pour transformer vos objectifs marketing en résultats concrets.
          </p>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#0180FA] via-[#0180FA]/40 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={phase.number}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  {/* Point + numéro */}
                  <div
                    className={`flex items-start gap-3 mb-3 md:mb-0 ${
                      isLeft ? 'md:justify-end md:pr-6' : 'md:order-2 md:pl-6'
                    }`}
                  >
                    <div className="relative flex items-center gap-3">
                      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md border border-[#0180FA]/40">
                        <span className="text-[11px] font-semibold text-[#0180FA]">
                          {phase.number}
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                          Phase {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Carte de contenu */}
                  <div
                    className={`md:col-span-1 ${
                      isLeft ? 'md:order-2 md:pl-4' : 'md:order-1 md:pr-4 md:text-right'
                    }`}
                  >
                    <motion.div
                      className="rounded-2xl border border-white/70 bg-white/90 px-4 sm:px-5 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <motion.div
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ECF6FF] text-[#0180FA]"
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {phase.icon}
                        </motion.div>
                        <div className="text-left md:text-inherit">
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-[#0180FA] transition-colors">
                            {phase.title}
                          </p>
                          <p className="mt-1 text-[12px] text-gray-600 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center rounded-full bg-[#0180FA] px-7 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_12px_30px_rgba(1,128,250,0.3)] hover:bg-[#0170DB] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Discuter de la prochaine étape
            <motion.svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 1 }}
              transition={{ duration: 0.15 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5-5 5M6 12h12"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
