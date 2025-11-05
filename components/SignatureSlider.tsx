'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const SignatureSlider = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const signatures = [
    {
      name: 'Chocolate Croissant',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
      description: 'Buttery, flaky perfection with rich chocolate'
    },
    {
      name: 'Artisan Sourdough',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
      description: 'Tangy, crusty, and perfectly chewy'
    },
    {
      name: 'Café Latte',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80',
      description: 'Smooth espresso with steamed milk art'
    },
    {
      name: 'Gourmet Sandwich',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80',
      description: 'Premium ingredients on fresh baked bread'
    }
  ]

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
          <div className="text-script text-secondary text-2xl mb-4">Best Sellers</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            Our <span className="text-gradient">Signature Items</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ perspective: '1200px' }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
            style={{ paddingBottom: '60px' }}
          >
            {signatures.map((item, index) => (
              <SwiperSlide 
                key={index}
                style={{ width: '400px', height: '500px' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.12, 
                    rotateX: 8, 
                    rotateY: 8,
                    rotateZ: 2,
                    boxShadow: '0 30px 60px rgba(201, 164, 104, 0.5)'
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-full hover:shadow-secondary/50 transition-shadow"
                  style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, rotateZ: -15, rotateX: -10, scale: 0.8 }}
                  animate={{ opacity: 1, rotateZ: 0, rotateX: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
                    whileHover={{ scale: 1.15, rotateY: 5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-serif text-light mb-2">{item.name}</h3>
                    <p className="text-light/80 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default SignatureSlider
