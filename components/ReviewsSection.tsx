'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const ReviewsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeReview, setActiveReview] = useState(0)

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Local Resident',
      rating: 5,
      text: 'The best bakery in Cairns! Their croissants are absolutely divine, and the coffee is perfect every time. A must-visit spot!',
      avatar: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Food Blogger',
      rating: 5,
      text: 'Woodward St Bakery has become my go-to spot for breakfast. The atmosphere is cozy, and everything is freshly baked with love.',
      avatar: '👨'
    },
    {
      name: 'Emma Williams',
      role: 'Business Owner',
      rating: 5,
      text: 'We ordered catering for our corporate event and everyone was impressed! Professional service and incredible pastries.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Martinez',
      role: 'Tourist',
      rating: 5,
      text: 'Found this gem during our visit to Cairns. The sourdough bread is the best I\'ve ever tasted. Worth every penny!',
      avatar: '🧑'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-script text-secondary text-2xl mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px]">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20, rotateY: -10, rotateZ: -5 }}
                animate={{
                  opacity: activeReview === index ? 1 : 0,
                  y: activeReview === index ? 0 : 30,
                  rotateX: activeReview === index ? 0 : -20,
                  rotateY: activeReview === index ? 0 : -10,
                  rotateZ: activeReview === index ? 0 : -5,
                  pointerEvents: activeReview === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="glass-effect p-12 rounded-2xl hover:shadow-2xl hover:shadow-secondary/50 transition-shadow"
                style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: activeReview === index ? 1 : 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <FaQuoteLeft className="text-secondary text-4xl mb-6" />
                </motion.div>
                
                <p className="text-light/90 text-xl md:text-2xl mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between flex-col md:flex-row gap-6">
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={activeReview === index ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-3xl hover:bg-secondary/40 transition-colors"
                      whileHover={{ scale: 1.15, rotateZ: 10, rotateX: 5, rotateY: 5 }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ rotate: { duration: 4, repeat: Infinity } }}
                      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                    >
                      {review.avatar}
                    </motion.div>
                    <div>
                      <h4 className="text-light font-semibold text-lg">{review.name}</h4>
                      <p className="text-light/60 text-sm">{review.role}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex space-x-1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={activeReview === index ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={activeReview === index ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <FaStar className="text-secondary text-xl" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-12">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeReview === index ? 'bg-secondary w-12 h-3' : 'bg-secondary/30 w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
