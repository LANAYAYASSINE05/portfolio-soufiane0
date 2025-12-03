import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const experiences = [
    {
      id: 1,
      title: "COMMUNITY MANAGER - SOCIAL MEDIA MANAGER",
      company: "Social Media",
      period: "Actuellement",
      duration: "En cours",
      location: "Casablanca",
      description:
        "Gestion quotidienne de la communauté, création de contenus, optimisation de l’engagement et analyse des KPIs pour améliorer la performance globale sur les réseaux sociaux.",
      achievements: [
        "Création, planification et publication de contenus engageants sur les réseaux sociaux.",
        "Rédaction de légendes percutantes et adaptées à chaque plateforme.Création de contenus adaptés aux plateformes (visuels, textes, formats courts)",
        "Interaction avec la communauté : réponses aux messages et commentaires, modération des échanges.",
        "Veille des tendances social media et suivi des bonnes pratiques du secteur.",
        "Analyse des performances : suivi des statistiques, KPIs et rapports réguliers pour optimiser les contenus et les campagnes."
      ],
      technologies: ["Social Media", "Community Management", "Contenu", "Engagement", "KPIs", "Reporting"],
      type: "Temps plein",
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      id: 2,
      title: "TRAFFIC MANAGER - FREELANCE",
      company: "Freelance",
      period: "Octobre 2024 - Septembre 2025",
      duration: "1 an",
      location: "Casablanca",
      description:
        "Pilotage et optimisation des campagnes Meta Ads. Gestion des audiences, analyse des KPIs, rapports réguliers et recommandations stratégiques pour maximiser la performance.",
      achievements: [
        "Gestion, optimisation et programmation des campagnes Meta Ads (CBO & ABO)",
        "Segmentation des audiences, retargeting et tests d’angles créatifs",
        "Analyse régulière des KPIs (CPC, CPM, CTR, conversions…) et optimisations",
        "Élaboration de rapports de performance et recommandations stratégiques",
        "Ajustement des budgets en fonction des objectifs et des résultats"
      ],
      technologies: ["Meta Ads", "Acquisition", "Prospection", "Segmentation", "Retargeting", "KPIs", "Optimisation"],
      type: "Temps plein",
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      id: 3,
      title: "EMPLOYÉ POLYVALENT - MARJANE CITY",
      company: "MARJANE CITY",
      period: "October 2024 - Juillet 2025",
      duration: "10 mois",
      location: "Casablanca, Maarif",
      description: "Caisse et relation directe avec les clients. Réception des marchandises avec les fournisseurs. Inventaires et gestion du stock. Renfort sur divers postes selon les besoins du magasin.",
      achievements: [
        "Caisse et relation directe avec les clients",
        "Réception des marchandises avec les fournisseurs",
        "Inventaires et gestion du stock",
        "Renfort sur divers postes selon les besoins du magasin",
        "Suivi administratif dans le système interne du magasin"
      ],
      technologies: ["Caisse", "Gestion Stock", "Relation Client", "Inventaires"],
      type: "Temps plein",
      color: "from-[#0180FA] to-[#0180FA]/80"
    }
  ]

  return (
    <section
      id="experience"
      className="relative py-20 md:py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] overflow-hidden"
    >
      {/* Background soft shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#0180FA]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[#0180FA]/5 blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#0180FA]">
            EXPÉRIENCES
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Mon parcours{' '}
            <span className="bg-gradient-to-r from-[#0180FA] to-[#00B5FF] bg-clip-text text-transparent">
              en quelques étapes
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            De la gestion de communauté aux campagnes Meta Ads, voici comment je développe
            à la fois la présence organique et le trafic payant.
          </p>
        </motion.div>

        {/* Layout type CV : colonne temps + colonne contenu */}
        <div className="mx-auto max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-60px' }}
              className="grid gap-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] items-start mb-6"
            >
              {/* Colonne temps / lieu */}
              <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-3 text-xs text-gray-500">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#0180FA]" />
                  {exp.period}
                </div>
                <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-[#0180FA]/40 to-transparent" />
                <div className="flex flex-col sm:items-end">
                  <span className="font-medium text-gray-700">{exp.location}</span>
                  <span className="text-[11px] text-gray-500">
                    {exp.type} • {exp.duration}
                  </span>
                </div>
              </div>

              {/* Colonne contenu */}
              <article className="rounded-2xl border border-white/70 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur px-5 sm:px-6 py-4 sm:py-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#0180FA] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-500">
                    Expérience {index + 1}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <div className="sm:w-2/3">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Ce que j&apos;ai fait
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.slice(0, 5).map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-[12px] text-gray-700"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0180FA]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:w-1/3">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Compétences clés
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* CTA bas de section */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0180FA] px-7 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(1,128,250,0.3)] hover:bg-[#0170DB] transition-colors"
          >
            Découvrir les projets liés à ces expériences
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience