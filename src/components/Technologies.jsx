import { motion } from 'framer-motion'

const Technologies = () => {
  const renderIcon = (iconName, color) => {
    const iconProps = { width: 32, height: 32 }
    
    switch (iconName) {
      case 'meta':
        return (
          <img 
            src="/assets/meta.png" 
            alt="Meta" 
            width={iconProps.width} 
            height={iconProps.height}
            className="w-8 h-8 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'google':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        )
      case 'tiktok':
        return (
          <img 
            src="/assets/tiktok.png" 
            alt="TikTok" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'linkedin':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" className="w-8 h-8" style={{ fill: '#0077B5' }}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      case 'canva':
        return (
          <img 
            src="/assets/canva.png" 
            alt="Canva" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'capcut':
        return (
          <img 
            src="/assets/capcut.png" 
            alt="CapCut" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'photoshop':
        return (
          <img 
            src="/assets/photoshop.png" 
            alt="Photoshop" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'pinterest':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" className="w-8 h-8" style={{ fill: '#E60023' }}>
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
        )
      case 'elementor':
        return (
          <img 
            src="/assets/elemenator.png" 
            alt="Elementor" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        )
      case 'office':
        return (
          <img 
            src="/assets/office.png" 
            alt="Microsoft Office" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        )
      case 'chatgpt':
        return (
          <img 
            src="/assets/chatgpt.png" 
            alt="ChatGPT" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'gemini':
        return (
          <img 
            src="/assets/gemini.png" 
            alt="Gemini" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      case 'midjourney':
        return (
          <img 
            src="/assets/midjourney.png" 
            alt="Midjourney" 
            width="28"
            height="28"
            className="w-7 h-7 object-contain"
            loading="lazy"
            decoding="async"
          />
        )
      default:
        return <div className="w-8 h-8 bg-[#0077B6] rounded-full flex items-center justify-center text-white text-sm font-bold">?</div>
    }
  }

  const technologies = [
    // Plateformes Publicitaires
    {
      category: "Plateformes Publicitaires",
      items: [
        { name: "Meta Ads", description: "Facebook & Instagram", icon: "meta", color: "#1877F2" },
        { name: "Google Ads", description: "Search & Display", icon: "google", color: "#4285F4" },
        { name: "TikTok Ads", description: "TikTok for Business", icon: "tiktok", color: "#000000" },
        { name: "LinkedIn Ads", description: "B2B Advertising", icon: "linkedin", color: "#0077B5" }
      ]
    },
    // Outils d'Analyse
    {
      category: "Outils d'Analyse",
      items: [
        { name: "Meta Pixel & CAPI", description: "Tracking & Conversion", icon: "meta", color: "#1877F2" },
        { name: "Meta Suite Business", description: "Gestion centralisée", icon: "meta", color: "#1877F2" },
        { name: "Google Analytics", description: "GA4 & Universal", icon: "google", color: "#4285F4" },
        { name: "Google Tag Manager", description: "GTM", icon: "google", color: "#4285F4" },
        { name: "Google Search Console", description: "Performance SEO", icon: "google", color: "#4285F4" },
        { name: "TikTok Pixel", description: "Tracking TikTok", icon: "tiktok", color: "#000000" }
      ]
    },
    // Design & Créatifs
    {
      category: "Design & Créatifs",
      items: [
        { name: "Canva", description: "Création visuelle", icon: "canva", color: "#00C4CC" },
        { name: "CapCut", description: "Montage vidéo", icon: "capcut", color: "#000000" },
        { name: "Photoshop", description: "Création visuelle - Avancé", icon: "photoshop", color: "#31A8FF" },
        { name: "Pinterest", description: "Inspiration visuelle", icon: "pinterest", color: "#E60023" },
        { name: "Elementor", description: "Page builder", icon: "elementor", color: "#92003B" }
      ]
    },
    // Reporting & Data
    {
      category: "Reporting & Data",
      items: [
        { name: "Looker Studio", description: "Visualisation de données", icon: "google", color: "#4285F4" },
        { name: "Pack Office", description: "Excel, PowerPoint, Word", icon: "office", color: "#D83B01" },
        { name: "Google Sheets", description: "Tableurs collaboratifs", icon: "google", color: "#4285F4" }
      ]
    },
    // Outils IA
    {
      category: "Outils IA",
      items: [
        { name: "ChatGPT", description: "Assistant IA conversationnel", icon: "chatgpt", color: "#00A67E" },
        { name: "Gemini", description: "IA générative Google", icon: "gemini", color: "#4285F4" },
        { name: "Midjourney", description: "Génération d'images IA", icon: "midjourney", color: "#000000" }
      ]
    }
  ]

  return (
    <section id="technologies" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Creative Background with Geometric Shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated geometric shapes */}
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

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            TECHNOLOGIES & OUTILS
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            Technologies{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
                maîtrisées
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
        </motion.div>

        {/* Creative Technologies Layout - Asymmetric Design */}
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="relative"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ perspective: 1000 }}
            >
              {/* Category Header with Creative Design */}
              <div className="relative mb-6 sm:mb-8">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative shape */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#0099CC] flex items-center justify-center shadow-2xl relative overflow-hidden">
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-3 rounded-2xl bg-[#0077B6] blur-2xl opacity-0 group-hover:opacity-40"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Title with decorative line */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl sm:text-2xl font-black text-[#333333] mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {category.category}
                    </motion.h3>
                    <motion.div
                      className="h-1 bg-gradient-to-r from-[#0077B6] to-[#0099CC] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Technologies in Creative Grid - Staggered Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group/tech relative"
                    initial={{ 
                      opacity: 0, 
                      y: 50,
                      rotateY: categoryIndex % 2 === 0 ? -15 : 15,
                      scale: 0.8
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      rotateY: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: (categoryIndex * 0.1) + (index * 0.08),
                      type: "spring",
                      stiffness: 150
                    }}
                    viewport={{ once: true, margin: '-50px' }}
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ 
                      y: -10,
                      rotateY: categoryIndex % 2 === 0 ? 5 : -5,
                      scale: 1.05,
                      z: 50
                    }}
                  >
                    {/* Card with 3D effect */}
                    <div className="relative h-full rounded-2xl bg-gradient-to-br from-white via-[#ECF6FF]/30 to-white border-2 border-[#0077B6]/10 p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Animated corner decoration */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Top border with gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 via-[#0099CC]/5 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity"
                        initial={{ scale: 0.8, rotate: -45 }}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.5 }}
                      />

                      <div className="relative z-10 text-center">
                        {/* Icon with floating animation */}
                        <motion.div
                          className="flex justify-center mb-3 sm:mb-4"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            rotate: [0, 15, -15, 0],
                            y: -5
                          }}
                        >
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            {renderIcon(tech.icon, tech.color)}
                            {/* Pulsing ring */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-[#0077B6] opacity-0 group-hover/tech:opacity-50"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0, 0.5, 0]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.h4
                          className="text-xs sm:text-sm font-black text-[#333333] mb-1.5 group-hover/tech:text-[#0077B6] transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech.name}
                        </motion.h4>
                        <p className="text-[10px] sm:text-xs text-[#666666] leading-relaxed">
                          {tech.description}
                        </p>
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
