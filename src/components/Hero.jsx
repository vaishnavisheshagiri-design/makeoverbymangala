import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center bg-[#FAF7F0] overflow-hidden">
      {/* Subtle Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D8C19A]/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#B89A62]/50 bg-[#FAF7F0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#641F32]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#171513]/80 font-medium">
                Hello, I&apos;m Mangala
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium text-[#171513] leading-[1.1] tracking-tight">
              Every Look Tells a{" "}
              <span className="italic text-[#641F32] font-normal">
                Beautiful Story.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#171513]/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Welcome to <strong className="font-medium text-[#171513]">MAKEOVER BY MANGALA</strong>. 
              With 17+ years of experience as a beautician and 4+ years in dedicated makeup artistry, 
              I love creating timeless, radiant looks tailored to celebrate your natural beauty on your most cherished occasions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4d1726] transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#171513] border border-[#B89A62] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D8C19A]/25 transition-all flex items-center justify-center gap-2.5"
              >
                <Calendar size={15} className="text-[#641F32]" />
                <span>Book an Appointment</span>
              </a>
            </div>

            {/* Subtle Personal Highlights */}
            <div className="pt-6 border-t border-[#D8C19A]/60 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  17+ Years
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-[#171513]/70 mt-1">
                  Beautician Expertise
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  4+ Years
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-[#171513]/70 mt-1">
                  Makeup Artistry
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#641F32]">
                  100%
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-[#171513]/70 mt-1">
                  Personal Attention
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Hero Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute -inset-3 sm:-inset-4 border border-[#B89A62]/60 translate-x-2 translate-y-2 pointer-events-none" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#D8C19A]/20 shadow-xl">
                <img
                  src="/images/hero/photoshoot.jpeg"
                  alt="Editorial makeup look crafted by Mangala"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}