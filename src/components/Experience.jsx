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
        "Gestion quotidienne de la communauté, création de contenus, optimisation de l'engagement et analyse des KPIs pour améliorer la performance globale sur les réseaux sociaux.",
      achievements: [
        "Création, planification et publication de contenus engageants sur les réseaux sociaux.",
        "Rédaction de légendes percutantes et adaptées à chaque plateforme.Création de contenus adaptés aux plateformes (visuels, textes, formats courts)",
        "Interaction avec la communauté : réponses aux messages et commentaires, modération des échanges.",
        "Veille des tendances social media et suivi des bonnes pratiques du secteur.",
        "Analyse des performances : suivi des statistiques, KPIs et rapports réguliers pour optimiser les contenus et les campagnes."
      ],
      technologies: ["Social Media", "Community Management", "Contenu", "Engagement", "KPIs", "Reporting"],
      type: "Temps plein",
      color: "from-[#0077B6] to-[#0077B6]/80"
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
        "Segmentation des audiences, retargeting et tests d'angles créatifs",
        "Analyse régulière des KPIs (CPC, CPM, CTR, conversions…) et optimisations",
        "Élaboration de rapports de performance et recommandations stratégiques",
        "Ajustement des budgets en fonction des objectifs et des résultats"
      ],
      technologies: ["Meta Ads", "Acquisition", "Prospection", "Segmentation", "Retargeting", "KPIs", "Optimisation"],
      type: "Temps plein",
      color: "from-[#0077B6] to-[#0077B6]/80"
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
      color: "from-[#0077B6] to-[#0077B6]/80"
    }
  ]

  return (
    <section
      id="experience"
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
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0077B6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0099CC]/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
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
            EXPÉRIENCES
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            Parcours{' '}
            <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
              professionnel
            </span>
          </motion.h2>
        </motion.div>

        {/* Experience Cards - Card Stack Style */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true, margin: '-50px' }}
                style={{ perspective: 1000 }}
              >
                {/* Card with 3D effect */}
                <motion.div
                  className="relative rounded-2xl bg-white border-2 border-[#0077B6]/10 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    rotateY: 2,
                    boxShadow: "0 25px 50px rgba(0, 119, 182, 0.2)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  {/* Left border accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                  
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#0099CC]" />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Date & Info */}
                    <div className="flex-shrink-0 lg:w-48">
                      <motion.div
                        className="inline-flex flex-col items-start gap-3 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Period Badge */}
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] text-white shadow-lg relative overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="relative z-10">
                              <div className="text-sm font-black">{exp.period}</div>
                              <div className="text-xs font-semibold opacity-90">{exp.duration}</div>
                            </div>
                          </div>
                          <motion.div
                            className="absolute -inset-2 rounded-xl bg-[#0077B6] blur-lg opacity-0 group-hover:opacity-30 transition-opacity"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Location & Type */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-xs text-[#666666]">
                            <svg className="w-4 h-4 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-semibold">{exp.location}</span>
                          </div>
                          <div className="text-xs text-[#0077B6] font-bold">
                            {exp.type}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl sm:text-2xl font-black text-[#333333] mb-2 group-hover:text-[#0077B6] transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p
                            className="text-sm sm:text-base font-bold text-[#0077B6] flex items-center gap-2"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {exp.company}
                          </motion.p>
                        </div>
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center text-white font-black text-lg shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          animate={{ 
                            boxShadow: [
                              "0 10px 30px rgba(0, 119, 182, 0.3)",
                              "0 15px 40px rgba(0, 119, 182, 0.4)",
                              "0 10px 30px rgba(0, 119, 182, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 0.5,
                            boxShadow: { duration: 2, repeat: Infinity }
                          }}
                        >
                          {index + 1}
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#666666] leading-relaxed mb-5 line-clamp-2">
                        {exp.description}
                      </p>

                      {/* Achievements & Technologies in Grid */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Achievements */}
                        <div>
                          <motion.p
                            className="text-xs font-black uppercase tracking-wider text-[#0077B6] mb-3 flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-6 h-0.5 bg-[#0077B6]" />
                            Réalisations
                          </motion.p>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start gap-2 text-xs text-[#333333]"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + achIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <motion.div
                                  className="flex-shrink-0 w-5 h-5 rounded-md bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center mt-0.5"
                                  whileHover={{ rotate: 180 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                                <span className="leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <motion.p
                            className="text-xs font-black uppercase tracking-wider text-[#0077B6] mb-3 flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-6 h-0.5 bg-[#0077B6]" />
                            Compétences
                          </motion.p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#ECF6FF] to-white border border-[#0077B6]/20 text-xs font-semibold text-[#0077B6] hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-all duration-300 cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + techIndex * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            Découvrir les projets
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
