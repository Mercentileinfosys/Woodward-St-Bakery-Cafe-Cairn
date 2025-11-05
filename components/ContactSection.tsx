'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setIsLoading(false)
    
    // Hide success message after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-script text-secondary text-2xl mb-4">Get in Touch</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            Visit <span className="text-gradient">Our Bakery</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateX: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="space-y-8"
          >
            {[
              { icon: FaMapMarkerAlt, title: 'Location', lines: ['216 Woodward St, Whitfield', 'QLD 4870, Australia'], delay: 0 },
              { icon: FaClock, title: 'Opening Hours', lines: ['Monday - Sunday', '7:00 AM - 3:00 PM'], delay: 0.1 },
              { icon: FaPhone, title: 'Phone', lines: ['1472014614 0931'], delay: 0.2 },
              { icon: FaEnvelope, title: 'Email', lines: ['info@woodwardstbakery.com'], delay: 0.3 },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -15, rotateY: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05, 
                    rotateX: 5, 
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)'
                  }}
                  className="glass-effect p-6 rounded-2xl flex items-start space-x-4 hover:bg-secondary/10 transition-colors"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <IconComponent className="text-secondary text-3xl mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="text-light font-semibold text-xl mb-2">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-light/70">{line}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            <div className="rounded-2xl overflow-hidden shadow-2xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.234567890123!2d145.7567!3d-16.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU1JzA4LjAiUyAxNDXCsDQ1JzI0LjEiRQ!5e0!3m2!1sen!2sau!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20, rotateX: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateX: -45, rotateY: -45 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotateX: 45, rotateY: 45 }}
                  className="absolute inset-0 z-20 bg-dark/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      rotateY: [0, 360, 0],
                      rotateX: [0, 180, 0]
                    }}
                    transition={{ duration: 1 }}
                  >
                    <FaCheckCircle className="text-secondary text-6xl mb-4" />
                  </motion.div>
                  <h3 className="text-light text-2xl font-serif mb-2">Message Sent!</h3>
                  <p className="text-light/70 text-center">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-effect p-8 rounded-2xl space-y-6 hover:shadow-2xl hover:shadow-secondary/30 transition-shadow"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div>
                <label className="text-light mb-2 block font-medium">Your Name</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-primary/50 border border-secondary/30 rounded-lg text-light focus:outline-none focus:border-secondary transition-all duration-300"
                  required
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(201, 164, 104, 0.3)' }}
                />
              </div>

              <div>
                <label className="text-light mb-2 block font-medium">Your Email</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-primary/50 border border-secondary/30 rounded-lg text-light focus:outline-none focus:border-secondary transition-all duration-300"
                  required
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(201, 164, 104, 0.3)' }}
                />
              </div>

              <div>
                <label className="text-light mb-2 block font-medium">Message</label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 bg-primary/50 border border-secondary/30 rounded-lg text-light focus:outline-none focus:border-secondary transition-all duration-300 resize-none"
                  required
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(201, 164, 104, 0.3)' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(201, 164, 104, 0.4)',
                  rotateX: 5,
                  rotateY: 2
                } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                {isLoading ? (
                  <motion.span
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      opacity: { duration: 1.5, repeat: Infinity },
                      rotate: { duration: 2, repeat: Infinity }
                    }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
