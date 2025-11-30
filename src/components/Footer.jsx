import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] border-t border-[#0180FA]/20">
      <div className="container-custom px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-text mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                SOUFIANNE BENNANI
              </motion.h3>
              <p className="text-text-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Community Manager, Traffic Manager spécialisé dans l'acquisition digitale et l'optimisation des campagnes publicitaires. 
                J'accompagne les entreprises dans leur croissance en maximisant leur ROI sur les plateformes 
                Meta Ads et Google Ads avec une approche data-driven et des résultats mesurables.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1 sm:space-y-2">
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-brand-blue">Email:</span> mehdi.rhanim.37@gmail.com
                </p>
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-brand-blue">Téléphone:</span> +212 698 773 783
                </p>
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-brand-blue">Localisation:</span> Casablanca, Maroc
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-text mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Accueil', id: 'hero' },
                  { name: 'À propos', id: 'about' },
                  { name: 'Compétences', id: 'skills' },
                  { name: 'Expérience', id: 'experience' },
                  { name: 'Formation', id: 'education' },
                  { name: 'Méthodologie', id: 'methodology' },
                  { name: 'Projets', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-light hover:text-brand-blue transition-colors duration-300 text-left text-xs sm:text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-text mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Campagnes Meta Ads',
                  'Google Ads (SEA)',
                  'Planification Média',
                  'Optimisation ROI',
                  'Tests A/B',
                  'Reporting & Analytics',
                  'Stratégie d\'Acquisition',
                  'Audit de Campagnes'
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    className="text-text-light text-xs sm:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 sm:space-x-6 mb-4 md:mb-0">
                {[
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://linkedin.com/in/mehdi-rhanim' },
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/mehdi-rhanim' },
                  { name: 'Email', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', url: 'mailto:mehdi.rhanim.37@gmail.com' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-text-muted hover:text-brand-blue hover:bg-brand-light/10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-600/20 rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm">🔗</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <motion.p
                className="text-text-muted text-xs sm:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                © 2025 SOUFIANNE BENNANI. Tous droits réservés.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer