'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUtensils, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa'

const CateringSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="catering" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-script text-secondary text-2xl mb-6">Catering Services</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-8 leading-tight">
              Catering Available for
              <br />
              <span className="text-gradient">All Occasions</span>
            </h2>
            
            <p className="text-light/80 text-lg mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, we provide exceptional catering services with our signature baked goods and gourmet offerings.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <FaUtensils className="text-secondary mt-1 text-2xl" />
                <div>
                  <h4 className="text-light font-semibold mb-1">Custom Menus</h4>
                  <p className="text-light/60 text-sm">Tailored to your preferences</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCalendarAlt className="text-secondary mt-1 text-2xl" />
                <div>
                  <h4 className="text-light font-semibold mb-1">Easy Booking</h4>
                  <p className="text-light/60 text-sm">Simple reservation process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUsers className="text-secondary mt-1 text-2xl" />
                <div>
                  <h4 className="text-light font-semibold mb-1">Any Size Event</h4>
                  <p className="text-light/60 text-sm">From 10 to 500+ guests</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaStar className="text-secondary mt-1 text-2xl" />
                <div>
                  <h4 className="text-light font-semibold mb-1">Premium Quality</h4>
                  <p className="text-light/60 text-sm">Fresh, handcrafted items</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Book Catering
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 25, rotateX: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              animate={{ rotateX: [0, 3, 0], rotateY: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
                alt="Catering Services"
                className="w-full h-[600px] object-cover hover:brightness-110 transition-all duration-500"
                whileHover={{ 
                  scale: 1.08,
                  rotateX: 5,
                  rotateY: 5
                }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateX: -45, rotateY: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1, rotateX: 5, rotateY: 5 }}
                className="absolute top-10 right-10 glass-effect p-6 rounded-xl text-center hover:glow-pulse"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-light text-sm">Events Catered</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateX: 45, rotateY: 45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1, rotateX: -5, rotateY: -5 }}
                className="absolute bottom-10 left-10 glass-effect p-6 rounded-xl text-center hover:glow-pulse"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-secondary mb-2">⭐ 4.9</div>
                  <div className="text-light text-sm">Customer Rating</div>
                </motion.div>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CateringSection
