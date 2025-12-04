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
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] overflow-hidden"
    >
      {/* Soft background shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-32 -right-10 w-72 h-72 bg-[#0180FA]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -left-10 w-80 h-80 bg-[#0180FA]/10 blur-3xl rounded-full" />
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
          {/* LEFT : Texte */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge dispo */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-[#0180FA]/30 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0180FA] shadow-sm backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-[#00D26A] animate-pulse" />
              Disponible pour de nouveaux projets
            </motion.div>

            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 space-y-2"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
                Portfolio de
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="block text-gray-900">SOUFIANE BENNANI</span>
                <span className="mt-1 inline-block bg-gradient-to-r from-[#0180FA] to-[#00B5FF] bg-clip-text text-transparent">
                  Community & Traffic Manager
                </span>
              </h1>
            </motion.div>

            {/* Sous-texte / pitch */}
            <motion.p
              className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Junior Community & Traffic Manager, je crée des contenus visuels qui engagent
              vos communautés et j’optimise vos campagnes media pour transformer le trafic
              en résultats mesurables. Mon objectif : connecter votre marque aux bonnes
              audiences et maximiser votre impact digital.
            </motion.p>

            {/* Signature phrase */}
            <motion.div
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#0180FA]/20 bg-white/70 px-4 py-3 shadow-lg backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#0180FA] to-[#00B5FF] flex items-center justify-center text-white text-lg font-semibold">
                SB
              </div>
              <p className="text-xs sm:text-sm text-gray-800 font-medium text-left">
                Renforcer les communautés, piloter le trafic,{" "}
                <span className="text-[#0180FA] font-semibold">
                  créer un impact digital durable.
                </span>
              </p>
            </motion.div>

            {/* Tags compétences */}
            <motion.div
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                'Meta Ads',
                'Google Ads',
                'Social Media Strategy',
                'Reporting & Analytics',
                'A/B Testing',
                'Optimisation du ROI'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-[#0180FA]/30 bg-[#ECF6FF]/70 px-3 py-1 text-xs sm:text-sm text-[#0180FA] font-medium hover:bg-[#0180FA]/10 hover:border-[#0180FA] transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
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
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0180FA] px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_12px_30px_rgba(1,128,250,0.35)] hover:bg-[#0170DB] transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Télécharger le CV
                <motion.svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ y: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-5 py-2.5 text-sm sm:text-base font-semibold text-gray-800 hover:border-[#0180FA] hover:text-[#0180FA] hover:bg-[#ECF6FF] transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Discutons de votre projet
                <motion.svg
                  className="h-4 w-4"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 01-2 2z"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT : Carte profil + stats (affichée dès tablette) */}
          <div className="relative hidden md:block">
            <motion.div
              className="relative mx-auto w-full max-w-sm"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Fond */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#0180FA]/60 via-[#00B5FF]/40 to-[#7FD3FF]/40 blur-xl opacity-70" />

              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/60 backdrop-blur">
                {/* Bandeau haut */}
                <div className="h-20 bg-gradient-to-r from-[#0180FA] via-[#00B5FF] to-[#7FD3FF] relative">
                  <div className="absolute inset-0 opacity-50">
                    <motion.div
                      className="absolute -right-8 top-6 h-16 w-16 rounded-full border border-white/30"
                      animate={{ x: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute left-4 -bottom-6 h-24 w-24 rounded-full border border-white/20"
                      animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Avatar */}
                <div className="px-6 -mt-12">
                  <div className="flex items-end gap-4">
                    <div className="relative h-24 w-24 rounded-2xl border-4 border-white bg-gray-100 overflow-hidden shadow-lg">
                      <img
                        src="/assets/profil.png"
                        alt="Photo de Soufiane Bennani"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="pb-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Traffic Manager
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        Soufiane Bennani
                      </p>
                      <p className="text-xs text-gray-500">
                        Community, Paid Media & Reporting
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="px-6 pt-6 pb-5 border-t border-gray-100 mt-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-[#ECF6FF] px-2 py-3">
                      <p className="text-base font-bold text-[#0180FA]">+3</p>
                      <p className="mt-1 text-[11px] text-gray-500 leading-tight">
                        Marques accompagnées
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gray-50 px-2 py-3">
                      <p className="text-base font-bold text-gray-900">+50</p>
                      <p className="mt-1 text-[11px] text-gray-500 leading-tight">
                        Campagnes gérées
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gray-900 px-2 py-3 text-white">
                      <p className="text-base font-bold">+120%</p>
                      <p className="mt-1 text-[11px] text-gray-300 leading-tight">
                        Croissance moyenne trafic
                      </p>
                    </div>
                  </div>

                  {/* Mini-quote */}
                  <div className="mt-4 flex items-start gap-2 rounded-2xl bg-gray-50 px-3 py-3">
                    <span className="mt-0.5 text-lg text-[#0180FA]">“</span>
                    <p className="text-xs text-gray-600 text-left">
                      J’allie créativité et pilotage data pour construire des campagnes
                      rentables et des communautés engagées sur le long terme.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[11px] text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span>Scroll</span>
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-300"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <motion.div
              className="mt-1 h-2 w-1 rounded-full bg-gray-400"
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero