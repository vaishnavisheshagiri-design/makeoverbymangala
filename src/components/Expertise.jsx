import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Scissors, Flower2 } from "lucide-react";

const expertiseAreas = [
  {
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
    <section id="expertise" className="py-20 lg:py-28 bg-[#D8C19A]/20 border-t border-[#D8C19A]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.26em] text-[#641F32] font-medium">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-2">
            My Areas of Expertise
          </h2>
          <p className="text-base text-[#171513]/75 mt-4 font-light leading-relaxed">
            Whether you are stepping into your wedding day or celebrating a cherished family milestone, 
            I offer personalized makeup, hairstyling, draping, and beauty care crafted around you.
          </p>
        </div>

        {/* 4 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#FAF7F0] border border-[#B89A62]/45 p-8 sm:p-10 hover:border-[#641F32] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-[#B89A62]/60 flex items-center justify-center text-[#641F32] mb-6 bg-[#D8C19A]/15">
                    <IconComponent size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171513]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#171513]/75 mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-[#D8C19A]/50 space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#171513]/85"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#641F32] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}