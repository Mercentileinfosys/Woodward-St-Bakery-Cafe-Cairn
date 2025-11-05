'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Woodward St Bakery Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </motion.div>
            <div className="text-3xl font-script text-secondary mb-4">Woodward St Bakery Café</div>
            <p className="text-light/70 leading-relaxed mb-6">
              House-made pastries, gourmet toasties, freshly baked bread and hot coffee. Serving Cairns with excellence since 2015.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/woodwardstbakery"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/woodwardstbakery/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://twitter.com/woodwardstbakery"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="mailto:hello@woodwardstbakery.com"
                whileHover={{ scale: 1.2, y: -3, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-light font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-light/70 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light/70 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery-events" className="text-light/70 hover:text-secondary transition-colors">
                  Gallery & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-light font-semibold text-xl mb-4">What We Offer</h3>
            <ul className="space-y-3">
              <li className="text-light/70">🥐 Fresh Pastries</li>
              <li className="text-light/70">🍞 Artisan Bread</li>
              <li className="text-light/70">🥪 Gourmet Toasties</li>
              <li className="text-light/70">☕ Premium Coffee</li>
              <li className="text-light/70">🍽️ Catering Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-light font-semibold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-3 text-light/70">
              <li>216 Woodward St, Whitfield</li>
              <li>QLD 4870, Australia</li>
              <li>Phone: 1472014614 0931</li>
              <li>Email: info@woodwardstbakery.com</li>
              <li className="text-secondary font-semibold">Open 7 AM - 3 PM Daily</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-light/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Woodward St Bakery Café. All rights reserved.
            </p>
            <p className="text-light/60 text-sm flex items-center">
              Crafted with <FaHeart className="text-secondary mx-2" /> for Cairns • Open 7 AM - 3 PM Daily
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
