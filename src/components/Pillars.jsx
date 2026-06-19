import React from 'react';

export default function Pillars() {
  const pillars = [
    {
      id: 1,
      title: "Safety First",
      icon: "🛡️",
      description: "Strict adherence to safety protocols and regular fleet checks ensuring secure overland cargo delivery across all routes."
    },
    {
      id: 2,
      title: "Punctuality",
      icon: "⏱️",
      description: "Real-time routing and highly skilled operators mean your shipments arrive exactly on schedule, every single time."
    },
    {
      id: 3,
      title: "Transparency & Trust",
      icon: "🤝",
      description: "Clear, reliable communication channels and precise documentation so you always know where your assets stand."
    },
    {
      id: 4,
      title: "Continuous Development",
      icon: "📈",
      description: "Constantly expanding our brand-new fleet and incorporating modern logistics tech to better serve the Gulf region."
    }
  ];

  return (
    <section id="features" class="py-24 bg-light-bg px-6 lg:px-16 relative">
      <div class="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs font-bold tracking-widest uppercase text-electric-blue">
            Our Core Values
          </h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy-dark tracking-tight">
            The pillars that guide your journey safely to its destination.
          </p>
          <div class="w-12 h-1 bg-electric-blue mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4-Column Card Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div class="space-y-4">
                {/* Icon Container */}
                <div class="w-12 h-12 bg-light-bg rounded-xl flex items-center justify-center text-2xl group-hover:bg-electric-blue/10 transition-colors duration-300">
                  {pillar.icon}
                </div>
                {/* Card Title */}
                <h3 class="text-xl font-bold text-navy-dark group-hover:text-electric-blue transition-colors duration-300">
                  {pillar.title}
                </h3>
                {/* Card Description */}
                <p class="text-gray-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              {/* Subtle design accent at the bottom of each card */}
              <div class="w-0 h-1 bg-electric-blue transition-all duration-300 group-hover:w-full rounded-full mt-6"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}