import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const experiences = [
    {
      id: 1,
      title: "COMMUNITY MANAGER - META",
      company: "Meta",
      period: "à présent",
      duration: "En cours",
      location: "Casablanca",
      description: "Gestion, optimisation et programmation des campagnes Meta Ads (CBO & ABO). Création et gestion d'audiences personnalisées et similaires. Suivi et analyse des performances (KPIs) et recommandations stratégiques.",
      achievements: [
        "Gestion, optimisation et programmation des campagnes Meta Ads (CBO & ABO)",
        "Création et gestion d'audiences personnalisées et similaires",
        "Suivi et analyse des performances (KPIs) et recommandations stratégiques",
        "Collaboration avec des créateurs pour développer des visuels performants",
        "Reporting régulier des résultats et recommandations stratégiques"
      ],
      technologies: ["Meta Ads", "CBO", "ABO", "Audiences", "KPIs", "Reporting"],
      type: "Temps plein",
      color: "from-[#0180FA] to-[#0180FA]/80"
    },
    {
      id: 2,
      title: "TRAFFIC MANAGER - E-COMMERCE MANAGER",
      company: "E-commerce",
      period: "Octobre 2024 - Septembre 2025",
      duration: "1 an",
      location: "Casablanca",
      description: "Conception et gestion de campagnes publicitaires pour Facebook & Instagram. Analyse des performances et ajustement des stratégies pour maximiser le ROI. Gestion des budgets publicitaires, segmentation et retargeting avancés.",
      achievements: [
        "Conception et gestion de campagnes publicitaires pour Facebook & Instagram",
        "Analyse des performances et ajustement des stratégies pour maximiser le ROI",
        "Gestion des budgets publicitaires, segmentation et retargeting avancés",
        "Suivi des budgets publicitaires et reporting régulier des résultats"
      ],
      technologies: ["Facebook Ads", "Instagram Ads", "ROI", "Segmentation", "Retargeting", "E-commerce"],
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
        "Participation à l'ouverture du magasin"
      ],
      technologies: ["Caisse", "Gestion Stock", "Relation Client", "Inventaires", "Logistique"],
      type: "Temps plein",
      color: "from-[#0180FA] to-[#0180FA]/80"
    }
  ]

  const tabs = [
    { id: 0, label: "Toutes", count: experiences.length },
    { id: 1, label: "Marketing Digital", count: experiences.filter(exp => exp.technologies.some(tech => tech.includes("Meta") || tech.includes("Facebook") || tech.includes("Instagram") || tech.includes("Ads"))).length },
    { id: 2, label: "E-commerce", count: experiences.filter(exp => exp.technologies.some(tech => tech.includes("E-commerce") || tech.includes("ROI") || tech.includes("Retargeting"))).length },
    { id: 3, label: "Gestion Client", count: experiences.filter(exp => exp.technologies.some(tech => tech.includes("Client") || tech.includes("Caisse") || tech.includes("Relation"))).length }
  ]

  const filteredExperiences = activeTab === 0 
    ? experiences 
    : experiences.filter(exp => {
        if (activeTab === 1) return exp.technologies.some(tech => tech.includes("Meta") || tech.includes("Facebook") || tech.includes("Instagram") || tech.includes("Ads"))
        if (activeTab === 2) return exp.technologies.some(tech => tech.includes("E-commerce") || tech.includes("ROI") || tech.includes("Retargeting"))
        if (activeTab === 3) return exp.technologies.some(tech => tech.includes("Client") || tech.includes("Caisse") || tech.includes("Relation"))
        return true
      })

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-[#0180FA]/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#0180FA]/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Expérience</span>
            <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
              Professionnelle
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un parcours riche en expériences variées dans le marketing digital et la gestion de projets
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#0180FA] text-white shadow-lg'
                  : 'bg-[#ECF6FF] text-[#0180FA] hover:bg-[#0180FA]/10 hover:text-[#0180FA]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {tab.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  {/* Card */}
                  <motion.div
                    className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-6 sm:p-8 hover:border-[#0180FA]/30 transition-all duration-500 shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(1, 128, 250, 0.1)"
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div className="flex-1">
                        {/* Period & Type Badge */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <motion.span
                            className="px-3 py-1 bg-[#0180FA]/10 text-[#0180FA] text-xs font-semibold rounded-full border border-[#0180FA]/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.period}
                          </motion.span>
                          <motion.span
                            className="px-3 py-1 bg-[#0180FA]/10 text-[#0180FA] text-xs font-semibold rounded-full border border-[#0180FA]/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.type}
                          </motion.span>
                        </div>

                        {/* Title & Company */}
                        <motion.h3
                          className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#0180FA] transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.h4
                          className="text-lg sm:text-xl text-[#0180FA] mb-2"
                          whileHover={{ x: 5 }}
                        >
                          {exp.company}
                        </motion.h4>
                        <motion.p
                          className="text-gray-500 text-sm flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          📍 {exp.location} • {exp.duration}
                        </motion.p>
                      </div>

                      {/* Gradient Accent */}
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${exp.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      />
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-700 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-gray-800 font-semibold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-[#0180FA] rounded-full mr-2"></span>
                        Réalisations clés
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="flex items-start space-x-3 p-3 bg-[#ECF6FF] rounded-lg border border-[#0180FA]/20 hover:border-[#0180FA]/30 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-1.5 h-1.5 bg-[#0180FA] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[#0180FA]/10 text-[#0180FA] text-xs rounded-full border border-[#0180FA]/20 hover:bg-[#0180FA]/20 hover:scale-105 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
            className="px-8 py-4 bg-gradient-to-r from-[#0180FA] to-[#0180FA] text-white rounded-xl font-semibold hover:from-[#0180FA]/90 hover:to-[#0180FA]/90 transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(1, 128, 250, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
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

export default Experience