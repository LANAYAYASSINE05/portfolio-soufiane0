import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const education = [
    {
      id: 1,
      title: "Master en Marketing et Action Commerciale",
      institution: "ENCG Casablanca",
      period: "2017 - 2022",
      location: "Casablanca, Maroc",
      description: "Formation approfondie en marketing, stratégies commerciales et gestion d'entreprise. Spécialisation en marketing digital et techniques de vente.",
      highlights: [
        "Formation complète en marketing stratégique et opérationnel",
        "Maîtrise des techniques de vente et de négociation",
        "Projets pratiques en marketing digital et communication",
        "Préparation aux défis du marché marocain et international"
      ],
      grade: "Mention Bien"
    },
    {
      id: 2,
      title: "Baccalauréat Sciences Physique",
      institution: "Groupe Scolaire Berrada",
      period: "2017",
      location: "Casablanca, Maroc",
      description: "Formation scientifique de base avec orientation vers les sciences physiques et les mathématiques appliquées.",
      highlights: [
        "Formation rigoureuse en sciences physiques",
        "Développement de l'esprit analytique et logique",
        "Préparation aux études supérieures en commerce",
        "Excellence académique reconnue"
      ],
      grade: "Mention Très Bien"
    }
  ]

  const certifications = [
    {
      name: "Le marketing des réseaux sociaux",
      issuer: "HubSpot Academy",
      year: "2025",
      description: "Certification HubSpot en marketing des réseaux sociaux - Émise en avril 2025, expire en mai 2027",
      id: "839fbd3931ea45a493346c694563c14a"
    }
  ]

  return (
    <section id="education" className="py-20 md:py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Formation &</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Parcours Académique
          </motion.h3>

          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Education Card */}
                <motion.div
                  className="dashboard-card"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(108, 99, 255, 0.1)"
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      {/* Period & Grade */}
                      <motion.div
                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full">
                          {edu.period}
                        </span>
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent text-xs sm:text-sm font-semibold rounded-full">
                          {edu.grade}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h4
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-text mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {edu.title}
                      </motion.h4>

                      {/* Institution & Location */}
                      <motion.div
                        className="mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-lg sm:text-xl text-primary font-semibold">{edu.institution}</p>
                        <p className="text-text-muted text-sm sm:text-base">{edu.location}</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-text-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {edu.description}
                  </motion.p>

                  {/* Highlights */}
                  <motion.div
                    className="mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="text-text font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Points forts :</h5>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          className="flex items-start space-x-2 sm:space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + highlightIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-text-light text-xs sm:text-sm">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Separator */}
                {index < education.length - 1 && (
                  <motion.div
                    className="w-full h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-accent/50 my-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 lg:p-8 rounded-2xl border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications Professionnelles
          </motion.h3>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm sm:text-lg">A</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-text mb-1 break-words">{cert.name}</h4>
                      <p className="text-primary text-xs sm:text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full self-start sm:self-auto">
                    {cert.year}
                  </span>
                </div>
                <p className="text-text-light text-xs sm:text-sm mb-3 leading-relaxed">{cert.description}</p>
                {cert.id && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <span className="text-xs text-text-muted break-all">ID: {cert.id}</span>
                    <motion.a
                      href="https://app.hubspot.com/academy/achievements/lph84151/fr/1/mehdi-rhanim/le-marketing-des-reseaux-sociaux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1 self-start sm:self-auto"
                      whileHover={{ scale: 1.05 }}
                    >
                      Voir la certification
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center mx-auto text-sm sm:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
            <motion.svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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

export default Education
