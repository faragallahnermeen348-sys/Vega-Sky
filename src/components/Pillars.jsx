import AnimatedSection, { SectionHeader, StaggerContainer, StaggerItem } from './AnimatedSection';

const pillars = [
  {
    id: 1,
    title: 'Safety First',
    icon: (
      <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      'Strict adherence to safety protocols and regular fleet checks ensuring secure overland cargo delivery across all routes.',
  },
  {
    id: 2,
    title: 'Punctuality',
    icon: (
      <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      'Real-time routing and highly skilled operators mean your shipments arrive exactly on schedule, every single time.',
  },
  {
    id: 3,
    title: 'Transparency & Trust',
    icon: (
      <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description:
      'Clear, reliable communication channels and precise documentation so you always know where your assets stand.',
  },
  {
    id: 4,
    title: 'Continuous Development',
    icon: (
      <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    description:
      'Constantly expanding our brand-new fleet and incorporating modern logistics tech to better serve the Gulf region.',
  },
];

export default function Pillars() {
  return (
    <AnimatedSection id="features" className="py-24 bg-light-bg px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Core Values"
          title="The pillars that guide your journey safely to its destination."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.12}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id} direction="scale">
              <div className="h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-light-bg rounded-xl flex items-center justify-center group-hover:bg-electric-blue/10 transition-colors duration-300 group-hover:scale-110 transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark group-hover:text-electric-blue transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
                <div className="w-0 h-1 bg-electric-blue transition-all duration-500 group-hover:w-full rounded-full mt-6" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
