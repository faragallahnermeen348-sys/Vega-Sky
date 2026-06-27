import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { SectionHeader, ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Heavy duty truck on highway',
    category: 'Fleet',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    alt: 'Warehouse logistics operations',
    category: 'Operations',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
    alt: 'Truck fleet at depot',
    category: 'Fleet',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800',
    alt: 'Container transport',
    category: 'Cargo',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    alt: 'Cross-border logistics route',
    category: 'Routes',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbcd?auto=format&fit=crop&q=80&w=800',
    alt: 'Professional driver and truck',
    category: 'Team',
  },
];

const categories = ['All', 'Fleet', 'Operations', 'Cargo', 'Routes', 'Team'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <AnimatedSection id="gallery" className="py-24 bg-light-bg px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Gallery"
          title="Our fleet, routes & operations in action"
        />

        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12" direction="blur" delay={0.1}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-gray-500 bg-white border border-gray-200 hover:border-electric-blue/30'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute inset-0 bg-electric-blue rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </ScrollReveal>

        <StaggerContainer key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {filtered.map((image) => (
            <StaggerItem key={image.id} direction="scale">
              <div
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                onClick={() => setLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-electric-blue font-semibold">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium mt-1">{image.alt}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              type="button"
              aria-label="Close lightbox"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              src={lightbox.src.replace('w=800', 'w=1400')}
              alt={lightbox.alt}
              className="max-w-5xl max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
