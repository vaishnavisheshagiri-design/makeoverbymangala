import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 140;
      let current = "";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && el.offsetTop <= scrollPos) {
          current = link.href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F0]/95 backdrop-blur-md shadow-[0_6px_28px_rgba(23,21,19,0.05)] border-b border-[#B89A62]/40 py-3"
          : "bg-[#FAF7F0]/88 backdrop-blur-sm border-b border-[#D8C19A]/25 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo + Editorial Wordmark */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#B89A62]/75 group-hover:border-[#641F32] transition-colors bg-[#171513] flex items-center justify-center shrink-0 shadow-sm">
            <img
              src="/images/logo/logo.jpeg"
              alt="Makeover by Mangala Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg xl:text-xl tracking-[0.16em] font-semibold text-[#171513] group-hover:text-[#641F32] transition-colors leading-none whitespace-nowrap">
              MAKEOVER BY MANGALA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#B89A62] mt-1 font-medium whitespace-nowrap">
              Luxury Makeup Artistry
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-[11px] uppercase tracking-[0.18em] transition-colors font-medium whitespace-nowrap ${
                  isActive
                    ? "text-[#641F32]"
                    : "text-[#171513]/75 hover:text-[#641F32]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1px] bg-[#641F32] transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#booking"
            className="ml-1 px-5 py-2.5 bg-[#641F32] text-[#FAF7F0] text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-[#4A1524] transition-all duration-300 border border-[#641F32] whitespace-nowrap inline-flex items-center gap-2 shadow-sm"
          >
            <Calendar size={13} />
            <span>Book Appointment</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 border border-[#B89A62]/45 bg-[#FAF7F0] text-[#171513] hover:text-[#641F32] hover:border-[#641F32] transition-colors"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Smooth Animated Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#FAF7F0] border-b border-[#B89A62]/50 shadow-xl"
          >
            <div className="px-6 py-7 space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#171513] hover:text-[#641F32] py-2.5 border-b border-[#D8C19A]/35 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="font-serif italic text-xs text-[#B89A62]">
                    0{idx + 1}
                  </span>
                </a>
              ))}

              <div className="pt-4">
                <a
                  href="#booking"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3.5 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#4A1524] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Book an Appointment</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}