import AnimatedSection, { ScrollReveal } from './AnimatedSection';
import { siteImages } from '../data/siteImages';

const highlights = [
  'Comprehensive coverage within the UAE',
  'Land shipping to the Gulf countries, Syria, and Jordan',
  'A complete commitment to quality, safety, and timeliness',
];

export default function About() {
  return (
    <AnimatedSection id="about" className="section-flow py-20 lg:py-28 bg-navy relative">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.05] pointer-events-none bg-no-repeat bg-contain bg-center hidden lg:block"
        style={{ backgroundImage: `url('${siteImages.aboutAmbient}')` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left" className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl border border-brand-light/15">
              <img
                src={siteImages.aboutMain}
                alt="Vega Sky logistics team at a transport hub"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 site-overlay opacity-70" />
            </div>

            <div className="absolute -top-4 -right-4 sm:top-4 sm:right-4 dark-panel rounded-xl px-6 py-5 text-center min-w-[120px]">
              <p className="text-4xl font-bold text-white leading-none">16+</p>
              <p className="text-mist text-sm mt-1">Years Experience</p>
            </div>

            <div className="absolute -bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm bg-navy-heading rounded-xl px-6 py-5 shadow-xl border border-brand-light/15">
              <div className="flex gap-3 items-start">
                <span className="text-brand-light text-3xl font-serif leading-none">&ldquo;</span>
                <p className="text-white text-sm leading-relaxed italic">
                  We do not just transport goods. We build trust on the road.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="dark-panel rounded-xl p-7 lg:p-9 space-y-6">
            <div className="section-label-light">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              At Vega Sky
            </h2>

            <div className="space-y-4 text-ink-soft/85 text-[15px] leading-relaxed">
              <p>
                We offer land transportation services with world-class standards of efficiency and reliability.
              </p>
              <p>
                Our modern fleet and experienced team follow strict safety standards, making sure every shipment arrives on time and in excellent condition.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-brand-light/40 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-semibold text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#why-us" className="inline-block btn-navy mt-4">
              More About Us
            </a>
          </ScrollReveal>
        </div>
      </div>
    </AnimatedSection>
  );
}
