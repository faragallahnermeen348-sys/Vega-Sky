import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About Us', id: 'about' },
  { href: '#why-us', label: 'Why Us', id: 'why-us' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#coverage', label: 'Coverage', id: 'coverage' },
  { href: '#gallery', label: 'Gallery', id: 'gallery' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'why-us', 'services', 'coverage', 'gallery', 'contact']);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const menuTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-deep/95 backdrop-blur-xl py-3 shadow-lg shadow-black/20 border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
          <a href="#home" onClick={closeMenu} className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Vega Sky Transport"
              className="h-10 sm:h-12 w-auto logo-light"
            />
          </a>

          <div className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300 pb-1 ${
                  activeId === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand rounded-full"
                    transition={menuTransition}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+971542242528"
              className="hidden md:inline-flex btn-primary text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full"
            >
              Call Us Now
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 bg-white/5"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={menuTransition}
                  className="block h-px w-full bg-white origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={menuTransition}
                  className="block h-px w-full bg-white"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={menuTransition}
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
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-navy-deep/95 backdrop-blur-xl" onClick={closeMenu} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={menuTransition}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-navy border-l border-white/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...menuTransition, delay: i * 0.04 }}
                    className={`py-3 text-sm font-medium border-b border-white/5 ${
                      activeId === link.id ? 'text-brand-light' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="tel:+971542242528"
                onClick={closeMenu}
                className="mt-8 block w-full text-center btn-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full"
              >
                Call Us Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
