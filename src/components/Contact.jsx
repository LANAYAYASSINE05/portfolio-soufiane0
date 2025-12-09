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
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitMessage, setSubmitMessage] = useState('')

  const EMAILJS_SERVICE_ID = 'service_r5lauqc'
  const EMAILJS_TEMPLATE_ID = 'template_pjsolml'
  const EMAILJS_PUBLIC_KEY = 'XlqUieuQhZo090v1f'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

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
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)

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

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.')
        
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
    <section id="contact" className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Creative Background with Geometric Shapes */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ECF6FF]/40 via-transparent to-[#ECF6FF]/20" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 border-4 border-[#0077B6]/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border-4 border-[#0099CC]/10 rotate-45"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#0077B6]/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-[#0099CC]/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Creative Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#0077B6] mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            CONTACT
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            Contactez{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6] bg-clip-text text-transparent">
                -moi
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
            className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            Prêt à transformer vos objectifs business en stratégies d'acquisition performantes ? 
            Discutons de votre projet et maximisons ensemble votre ROI.
          </motion.p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Info with Floating Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {/* Intro Text */}
            <motion.div
              className="relative rounded-2xl bg-gradient-to-br from-white to-[#ECF6FF]/50 border-2 border-[#0077B6]/10 p-6 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0077B6]/10 to-transparent rounded-bl-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
              <h3 className="text-xl sm:text-2xl font-black text-[#333333] mb-3 relative z-10">
                Discutons de votre projet
              </h3>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed relative z-10">
                N'hésitez pas à me contacter pour discuter de votre projet. Je suis disponible 
                pour des consultations et des collaborations dans le domaine du marketing digital 
                et de l'acquisition.
              </p>
            </motion.div>

            {/* Contact Cards - Vertical Stack */}
            <div className="space-y-4">
              {[
                { 
                  type: 'Email', 
                  value: 'mehdi.rhanim.37@gmail.com', 
                  href: 'mailto:mehdi.rhanim.37@gmail.com',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ),
                  gradient: 'from-red-500/20 to-red-500/10',
                  iconBg: 'bg-red-500/10',
                  iconColor: 'text-red-500',
                  delay: 0.3
                },
                { 
                  type: 'Téléphone', 
                  value: '+212 698 773 783', 
                  href: 'tel:+212698773783',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ),
                  gradient: 'from-blue-500/20 to-blue-500/10',
                  iconBg: 'bg-blue-500/10',
                  iconColor: 'text-blue-500',
                  delay: 0.4
                },
                { 
                  type: 'Localisation', 
                  value: 'Casablanca, Maroc', 
                  href: '#',
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  ),
                  gradient: 'from-green-500/20 to-green-500/10',
                  iconBg: 'bg-green-500/10',
                  iconColor: 'text-green-500',
                  delay: 0.5
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.href}
                  className="group relative block rounded-2xl bg-gradient-to-br from-white to-[#ECF6FF]/50 border-2 border-[#0077B6]/10 p-5 hover:border-[#0077B6]/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: contact.delay,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    rotateY: 3,
                    boxShadow: "0 20px 40px rgba(0, 119, 182, 0.15)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0077B6]/10 to-transparent rounded-bl-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
                  
                  {/* Hover gradient effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-100`}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      className={`${contact.iconBg} ${contact.iconColor} rounded-xl p-3 flex-shrink-0`}
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-sm font-black text-[#333333] mb-1 group-hover:text-[#0077B6] transition-colors">
                        {contact.type}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#666666] break-all group-hover:text-[#0077B6] transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Link */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-black text-[#333333] mb-4">Réseau social</h4>
              <motion.a
                href="https://linkedin.com/in/mehdi-rhanim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter mon profil LinkedIn"
                className="group relative inline-flex items-center gap-3 w-full rounded-2xl bg-gradient-to-br from-white to-[#ECF6FF] border-2 border-[#0077B6]/20 p-4 hover:border-[#0077B6] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(0, 119, 182, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#0077B6] opacity-0 group-hover:opacity-10"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                <svg className="w-6 h-6 text-[#0077B6] group-hover:text-[#0099CC] transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-bold text-[#333333] group-hover:text-[#0077B6] transition-colors relative z-10">
                  LinkedIn
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="relative rounded-3xl bg-gradient-to-br from-white via-[#ECF6FF]/30 to-white border-2 border-[#0077B6]/10 p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ rotateY: -2, scale: 1.01 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {/* Animated corner decorations */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-bl-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0099CC]/20 to-transparent rounded-tr-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
            
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#0099CC] to-[#0077B6]" />
            
            <motion.h3 
              className="text-2xl sm:text-3xl font-black text-[#333333] mb-6 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Envoyez-moi un message
            </motion.h3>
            
            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                className={`relative z-10 p-4 rounded-xl mb-6 border-2 ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-600' 
                    : 'bg-red-500/10 border-red-500/30 text-red-600'
                }`}
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <motion.svg
                    className={`w-5 h-5 ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.1, type: "spring" }}
                  >
                    {submitStatus === 'success' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </motion.svg>
                  <span className="text-sm font-bold">{submitMessage}</span>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {[
                { name: 'name', label: 'Nom complet', placeholder: 'Votre nom complet', type: 'text' },
                { name: 'email', label: 'Email', placeholder: 'votre@email.com', type: 'email' },
                { name: 'subject', label: 'Sujet', placeholder: 'Sujet de votre message', type: 'text' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.label
                    htmlFor={field.name}
                    className="block text-sm font-black text-[#333333] mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {field.label}
                  </motion.label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#0077B6]/20 rounded-xl text-[#333333] placeholder-[#999999] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder={field.placeholder}
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 0 4px rgba(0, 119, 182, 0.1)"
                    }}
                  />
                </motion.div>
              ))}

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.label
                  htmlFor="message"
                  className="block text-sm font-black text-[#333333] mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-[#0077B6]/20 rounded-xl text-[#333333] placeholder-[#999999] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Décrivez votre projet et vos objectifs..."
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 4px rgba(0, 119, 182, 0.1)"
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full px-6 py-4 rounded-xl font-black text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#0077B6] to-[#0099CC] text-white hover:shadow-xl'
                }`}
                whileHover={!isSubmitting ? { 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 15px 40px rgba(0, 119, 182, 0.4)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={!isSubmitting ? {
                  boxShadow: [
                    "0 0 0px rgba(0, 119, 182, 0)",
                    "0 10px 30px rgba(0, 119, 182, 0.3)",
                    "0 0 0px rgba(0, 119, 182, 0)"
                  ]
                } : {}}
                transition={!isSubmitting ? {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 150,
                  boxShadow: { duration: 2, repeat: Infinity }
                } : {
                  delay: 0.5,
                  type: "spring",
                  stiffness: 150
                }}
              >
                {/* Shimmer effect */}
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-gray-200 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </motion.svg>
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
