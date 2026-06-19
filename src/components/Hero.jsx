import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-dark text-white overflow-hidden font-sans selection:bg-electric-blue/30">
      
      {/* 1. FLOATING LUXURY NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-20 ${
        isScrolled 
          ? 'bg-navy-dark/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Section - Scaled down and tracked out for a premium brand feel */}
          <div className="flex-shrink-0">
            <a href="#home" className="group block select-none">
              <div className="font-black text-xl tracking-[0.15em] text-white">
                VEGA <span className="text-electric-blue group-hover:text-sky-accent transition-colors">SKY</span>
              </div>
              <div className="text-[9px] tracking-[0.35em] text-gray-400 font-medium uppercase -mt-0.5">
                Transport
              </div>
            </a>
          </div>

          {/* Nav Links - Increased spacing, lighter font-weight, sleek hover animations */}
          <div className="hidden lg:flex items-center space-x-10 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            <a href="#home" className="text-white hover:text-electric-blue transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">About Us</a>
            <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a>
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a 
              href="tel:+971542242528" 
              className="hidden sm:inline-flex items-center text-xs font-medium tracking-widest text-gray-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <span className="text-electric-blue mr-2 text-xs">📞</span> +971 54 224 2528
            </a>
            <a 
              href="#contact" 
              className="bg-electric-blue hover:bg-electric-blue/95 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-300 shadow-xl shadow-electric-blue/10 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

        </div>
      </nav>

      {/* 2. HERO MAIN BLOCK */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 lg:pt-0 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Copy block - Optimized typography hierarchy */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2.5 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-300">
              Cross-Border Logistics Expert
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Comprehensive Land <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-sky-accent to-white">
              Transportation
            </span> <br />
            Solutions
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
            Meeting strict UAE specifications, the Gulf States, and Jordan. Powered by a brand-new, high-efficiency fleet and a dedicated logistics team tracking every single detail of your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a 
              href="#services" 
              className="w-full sm:w-auto text-center bg-electric-blue hover:bg-electric-blue/95 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-electric-blue/20 transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
            <a 
              href="#quote" 
              className="w-full sm:w-auto text-center bg-white/[0.02] hover:bg-white/[0.07] border border-white/10 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Right Side Frame - Framed perfectly with premium cinematic padding */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative w-full max-w-md aspect-[4/5] lg:max-w-lg rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-b from-white/[0.05] to-transparent p-3">
            <div className="w-full h-full bg-[#122236] rounded-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Vega Sky Fleet Truck" 
                className="w-full h-full object-cover opacity-75 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Luxury Fade Transition to Core Pillars */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light-bg to-transparent pointer-events-none"></div>
    </div>
  );
}