import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center bg-[#FAF7F0] overflow-hidden">
      {/* Subtle Champagne Editorial Backdrop Panel */}
      <div className="absolute top-0 right-0 w-[38%] h-full bg-[#F3ECE0] border-l border-[#D8C19A]/40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:col-span-6 space-y-7 text-center lg:text-left"
          >
            {/* Refined Studio Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#B89A62]/55 bg-[#FAF7F0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#641F32]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#171513]/80 font-medium">
                Bengaluru &amp; Karnataka &bull; Luxury Artistry
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-medium text-[#171513] leading-[1.08] tracking-tight">
              Every Look Tells a{" "}
              <span className="italic text-[#641F32] font-normal block sm:inline">
                Beautiful Story.
              </span>
            </h1>

            <div className="w-14 h-[1px] bg-[#B89A62] mx-auto lg:mx-0" />

            <p className="text-base sm:text-[17px] text-[#171513]/75 leading-[1.8] max-w-xl mx-auto lg:mx-0 font-light">
              Welcome to{" "}
              <strong className="font-medium text-[#171513] tracking-wide">
                MAKEOVER BY MANGALA
              </strong>
              . Blending 17+ years of skin-first beautician expertise with 4+ years
              of dedicated makeup artistry, I craft timeless, luminous looks that
              celebrate your natural radiance on every cherished occasion.
            </p>

            {/* Primary & Secondary CTAs (Book Appointment Primary, Explore Work Secondary) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#4A1524] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(100,31,50,0.18)]"
              >
                <Calendar size={15} />
                <span>Book an Appointment</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-[#FAF7F0] text-[#171513] border border-[#B89A62] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#F3ECE0] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={15} className="text-[#641F32]" />
              </a>
            </div>

            {/* Subtle Editorial Credibility Strip */}
            <div className="pt-7 border-t border-[#D8C19A]/60 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  17+ Years
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#171513]/65 mt-1">
                  Beautician Mastery
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  4+ Years
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#171513]/65 mt-1">
                  Bridal &amp; Event Artistry
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  100%
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#171513]/65 mt-1">
                  Personal Attention
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-[490px]">
              {/* Double Hairline Antique Gold Editorial Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#B89A62]/65 translate-x-2.5 translate-y-2.5 pointer-events-none" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F3ECE0] border border-[#D8C19A]/60 shadow-[0_24px_60px_rgba(23,21,19,0.12)]">
                <img
                  src="/images/hero/photoshoot.jpeg"
                  alt="Editorial makeup look crafted by Mangala"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>

              {/* Subtle Editorial Signature Caption Plate */}
              <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#171513]/60 px-1">
                <span>Signature Editorial Finish</span>
                <span className="text-[#641F32] font-medium">By Mangala</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}