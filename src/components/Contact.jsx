import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { ScrollReveal, StaggerContainer, StaggerItem } from './AnimatedSection';

const initialForm = {
  name: '', email: '', phone: '', company: '',
  service: '', origin: '', destination: '', cargoType: '', message: '',
};

const serviceOptions = [
  'Cross-Border Freight', 'Heavy Cargo Transport', 'Temperature-Controlled',
  'Express Delivery', 'Warehousing & Distribution', 'Project Logistics', 'Other',
];

function FormField({ label, id, type = 'text', value, onChange, required, as: As = 'input', children, placeholder }) {
  const baseClass =
    'w-full bg-navy-deep/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-300';

  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
        {label}{required && <span className="text-brand-light ml-1">*</span>}
      </label>
      {As === 'select' ? (
        <select id={id} name={id} value={value} onChange={onChange} required={required} className={baseClass}>
          {children}
        </select>
      ) : As === 'textarea' ? (
        <textarea id={id} name={id} value={value} onChange={onChange} required={required} rows={4} placeholder={placeholder} className={`${baseClass} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} className={baseClass} />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('quote');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (activeTab === 'quote' && !form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(activeTab === 'quote' ? 'Quote Request - Vega Sky Transport' : 'Contact - Vega Sky Transport');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company || 'N/A'}\nService: ${form.service || 'N/A'}\nOrigin: ${form.origin || 'N/A'}\nDestination: ${form.destination || 'N/A'}\nCargo Type: ${form.cargoType || 'N/A'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@vegasky.ae?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm(initialForm); }, 4000);
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
            <div className="section-tag">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-light">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to move your <em className="font-serif not-italic text-brand-light">cargo?</em>
            </h2>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Contact our logistics team for a free consultation or detailed quote. We respond to all inquiries within 24 hours.
            </p>
            <StaggerContainer className="space-y-5" stagger={0.1}>
              {[
                { icon: '📞', label: 'Phone', value: '+971 54 224 2528', href: 'tel:+971542242528' },
                { icon: '✉️', label: 'Email', value: 'info@vegasky.ae', href: 'mailto:info@vegasky.ae' },
                { icon: '📍', label: 'Location', value: 'United Arab Emirates' },
                { icon: '🕐', label: 'Hours', value: 'Mon – Sat, 8:00 AM – 6:00 PM' },
              ].map((item) => (
                <StaggerItem key={item.label} direction="left">
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                      <ContactRow {...item} />
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <ContactRow {...item} />
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-3" delay={0.15}>
            <div id="quote" className="scroll-mt-28 card-glass rounded-2xl p-8 lg:p-10">
              <div className="flex gap-2 mb-8 p-1 bg-navy-deep/60 rounded-xl border border-white/10">
                {[{ id: 'quote', label: 'Get a Quote' }, { id: 'contact', label: 'General Inquiry' }].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.span layoutId="contact-tab" className="absolute inset-0 bg-brand rounded-lg shadow-lg shadow-brand/20" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-16">
                    <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Prepared!</h3>
                    <p className="text-gray-400 text-sm">Your email client should open shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <FormField label="Full Name" id="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <FormField label="Email" id="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <FormField label="Phone" id="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+971 50 000 0000" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <FormField label="Company" id="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." />
                    </div>
                    {activeTab === 'quote' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-5">
                        <div>
                          <FormField label="Service Type" id="service" value={form.service} onChange={handleChange} required as="select">
                            <option value="">Select a service</option>
                            {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                          </FormField>
                          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <FormField label="Origin" id="origin" value={form.origin} onChange={handleChange} placeholder="e.g. Dubai, UAE" />
                          <FormField label="Destination" id="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Amman, Jordan" />
                        </div>
                        <FormField label="Cargo Type" id="cargoType" value={form.cargoType} onChange={handleChange} placeholder="e.g. Industrial machinery" />
                      </motion.div>
                    )}
                    <div>
                      <FormField label="Message" id="message" value={form.message} onChange={handleChange} required as="textarea" placeholder={activeTab === 'quote' ? 'Describe your shipment requirements...' : 'How can we help you?'} />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full btn-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded-full">
                      {activeTab === 'quote' ? 'Submit Quote Request' : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactRow({ icon, label, value }) {
  return (
    <>
      <div className="w-10 h-10 bg-brand/15 rounded-lg flex items-center justify-center text-base shrink-0">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">{label}</p>
        <p className="text-white font-medium text-sm mt-0.5">{value}</p>
      </div>
    </>
  );
}
