import { StaggerContainer, StaggerItem, ScrollReveal } from './AnimatedSection';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep pt-16 pb-8 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-3 gap-12 mb-12" stagger={0.1}>
          <StaggerItem>
            <div className="space-y-4">
              <img src="/logo.png" alt="Vega Sky Transport" className="h-10 w-auto logo-light" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Premier land transportation across the UAE, Gulf States, and Jordan. Safety, punctuality,
                and transparency in every mile.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-brand-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-brand-light mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="tel:+971542242528" className="hover:text-white transition-colors">+971 54 224 2528</a></li>
              <li><a href="mailto:info@vegasky.ae" className="hover:text-white transition-colors">info@vegasky.ae</a></li>
              <li>United Arab Emirates</li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">&copy; {year} Vega Sky Transport. All rights reserved.</p>
            <a href="#home" className="w-10 h-10 rounded-full card-glass flex items-center justify-center text-gray-400 hover:text-brand-light transition-colors" aria-label="Back to top">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
