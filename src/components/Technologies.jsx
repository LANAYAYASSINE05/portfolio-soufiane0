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
            className="w-7 h-7 object-contain"
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
            className="w-7 h-7 object-contain"
          />
        )
      case 'capcut':
        return (
          <img 
            src="/assets/capcut.png" 
            alt="CapCut" 
            className="w-7 h-7 object-contain"
          />
        )
      case 'photoshop':
        return (
          <img 
            src="/assets/photoshop.png" 
            alt="Photoshop" 
            className="w-7 h-7 object-contain"
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
            className="w-7 h-7 object-contain"
          />
        )
      case 'office':
        return (
          <img 
            src="/assets/office.png" 
            alt="Microsoft Office" 
            className="w-7 h-7 object-contain"
          />
        )
      case 'chatgpt':
        return (
          <img 
            src="/assets/chatgpt.png" 
            alt="ChatGPT" 
            className="w-7 h-7 object-contain"
          />
        )
      case 'gemini':
        return (
          <img 
            src="/assets/gemini.png" 
            alt="Gemini" 
            className="w-7 h-7 object-contain"
          />
        )
      case 'midjourney':
        return (
          <img 
            src="/assets/midjourney.png" 
            alt="Midjourney" 
            className="w-7 h-7 object-contain"
          />
        )
      default:
        return <div className="w-8 h-8 bg-[#0180FA] rounded-full flex items-center justify-center text-white text-sm font-bold">?</div>
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
    <section id="technologies" className="py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Technologies et Outils</span>
            <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
              Maîtrisés
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Une maîtrise complète des outils essentiels pour optimiser vos campagnes publicitaires 
            et développer votre présence digitale.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 mb-8 relative inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {category.category}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0180FA] to-[#0180FA] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              </motion.h3>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-4 text-center group w-28 sm:w-32 lg:w-36 flex-shrink-0 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      boxShadow: "0 20px 40px rgba(1, 128, 250, 0.2)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                  >
                    {/* Glow effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0180FA]/5 to-[#0180FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-2 sm:p-3 lg:p-4">
                      <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {renderIcon(tech.icon, tech.color)}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#0180FA] transition-colors duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0180FA] to-[#0180FA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
