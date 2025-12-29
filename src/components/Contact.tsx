import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmos-900/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nebula-500/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-nebula-400 mb-4">
            // Initiate Launch Sequence
          </span>
          <h2 className="section-title text-white mb-6">
            Book Your <span className="text-gradient">Mission</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Ready for lift-off? Reserve your table and prepare for an 
            extraordinary culinary journey through the cosmos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Reservation Form */}
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle className="text-2xl">Launch Reservation</CardTitle>
              <CardDescription>
                Complete the mission parameters below to secure your orbit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      Crew Commander
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      Communication Frequency
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                    Digital Uplink
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      Launch Date
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      Launch Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="flex h-14 w-full rounded-xl border border-white/10 bg-cosmos-900/50 px-5 py-4 font-body text-base text-white backdrop-blur-xl transition-all duration-300 focus:border-nebula-500/50 focus:outline-none focus:ring-2 focus:ring-nebula-500/20"
                    >
                      <option value="">Select time</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      Crew Size
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="flex h-14 w-full rounded-xl border border-white/10 bg-cosmos-900/50 px-5 py-4 font-body text-base text-white backdrop-blur-xl transition-all duration-300 focus:border-nebula-500/50 focus:outline-none focus:ring-2 focus:ring-nebula-500/20"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'astronaut' : 'astronauts'}
                        </option>
                      ))}
                      <option value="9+">9+ (large crew)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                    Mission Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Dietary requirements, special occasions, or specific requests..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="flex w-full rounded-xl border border-white/10 bg-cosmos-900/50 px-5 py-4 font-body text-base text-white placeholder:text-white/40 backdrop-blur-xl transition-all duration-300 focus:border-nebula-500/50 focus:outline-none focus:ring-2 focus:ring-nebula-500/20 resize-none"
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  Confirm Launch Sequence
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Mission Briefing
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: '🚀',
                      title: 'Launch Windows',
                      text: 'We accept reservations up to 30 days in advance',
                    },
                    {
                      icon: '⏱️',
                      title: 'Orbit Duration',
                      text: 'Tables are assigned for 2-hour dining experiences',
                    },
                    {
                      icon: '👔',
                      title: 'Dress Code',
                      text: 'Smart casual – prepare for an elevated experience',
                    },
                    {
                      icon: '🎂',
                      title: 'Special Missions',
                      text: 'Birthdays, anniversaries & corporate events welcome',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-white/50 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Follow Our Trajectory
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: 'Instagram',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      ),
                      href: '#',
                    },
                    {
                      name: 'Facebook',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      ),
                      href: '#',
                    },
                    {
                      name: 'TikTok',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      ),
                      href: '#',
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-nebula-400 hover:border-nebula-500/30 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gift Cards */}
            <div className="glass-strong rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-nebula-500 to-cosmos-900 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="12" rx="2" />
                  <path d="M12 8V4M12 4L9 7M12 4l3 3" />
                  <path d="M7 12h10M7 16h10" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Mission Gift Cards
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Give the gift of an interstellar dining experience
              </p>
              <Button variant="outline" size="sm">
                Purchase Gift Card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
