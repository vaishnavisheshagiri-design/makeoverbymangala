import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Calendar } from "lucide-react";
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

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === filteredItems.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

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
      className="py-24 lg:py-32 bg-[#F3ECE0]/70 border-t border-[#D8C19A]/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#641F32] font-medium">
            Curated Lookbook
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-3 leading-tight">
            The Complete{" "}
            <span className="italic text-[#641F32] font-normal">Portfolio</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A62] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#171513]/75 font-light leading-relaxed">
            Explore bridal transformations, special occasion makeovers,
            traditional hairstyling, goddess saree draping, and editorial shoots.
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
                className={`px-5 sm:px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-[#641F32] text-[#FAF7F0] border-[#641F32] shadow-sm"
                    : "bg-[#FAF7F0] text-[#171513]/80 border-[#B89A62]/55 hover:border-[#641F32] hover:text-[#641F32]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sub-category Filter Pills */}
        {currentCategoryObj && currentCategoryObj.subcategories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pt-2">
            <button
              onClick={() => setActiveSubcategory("All")}
              className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-all border ${
                activeSubcategory === "All"
                  ? "bg-[#171513] text-[#FAF7F0] border-[#171513]"
                  : "bg-[#FAF7F0]/90 text-[#171513]/70 border-[#D8C19A] hover:border-[#171513] hover:text-[#171513]"
              }`}
            >
              All {currentCategoryObj.label}
            </button>
            {currentCategoryObj.subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-all border ${
                  activeSubcategory === sub
                    ? "bg-[#171513] text-[#FAF7F0] border-[#171513]"
                    : "bg-[#FAF7F0]/90 text-[#171513]/70 border-[#D8C19A] hover:border-[#171513] hover:text-[#171513]"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Subtle Editorial Count Bar */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#171513]/55 mb-6 pb-3 border-b border-[#D8C19A]/45">
          <span>
            Showing {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "Look" : "Looks"}
          </span>
          <span className="hidden sm:inline">Click any portrait to enlarge</span>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#B89A62]/60 bg-[#FAF7F0]/75">
            <p className="font-serif text-2xl sm:text-3xl text-[#171513]">
              New looks coming soon to this collection
            </p>
            <p className="text-sm text-[#171513]/65 mt-2 font-light">
              Select another category above to explore more of my artistry.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group cursor-pointer bg-[#FAF7F0] border border-[#B89A62]/45 hover:border-[#641F32] transition-all duration-300 overflow-hidden shadow-[0_8px_28px_rgba(23,21,19,0.03)] hover:shadow-[0_16px_42px_rgba(100,31,50,0.08)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F3ECE0]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-[#171513]/0 group-hover:bg-[#171513]/25 transition-colors duration-300 flex items-center justify-center">
                      <span className="p-3.5 rounded-full bg-[#FAF7F0]/95 text-[#641F32] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                        <ZoomIn size={18} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex items-baseline justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#B89A62] font-medium">
                        {item.subcategory}
                      </p>
                      <h3 className="font-serif text-xl font-medium text-[#171513] group-hover:text-[#641F32] transition-colors mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#171513]/40 shrink-0">
                      View
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Editorial Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#171513]/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-8 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-8 p-3 bg-[#FAF7F0]/10 hover:bg-[#641F32] text-[#FAF7F0] transition-colors z-10"
                aria-label="Next Image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full flex flex-col items-center"
          >
            <div className="border border-[#B89A62]/50 bg-[#171513] p-1.5 shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>

            <div className="mt-5 text-center text-[#FAF7F0] space-y-2">
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#D8C19A]">
                {filteredItems[lightboxIndex].subcategory} &bull;{" "}
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
              <h4 className="font-serif text-2xl sm:text-3xl font-normal">
                {filteredItems[lightboxIndex].title}
              </h4>
              <div className="pt-2">
                <a
                  href="#booking"
                  onClick={() => setLightboxIndex(null)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#641F32] hover:bg-[#4A1524] text-[#FAF7F0] text-[11px] uppercase tracking-[0.2em] transition-colors"
                >
                  <Calendar size={13} />
                  <span>Book a Similar Look</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}