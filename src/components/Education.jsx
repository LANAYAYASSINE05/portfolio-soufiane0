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
      title: "License en économie et gestion",
      institution: "Faculté de Sciences Juridiques, Economique et Sociales, Mohammédia",
      period: "2019 - 2025",
      location: "Mohammédia, Maroc",
      grade: "Mention Assez Bien"
    },
    {
      id: 2,
      title: "Baccalauréat Sciences de la Vie et de la Terre",
      institution: "Lycée Mohamed VI",
      period: "2018 - 2019",
      location: "Casablanca, Maroc",
      grade: "Mention Assez Bien"
    }
  ]

  // const certifications = [
  //   {
  //     name: "Le marketing des réseaux sociaux",
  //     issuer: "HubSpot Academy",
  //     year: "2025",
  //     description: "Certification HubSpot en marketing des réseaux sociaux - Émise en avril 2025, expire en mai 2027",
  //     id: "839fbd3931ea45a493346c694563c14a"
  //   }
  // ]

  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-[#ECF6FF]/20 to-white overflow-hidden"
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

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Compact Header */}
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
            FORMATION & CERTIFICATIONS
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
              académique
            </span>
          </motion.h2>
        </motion.div>

        {/* Compact Education Cards - Grid Layout */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="relative h-full rounded-2xl bg-white border-2 border-[#0077B6]/10 p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] to-[#0099CC]" />
                  
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    {/* Header with badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <motion.div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECF6FF] border border-[#0077B6]/20 mb-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-[#0077B6] animate-pulse" />
                          <span className="text-xs font-bold text-[#0077B6]">{edu.period}</span>
                        </motion.div>
                        <h3 className="text-lg sm:text-xl font-black text-[#333333] mb-1.5 group-hover:text-[#0077B6] transition-colors">
                          {edu.title}
                        </h3>
                        <p className="text-sm font-bold text-[#0077B6]">{edu.institution}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-[#666666]">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {edu.location}
                          </span>
                          <span className="text-[#0077B6] font-bold">•</span>
                          <span className="font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center text-white font-black text-lg shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666666] leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Certifications */}
        {/* <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-[#333333] mb-2">
              Certifications
            </h3>
            <p className="text-sm text-[#666666]">Accréditations professionnelles</p>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="group relative rounded-2xl bg-white border-2 border-[#0077B6]/10 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] to-[#0099CC]" />
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: [0, 15, -15, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-black text-[#333333] mb-1 group-hover:text-[#0077B6] transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm font-bold text-[#0077B6]">{cert.issuer}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white text-xs font-bold">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed mb-3">
                      {cert.description}
                    </p>
                    {cert.id && (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t border-[#0077B6]/10">
                        <span className="text-xs text-[#666666] break-all font-mono bg-[#ECF6FF]/50 px-2 py-1 rounded">
                          ID: {cert.id}
                        </span>
                        <motion.a
                          href="https://app.hubspot.com/academy/achievements/lph84151/fr/1/mehdi-rhanim/le-marketing-des-reseaux-sociaux"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B6] text-white text-xs font-bold shadow-md hover:bg-[#006699] transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Voir la certification
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Compact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
