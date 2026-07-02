import AnimatedSection, { ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';
import { siteImages } from '../data/siteImages';

const features = [
  {
    title: 'Modern and Well-Equipped Fleet',
    description:
      'A diverse fleet of modern trucks equipped with tracking and maintenance systems for safe, efficient transport in demanding conditions.',
  },
  {
    title: 'Highly Experienced Team',
    description:
      'Professional drivers, coordinators, and logistics experts who know the road and know how to deliver safely.',
  },
  {
    title: 'Wide Coverage',
    description:
      'From the UAE to the Gulf states, Syria, and Jordan, we plan each route around the customer and the cargo.',
  },
  {
    title: 'Quality Measured by Results',
    description:
      'We work as a reliable partner in your business, with quality and customer satisfaction at the center of every operation.',
  },
];

const fleetStats = [
  { value: '24/7', label: 'Route coordination' },
  { value: 'GCC', label: 'Regional coverage' },
  { value: 'GPS', label: 'Tracking support' },
];

export default function WhyChooseUs() {
  return (
    <AnimatedSection id="why-us" className="section-flow py-20 lg:py-28 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <div className="section-label-light">
                <span>Why Choose Us</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white leading-snug">
                At Vega Sky, trust is built through commitment. Every shipment is handled on time, with care, and without excuses.
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="card-glass rounded-xl p-5 h-full hover:border-brand-light/30 transition-all duration-300">
                    <h3 className="text-white font-bold text-[15px] mb-2">{feature.title}</h3>
                    <p className="text-mist text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal direction="right" className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl border border-brand-light/15 bg-navy-card">
              <img
                src={siteImages.whyChooseUs}
                alt="Vega Sky freight fleet at a logistics depot"
                className="w-full h-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 dark-panel rounded-xl p-5">
                <p className="text-brand-light text-[10px] uppercase tracking-widest font-bold">Fleet operations</p>
                <h3 className="text-white text-xl font-bold mt-2">Reliable land transport, planned route by route.</h3>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {fleetStats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-navy-deep/70 border border-brand-light/10 p-3">
                      <p className="text-white font-bold text-sm">{stat.value}</p>
                      <p className="text-mist text-[11px] mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </AnimatedSection>
  );
}
