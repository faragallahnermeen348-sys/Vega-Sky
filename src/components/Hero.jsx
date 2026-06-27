import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-navy-dark text-white overflow-hidden font-sans selection:bg-electric-blue/30"
    >
      <Navbar />

      {/* Ambient background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-sky-accent/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 lg:pt-0 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center space-x-2.5 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-300">
              Cross-Border Logistics Expert
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
          >
            Comprehensive Land <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-sky-accent to-white animate-gradient bg-[length:200%_auto]">
              Transportation
            </span>{' '}
            <br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide"
          >
            Meeting strict UAE specifications, the Gulf States, and Jordan. Powered by a brand-new,
            high-efficiency fleet and a dedicated logistics team tracking every single detail of your journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="#services"
              className="w-full sm:w-auto text-center bg-electric-blue hover:bg-electric-blue/95 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-electric-blue/20 transform hover:-translate-y-0.5 hover:shadow-electric-blue/40"
            >
              Explore Our Services
            </a>
            <a
              href="#quote"
              className="w-full sm:w-auto text-center bg-white/[0.02] hover:bg-white/[0.07] border border-white/10 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 relative flex justify-center items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative w-full max-w-md aspect-[4/5] lg:max-w-lg rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-b from-white/[0.05] to-transparent p-3 group">
            <div className="w-full h-full bg-[#122236] rounded-xl overflow-hidden relative">
              <motion.img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
                alt="Vega Sky Fleet Truck"
                className="w-full h-full object-cover opacity-75 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">Fleet Status</p>
                    <p className="text-sm font-semibold text-white">Active & Ready</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Online</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-electric-blue"
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light-bg to-transparent pointer-events-none" />
    </div>
  );
}
