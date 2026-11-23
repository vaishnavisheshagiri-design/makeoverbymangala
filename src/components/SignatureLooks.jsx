import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data/portfolioData";

export default function SignatureLooks() {
  const featured = PORTFOLIO_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <section
      id="signature"
      className="py-24 lg:py-32 bg-[#FAF7F0] border-t border-[#D8C19A]/45"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B89A62] font-medium">
              Curated Highlights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-3 leading-[1.15]">
              A Glimpse of My{" "}
              <span className="italic text-[#641F32] font-normal">
                Signature Looks
              </span>
            </h2>
            <div className="w-14 h-[1px] bg-[#B89A62] mt-5" />
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#641F32] font-medium hover:text-[#171513] transition-colors pb-1.5 border-b border-[#641F32]/70 self-start md:self-auto"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowDownRight size={15} />
          </a>
        </div>

        {/* Asymmetrical Luxury Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-11 items-start">
          {featured.map((item, idx) => {
            const colSpan =
              idx === 0
                ? "md:col-span-5"
                : idx === 1
                ? "md:col-span-7 md:mt-12"
                : idx === 2
                ? "md:col-span-6"
                : "md:col-span-6 md:mt-10";

            const aspectClass =
              idx === 1 ? "aspect-[4/4.3]" : "aspect-[4/5]";

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                className={`${colSpan} group`}
              >
                <a href="#portfolio" className="block">
                  {/* Gallery Frame */}
                  <div
                    className={`relative ${aspectClass} overflow-hidden bg-[#F3ECE0] border border-[#B89A62]/50 group-hover:border-[#641F32] transition-colors duration-300 shadow-[0_14px_40px_rgba(23,21,19,0.06)]`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Clean Editorial Caption Plate Below Photo (Never Covers Face/Details) */}
                  <div className="pt-4 pb-2 flex items-baseline justify-between gap-4 border-b border-[#D8C19A]/55">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#B89A62] font-medium block">
                        {item.subcategory}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171513] group-hover:text-[#641F32] transition-colors mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-serif italic text-sm text-[#171513]/45 shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}