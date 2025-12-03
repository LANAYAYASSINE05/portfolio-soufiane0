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
      category: "consideration",
      description: "Mettre en place une campagne social media 360° (Instagram, Facebook, TikTok) pour faire de Don Lucas une référence locale, avec plus de 1,5 M de vues cumulées, 266 403 interactions et un coût par engagement d’environ 0,001 $.",
      context: "Objectif : Asseoir la notoriété de Don Lucas à Casablanca, amplifier la visibilité du restaurant et transformer l’audience touchée en communauté active (visites profil, abonnements, réservations).",
      strategy: "En tant que Social Media Manager & Traffic Manager, j’ai structuré un écosystème complet de campagnes Meta Ads (notoriété, interactions, visites de profil) complété par un calendrier éditorial organique. L’algorithme a été nourri en continu via des contenus axés sur l’ambiance et les plats signature, tandis que les audiences chaudes (engagers, visiteurs de profil, vues vidéo) étaient retravaillées en retargeting pour maximiser les conversions sociales.",
      results: [
        { metric: "912 842", label: "Vues Instagram", description: "Un volume de vues très élevé sur Instagram, avec plusieurs pics autour du 17, 21 et 30 juillet, signe d’une visibilité soutenue tout au long du mois." },
        { metric: "12 956", label: "Interactions IG", description: "Plus de 12 900 interactions sur Instagram en un mois, soit une progression de plus de +2,0 K % par rapport à la période précédente." },
        { metric: "624 718", label: "Vues Facebook", description: "Plus de 624 000 vues sur Facebook, avec des pics marqués de visibilité autour du 17, 22 et 30 juillet." },
        { metric: "266 403", label: "Interactions Campagnes", description: "Au total, 266 403 interactions générées sur les campagnes payantes, pour un coût moyen par engagement d’environ 0,001 $, reflétant une efficacité publicitaire exceptionnelle." },
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
      description: "Mettre en avant les produits frais et de saison de Triangle Vert via une stratégie social media orientée notoriété et engagement, afin d’ancrer l’enseigne comme réflexe du quotidien.",
      context: "Objectif : Positionner Triangle Vert comme la référence locale pour les produits frais, en travaillant la mémorisation de la promesse « des produits frais et de saison, tous les jours » auprès d’une audience large et qualifiée.",
      strategy: "J’ai mis en place un dispositif d’achat média Meta Ads axé sur la notoriété et les interactions, avec des visuels créatifs autour des produits (fruits, légumes, viandes, poissons), un ciblage géolocalisé et affinitaire, et une optimisation continue des campagnes (analyse des pics de vues, couverture et interactions) pour maximiser la visibilité au meilleur CPM.",
      results: [
        { metric: "355 129", label: "Personnes Couvertes IG", description: "Plus de 355 000 personnes atteintes sur Instagram, avec une progression de couverture de plus de +3,1 K % sur la période." },
        { metric: "912 842", label: "Vues Totales IG", description: "Une forte dynamique de vues avec plusieurs pics en milieu et fin de mois, traduisant une excellente visibilité des créations Triangle Vert." },
        { metric: "+2,0 K %", label: "Progression Interactions IG", description: "Une hausse spectaculaire des interactions sur Instagram, confirmant l’attractivité des visuels et des messages axés sur la fraîcheur des produits." },
        { metric: "CPM Bas", label: "Coût par Résultat", description: "Un coût par mille très compétitif, permettant de maximiser la notoriété tout en maîtrisant le budget média." }
      ],
      technologies: ["Meta Ads", "Brand Awareness", "Retail", "Facebook", "Instagram"],
      image: "/assets/Triangle-vert-miniature.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Chez Casawi : Lancement d’une Adresse Marocaine en France",
      category: "lead",
      description: "Accompagner le lancement et la croissance de Chez Casawi, nouvelle adresse marocaine à Tarbes, grâce à une stratégie social media qui combine notoriété, engagement et génération de commandes.",
      context: "Objectif : Faire connaître Chez Casawi auprès d’une audience locale en quête de cuisine marocaine authentique, développer une communauté engagée et transformer cette audience en clients (sur place et en livraison).",
      strategy: "J’ai déployé un dispositif Meta Ads (notoriété, interactions, trafic vers le profil et la page) couplé à un planning éditorial gourmand : visuels de tajines, couscous et spécialités marocaines, mise en avant des avis clients et des offres. Les campagnes ont été optimisées autour des signaux d’engagement (sauvegardes, partages, clics) pour faire progresser les visites de profil, les abonnements et les commandes.",
      results: [
        { metric: "Multi-plateformes", label: "Présence digitale", description: "Construction d’un écosystème cohérent sur Instagram et Facebook, soutenu par des campagnes payantes ciblées et un contenu de marque chaleureux." },
        { metric: "Hausse marquée", label: "Interactions & engagement", description: "Progression forte des likes, commentaires, partages et sauvegardes, portée par des visuels appétissants et des messages centrés sur l’authenticité marocaine." },
        { metric: "Trafic local", label: "Visites profil & page", description: "Augmentation régulière des visites de profil et des vues de page, signe d’un intérêt croissant pour l’adresse et son offre culinaire." },
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
        <svg className="w-4 h-4 mr-2 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      key: 'brand', 
      label: 'Brand Awareness',
      icon: (
        <svg className="w-4 h-4 mr-2 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      key: 'lead', 
      label: 'Lead Generation',
      icon: (
        <svg className="w-4 h-4 mr-2 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      key: 'consideration', 
      label: 'Consideration',
      icon: (
        <svg className="w-4 h-4 mr-2 text-[#0180FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            PROJETS
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Quelques cas concrets
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Des projets réels menés pour des restaurants et enseignes de retail, avec des
            résultats mesurables en portée, engagement et business.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'border-[#0180FA] bg-[#0180FA] text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-[#0180FA] hover:text-[#0180FA]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Compteur */}
        <motion.div
          className="mb-8 text-center text-xs sm:text-sm text-gray-500"
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

        {/* Liste de projets en layout horizontal */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="rounded-3xl border border-white/70 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image colonne gauche */}
                <div className="relative w-full lg:w-2/5 h-52 sm:h-64 lg:h-auto overflow-hidden">
                  <div
                    className={`absolute inset-0 ${
                      project.id === 1
                        ? 'bg-[#f5f0eb]'
                        : project.id === 2
                        ? 'bg-[#2e4941]'
                        : 'bg-[#f7f4ef]'
                    }`}
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 h-full w-full object-contain p-4"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                  {/* Badge catégorie */}
                  <div className="absolute left-4 top-4 z-20">
                    <span className="rounded-full bg-[#0180FA]/90 px-3 py-1 text-[11px] font-semibold text-white">
                      {project.category === 'brand'
                        ? 'Brand Awareness'
                        : project.category === 'lead'
                        ? 'Lead Generation'
                        : 'Consideration'}
                    </span>
                  </div>
                </div>

                {/* Contenu droite */}
                <div className="w-full lg:w-3/5 p-5 sm:p-6 lg:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Cas client {index + 1}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {project.strategy}
                  </p>

                  {/* Résultats clés */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Résultats clés
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.results.slice(0, 3).map((result, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-gray-50 px-3 py-2 text-left"
                        >
                          <p className="text-sm font-semibold text-[#0180FA]">
                            {result.metric}{' '}
                            <span className="text-[11px] text-gray-600">
                              {result.label}
                            </span>
                          </p>
                          <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[#0180FA]/20 bg-[#ECF6FF] px-2.5 py-1 text-[11px] text-[#0180FA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <motion.a
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
                      className="inline-flex items-center justify-center rounded-full bg-[#0180FA] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_25px_rgba(1,128,250,0.3)] hover:bg-[#0170DB] transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Voir le rapport détaillé
                    </motion.a>
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:border-[#0180FA] hover:text-[#0180FA] transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Discuter d&apos;un projet similaire
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA globale */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center rounded-full bg-[#0180FA] px-7 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_12px_30px_rgba(1,128,250,0.3)] hover:bg-[#0170DB] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Me parler de votre prochain projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects