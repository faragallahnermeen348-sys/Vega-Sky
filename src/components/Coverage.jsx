import AnimatedSection, { SectionHeader, StaggerContainer, StaggerItem } from './AnimatedSection';

const regions = [
  { name: 'United Arab Emirates', flag: '🇦🇪', desc: 'Headquarters & primary hub' },
  { name: 'Saudi Arabia', flag: '🇸🇦', desc: 'Cross-border freight corridors' },
  { name: 'Oman', flag: '🇴🇲', desc: 'Gulf coastal routes' },
  { name: 'Bahrain', flag: '🇧🇭', desc: 'Island logistics support' },
  { name: 'Kuwait', flag: '🇰🇼', desc: 'Northern Gulf coverage' },
  { name: 'Jordan', flag: '🇯🇴', desc: 'Levant overland connections' },
];

export default function Coverage() {
  return (
    <AnimatedSection id="coverage" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          label="Coverage"
          title="Serving the Gulf States & Jordan"
          subtitle="Our extensive network covers the most critical trade routes across the Middle East, ensuring your cargo reaches its destination safely and on time."
          dark
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
            {regions.map((region) => (
              <StaggerItem key={region.name}>
                <div className="card-glass rounded-xl p-5 hover:bg-white/[0.07] hover:border-brand/25 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{region.flag}</span>
                    <h3 className="text-white font-semibold text-sm">{region.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs">{region.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
              alt="Gulf region coverage map"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 card-glass rounded-xl p-5">
              <p className="text-brand-light text-[10px] uppercase tracking-widest mb-1">Network</p>
              <p className="text-white font-bold">6 Countries · 24/7 Operations</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
