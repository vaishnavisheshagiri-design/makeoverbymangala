import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#171513] text-[#FAF7F0] py-14 border-t border-[#B89A62]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Identity */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#B89A62]/70 shrink-0">
            <img
              src="/images/logo/logo.jpeg"
              alt="Makeover by Mangala Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-lg tracking-[0.18em] font-semibold text-[#FAF7F0]">
              MAKEOVER BY MANGALA
            </p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#B89A62] mt-1">
              17+ Years Beautician &bull; 4+ Years Makeup Artistry
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.16em] text-[#FAF7F0]/75">
          <a href="#about" className="hover:text-[#D8C19A] transition-colors">
            About
          </a>
          <a href="#expertise" className="hover:text-[#D8C19A] transition-colors">
            Expertise
          </a>
          <a href="#portfolio" className="hover:text-[#D8C19A] transition-colors">
            Portfolio
          </a>
          <a href="#transformations" className="hover:text-[#D8C19A] transition-colors">
            Transformations
          </a>
          <a href="#booking" className="hover:text-[#D8C19A] transition-colors">
            Book Now
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#FAF7F0]/55 text-center md:text-right">
          &copy; {new Date().getFullYear()} Makeover by Mangala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}