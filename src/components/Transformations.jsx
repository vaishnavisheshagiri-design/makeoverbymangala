import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, X, ZoomIn, Calendar } from "lucide-react";

const transformations = [
  {
    id: "trans-bridal",
    number: "01",
    src: "/images/before-after/before-and-after-bridal.jpeg",
    title: "Traditional South Indian Muhurtham Bridal Transformation",
    category: "Bridal Makeover",
    description:
      "Skin-first luminous bridal finish paired with classic South Indian temple jewellery, soft rosy eyes, and a timeless crimson lip.",
  },
  {
    id: "trans-reception",
    number: "02",
    src: "/images/before-after/before-and-after-reception.jpeg",
    title: "Soft Glam Pastel Lehenga Reception Transformation",
    category: "Reception Makeover",
    description:
      "Dewy, lightweight evening glam with soft curls and subtle shimmer crafted to complement her pastel lehenga and emerald-pearl jewellery.",
  },
];

export default function Transformations() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  return (
    <section
      id="transformations"
      className="py-24 lg:py-32 bg-[#FAF7F0] border-t border-[#D8C19A]/45"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#641F32] font-medium">
            <Sparkles size={13} className="text-[#B89A62]" />
            <span>Real Makeovers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-3 leading-tight">
            Before &amp; After{" "}
            <span className="italic text-[#641F32] font-normal">
              Transformations
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A62] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#171513]/75 font-light leading-relaxed">
            Every transformation focuses on enhancing natural features with
            breathable, skin-loving textures—never masking who you are.
          </p>
        </div>

        {/* Side-by-Side Editorial Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-12">
          {transformations.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#F3ECE0]/45 border border-[#B89A62]/50 hover:border-[#641F32] transition-all duration-300 overflow-hidden flex flex-col shadow-[0_10px_34px_rgba(23,21,19,0.04)] hover:shadow-[0_18px_46px_rgba(100,31,50,0.09)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3ECE0]">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FAF7F0]/95 border border-[#B89A62]/70 text-[#171513] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em] font-medium shadow-sm">
                  Before &amp; After
                </div>
                <div className="absolute inset-0 bg-[#171513]/0 group-hover:bg-[#171513]/25 transition-colors duration-300 flex items-center justify-center">
                  <span className="p-3.5 rounded-full bg-[#FAF7F0]/95 text-[#641F32] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9 bg-[#FAF7F0] border-t border-[#D8C19A]/45 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#B89A62] font-medium">
                      {item.category}
                    </span>
                    <span className="font-serif italic text-sm text-[#171513]/45">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-[#171513] group-hover:text-[#641F32] transition-colors mt-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#171513]/75 mt-3 leading-[1.75] font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D8C19A]/40 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#641F32] font-medium">
                  <span>Inspect Full Transformation</span>
                  <span>+</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Editorial Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#171513]/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full flex flex-col items-center"
          >
            <div className="border border-[#B89A62]/50 bg-[#171513] p-1.5 shadow-2xl">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>

            <div className="mt-5 text-center text-[#FAF7F0] space-y-2 max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#D8C19A]">
                {selectedItem.category}
              </p>
              <h4 className="font-serif text-2xl sm:text-3xl font-normal">
                {selectedItem.title}
              </h4>
              <div className="pt-2">
                <a
                  href="#booking"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#641F32] hover:bg-[#4A1524] text-[#FAF7F0] text-[11px] uppercase tracking-[0.2em] transition-colors"
                >
                  <Calendar size={13} />
                  <span>Book a Similar Makeover</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}