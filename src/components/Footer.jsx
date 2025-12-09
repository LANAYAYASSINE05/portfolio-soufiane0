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
    <footer className="relative bg-gradient-to-b from-white via-[#ECF6FF]/40 to-[#ECF6FF]/60 border-t-4 border-[#0077B6]/30 overflow-hidden">
      {/* Creative Background with Geometric Shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #0077B6 1px, transparent 1px),
                              linear-gradient(to bottom, #0077B6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <motion.div
          className="absolute top-20 left-1/4 w-48 h-48 border-4 border-[#0077B6]/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-36 h-36 border-4 border-[#0099CC]/10 rotate-45"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#0077B6]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="py-16 sm:py-20">
          {/* Main Content - Vertical Stacked Layout */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Top Section - Brand & Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Brand Section */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                {/* Card with 3D effect */}
                <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#ECF6FF]/50 to-white border-2 border-[#0077B6]/10 p-8 shadow-2xl overflow-hidden">
                  {/* Animated corner decorations */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0099CC]/20 to-transparent rounded-tr-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                  
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                  
                  <motion.h3
                    className="text-3xl sm:text-4xl font-black text-[#333333] mb-4 relative z-10"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
                      SOUFIANNE BENNANI
                    </span>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#666666] mb-6 leading-relaxed text-sm sm:text-base relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Community Manager, Traffic Manager spécialisé dans l'acquisition digitale et l'optimisation des campagnes publicitaires. 
                    J'accompagne les entreprises dans leur croissance en maximisant leur ROI sur les plateformes 
                    Meta Ads et Google Ads avec une approche data-driven et des résultats mesurables.
                  </motion.p>
                  
                  {/* Contact Info - Compact Horizontal */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
                    {[
                      { label: 'Email', value: 'mehdi.rhanim.37@gmail.com', icon: '✉️', href: 'mailto:mehdi.rhanim.37@gmail.com' },
                      { label: 'Téléphone', value: '+212 698 773 783', icon: '📞', href: 'tel:+212698773783' },
                      { label: 'Localisation', value: 'Casablanca, Maroc', icon: '📍', href: '#' }
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        className="group relative rounded-xl bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0077B6]/20 p-3 hover:border-[#0077B6]/40 transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -3,
                          boxShadow: "0 10px 30px rgba(0, 119, 182, 0.15)"
                        }}
                      >
                        {/* Hover gradient effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#0077B6]/10 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="relative z-10 text-center">
                          <motion.span
                            className="block text-2xl mb-1"
                            whileHover={{ rotate: [0, 15, -15, 0], scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            {contact.icon}
                          </motion.span>
                          <p className="text-[10px] font-black text-[#0077B6] mb-0.5">{contact.label}</p>
                          <p className="text-[10px] text-[#666666] line-clamp-1">{contact.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation & Services - Combined */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                {/* Navigation Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#ECF6FF]/50 to-white border-2 border-[#0077B6]/10 p-6 shadow-2xl overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0099CC]/20 to-transparent rounded-bl-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                  
                  <motion.h4 
                    className="text-xl font-black text-[#333333] mb-4 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    Navigation
                  </motion.h4>
                  <div className="grid grid-cols-2 gap-2 relative z-10">
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
                      <motion.button
                        key={link.name}
                        onClick={() => scrollToSection(link.id)}
                        className="group relative text-left text-xs text-[#666666] hover:text-[#0077B6] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-[#ECF6FF]/50 overflow-hidden"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.03, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ x: 3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0077B6] to-[#0099CC]"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">{link.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Services Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#ECF6FF]/50 to-white border-2 border-[#0077B6]/10 p-6 shadow-2xl overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#0077B6]/20 to-transparent rounded-tl-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                  
                  <motion.h4 
                    className="text-xl font-black text-[#333333] mb-4 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    Services
                  </motion.h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 relative z-10">
                    {[
                      'Meta Ads',
                      'Google Ads',
                      'Planification',
                      'Optimisation',
                      'Tests A/B',
                      'Reporting',
                      'Stratégie',
                      'Audit'
                    ].map((service, index) => (
                      <motion.div
                        key={service}
                        className="group relative rounded-lg bg-gradient-to-br from-white/50 to-[#ECF6FF]/50 p-2.5 border border-[#0077B6]/10 hover:border-[#0077B6]/30 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          x: 3,
                          boxShadow: "0 5px 15px rgba(0, 119, 182, 0.1)"
                        }}
                      >
                        {/* Pulsating dot */}
                        <motion.div
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0077B6]"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <p className="text-xs text-[#666666] pl-5 group-hover:text-[#0077B6] transition-colors font-bold">
                          {service}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section - Social Links & Copyright */}
            <motion.div
              className="border-t-2 border-[#0077B6]/20 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <motion.span
                    className="text-sm font-black text-[#333333]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Suivez-moi:
                  </motion.span>
                  <div className="flex gap-3">
                    {[
                      { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://linkedin.com/in/mehdi-rhanim', color: 'from-blue-600 to-blue-700' },
                      { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/mehdi-rhanim', color: 'from-gray-800 to-gray-900' },
                      { name: 'Email', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', url: 'mailto:mehdi.rhanim.37@gmail.com', color: 'from-red-500 to-red-600' }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-white to-[#ECF6FF] border-2 border-[#0077B6]/20 flex items-center justify-center overflow-hidden hover:border-[#0077B6] transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, 10, -10, 0],
                          boxShadow: "0 10px 30px rgba(0, 119, 182, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Hover glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-xl`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <svg className="w-6 h-6 text-[#0077B6] group-hover:text-[#0099CC] transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Copyright */}
                <motion.p
                  className="text-[#666666] text-sm font-medium text-center md:text-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  © 2025{' '}
                  <span className="font-black bg-gradient-to-r from-[#0077B6] to-[#0099CC] bg-clip-text text-transparent">
                    SOUFIANNE BENNANI
                  </span>
                  . Tous droits réservés.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
