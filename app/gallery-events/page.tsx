'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import Image from 'next/image'
import { FaLeaf, FaHeart, FaUsers, FaTrophy } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: FaLeaf,
      title: 'Fresh & Local',
      description: 'We source the finest ingredients locally to support our community and ensure peak freshness.',
    },
    {
      icon: FaHeart,
      title: 'Crafted with Care',
      description: 'Every pastry, bread, and toastie is handcrafted with love and attention to detail.',
    },
    {
      icon: FaUsers,
      title: 'Community Focused',
      description: 'We believe in building relationships with our customers and giving back to Cairns.',
    },
    {
      icon: FaTrophy,
      title: 'Award Winning',
      description: 'Recognized for excellence in baking and exceptional café culture in North Queensland.',
    },
  ]



  return (
    <main className="relative bg-primary">
      <ScrollAnimations />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-light/80 max-w-3xl mx-auto mb-8">
              Since 2015, Woodward St Bakery Café has been serving Cairns with hand-crafted pastries,
              artisan bread, and exceptional coffee in a warm, welcoming space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, rotateY: -30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="relative order-2 md:order-1"
              style={{ perspective: '1000px' }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop"
                  alt="Bakery interior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full"
                animate={{ y: [-10, 10], x: [-10, 10] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-serif text-light mb-6">
                Baked with Passion, Served with Love
              </h2>
              <p className="text-light/80 leading-relaxed mb-4">
                Founded in 2015, Woodward St Bakery Café was born from a simple passion: to create exceptional baked goods and a community gathering space in Cairns.
              </p>
              <p className="text-light/80 leading-relaxed mb-4">
                Every morning, our team arrives early to prepare fresh pastries, artisan breads, and gourmet toasties. We use time-honored techniques combined with the finest local ingredients.
              </p>
              <p className="text-light/80 leading-relaxed">
                Our café isn't just about food—it's about connection. Whether you're starting your day with a perfect espresso or enjoying a leisurely breakfast, you're part of our family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary/50 relative">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light text-center mb-12 md:mb-16"
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 5,
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)'
                  }}
                  className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl cursor-pointer group"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-5xl text-secondary mb-4"
                  >
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-xl font-serif text-light mb-3">{value.title}</h3>
                  <p className="text-light/70">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light text-center mb-12 md:mb-16"
          >
            Our <span className="text-gradient">Sourcing & Quality</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, rotateY: 30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
                  alt="Premium ingredients"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full"
                animate={{ y: [10, -10], x: [10, -10] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-serif text-light mb-6">Premium Ingredients, Premium Results</h3>
              <p className="text-light/80 leading-relaxed mb-4">
                We partner exclusively with local suppliers who share our commitment to quality and sustainability. Every ingredient, from flour to chocolate, is hand-selected for excellence.
              </p>
              <p className="text-light/80 leading-relaxed mb-4">
                Our bakers arrive before dawn to start fresh batches daily. No pre-made dough, no artificial preservatives—just honest, quality baking using time-honored techniques passed down through generations.
              </p>
              <p className="text-light/80 leading-relaxed mb-6">
                We believe in transparency. Visit us anytime to see our open kitchen and watch the magic happen. Our commitment extends beyond taste to environmental responsibility and community impact.
              </p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {['100% Local Suppliers', 'Zero Additives', 'Daily Fresh Baking', 'Sustainable Sourcing'].map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, x: 3 }}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-semibold text-xs sm:text-sm"
                  >
                    ✓ {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light text-center mb-12 md:mb-16"
          >
            Why <span className="text-gradient">Choose Us</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Award-Winning Quality',
                desc: 'Recognized across North Queensland for excellence in baking, service, and café culture. Our pastries and coffee have won multiple regional awards.',
              },
              {
                title: 'Community First',
                desc: 'We are deeply invested in Cairns. We support local farmers, donate to community events, and host weekly community gatherings.',
              },
              {
                title: 'Warm Atmosphere',
                desc: 'More than just a café—we are a community hub where regulars become friends, professionals find quiet workspaces, and families create memories.',
              },
              {
                title: 'Breakfast All Day',
                desc: 'Whether you arrive at 7 AM or 2:30 PM, enjoy our signature breakfast items. Pancakes, eggs, pastries available all operating hours.',
              },
              {
                title: 'Dietary Friendly',
                desc: 'We cater to all dietary needs with vegan, gluten-free, and dairy-free options. Every item is clearly labeled for your peace of mind.',
              },
              {
                title: 'Premium Catering',
                desc: 'Planning an event? Our catering service brings Woodward St quality to your venue. Corporate meetings, weddings, celebrations—we handle it all.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{
                  y: -15,
                  scale: 1.08,
                  boxShadow: '0 25px 50px rgba(201, 164, 104, 0.4)',
                }}
                className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl cursor-pointer group"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl mb-4 text-secondary"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                >
                  {index === 0 && '🏆'}
                  {index === 1 && '🤝'}
                  {index === 2 && '☕'}
                  {index === 3 && '🌅'}
                  {index === 4 && '🥗'}
                  {index === 5 && '🎉'}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-serif text-light mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-light/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-primary/50 relative">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light text-center mb-12 md:mb-16"
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {[
              { year: '2015', title: 'The Beginning', desc: 'First doors open on Woodward Street' },
              { year: '2017', title: 'Expansion', desc: 'Added catering services and expanded seating' },
              { year: '2019', title: 'Recognition', desc: 'Won Best Café Award - North QLD' },
              { year: '2023', title: 'Community Hub', desc: 'Became go-to breakfast spot in Cairns' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 flex items-center"
              >
                <div className="flex-1">
                  {index % 2 === 0 ? (
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      className="glass-effect p-4 sm:p-6 rounded-lg"
                      style={{ perspective: '1000px' }}
                    >
                      <span className="text-secondary font-serif text-xl sm:text-2xl">{milestone.year}</span>
                      <h3 className="text-lg sm:text-xl font-serif text-light mt-2">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-light/70 mt-1">{milestone.desc}</p>
                    </motion.div>
                  ) : null}
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 bg-secondary rounded-full mx-4 flex-shrink-0 shadow-lg"
                />
                <div className="flex-1">
                  {index % 2 === 1 ? (
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="glass-effect p-4 sm:p-6 rounded-lg"
                      style={{ perspective: '1000px' }}
                    >
                      <span className="text-secondary font-serif text-xl sm:text-2xl">{milestone.year}</span>
                      <h3 className="text-lg sm:text-xl font-serif text-light mt-2">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-light/70 mt-1">{milestone.desc}</p>
                    </motion.div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light mb-6"
          >
            Visit Us Today
          </motion.h2>
          <p className="text-base sm:text-lg text-light/80 mb-8 max-w-2xl mx-auto">
            Experience the warmth of Woodward St Bakery Café. From our signature pastries to our award-winning coffee, every visit is special.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Directions
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About