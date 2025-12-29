import React from 'react';
import { Card, CardContent } from './ui/card';

const Mission: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: 'Stellar Ingredients',
      description: 'Locally sourced New Zealand produce prepared with cosmic precision and care.',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Global Fusion',
      description: 'Flavour profiles from across the galaxy, united in innovative culinary creations.',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Zero-G Service',
      description: 'Impeccable hospitality that defies expectations, floating above the ordinary.',
    },
  ];

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmos-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-nebula-400 mb-4">
            // Our Mission
          </span>
          <h2 className="section-title text-white mb-6">
            A New <span className="text-gradient">Frontier</span> in Dining
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Orbital isn't just a restaurant—it's a launch pad for your senses. 
            Nestled in Auckland's vibrant Wynyard Quarter, we've created an 
            interstellar dining experience that transports you beyond the ordinary.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-nebula-500/20 to-cosmos-900/20 text-nebula-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="glass-strong rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2024', label: 'Launch Year' },
              { value: '50+', label: 'Orbital Dishes' },
              { value: '98%', label: 'Mission Success' },
              { value: '∞', label: 'Possibilities' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-4xl lg:text-5xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
