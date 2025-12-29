import React from 'react';
import { Card, CardContent } from './ui/card';

const Orbit: React.FC = () => {
  const hours = [
    { day: 'Monday', hours: 'Closed for Maintenance' },
    { day: 'Tuesday', hours: '17:30 – 22:00' },
    { day: 'Wednesday', hours: '17:30 – 22:00' },
    { day: 'Thursday', hours: '17:30 – 22:00' },
    { day: 'Friday', hours: '17:30 – 23:00' },
    { day: 'Saturday', hours: '12:00 – 23:00' },
    { day: 'Sunday', hours: '12:00 – 21:00' },
  ];

  return (
    <section id="orbit" className="relative py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-nebula-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cosmos-900/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-nebula-400 mb-4">
            // Our Coordinates
          </span>
          <h2 className="section-title text-white mb-6">
            Find Our <span className="text-gradient">Orbit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Located in the heart of Auckland's Wynyard Quarter, 
            Orbital is your gateway to an unforgettable dining experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <Card className="overflow-hidden h-[400px] lg:h-full">
            <div className="relative w-full h-full bg-cosmos-900/50">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  {/* Grid Lines */}
                  {[...Array(20)].map((_, i) => (
                    <React.Fragment key={i}>
                      <line
                        x1={i * 20}
                        y1="0"
                        x2={i * 20}
                        y2="400"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-nebula-500/20"
                      />
                      <line
                        x1="0"
                        y1={i * 20}
                        x2="400"
                        y2={i * 20}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-nebula-500/20"
                      />
                    </React.Fragment>
                  ))}
                  {/* Decorative circles */}
                  <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" className="text-nebula-500/30" fill="none" />
                  <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" className="text-cosmos-400/20" fill="none" />
                  <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" className="text-cosmos-400/10" fill="none" />
                </svg>
              </div>
              
              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-nebula-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-nebula-500/50 rounded-full animate-ping"></div>
                  <div className="absolute -inset-8 border-2 border-nebula-500/30 rounded-full animate-pulse-slow"></div>
                </div>
              </div>

              {/* Location Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-nebula-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-nebula-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white text-sm">
                        Wynyard Quarter
                      </p>
                      <p className="font-mono text-xs text-white/50">
                        Auckland, New Zealand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="card-hover">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-500/20 to-cosmos-900/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nebula-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      Mission Control Location
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Level 1, 12 Jellicoe Street<br />
                      Wynyard Quarter<br />
                      Auckland 1010, New Zealand
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="card-hover">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-500/20 to-cosmos-900/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nebula-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-white mb-4">
                      Operating Hours
                    </h3>
                    <div className="space-y-2">
                      {hours.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                        >
                          <span className="text-white/60 text-sm">{item.day}</span>
                          <span className={`font-mono text-sm ${
                            item.hours === 'Closed for Maintenance'
                              ? 'text-white/30'
                              : 'text-nebula-400'
                          }`}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="card-hover">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-500/20 to-cosmos-900/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nebula-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      Transmission Channels
                    </h3>
                    <div className="space-y-2">
                      <p className="text-white/60">
                        <span className="text-white/40 text-sm">Phone:</span>{' '}
                        <a href="tel:+6493001234" className="text-nebula-400 hover:text-nebula-300 transition-colors">
                          +64 9 300 1234
                        </a>
                      </p>
                      <p className="text-white/60">
                        <span className="text-white/40 text-sm">Email:</span>{' '}
                        <a href="mailto:launch@orbital.co.nz" className="text-nebula-400 hover:text-nebula-300 transition-colors">
                          launch@orbital.co.nz
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orbit;
