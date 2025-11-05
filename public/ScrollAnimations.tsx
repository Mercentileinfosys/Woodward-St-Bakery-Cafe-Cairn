'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimations = () => {
  useEffect(() => {
    // Animate on scroll elements
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    
    animateElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Parallax elements
    const parallaxElements = document.querySelectorAll('.parallax-element')
    
    parallaxElements.forEach((element) => {
      gsap.to(element, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    // Stagger animations for lists
    const listItems = document.querySelectorAll('.list-item-animate')
    if (listItems.length > 0) {
      gsap.fromTo(
        listItems,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: listItems[0].parentElement,
            start: 'top 75%',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

const ScrollAnimations = () => {
  useScrollAnimations()
  return null
}

export default ScrollAnimations
