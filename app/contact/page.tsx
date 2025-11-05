'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitSuccess(false), 5000)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '216 Woodward St, Whitfield, QLD 4870',
      subtitle: 'Cairns, Australia',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: '(07) 4032 0931',
      subtitle: 'Mon - Sun: 7 AM - 3 PM',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'hello@woodwardstbakery.com',
      subtitle: 'We reply within 2 hours',
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: '7:00 AM - 3:00 PM',
      subtitle: 'Every Day • Breakfast All Day',
    },
  ]

  return (
    <main className="relative bg-primary">
      <ScrollAnimations />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full"
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-light/80 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and let us know how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)',
                  }}
                  className="glass-effect p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer group"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div className="text-3xl sm:text-4xl text-secondary mb-3 sm:mb-4">
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-serif text-light mb-2">{info.title}</h3>
                  <p className="text-sm sm:text-base text-light font-semibold mb-1">{info.details}</p>
                  <p className="text-xs sm:text-sm text-light/60">{info.subtitle}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-primary/50 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif text-light mb-6 sm:mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-light font-semibold mb-2">Full Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 164, 104, 0.3)' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary/50 border border-secondary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-secondary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light font-semibold mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 164, 104, 0.3)' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary/50 border border-secondary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-secondary transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light font-semibold mb-2">Phone</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 164, 104, 0.3)' }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-primary/50 border border-secondary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-secondary transition-all"
                    placeholder="(07) 4032 XXXX"
                  />
                </div>

                <div>
                  <label className="block text-light font-semibold mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(201, 164, 104, 0.3)' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-primary/50 border border-secondary/30 rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none focus:border-secondary transition-all resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ type: 'spring' }}
                    className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Image & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-6 sm:mb-8 group">
                <Image
                  src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=600&fit=crop"
                  alt="Café interior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hours Card */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)',
                }}
                className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl"
              >
                <h3 className="text-xl sm:text-2xl font-serif text-light mb-4 sm:mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '7:00 AM - 3:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM - 3:00 PM' },
                    { day: 'Sunday', hours: '8:00 AM - 2:00 PM' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center pb-3 border-b border-secondary/20"
                    >
                      <span className="text-light font-semibold">{item.day}</span>
                      <span className="text-secondary">{item.hours}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg"
                >
                  <p className="text-secondary font-semibold mb-2 flex items-center">
                    <FaStar className="mr-2" /> Breakfast Available All Day
                  </p>
                  <p className="text-light/70 text-sm">
                    Enjoy our signature breakfast items whenever you visit. Fresh pastries, artisan toast, and premium coffee always available.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-serif text-light text-center mb-8 md:mb-12"
          >
            Find Us on the <span className="text-gradient">Map</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8234625846395!2d145.7730!3d-16.8903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a1d3e8e8e8e8e8d%3A0x8e8e8e8e8e8e8e8e!2s216%20Woodward%20St%2C%20Whitfield%20QLD%204870!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-primary/50 relative">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-light text-center mb-12"
          >
            Special <span className="text-gradient">Offers</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                offer: 'Buy 5 Coffee, Get 1 Free',
                desc: 'With loyalty card. Valid for 3 months.',
                emoji: '☕',
              },
              {
                offer: 'Group Catering Discount',
                desc: '15% off catering orders over $200. Call for details.',
                emoji: '🍽️',
              },
              {
                offer: 'Monday Specials',
                desc: '20% off all pastries. Starting from 7 AM.',
                emoji: '🥐',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(201, 164, 104, 0.3)',
                }}
                className="glass-effect p-8 rounded-xl text-center cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-xl font-serif text-secondary mb-2">{item.offer}</h3>
                <p className="text-light/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-80 h-80 bg-secondary rounded-full"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-light text-center mb-16"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Do you offer catering services?',
                a: 'Yes! We offer premium catering for corporate events, weddings, birthdays, and celebrations. Contact us for custom quotes and menu options.',
              },
              {
                q: 'Are there vegan or gluten-free options?',
                a: 'Absolutely! We have dedicated vegan and gluten-free pastries, bread, and breakfast items. All items are clearly labeled for your convenience.',
              },
              {
                q: 'Can I place orders online?',
                a: 'We currently accept orders via phone or in-person. Call us at (07) 4032 0931 to place advance orders for catering or special items.',
              },
              {
                q: 'Do you have parking available?',
                a: 'Yes, we have dedicated parking with plenty of spaces for customers. Our location on Woodward St also has street parking options.',
              },
              {
                q: 'Is your WiFi free?',
                a: 'Yes! Free high-speed WiFi is available to all customers. We\'re a popular spot for remote work, meetings, and study groups.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, card, and mobile payments including Apple Pay and Google Pay. All major credit cards are welcome.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-effect p-6 rounded-lg border border-secondary/20 group cursor-pointer hover:border-secondary/50 transition-colors"
              >
                <motion.h3
                  className="text-lg font-serif text-secondary flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl mr-3">Q:</span> {item.q}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="text-light/70 mt-3 ml-12"
                >
                  <span className="text-secondary font-semibold">A: </span> {item.a}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-primary/50 relative">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-light text-center mb-16"
          >
            What Our <span className="text-gradient">Customers Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'Absolutely love this place! The pastries are fresh, the coffee is perfect, and the staff treats you like family. This is my second home.',
                author: 'Sarah M.',
                role: 'Regular Customer',
              },
              {
                text: 'We catered our wedding with Woodward St and it was flawless. Professional, delicious, and beautiful presentation. Highly recommend!',
                author: 'James & Emma',
                role: 'Wedding Couple',
              },
              {
                text: 'Best breakfast in Cairns. I come here every morning before work. The team knows my order, and they make me feel valued.',
                author: 'Michael T.',
                role: 'Frequent Visitor',
              },
              {
                text: 'The gluten-free options are exceptional. Finally a café that takes dietary requirements seriously without sacrificing taste!',
                author: 'Lisa R.',
                role: 'Dietary Conscious',
              },
              {
                text: 'Perfect spot for my remote work. Great WiFi, excellent coffee refills, and such a welcoming community. Can\'t imagine working anywhere else.',
                author: 'David K.',
                role: 'Remote Worker',
              },
              {
                text: 'Their catering for our corporate event was impeccable. Quality food, timely delivery, and professional service. Worth every penny!',
                author: 'Corporate Events Team',
                role: 'Business Client',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(201, 164, 104, 0.4)',
                }}
                className="glass-effect p-8 rounded-xl relative group"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="text-5xl text-secondary/30 mb-4 absolute top-4 right-6"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  "
                </motion.div>
                <p className="text-light/80 mb-6 italic leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-secondary/20">
                  <p className="text-secondary font-serif text-lg">{testimonial.author}</p>
                  <p className="text-light/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-radial from-secondary to-transparent"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-light mb-6"
          >
            Ready to <span className="text-gradient">Visit Us?</span>
          </motion.h2>
          <p className="text-light/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're craving our famous pastries, looking for a catering partner, or seeking a warm café to call home—we're open 7 AM - 3 PM daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:(07)40320931"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Call Us: (07) 4032 0931
            </motion.a>
            <motion.a
              href="https://www.google.com/maps/search/216+Woodward+St,+Whitfield+QLD+4870"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 164, 104, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block bg-secondary/20 border border-secondary"
            >
              Get Directions
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Contact