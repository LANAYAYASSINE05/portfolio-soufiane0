import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('')

  // Email.js configuration
  const EMAILJS_SERVICE_ID = 'service_r5lauqc'
  const EMAILJS_TEMPLATE_ID = 'template_pjsolml'
  const EMAILJS_PUBLIC_KEY = 'XlqUieuQhZo090v1f'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Le nom est requis.')
      return false
    }
    if (!formData.email.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('L\'email est requis.')
      return false
    }
    if (!validateEmail(formData.email)) {
      setSubmitStatus('error')
      setSubmitMessage('Veuillez entrer une adresse email valide.')
      return false
    }
    if (!formData.subject.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Le sujet est requis.')
      return false
    }
    if (!formData.message.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Le message est requis.')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      // Initialize Email.js
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Prepare template parameters - matching Email.js template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      // Send email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-[#ECF6FF] via-white to-[#ECF6FF] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#0180FA]/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Contactez</span>
            <span className="block bg-gradient-to-r from-[#0180FA] to-[#0180FA] bg-clip-text text-transparent">
              -moi
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prêt à transformer vos objectifs business en stratégies d'acquisition performantes ? 
            Discutons de votre projet et maximisons ensemble votre ROI.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#0180FA] to-[#0180FA] rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Informations de contact</h3>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                N'hésitez pas à me contacter pour discuter de votre projet. Je suis disponible 
                pour des consultations et des collaborations dans le domaine du marketing digital 
                et de l'acquisition.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0180FA]/30"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:mehdi.rhanim.37@gmail.com"
                    className="text-gray-600 hover:text-[#0180FA] transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    mehdi.rhanim.37@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0180FA]/30"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm sm:text-base">Téléphone</h4>
                  <a 
                    href="tel:+212698773783"
                    className="text-gray-600 hover:text-[#0180FA] transition-colors duration-300 text-xs sm:text-sm"
                  >
                    +212 698 773 783
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0180FA]/30"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm sm:text-base">Localisation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Casablanca, Maroc</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links - LinkedIn Only */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-800 font-semibold mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/mehdi-rhanim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#ECF6FF] rounded-full flex items-center justify-center text-gray-600 hover:text-[#0180FA] hover:bg-[#0180FA]/10 transition-all duration-300 border border-[#0180FA]/20"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-white/90 to-[#ECF6FF]/90 backdrop-blur-sm border border-[#0180FA]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Envoyez-moi un message</h3>
            
            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                className={`p-4 rounded-lg mb-6 ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <motion.svg
                    className={`w-5 h-5 mr-3 ${
                      submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {submitStatus === 'success' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </motion.svg>
                  <span className="text-sm font-medium">{submitMessage}</span>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2 text-sm sm:text-base">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-[#0180FA] focus:ring-1 focus:ring-[#0180FA] transition-all duration-300 text-sm sm:text-base"
                  placeholder="Votre nom complet"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-text font-medium mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-[#0180FA] focus:ring-1 focus:ring-[#0180FA] transition-all duration-300 text-sm sm:text-base"
                  placeholder="votre@email.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-text font-medium mb-2 text-sm sm:text-base">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-[#0180FA] focus:ring-1 focus:ring-[#0180FA] transition-all duration-300 text-sm sm:text-base"
                  placeholder="Sujet de votre message"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-text font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-text placeholder-text-muted focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Décrivez votre projet et vos objectifs..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-[#0180FA] text-white hover:bg-[#0180FA]/90 glow-effect'
                }`}
                whileHover={!isSubmitting ? { 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(1, 128, 250, 0.3)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <motion.div
                      className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm">📤</span>
                    </motion.div>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact