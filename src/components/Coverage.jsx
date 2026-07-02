import AnimatedSection, { SectionHeader, StaggerContainer, StaggerItem } from './AnimatedSection';
import { siteImages } from '../data/siteImages';

const regions = [
  { name: 'United Arab Emirates', code: 'UAE', desc: 'Headquarters and primary hub' },
  { name: 'Saudi Arabia', code: 'KSA', desc: 'Cross-border freight corridors' },
  { name: 'Oman', code: 'OMN', desc: 'Gulf coastal routes' },
  { name: 'Bahrain', code: 'BHR', desc: 'Island logistics support' },
  { name: 'Kuwait', code: 'KWT', desc: 'Northern Gulf coverage' },
  { name: 'Jordan', code: 'JOR', desc: 'Levant overland connections' },
  { name: 'Syria', code: 'SYR', desc: 'Cross-border land shipping routes' },
];

export default function Coverage() {
  return (
    <AnimatedSection id="coverage" className="section-flow py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader
          label="Coverage"
          title="Serving the Gulf States, Syria & Jordan"
          subtitle="Our network covers critical trade routes across the Middle East, helping your cargo reach its destination safely and on time."
          dark
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
            {regions.map((region) => (
              <StaggerItem key={region.name}>
                <div className="card-glass rounded-xl p-5 hover:bg-white/[0.07] hover:border-brand/25 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-bold tracking-widest text-brand-light border border-brand-light/25 rounded-md px-2 py-1">{region.code}</span>
                    <h3 className="text-white font-semibold text-sm">{region.name}</h3>
                  </div>
                  <p className="text-mist text-xs">{region.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-brand-light/15 shadow-2xl">
            <img
              src={siteImages.coverage}
              alt="Regional route planning for Gulf transport coverage"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 card-glass rounded-xl p-5">
              <p className="text-brand-light text-[10px] uppercase tracking-widest mb-1">Network</p>
              <p className="text-white font-bold">7 regions | 24/7 operations</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
