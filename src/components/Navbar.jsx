import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About Us', id: 'about' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#gallery', label: 'Gallery', id: 'gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'services', 'gallery', 'features', 'contact']);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = (id) => {
    const isActive = activeId === id;
    return `relative transition-colors duration-300 ${
      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
    }`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-20 ${
          isScrolled
            ? 'bg-navy-dark/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="group block select-none" onClick={closeMenu}>
              <div className="font-black text-xl tracking-[0.15em] text-white">
                VEGA <span className="text-electric-blue group-hover:text-sky-accent transition-colors">SKY</span>
              </div>
              <div className="text-[9px] tracking-[0.35em] text-gray-400 font-medium uppercase -mt-0.5">
                Transport
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-10 text-xs font-medium uppercase tracking-[0.2em]">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} className={navLinkClass(link.id)}>
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-electric-blue"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="tel:+971542242528"
              className="hidden sm:inline-flex items-center text-xs font-medium tracking-widest text-gray-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-electric-blue mr-2" />
              +971 54 224 2528
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-block bg-electric-blue hover:bg-electric-blue/95 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-300 shadow-xl shadow-electric-blue/10 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-px w-full bg-white origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-px w-full bg-white"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-px w-full bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-dark/95 backdrop-blur-2xl" onClick={closeMenu} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-navy-dark border-l border-white/10 p-8 pt-28 flex flex-col"
            >
              <div className="flex flex-col space-y-6 text-sm font-medium uppercase tracking-[0.2em]">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`py-2 border-b border-white/5 ${
                      activeId === link.id ? 'text-electric-blue' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="py-2 text-gray-300"
                >
                  Contact
                </motion.a>
              </div>
              <motion.a
                href="tel:+971542242528"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex items-center text-sm text-gray-300"
              >
                <PhoneIcon className="w-4 h-4 text-electric-blue mr-3" />
                +971 54 224 2528
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
