'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const GallerySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
      title: 'Fresh Pastries'
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      title: 'Artisan Bread'
    },
    {
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      title: 'Cozy Atmosphere'
    },
    {
      src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
      title: 'Premium Coffee'
    },
    {
      src: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80',
      title: 'Fresh Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1618888007540-2bdfc3c3eca0?w=800&q=80',
      title: 'Delicious Croissants'
    }
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowLeft') {
        navigateGallery(-1)
      } else if (e.key === 'ArrowRight') {
        navigateGallery(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const navigateGallery = (direction: number) => {
    const newIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex].src)
  }

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src)
    setCurrentIndex(index)
  }

  return (
    <section id="gallery" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grain"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-script text-secondary text-2xl mb-4">Gallery</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-light mb-6">
            A Glimpse of Our <span className="text-gradient">Creations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6, rotateX: -30, rotateY: -15, rotateZ: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.15, 
                zIndex: 10, 
                rotateX: 10, 
                rotateY: 10,
                rotateZ: 3,
                boxShadow: '0 25px 50px rgba(201, 164, 104, 0.5)'
              }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-2xl group hover:shadow-secondary/50"
              onClick={() => handleImageClick(image.src, index)}
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:brightness-125 transition-all duration-500"
                whileHover={{ scale: 1.2, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
              >
                <div className="p-6 w-full">
                  <h3 className="text-light font-serif text-xl">{image.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-8 right-8 text-white text-4xl hover:text-secondary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <HiX />
          </motion.button>

          <motion.button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-secondary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              navigateGallery(-1)
            }}
            whileHover={{ scale: 1.2, x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <HiChevronLeft />
          </motion.button>

          <motion.button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-secondary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              navigateGallery(1)
            }}
            whileHover={{ scale: 1.2, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <HiChevronRight />
          </motion.button>

          <motion.img
            key={selectedImage}
            initial={{ scale: 0.8, opacity: 0, rotateX: -30, rotateZ: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0, rotateZ: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: -30, rotateZ: -15 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: '1200px' }}
          />

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default GallerySection
