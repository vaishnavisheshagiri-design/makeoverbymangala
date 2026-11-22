import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, X, ZoomIn } from "lucide-react";

const transformations = [
  {
    id: "trans-bridal",
    src: "/images/before-after/before-and-after-bridal.jpeg",
    title: "Traditional South Indian Muhurtham Bridal Transformation",
    category: "Bridal Makeover",
    description:
      "Skin-first luminous bridal finish paired with classic South Indian temple jewellery, soft rosy eyes, and a timeless crimson lip.",
  },
  {
    id: "trans-reception",
    src: "/images/before-after/before-and-after-reception.jpeg",
    title: "Soft Glam Pastel Lehenga Reception Transformation",
    category: "Reception Makeover",
    description:
      "Dewy, lightweight evening glam with soft curls and subtle shimmer crafted to complement her pastel lehenga and emerald-pearl jewellery.",
  },
];

export default function Transformations() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      id="transformations"
      className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#D8C19A]/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-[#641F32] font-medium">
            <Sparkles size={14} />
            <span>Real Makeovers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-2">
            Before &amp; After Transformations
          </h2>
          <p className="text-base text-[#171513]/75 mt-3 font-light leading-relaxed">
            Every transformation focuses on enhancing natural features with breathable, 
            skin-loving textures—never masking who you are.
          </p>
        </div>

        {/* Side-by-Side Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.12 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white/60 border border-[#B89A62]/50 hover:border-[#641F32] transition-all overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171513]/5">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#171513]/85 text-[#FAF7F0] px-3.5 py-1 text-[10px] uppercase tracking-[0.22em]">
                  Before &amp; After
                </div>
                <div className="absolute inset-0 bg-[#171513]/0 group-hover:bg-[#171513]/25 transition-colors flex items-center justify-center">
                  <span className="p-3 rounded-full bg-[#FAF7F0]/90 text-[#171513] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#641F32] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#171513] mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#171513]/75 mt-2.5 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#171513]/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 p-2.5 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full flex flex-col items-center"
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-h-[78vh] w-auto object-contain border border-[#B89A62]/40 shadow-2xl"
            />
            <div className="mt-4 text-center text-[#FAF7F0]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#D8C19A]">
                {selectedItem.category}
              </p>
              <h4 className="font-serif text-xl sm:text-2xl mt-1">
                {selectedItem.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}