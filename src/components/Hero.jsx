import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { siteImages } from '../data/siteImages';

const pillars = [
  { num: '01', title: 'Safety First' },
  { num: '02', title: 'Punctuality' },
  { num: '03', title: 'Transparency & Trust' },
  { num: '04', title: 'Continuous Development' },
];

const EASE = [0.22, 1, 0.36, 1];
const ENTRY_TRANSITION = { duration: 0.75, ease: EASE };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        style={{
          backgroundImage: `url('${siteImages.hero}')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-navy-deep/40" />

      <Navbar />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column */}
        <div className="w-full lg:w-[52%] space-y-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTRY_TRANSITION, delay: 0.12 }}
            className="section-tag justify-center lg:justify-start"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-light">
              Premium Land Transport
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTRY_TRANSITION, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] text-white"
          >
            We Guide Your Journey{' '}
            <em className="font-serif italic text-brand-light text-[1.05em]">Safely</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTRY_TRANSITION, delay: 0.28 }}
            className="text-gray-300/90 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Comprehensive land transportation solutions across the UAE and Gulf region. A modern
            fleet, dedicated team, and uncompromising commitment to quality — handling every detail
            of your shipment with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTRY_TRANSITION, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="#services"
              className="w-full sm:w-auto text-center btn-primary text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center btn-outline text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right column – pillar cards */}
        <div className="w-full lg:w-[48%] space-y-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.62, delay: 0.3 + i * 0.08, ease: EASE }}
              className="card-glass rounded-xl px-5 py-4 flex items-center gap-5 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group cursor-default transform-gpu will-change-transform"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-xs font-bold tracking-wide">{pillar.num}</span>
              </div>
              <h3 className="text-white font-semibold text-[15px] tracking-wide">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
