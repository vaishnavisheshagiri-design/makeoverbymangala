import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "../data/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentCategoryObj = PORTFOLIO_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveSubcategory("All");
  };

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (activeSubcategory !== "All" && item.subcategory !== activeSubcategory) {
        return false;
      }
      return true;
    });
  }, [activeCategory, activeSubcategory]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-[#D8C19A]/15 border-t border-[#D8C19A]/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.26em] text-[#641F32] font-medium">
            My Work
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-2">
            The Complete Portfolio
          </h2>
          <p className="text-base text-[#171513]/75 mt-3 font-light">
            Browse through my bridal transformations, special occasion makeovers, 
            hairstyling, saree draping, and editorial shoots.
          </p>
        </div>

        {/* Main Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all border ${
                  isActive
                    ? "bg-[#641F32] text-[#FAF7F0] border-[#641F32]"
                    : "bg-[#FAF7F0] text-[#171513]/80 border-[#B89A62]/50 hover:border-[#641F32]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sub-category Filter Pills */}
        {currentCategoryObj && currentCategoryObj.subcategories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pt-2">
            <button
              onClick={() => setActiveSubcategory("All")}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] rounded-full transition-colors ${
                activeSubcategory === "All"
                  ? "bg-[#171513] text-[#FAF7F0]"
                  : "bg-[#FAF7F0]/80 text-[#171513]/70 border border-[#D8C19A] hover:text-[#171513]"
              }`}
            >
              All {currentCategoryObj.label}
            </button>
            {currentCategoryObj.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] rounded-full transition-colors ${
                  activeSubcategory === sub
                    ? "bg-[#171513] text-[#FAF7F0]"
                    : "bg-[#FAF7F0]/80 text-[#171513]/70 border border-[#D8C19A] hover:text-[#171513]"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#B89A62]/60 bg-[#FAF7F0]/60">
            <p className="font-serif text-2xl text-[#171513]">
              New looks coming soon to this collection
            </p>
            <p className="text-sm text-[#171513]/65 mt-1">
              Select another category above to explore more of my work.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group cursor-pointer bg-[#FAF7F0] border border-[#D8C19A]/70 hover:border-[#641F32] transition-all overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#171513]/5">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#171513]/0 group-hover:bg-[#171513]/30 transition-colors flex items-center justify-center">
                      <span className="p-3 rounded-full bg-[#FAF7F0]/90 text-[#171513] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <ZoomIn size={18} />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#641F32] font-semibold">
                      {item.subcategory}
                    </p>
                    <h3 className="font-serif text-lg font-medium text-[#171513] mt-1">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#171513]/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors"
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full flex flex-col items-center"
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[78vh] w-auto object-contain border border-[#B89A62]/40 shadow-2xl"
            />
            <div className="mt-4 text-center text-[#FAF7F0]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#D8C19A]">
                {filteredItems[lightboxIndex].subcategory}
              </p>
              <h4 className="font-serif text-xl sm:text-2xl mt-1">
                {filteredItems[lightboxIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}