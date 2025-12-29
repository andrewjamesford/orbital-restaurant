import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#mission', label: 'Mission' },
    { href: '#menu', label: 'Menu' },
    { href: '#orbit', label: 'Our Orbit' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-void-950/80 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-nebula-500 to-cosmos-900 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-nebula-500/30 transition-all duration-300">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
                </svg>
              </div>
              <div className="absolute -inset-1 rounded-full bg-nebula-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-display font-bold text-xl lg:text-2xl tracking-tight">
              <span className="text-gradient">ORBITAL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm uppercase tracking-widest text-white/70 hover:text-nebula-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-500 to-cosmos-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="sm">
              Launch Reservation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-2xl bg-void-950/95 border-b border-white/5 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-display text-lg uppercase tracking-widest text-white/70 hover:text-nebula-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button variant="default" className="w-full">
              Launch Reservation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
