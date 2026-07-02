import AnimatedSection, { SectionHeader, StaggerContainer, StaggerItem } from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Cross-Border Freight',
    description:
      'Seamless land transport between UAE, Saudi Arabia, Oman, Bahrain, Kuwait, and Jordan with full customs documentation support.',
  },
  {
    id: 2,
    title: 'Heavy Cargo Transport',
    description:
      'Specialized flatbed and low-loader solutions for oversized machinery, construction equipment, and industrial materials.',
  },
  {
    id: 3,
    title: 'Temperature-Controlled',
    description:
      'Refrigerated transport for pharmaceuticals, perishables, and sensitive goods maintaining strict temperature compliance.',
  },
  {
    id: 4,
    title: 'Express Delivery',
    description:
      'Time-critical shipments with dedicated vehicles, real-time GPS tracking, and priority routing across all corridors.',
  },
  {
    id: 5,
    title: 'Warehousing & Distribution',
    description:
      'Strategic storage and last-mile distribution hubs positioned across key Gulf trade routes for efficient supply chain management.',
  },
  {
    id: 6,
    title: 'Project Logistics',
    description:
      'End-to-end planning and execution for large-scale infrastructure projects, including route surveys and permit coordination.',
  },
];

export default function Services() {
  return (
    <AnimatedSection id="services" className="section-flow py-24 bg-navy-deep relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(47,117,184,0.16),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <SectionHeader
          label="Our Services"
          title="Comprehensive logistics solutions for every cargo need"
          subtitle="From single shipments to full project logistics, Vega Sky delivers tailored transport solutions across the region's most demanding corridors."
          dark
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {services.map((service, i) => (
            <StaggerItem key={service.id}>
              <div className="card-glass rounded-xl p-7 h-full hover:bg-white/[0.07] hover:border-brand/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center mb-5 shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
                  <span className="text-white text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-3 group-hover:text-brand-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block btn-primary text-white text-xs font-bold uppercase tracking-widest px-10 py-3.5 rounded-full"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
