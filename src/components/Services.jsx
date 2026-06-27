import AnimatedSection, { SectionHeader, ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const services = [
  {
    id: 1,
    title: 'Cross-Border Freight',
    description:
      'Seamless land transport between UAE, Saudi Arabia, Oman, Bahrain, Kuwait, and Jordan with full customs documentation support.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177V4.875A2.625 2.625 0 0011.625 2.25h-3.75A2.625 2.625 0 005.25 4.875v2.74" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Heavy Cargo Transport',
    description:
      'Specialized flatbed and low-loader solutions for oversized machinery, construction equipment, and industrial materials.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Temperature-Controlled',
    description:
      'Refrigerated transport for pharmaceuticals, perishables, and sensitive goods maintaining strict temperature compliance.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Express Delivery',
    description:
      'Time-critical shipments with dedicated vehicles, real-time GPS tracking, and priority routing across all corridors.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Warehousing & Distribution',
    description:
      'Strategic storage and last-mile distribution hubs positioned across key Gulf trade routes for efficient supply chain management.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Project Logistics',
    description:
      'End-to-end planning and execution for large-scale infrastructure projects, including route surveys and permit coordination.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <AnimatedSection id="services" className="py-24 bg-navy-dark text-white px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          label="Our Services"
          title="Comprehensive logistics solutions for every cargo need"
          subtitle="From single shipments to full project logistics, Vega Sky delivers tailored transport solutions across the region's most demanding corridors."
          dark
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.id} direction="up">
              <div className="group h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-electric-blue/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center mt-16" direction="scale" delay={0.2}>
          <a
            href="#quote"
            className="inline-block bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold text-xs uppercase tracking-widest px-10 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-electric-blue/20 transform hover:-translate-y-0.5"
          >
            Request a Custom Quote
          </a>
        </ScrollReveal>
      </div>
    </AnimatedSection>
  );
}
