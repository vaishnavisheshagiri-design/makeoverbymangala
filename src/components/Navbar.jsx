import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Signature Looks", href: "#signature" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Transformations", href: "#transformations" },
  { name: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b border-[#D8C19A]/40 py-3"
          : "bg-[#FAF7F0]/85 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo + Name */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#B89A62]/60 bg-[#171513] flex items-center justify-center shrink-0 shadow-sm">
            <img
              src="/images/logo/logo.jpeg"
              alt="Makeover by Mangala Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg xl:text-xl tracking-[0.15em] font-semibold text-[#171513] leading-none whitespace-nowrap">
              MAKEOVER BY MANGALA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.26em] uppercase text-[#B89A62] mt-1 font-medium whitespace-nowrap">
              Luxury Makeup Artistry
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.15em] text-[#171513]/80 hover:text-[#641F32] transition-colors font-medium whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2.5 bg-[#641F32] text-[#FAF7F0] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#4d1726] transition-colors border border-[#641F32] whitespace-nowrap"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-[#171513] hover:text-[#641F32] transition-colors"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FAF7F0] border-b border-[#D8C19A]/50 px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm uppercase tracking-[0.16em] text-[#171513] hover:text-[#641F32] py-1.5 border-b border-[#D8C19A]/25"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-3 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.18em] font-medium mt-4"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
}