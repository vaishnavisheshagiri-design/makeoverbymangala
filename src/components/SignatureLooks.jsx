import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data/portfolioData";

export default function SignatureLooks() {
  const featured = PORTFOLIO_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <section id="signature" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#D8C19A]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#B89A62] font-medium">
              Curated Highlights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-2">
              Here&apos;s a Glimpse of My Signature Looks
            </h2>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#641F32] font-semibold hover:text-[#171513] transition-colors pb-1 border-b border-[#641F32]"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowDownRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {featured.map((item, idx) => {
            const colSpan =
              idx === 0
                ? "md:col-span-5"
                : idx === 1
                ? "md:col-span-7 md:mt-10"
                : idx === 2
                ? "md:col-span-6"
                : "md:col-span-6 md:mt-8";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.1 }}
                className={`${colSpan} group`}
              >
                <a href="#portfolio" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#D8C19A]/20 border border-[#D8C19A]/60">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF7F0]">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#D8C19A] block mb-1">
                        {item.subcategory}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}