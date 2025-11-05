'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-primary perspective">
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-script text-secondary text-2xl md:text-3xl"
              style={{ perspective: '1000px' }}
            >
              Woodward St Bakery Café
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-light leading-tight"
              style={{ perspective: '1000px' }}
            >
              Welcome to
              <br />
              <span className="text-gradient">Cairns' Best Bakery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-light/80 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              🥐 House-made pastries • 🍳 Gourmet toasties • 🍞 Freshly baked bread • ☕ Hot coffee
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-4"
            >
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/60 text-sm">Whitfield, Cairns</p>
                  <p className="text-light">216 Woodward St, QLD 4870</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaClock className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/60 text-sm">Breakfast & Lunch</p>
                  <p className="text-light">Open 7:00 AM - 3:00 PM Daily</p>
                </div>
              </motion.div>

              <motion.a 
                href="tel:(07)40320931"
                className="flex items-start space-x-3 hover:opacity-80 transition-opacity"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaPhone className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light/60 text-sm">Call Us</p>
                  <p className="text-light">(07) 4032 0931</p>
                </div>
              </motion.a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)', rotateY: 3 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
              style={{ perspective: '1000px' }}
            >
              Download Menu
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
            className="relative hidden lg:block"
            style={{ perspective: '1200px' }}
          >
            <div className="relative">
              {/* Animated background glow elements */}
              <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-accent/20 to-transparent rounded-3xl blur-3xl opacity-60"
                style={{ perspective: '1200px' }}
              />
              
              <motion.div
                animate={{ y: [0, -25, 0], rotateZ: [0, 3, 0], rotateX: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
                style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-transparent rounded-2xl blur-3xl scale-105"></div>
                <video
                  src="/Reel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative z-10 rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:brightness-110 transition-all duration-500"
                  style={{ 
                    boxShadow: '0 20px 60px rgba(201, 164, 104, 0.4), inset 0 0 40px rgba(0,0,0,0.1)'
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute hidden md:flex top-10 -left-10 glass-effect p-4 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-light font-semibold">Fresh Daily</p>
                    <p className="text-light/60 text-sm">Baked with love</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute hidden md:flex bottom-10 -right-10 glass-effect p-4 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">★</span>
                  </div>
                  <div>
                    <p className="text-light font-semibold">5-Star Rated</p>
                    <p className="text-light/60 text-sm">By our community</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary text-4xl"
        >
          <HiChevronDown />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
