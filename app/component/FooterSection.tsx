"use client";
import React from 'react';
import { Mail, Clock, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'QUALITY', href: '/quality' },
    { name: 'AUTHENTICITY', href: '/authenticity' },
    { name: 'COUNTERFEITS', href: '/counterfeits' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <footer className="relative bg-[#2b2a28] text-white overflow-hidden pt-0">
      {/* Curved Top Decoration - Flipped to face downward */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 z-10">
        <svg
          className="relative block w-full h-[60px] md:h-[90px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* This path creates the "sky" background above the curve */}
          <path
            fill="#fff"
            d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z"
          ></path>
          {/* This path creates the "hill" footer background pushing up */}
          <path
            fill="#2b2a28"
            d="M0,100 C360,0 1080,0 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-12 relative z-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Main Content Area */}
          <div className="w-full md:w-[80%] space-y-12">
            {/* Heading Section */}
            <div className="flex flex-wrap items-baseline gap-x-4">
              <div className="overflow-hidden">
                <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] uppercase font-light leading-tight">
                  Let Discuss
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] uppercase font-light leading-tight text-white/30">
                  The Details
                </h2>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {/* Location */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg md:text-xl font-light tracking-widest text-white/90">LOCATION</h3>
                </div>
                <span className="h-[1px] w-16 bg-white/20 block"></span>
                <p className="font-light tracking-wide leading-relaxed text-white/60 text-sm md:text-base max-w-xs">
                  14D, Ground Floor, Allana compound, Klassic Tower “B”wing, Dr A.R Nair Road Mumbai Central 400011
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-light tracking-widest text-white/90">CONTACT</h3>
                <span className="h-[1px] w-16 bg-white/20 block"></span>
                <div className="space-y-3">
                  <a href="mailto:info@thaiger-pharmaceuticals.com" className="group flex items-center gap-2 font-light tracking-wide text-white/60 text-sm md:text-base hover:text-white transition-colors">
                    info@thaiger-pharmaceuticals.com
                  </a>
                  <p className="font-light tracking-wide text-white/60 text-sm md:text-base flex items-center gap-2">
                    Mon - Sat: 7AM - 10PM
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl font-light tracking-widest text-white/90">LINKS</h3>
                <span className="h-[1px] w-16 bg-white/20 block"></span>
                <div className="flex flex-col items-start gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm md:text-base font-light tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Watermark Logo Section */}
          <div className="hidden md:flex w-[20%] items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none transform scale-125">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="50" y="55" textAnchor="middle" fontSize="10" className="font-bold tracking-tighter">THAIGER</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="font-light tracking-[0.3em] text-white/30 uppercase text-[10px] md:text-xs text-center">
            © COPYRIGHT {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function FooterSection() {
  return (
    <div className="">

      <Footer />
    </div>
  );
}