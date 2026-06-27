import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, ScrollReveal } from './AnimatedSection';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-3 gap-12 mb-12" stagger={0.12}>
          <StaggerItem direction="up">
            <div className="space-y-4">
              <div>
                <div className="font-black text-xl tracking-[0.15em]">
                  VEGA <span className="text-electric-blue">SKY</span>
                </div>
                <div className="text-[9px] tracking-[0.35em] text-gray-400 font-medium uppercase -mt-0.5">
                  Transport
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Premier land transportation across the UAE, Gulf States, and Jordan. Safety, punctuality,
                and transparency in every mile.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem direction="up">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-electric-blue transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem direction="up">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="tel:+971542242528" className="hover:text-electric-blue transition-colors duration-300">
                    +971 54 224 2528
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vegasky.ae" className="hover:text-electric-blue transition-colors duration-300">
                    info@vegasky.ae
                  </a>
                </li>
                <li>United Arab Emirates</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {year} Vega Sky Transport. All rights reserved.
            </p>
            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue/30 transition-colors duration-300"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
