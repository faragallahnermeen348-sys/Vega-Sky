import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { SectionHeader, ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';
import { galleryImages } from '../data/siteImages';

const fallbackImage = '/logo.png';

const categories = ['All', 'Fleet', 'Operations', 'Cargo', 'Routes', 'Team'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <AnimatedSection id="gallery" className="section-flow py-24 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader
          label="Gallery"
          title="Our fleet, routes & operations in action"
          dark
        />

        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12" direction="blur">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={
                'relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ' +
                (activeCategory === cat ? 'text-white' : 'text-gray-400 card-glass hover:text-white')
              }
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute inset-0 bg-brand rounded-full"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </ScrollReveal>

        <StaggerContainer key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {filtered.map((image) => (
            <StaggerItem key={image.id} direction="scale">
              <button
                type="button"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-brand/30 transition-all duration-300 text-left w-full bg-navy-card transform-gpu will-change-transform hover:-translate-y-1"
                onClick={() => setLightbox(image)}
              >
                <GalleryImage image={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-brand-light font-semibold">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium mt-1">{image.alt}</p>
                </div>
              </button>
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
            className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 w-10 h-10 rounded-full card-glass text-white flex items-center justify-center hover:bg-white/10"
              onClick={() => setLightbox(null)}
            >
              x
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <GalleryImage
                image={lightbox}
                className="max-w-full max-h-[80vh] mx-auto object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

function GalleryImage({ image, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-navy-card flex items-center justify-center p-8">
        <img src={fallbackImage} alt="Vega Sky Transport" className="max-h-24 max-w-[70%] object-contain logo-light opacity-80" />
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
