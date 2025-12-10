import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      id: 1,
      title: "Don Lucas : Campagne Social Media pour un Restaurant Espagnol",
      category: "brand",
      description: "Mettre en place une campagne social media 360° (Instagram, Facebook, TikTok) axée sur la notoriété et le reach pour faire de Don Lucas une référence locale, avec plus de 1,5 M de vues cumulées, 266 403 interactions et un coût par engagement d'environ 0,001 $.",
      context: "Objectif : Maximiser la notoriété (Awareness) de Don Lucas à Casablanca, amplifier le reach et les vues pour toucher une audience large, et créer une visibilité de marque forte auprès des cibles locales.",
      strategy: "En tant que Social Media Manager & Traffic Manager, j'ai structuré un écosystème complet de campagnes Meta Ads (notoriété, interactions, visites de profil) complété par un calendrier éditorial organique. L'algorithme a été nourri en continu via des contenus axés sur l'ambiance et les plats signature, tandis que les audiences chaudes (engagers, visiteurs de profil, vues vidéo) étaient retravaillées en retargeting pour maximiser les conversions sociales.",
      results: [
        { metric: "912 842", label: "Vues Instagram", description: "Un volume de vues très élevé sur Instagram, avec plusieurs pics autour du 17, 21 et 30 juillet, signe d'une visibilité soutenue tout au long du mois." },
        { metric: "12 956", label: "Interactions IG", description: "Plus de 12 900 interactions sur Instagram en un mois, soit une progression de plus de +2,0 K % par rapport à la période précédente." },
        { metric: "624 718", label: "Vues Facebook", description: "Plus de 624 000 vues sur Facebook, avec des pics marqués de visibilité autour du 17, 22 et 30 juillet." },
        { metric: "266 403", label: "Interactions Campagnes", description: "Au total, 266 403 interactions générées sur les campagnes payantes, pour un coût moyen par engagement d'environ 0,001 $, reflétant une efficacité publicitaire exceptionnelle." },
        { metric: "1 124", label: "Nouveaux abonnés IG", description: "1 124 nouveaux abonnés Instagram en un mois, consolidant durablement la communauté autour du restaurant et préparant les futures actions business (réservations, événements…)." }
      ],
      technologies: ["Meta Ads", "Instagram", "Facebook", "Restaurant Marketing", "Traffic Management"],
      image: "/assets/Don-lucas-restaurant-miniature.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Triangle Vert : Mise en Avant des Produits Frais & de Saison",
      category: "brand",
      description: "Mettre en avant les produits frais et de saison de Triangle Vert via une stratégie social media orientée notoriété et engagement, afin d'ancrer l'enseigne comme réflexe du quotidien.",
      context: "Objectif : Positionner Triangle Vert comme la référence locale pour les produits frais, en travaillant la mémorisation de la promesse « des produits frais et de saison, tous les jours » auprès d'une audience large et qualifiée.",
      strategy: "J'ai mis en place un dispositif d'achat média Meta Ads axé sur la notoriété et les interactions, avec des visuels créatifs autour des produits (fruits, légumes, viandes, poissons), un ciblage géolocalisé et affinitaire, et une optimisation continue des campagnes (analyse des pics de vues, couverture et interactions) pour maximiser la visibilité au meilleur CPM.",
      results: [
        { metric: "355 129", label: "Personnes Couvertes IG", description: "Plus de 355 000 personnes atteintes sur Instagram, avec une progression de couverture de plus de +3,1 K % sur la période." },
        { metric: "912 842", label: "Vues Totales IG", description: "Une forte dynamique de vues avec plusieurs pics en milieu et fin de mois, traduisant une excellente visibilité des créations Triangle Vert." },
        { metric: "+2,0 K %", label: "Progression Interactions IG", description: "Une hausse spectaculaire des interactions sur Instagram, confirmant l'attractivité des visuels et des messages axés sur la fraîcheur des produits." },
        { metric: "CPM Bas", label: "Coût par Résultat", description: "Un coût par mille très compétitif, permettant de maximiser la notoriété tout en maîtrisant le budget média." }
      ],
      technologies: ["Meta Ads", "Brand Awareness", "Retail", "Facebook", "Instagram"],
      image: "/assets/Triangle-vert-miniature.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Chez Casawi : Lancement d'une Adresse Marocaine en France",
      category: "consideration",
      description: "Accompagner le lancement et la croissance de Chez Casawi, nouvelle adresse marocaine à Tarbes, grâce à une stratégie social media orientée consideration pour susciter l'intérêt et l'intention d'achat auprès d'une audience qualifiée.",
      context: "Objectif : Positionner Chez Casawi comme une option de choix pour une cuisine marocaine authentique, développer l'intérêt et la considération de l'audience locale, et créer un désir de découverte (visites, abonnements, interactions qualifiées).",
      strategy: "J'ai déployé un dispositif Meta Ads (notoriété, interactions, trafic vers le profil et la page) couplé à un planning éditorial gourmand : visuels de tajines, couscous et spécialités marocaines, mise en avant des avis clients et des offres. Les campagnes ont été optimisées autour des signaux d'engagement (sauvegardes, partages, clics) pour faire progresser les visites de profil, les abonnements et les commandes.",
      results: [
        { metric: "Multi-plateformes", label: "Présence digitale", description: "Construction d'un écosystème cohérent sur Instagram et Facebook, soutenu par des campagnes payantes ciblées et un contenu de marque chaleureux." },
        { metric: "Hausse marquée", label: "Interactions & engagement", description: "Progression forte des likes, commentaires, partages et sauvegardes, portée par des visuels appétissants et des messages centrés sur l'authenticité marocaine." },
        { metric: "Trafic local", label: "Visites profil & page", description: "Augmentation régulière des visites de profil et des vues de page, signe d'un intérêt croissant pour l'adresse et son offre culinaire." },
        { metric: "Commandes", label: "Impact business", description: "Contribution directe aux commandes en livraison et aux visites en restaurant, grâce aux campagnes, aux promotions mises en avant et à la preuve sociale." }
      ],
      technologies: ["Meta Ads", "Restaurant Marketing", "Content Strategy", "Branding", "Social Media"],
      image: "/assets/Chez-casawi-miniature.jpg",
      link: "#"
    }
  ]

  const filters = [
    { 
      key: 'all', 
      label: 'Tous les projets',
      icon: (
        <svg className="w-4 h-4 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      key: 'brand', 
      label: 'Brand Awareness',
      icon: (
        <svg className="w-4 h-4 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      key: 'consideration', 
      label: 'Consideration',
      icon: (
        <svg className="w-4 h-4 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
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
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#0077B6]/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Creative Header */}
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
            PROJETS
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            Quelques{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
                cas concrets
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-2 bg-[#0077B6]/20 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            Des projets réels menés pour des restaurants et enseignes de retail, avec des
            résultats mesurables en portée, engagement et business.
          </motion.p>
        </motion.div>

        {/* Creative Filters */}
        <motion.div
          className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`group relative inline-flex items-center gap-2 rounded-xl border-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 overflow-hidden ${
                activeFilter === filter.key
                  ? 'border-[#0077B6] bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white shadow-lg'
                  : 'border-[#0077B6]/20 bg-white text-[#0077B6] hover:border-[#0077B6] hover:bg-[#ECF6FF]'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect for active filter */}
              {activeFilter === filter.key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {filter.icon}
                {filter.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Compteur */}
        <motion.div
          className="mb-8 text-center text-xs sm:text-sm text-[#666666]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché
          {filteredProjects.length > 1 ? 's' : ''}{' '}
          {activeFilter !== 'all' &&
            `• focus ${filters.find((f) => f.key === activeFilter)?.label.toLowerCase()}`}
        </motion.div>

        {/* Projects in Staggered Layout - Adapted for Image Sizes */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative"
            >
              {/* Card with 3D effect */}
              <div className="relative rounded-2xl bg-gradient-to-br from-white via-[#ECF6FF]/30 to-white border-2 border-[#0077B6]/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Animated corner decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Top border with gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                

                <div className="relative z-10 flex flex-col lg:flex-row">
                  {/* Image Section - Adapted Size */}
                  <div className="relative w-full lg:w-1/3 xl:w-2/5 h-64 sm:h-72 lg:h-auto lg:min-h-[400px] overflow-hidden flex items-center justify-center">
                    <div
                      className={`absolute inset-0 ${
                        project.id === 1
                          ? 'bg-[#f5f0eb]'
                          : project.id === 2
                          ? 'bg-[#2e4941]'
                          : 'bg-[#f7f4ef]'
                      }`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      width="600"
                      height="400"
                      className="relative z-10 w-full h-full object-contain p-6 sm:p-8 lg:p-10"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      style={{ maxHeight: '100%', maxWidth: '100%', willChange: 'auto' }}
                    />
                    {/* Badge catégorie */}
                    <div className="absolute left-4 top-4 z-20">
                      <div className="rounded-full bg-gradient-to-r from-[#0077B6] to-[#0099CC] px-4 py-1.5 text-xs font-bold text-white shadow-lg relative overflow-hidden">
                        <span>
                          {project.category === 'brand'
                            ? 'Brand Awareness'
                            : 'Consideration'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/3 xl:w-3/5 p-5 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-[#333333] mb-2 group-hover:text-[#0077B6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#0077B6] font-bold mb-4">
                      Cas client {index + 1}
                    </p>

                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                      {project.strategy}
                    </p>

                    {/* Résultats clés - Creative Grid */}
                    <div className="mb-6">
                      <motion.p
                        className="mb-4 text-xs font-black uppercase tracking-wide text-[#0077B6] flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-6 h-0.5 bg-[#0077B6]" />
                        Résultats clés
                      </motion.p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {project.results.slice(0, 5).map((result, i) => (
                          <div
                            key={i}
                            className="group/result relative rounded-xl bg-gradient-to-br from-white to-[#ECF6FF]/50 border border-[#0077B6]/10 p-4 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                          >
                            <p className="text-base sm:text-lg font-black text-[#0077B6] mb-1 relative z-10">
                              {result.metric}
                            </p>
                            <p className="text-xs font-bold text-[#333333] mb-2 relative z-10">
                              {result.label}
                            </p>
                            <p className="text-[11px] text-[#666666] leading-relaxed relative z-10 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies - Creative Tags */}
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-black uppercase tracking-wide text-[#0077B6] flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-[#0077B6]" />
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="group/tag relative rounded-lg border-2 border-[#0077B6]/20 bg-gradient-to-br from-white to-[#ECF6FF]/50 px-3 py-1.5 text-xs font-bold text-[#0077B6] hover:border-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300 cursor-default overflow-hidden"
                          >
                            <span className="relative z-10">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={
                          project.id === 1
                            ? encodeURI('/uploads/Rapport sponsoring Don lucas - Juillet .pdf')
                            : project.id === 2
                            ? encodeURI('/uploads/Rapport Achat Media - TRIANGLE VERT .pdf')
                            : project.id === 3
                            ? encodeURI('/uploads/Rapport Chez casawi Juillet à October.pdf')
                            : '#'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#0099CC] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10">Voir le rapport détaillé</span>
                        <svg
                          className="relative z-10 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="inline-flex items-center justify-center rounded-xl border-2 border-[#0077B6] bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0077B6] hover:bg-[#0077B6] hover:text-white transition-all duration-300"
                      >
                        Discuter d&apos;un projet similaire
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom accent on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#0099CC]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA globale */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Me parler de votre prochain projet</span>
            <svg
              className="relative z-10 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
