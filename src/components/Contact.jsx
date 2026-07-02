import AnimatedSection, { ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const contactItems = [
  {
    label: 'Email Us',
    value: 'sales@vegasky.ae',
    detail: 'Send shipment details or quote requests any time.',
    href: 'mailto:sales@vegasky.ae',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+971 54 224 2528',
    detail: 'Speak directly with our transport team.',
    href: 'tel:+971542242528',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Working Hours',
    value: 'Mon - Sat, 8 AM - 6 PM',
    detail: 'Available for transport inquiries and coordination.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="section-flow relative bg-navy py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(47,117,184,0.18),transparent_58%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <ScrollReveal className="space-y-6">
            <div className="section-label-light">
              <span>Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Reach Vega Sky directly.
            </h2>
            <p className="text-ink-soft/85 text-[15px] leading-relaxed max-w-xl">
              For quotes, transport coordination, and general inquiries, contact our team by email or phone during working hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="tel:+971542242528" className="btn-primary rounded-full px-7 py-3.5 text-center text-sm font-bold text-white">
                Call Us Now
              </a>
              <a href="mailto:sales@vegasky.ae" className="btn-outline rounded-full px-7 py-3.5 text-center text-sm font-bold text-white">
                Email Us
              </a>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4" stagger={0.1}>
            {contactItems.map((item) => (
              <StaggerItem key={item.label}>
                <ContactCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactCard({ icon, label, value, detail, href }) {
  const content = (
    <div className="card-glass rounded-xl p-6 flex items-start gap-5 hover:border-brand-light/35 transition-all duration-300">
      <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
        {icon}
      </div>
      <div>
        <p className="text-brand-light text-xs font-bold uppercase tracking-widest">{label}</p>
        <p className="text-white font-bold text-lg mt-2">{value}</p>
        <p className="text-mist text-sm leading-relaxed mt-2">{detail}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">{content}</a>
  ) : (
    content
  );
}
