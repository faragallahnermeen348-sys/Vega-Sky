import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection, { ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Fleet Vehicles' },
  { value: 6, suffix: '', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
];

const regions = ['UAE', 'Saudi Arabia', 'Oman', 'Bahrain', 'Kuwait', 'Jordan'];

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
    <AnimatedSection id="about" className="py-24 bg-white px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-bg/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-electric-blue mb-4">
                About Vega Sky
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight leading-tight">
                Your trusted partner for Gulf &amp; Jordan land logistics
              </p>
            </div>

            <p className="text-gray-500 leading-relaxed">
              Vega Sky Transport is a premier land transportation company headquartered in the UAE,
              specializing in cross-border freight solutions across the Gulf States and Jordan. With a
              modern, fuel-efficient fleet and a team of seasoned logistics professionals, we deliver
              cargo safely, on time, and with complete transparency.
            </p>

            <p className="text-gray-500 leading-relaxed">
              From heavy industrial equipment to time-sensitive commercial shipments, our operations
              are built to meet the strictest regional compliance standards while providing the
              personalized service your business deserves.
            </p>

            <StaggerContainer className="flex flex-wrap gap-3" stagger={0.06}>
              {regions.map((region) => (
                <StaggerItem key={region} direction="scale">
                  <span className="inline-block px-4 py-2 bg-light-bg text-navy-dark text-xs font-semibold uppercase tracking-wider rounded-full border border-gray-100 hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all duration-300">
                    {region}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="Vega Sky logistics operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Coverage Area</p>
                <p className="text-white font-bold text-lg">Gulf States &amp; Jordan</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 bg-electric-blue text-white p-6 rounded-2xl shadow-xl shadow-electric-blue/20"
            >
              <p className="text-3xl font-black">24/7</p>
              <p className="text-xs uppercase tracking-widest text-white/80">Operations Support</p>
            </motion.div>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-gray-100" stagger={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} direction="up">
              <div className="text-center group">
                <p className="text-4xl sm:text-5xl font-black text-navy-dark group-hover:text-electric-blue transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
