import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection, { ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Fleet Vehicles' },
  { value: 6, suffix: '', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(42,143,212,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="section-tag">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-light">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Your trusted partner for{' '}
              <em className="font-serif not-italic text-brand-light">Gulf logistics</em>
            </h2>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Vega Sky Transport is a premier land transportation company headquartered in the UAE,
              specializing in cross-border freight solutions across the Gulf States and Jordan. With a
              modern, fuel-efficient fleet and a team of seasoned logistics professionals, we deliver
              cargo safely, on time, and with complete transparency.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              From heavy industrial equipment to time-sensitive commercial shipments, our operations
              are built to meet the strictest regional compliance standards while providing the
              personalized service your business deserves.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="Vega Sky logistics operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-brand-light text-[10px] uppercase tracking-widest mb-1">Since 2010</p>
                <p className="text-white font-bold text-lg">Delivering Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10" stagger={0.12}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mt-2">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
