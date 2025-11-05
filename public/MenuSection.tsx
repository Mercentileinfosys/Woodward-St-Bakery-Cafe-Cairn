'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MenuSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const menuItems = [
    {
      title: 'Artisan Pastries',
      description: 'Flaky croissants, pain au chocolat, and Danish pastries baked fresh daily.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80',
      price: '$4.50 - $6.00'
    },
    {
      title: 'Gourmet Toasties',
      description: 'Perfectly grilled sandwiches with premium fillings and artisan bread.',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&q=80',
      price: '$8.00 - $12.00'
    },
    {
      title: 'Fresh Bread Loaves',
      description: 'Sourdough, multigrain, and specialty breads baked with traditional methods.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
      price: '$5.50 - $9.00'
    },
    {
      title: 'Premium Coffee',
      description: 'Expertly brewed coffee from locally roasted beans, served hot or cold.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&q=80',
      price: '$4.00 - $6.50'
    }
  ]

  return (
    <section id="menu" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-script text-secondary text-2xl mb-4">Our Menu</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            Signature <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted menu of fresh baked goods, gourmet meals, and premium beverages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -35, rotateY: -15, rotateZ: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                y: -20,
                rotateX: 8,
                rotateY: 8,
                rotateZ: 2,
                scale: 1.05,
                boxShadow: '0 30px 60px rgba(201, 164, 104, 0.4)',
                transition: { duration: 0.4 }
              }}
              className="group relative bg-dark rounded-2xl overflow-hidden shadow-2xl hover:shadow-secondary/50"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-64 overflow-hidden group">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-125 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.15,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
                <motion.div 
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"
                ></motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif text-light mb-3 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-light/70 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-semibold text-lg">{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    Order Now →
                  </motion.button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-secondary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn-primary"
                >
                  View Details
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
