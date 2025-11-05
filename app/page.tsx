'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import SignatureSlider from '@/components/SignatureSlider'
import CateringSection from '@/components/CateringSection'
import ReviewsSection from '@/components/ReviewsSection'
import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <main className="relative">
      <ScrollAnimations />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SignatureSlider />
      <CateringSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
