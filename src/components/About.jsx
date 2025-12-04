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
      className="relative py-20 md:py-24 bg-white"
    >
      <div className="container-custom relative px-4 sm:px-6">
        {/* Titre section */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#0180FA]">
            À PROPOS
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Qui se cache derrière le{' '}
            <span className="bg-gradient-to-r from-[#0180FA] to-[#00B5FF] bg-clip-text text-transparent">
              trafic
            </span>
            ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Je suis Soufiane Bennani, Community & Traffic Manager junior, à mi-chemin entre
            créativité de contenu et gestion data-driven des campagnes d’acquisition.
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
          {/* Colonne texte : parcours + façon de travailler */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Bloc parcours */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/60 px-5 sm:px-6 py-6 mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                De la communauté aux campagnes media
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Junior en Community & Traffic Management, j’accompagne les marques sur deux
                volets complémentaires : faire vivre leurs communautés au quotidien, et
                piloter leurs campagnes publicitaires pour atteindre des objectifs concrets
                (visibilité, trafic, conversions…).
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Je m’appuie autant sur la créativité (contenus, angles, formats) que sur
                l’analyse des chiffres pour améliorer en continu les résultats et proposer
                des actions alignées avec la stratégie globale.
              </p>
            </div>

            {/* Timeline / façon de travailler */}
            <div className="space-y-5">
              {[
                {
                  title: 'Comprendre la marque & ses objectifs',
                  desc: "Analyse du positionnement, des audiences cibles et des objectifs business pour cadrer la stratégie social media et paid.",
                },
                {
                  title: 'Construire des contenus qui engagent',
                  desc: "Création de visuels et de messages adaptés aux plateformes, pensés pour générer des interactions et nourrir la communauté.",
                },
                {
                  title: 'Piloter & optimiser les campagnes',
                  desc: "Mise en place, suivi et ajustements des campagnes (budget, ciblages, formats) pour maximiser le ROI.",
                },
                {
                  title: 'Mesurer, apprendre, recommencer',
                  desc: "Lecture des résultats, préparation de rapports et recommandation d’actions pour la suite.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div className="mt-1 flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0180FA]/10 text-[11px] font-semibold text-[#0180FA]">
                      {index + 1}
                    </div>
                    {index !== 3 && (
                      <div className="mt-1 h-full w-px bg-gradient-to-b from-[#0180FA]/40 to-transparent" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[12px] sm:text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA simple */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center rounded-full bg-[#0180FA] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0170DB] transition-colors"
              >
                Voir quelques cas concrets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 hover:border-[#0180FA] hover:text-[#0180FA] transition-colors"
              >
                Échanger sur vos besoins
              </button>
            </motion.div>
          </motion.div>

          {/* Colonne droite : bloc visuel sobre avec photo + points clés */}
          <motion.div
            className="w-full max-w-md lg:ml-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="rounded-3xl border border-gray-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
              {/* Photo */}
              <div className="relative h-48 bg-gradient-to-br from-[#0180FA] via-[#00B5FF] to-[#7FD3FF]">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute -right-10 top-10 h-24 w-24 rounded-full border border-white/40" />
                  <div className="absolute -left-6 bottom-4 h-20 w-20 rounded-full border border-white/30" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg">
                  <img
                    src="/assets/profil.png"
                    alt="Photo de Soufiane Bennani"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Infos */}
              <div className="px-6 pt-10 pb-6">
                <div className="text-center">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                    Community & Traffic Manager
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    Soufiane Bennani
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Social Media · Paid Media · Reporting
                  </p>
                </div>

                {/* Points clés */}
                <div className="mt-6 grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#0180FA]" />
                    <p className="text-[12px] text-gray-600">
                      À l’aise autant dans la création de contenus que dans les plateformes
                      publicitaires (Meta, Google Ads).
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#0180FA]" />
                    <p className="text:[12px] text-gray-600">
                      Habitué à suivre les indicateurs clés (CPC, CPM, CTR, taux de
                      conversion…) pour optimiser progressivement les campagnes.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#0180FA]" />
                    <p className="text-[12px] text-gray-600">
                      Envie d’apprendre en continu et de contribuer à des projets où
                      engagement communautaire et performance media avancent ensemble.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About