'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery & Events', href: '/gallery-events' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-lg shadow-2xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2 md:space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ perspective: '1000px' }}
        >
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0"
            >
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="text-sm md:text-lg lg:text-xl font-script text-secondary hover:text-accent transition-colors truncate">Woodward St Café</div>
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.div
                className="text-light hover:text-secondary transition-colors duration-300 text-sm tracking-wider uppercase font-medium relative cursor-pointer"
                whileHover={{ 
                  y: -3, 
                  rotateX: 5, 
                  rotateY: 5,
                  textShadow: '0 0 20px rgba(201, 164, 104, 0.5)'
                }}
                initial={{ opacity: 0, y: -20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.12, type: 'spring', stiffness: 300 }}
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                {link.name}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.a
            href="https://woodward-st-bakery-cafe.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            Order Online
          </motion.a>
          <motion.a
            href="tel:(07)40320931"
            className="text-secondary text-sm hover:text-accent transition-colors font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            ☎️ (07) 4032 0931
          </motion.a>
          <div className="flex space-x-3">
            <motion.a
              href="https://facebook.com/woodwardstbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaFacebook size={18} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/woodwardstbakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <FaInstagram size={18} />
            </motion.a>
            <motion.a
              href="mailto:hello@woodwardstbakery.com"
              className="text-light hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaEnvelope size={18} />
            </motion.a>
          </div>
        </div>

        <button
          className="lg:hidden text-light text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-primary/98 backdrop-blur-lg mt-2 border-t border-secondary/20"
        >
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-light hover:text-secondary transition-colors py-2 text-base md:text-lg cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="https://woodward-st-bakery-cafe.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-secondary hover:text-accent transition-colors py-3 text-base md:text-lg font-semibold mt-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
            >
              🛒 Order Online
            </motion.a>
            <div className="pt-3 border-t border-secondary/30 mt-3">
              <motion.a
                href="tel:(07)40320931"
                className="text-secondary text-xs md:text-sm font-semibold hover:text-accent block mb-3"
                whileHover={{ scale: 1.05 }}
              >
                ☎️ (07) 4032 0931
              </motion.a>
              <div className="flex space-x-3">
                <motion.a 
                  href="https://facebook.com/woodwardstbakery" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-secondary"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebook size={18} />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/woodwardstbakery/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-secondary"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram size={18} />
                </motion.a>
                <motion.a 
                  href="mailto:hello@woodwardstbakery.com" 
                  className="text-light hover:text-secondary"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaEnvelope size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation
