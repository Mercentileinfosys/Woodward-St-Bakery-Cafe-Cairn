'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBreadSlice, FaCoffee, FaHeart, FaUsers } from 'react-icons/fa'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <FaBreadSlice className="text-4xl" />,
      title: 'House-Made Pastries',
      description: 'Fresh croissants and pastries baked daily with premium ingredients.'
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Premium Coffee',
      description: 'Perfectly brewed hot coffee to complement your breakfast.'
    },
    {
      icon: <FaCoffee className="text-4xl" />,
      title: 'Artisan Bread',
      description: 'Freshly baked sourdough, ciabatta, and specialty breads daily.'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Catering Services',
      description: 'Perfect for events and celebrations in Cairns.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateX: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <div className="text-script text-secondary text-2xl mb-6">About us</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-8 leading-tight">
              Woodward St Bakery
              <br />
              <span className="text-gradient">Cairns' Finest Since 2010</span>
            </h2>
            
            <motion.div 
              className="flex items-center space-x-6 mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ originX: 0 }}
            >
              <div className="w-16 h-1 bg-secondary"></div>
              <div className="w-8 h-1 bg-secondary/50"></div>
            </motion.div>

            <p className="text-light/80 text-lg mb-6 leading-relaxed">
              Located in Whitfield, Cairns, our bakery is your go-to destination for authentic, house-made pastries, gourmet toasties, and freshly baked bread.
            </p>
            <p className="text-light/70 text-base leading-relaxed mb-8">
              We open early at 7 AM every day for breakfast, offering the finest selection of artisan baked goods paired with hot coffee. Whether you're looking for a quick breakfast, a leisurely lunch, or catering for your special event, we've got you covered. Everything is baked fresh daily!
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Download Menu
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20, rotateX: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="relative"
              animate={{ rotateX: [0, 2, 0], rotateY: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              {/* Animated glow background */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 30px rgba(201, 164, 104, 0.2), 0 0 60px rgba(212, 175, 122, 0.1)',
                    '0 0 50px rgba(201, 164, 104, 0.4), 0 0 100px rgba(212, 175, 122, 0.2)',
                    '0 0 30px rgba(201, 164, 104, 0.2), 0 0 60px rgba(212, 175, 122, 0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80"
                alt="Fresh Baked Goods"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-2xl"></div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -20, rotateY: -15, rotateZ: -5 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.08, 
                    rotateX: 8, 
                    rotateY: 8,
                    boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)'
                  }}
                  className="text-center p-6 rounded-xl glass-effect hover:bg-secondary/10 transition-all duration-300"
                  style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="text-secondary mb-4 flex justify-center text-5xl"
                    animate={isInView ? { 
                      rotate: [0, 360],
                      y: [0, -8, 0]
                    } : {}}
                    transition={{ 
                      rotate: { duration: 2.5, delay: index * 0.15 + 0.8 },
                      y: { duration: 2, repeat: Infinity, delay: index * 0.15 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-light font-semibold mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-light/60 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
