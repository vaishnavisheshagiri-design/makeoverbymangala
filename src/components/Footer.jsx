import React from "react";
import { ArrowUp, Phone, MapPin, ExternalLink } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/918073620462?text=${encodeURIComponent(
  "Hello Mangala! I visited your portfolio website and would like to inquire about a booking."
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/makeoverbymangala/";
const GOOGLE_PROFILE_URL = "https://share.google/JGdZ8FiJMAV8rVfCf";

export default function Footer() {
  return (
    <footer className="bg-[#171513] text-[#FAF7F0] border-t border-[#B89A62]/45">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-[#B89A62]/25">
          {/* Column 1: Brand Identity & Ethos */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-full overflow-hidden border border-[#B89A62]/80 shrink-0 shadow-md">
                <img
                  src="/images/logo/logo.jpeg"
                  alt="Makeover by Mangala Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl tracking-[0.18em] font-semibold text-[#FAF7F0] leading-tight">
                  MAKEOVER BY MANGALA
                </p>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#B89A62] mt-1">
                  Luxury Makeup Artistry
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FAF7F0]/70 font-light leading-relaxed max-w-sm">
              17+ years of skin-first beautician expertise and 4+ years of
              dedicated bridal, occasion, and editorial makeup artistry across
              Bengaluru &amp; Karnataka.
            </p>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B89A62] font-medium">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-[#FAF7F0]/75">
              <li>
                <a href="#about" className="hover:text-[#D8C19A] transition-colors">
                  About Mangala
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#D8C19A] transition-colors">
                  Areas of Expertise
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#D8C19A] transition-colors">
                  Signature Looks
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D8C19A] transition-colors">
                  Complete Portfolio
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D8C19A] transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D8C19A] transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Studio Concierge */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B89A62] font-medium">
              Studio &amp; Bookings
            </p>
            <div className="space-y-3 text-sm text-[#FAF7F0]/80 font-light">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#D8C19A] transition-colors"
              >
                <Phone size={15} className="text-[#B89A62] shrink-0" />
                <span>+91 80736 20462 (Call / WhatsApp)</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-[#B89A62] shrink-0" />
                <span>Bengaluru &amp; On-Location Across Karnataka</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#B89A62]/50 hover:border-[#D8C19A] text-[11px] uppercase tracking-[0.18em] text-[#FAF7F0] hover:text-[#D8C19A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#B89A62]/50 hover:border-[#D8C19A] text-[11px] uppercase tracking-[0.18em] text-[#FAF7F0] hover:text-[#D8C19A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Google Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/55">
          <p>
            &copy; {new Date().getFullYear()} Makeover by Mangala. All rights reserved.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#D8C19A] hover:text-[#FAF7F0] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}