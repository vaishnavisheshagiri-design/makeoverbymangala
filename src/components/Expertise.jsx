import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Scissors, Flower2, ArrowUpRight } from "lucide-react";

const expertiseAreas = [
  {
    number: "01",
    icon: Crown,
    title: "Bridal Makeup Artistry",
    description:
      "Bespoke bridal transformations tailored to your traditions, outfit, and natural glow—covering South Indian, North Indian, and Japanese Bridal styles.",
    highlights: [
      "South Indian & North Indian Bridal",
      "Long-Wear Waterproof & HD Finish",
      "Customized Skin Prep & Natural Radiance",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Special Occasion & Party Looks",
    description:
      "From intimate family ceremonies to grand receptions, I create camera-ready looks that feel lightweight, comfortable, and timeless.",
    highlights: [
      "Engagement, Reception & Pre-Wedding",
      "Baby Shower, Naming & Housewarming",
      "Party, Marathi Style & Mature Skin Makeup",
    ],
  },
  {
    number: "03",
    icon: Scissors,
    title: "Hairstyling & Saree Draping",
    description:
      "Complete styling from head to toe so every pleat, floral detail, and hairstyle stays neat and graceful throughout your celebration.",
    highlights: [
      "Traditional & Contemporary Hairstyles",
      "Neat Saree Pre-Pleating",
      "Authentic Goddess Saree Draping",
    ],
  },
  {
    number: "04",
    icon: Flower2,
    title: "Beautician & Skin Care",
    description:
      "Backed by 17+ years of hands-on beautician experience, I prepare and care for your skin so your makeup sits smoothly and looks naturally luminous.",
    highlights: [
      "17+ Years of Beautician Expertise",
      "Pre-Event Skin Preparation",
      "Gentle Care for Every Skin Type & Age",
    ],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-[#F3ECE0]/75 border-t border-[#D8C19A]/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#641F32] font-medium">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-3 leading-tight">
            My Areas of{" "}
            <span className="italic text-[#641F32] font-normal">Expertise</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A62] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#171513]/75 font-light leading-relaxed">
            Whether you are stepping into your wedding day or celebrating a
            cherished family milestone, I offer personalized makeup, hairstyling,
            draping, and beauty care crafted around you.
          </p>
        </div>

        {/* 4 Luxury Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
          {expertiseAreas.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative bg-[#FAF7F0] border border-[#B89A62]/50 hover:border-[#641F32] p-8 sm:p-11 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(23,21,19,0.03)] hover:shadow-[0_16px_42px_rgba(100,31,50,0.08)]"
              >
                <div>
                  {/* Top Header Row: Icon + Editorial Number */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-12 h-12 border border-[#B89A62]/65 bg-[#F3ECE0]/65 group-hover:bg-[#641F32] group-hover:border-[#641F32] text-[#641F32] group-hover:text-[#FAF7F0] transition-colors duration-300 flex items-center justify-center">
                      <IconComponent size={21} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif italic text-2xl sm:text-3xl text-[#B89A62]/80 group-hover:text-[#641F32] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171513] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#171513]/75 mt-3.5 leading-[1.8] font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 pt-6 border-t border-[#D8C19A]/55">
                  <ul className="space-y-2.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-xs sm:text-sm text-[#171513]/85"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] group-hover:bg-[#641F32] transition-colors shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 flex items-center justify-end">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#641F32] font-medium group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Inquire for Dates</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}