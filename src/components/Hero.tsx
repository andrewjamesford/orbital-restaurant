import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 stars opacity-40"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmos-900/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Orbital Ring Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 border border-nebula-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-8 border border-cosmos-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        <div className="absolute inset-16 border border-nebula-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-nebula-500 animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-nebula-400">
            Mission Control • Wynyard Quarter
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="section-title text-white mb-6">
          <span className="block">Dining Beyond</span>
          <span className="block text-gradient">The Atmosphere</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-white/60 font-body leading-relaxed mb-12">
          Experience Auckland's first space-themed culinary odyssey. 
          Where every dish is a mission and every visit is a launch into extraordinary flavours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg">
            Book Your Launch
          </Button>
          <Button variant="secondary" size="lg">
            Explore The Menu
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            Scroll to Explore
          </span>
          <svg
            className="w-5 h-5 text-nebula-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Planet */}
      <div className="absolute -right-20 top-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-cosmos-900 to-void-950 opacity-50 blur-sm">
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-nebula-500/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
