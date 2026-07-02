import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.15, margin: '0px 0px -80px 0px' };

const directions = {
  up: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, y: 24, filter: 'blur(4px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } },
};

function getMotionVariant(direction, shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return directions[direction] ?? directions.up;
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.75,
  as: Tag = 'div',
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[Tag] ?? motion.div;
  const variant = getMotionVariant(direction, shouldReduceMotion);

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variant}
      transition={
        shouldReduceMotion
          ? { duration: 0.01, delay: 0 }
          : { duration: Math.min(duration, 0.62), delay, ease: EASE }
      }
    >
      {children}
    </Component>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className = '',
  align = 'center',
  dark = false,
  showLine = true,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleClass = dark ? 'text-white' : 'text-navy-heading';
  const subtitleClass = dark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`max-w-3xl mb-16 space-y-5 ${alignClass} ${className}`}>
      <ScrollReveal delay={0} className={align === 'center' ? 'flex justify-center' : ''}>
        <div className="section-tag">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-light">{label}</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${titleClass}`}>
          {title}
        </p>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className={`text-[15px] leading-relaxed ${subtitleClass}`}>{subtitle}</p>
        </ScrollReveal>
      )}
      {showLine && (
        <ScrollReveal delay={0.25} className={align === 'center' ? 'flex justify-center' : ''}>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="section-divider mt-2"
          />
        </ScrollReveal>
      )}
    </div>
  );
}

export default function AnimatedSection({ children, className = '', id }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export function StaggerContainer({ children, className = '', stagger = 0.1, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  const shouldReduceMotion = useReducedMotion();
  const variant = getMotionVariant(direction, shouldReduceMotion);

  return (
    <motion.div
      className={className}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: shouldReduceMotion
            ? { duration: 0.01 }
            : { duration: 0.58, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
