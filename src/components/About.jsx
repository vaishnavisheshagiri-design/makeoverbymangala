import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Sparkles, Heart, X, ZoomIn } from "lucide-react";

const certificates = [
  {
    src: "/images/about/certificate-1.jpeg",
    title: "Professional Makeup & Hair Course",
    subtitle: "Makeup by Ashugowda Hair & Makeup Academy",
  },
  {
    src: "/images/about/certificate-2.jpeg",
    title: "Hands-On Practice Makeup Workshop",
    subtitle: "Golden Makeup Studio & Academy",
  },
  {
    src: "/images/about/certificate-3.jpeg",
    title: "Makeup & Hair Artistry Certification",
    subtitle: "Manjushree Praveen Makeup & Hair Academy",
  },
  {
    src: "/images/about/certificate-4.jpeg",
    title: "Fashion Show Makeup Artist Recognition",
    subtitle: "Being Social — Fashion Show 2025",
  },
  {
    src: "/images/about/certificate-5.jpeg",
    title: "Makeup Masterclass Participation",
    subtitle: "Club 28 Makeup Masterclass",
  },
  {
    src: "/images/about/certificate-6.jpeg",
    title: "Look & Learn Makeup Masterclass",
    subtitle: "Club 28 Professional Workshop",
  },
];

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#D8C19A]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row: Working Portrait + First-Person Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Single Prominent Working Image on Left/Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 border border-[#B89A62]/60 -translate-x-2 translate-y-2 pointer-events-none" />
              <div className="relative aspect-[3/4] overflow-hidden bg-[#171513] shadow-lg">
                <img
                  src="/images/about/about.jpeg"
                  alt="Mangala applying bridal makeup to a client"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#171513]/70">
                <span>Behind the Brush</span>
                <span className="text-[#641F32] font-medium">Personal Artistry</span>
              </div>
            </div>
          </motion.div>

          {/* First-Person Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-[#B89A62] font-medium">
              Meet the Artist
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] leading-tight">
              Hello, I&apos;m Mangala —{" "}
              <span className="italic text-[#641F32] font-normal">
                Bringing Out the Best in You.
              </span>
            </h2>

            <div className="space-y-4 text-base text-[#171513]/80 leading-relaxed font-light">
              <p>
                Beauty has been my lifelong passion. For the past{" "}
                <strong className="font-medium text-[#171513]">17+ years as a beautician</strong>, 
                I have had the privilege of caring for skin, understanding different facial features, 
                and helping women feel confident in their own skin every single day.
              </p>
              <p>
                Over the last{" "}
                <strong className="font-medium text-[#171513]">4+ years in dedicated makeup artistry</strong>, 
                I have channeled that deep foundation in skincare and aesthetics into crafting bespoke looks 
                for brides, special celebrations, photoshoots, and milestone events.
              </p>
              <p>
                I believe makeup should never mask who you are—instead, I focus on enhancing your natural 
                features with soft, luminous finishes, thoughtful colour harmony, and calm, personal attention 
                from start to finish.
              </p>
            </div>

            {/* Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              <div className="p-4 border border-[#D8C19A]/60 bg-white/50">
                <Sparkles size={20} className="text-[#641F32] mb-2" />
                <p className="font-serif text-xl font-semibold text-[#171513]">17+ Years</p>
                <p className="text-xs text-[#171513]/70 mt-1">
                  Hands-on experience as a professional beautician
                </p>
              </div>
              <div className="p-4 border border-[#D8C19A]/60 bg-white/50">
                <Heart size={20} className="text-[#641F32] mb-2" />
                <p className="font-serif text-xl font-semibold text-[#171513]">4+ Years</p>
                <p className="text-xs text-[#171513]/70 mt-1">
                  Specialized bridal, occasion &amp; editorial makeup
                </p>
              </div>
              <div className="p-4 border border-[#D8C19A]/60 bg-white/50">
                <Award size={20} className="text-[#641F32] mb-2" />
                <p className="font-serif text-xl font-semibold text-[#171513]">Certified</p>
                <p className="text-xs text-[#171513]/70 mt-1">
                  Trained across top academies &amp; masterclasses
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Side-by-Side Certifications & Workshops Gallery */}
        <div className="mt-20 pt-14 border-t border-[#D8C19A]/50">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#B89A62] font-medium">
                Continuous Learning &amp; Recognition
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171513] mt-1">
                My Certifications &amp; Masterclasses
              </h3>
            </div>
            <p className="text-xs text-[#171513]/65">
              Click any certificate to view full size
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificates.map((cert, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group text-left border border-[#D8C19A]/70 bg-white/60 hover:border-[#641F32] transition-all overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#171513]/5">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#171513]/0 group-hover:bg-[#171513]/30 transition-colors flex items-center justify-center">
                    <ZoomIn
                      size={20}
                      className="text-[#FAF7F0] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-serif text-sm font-semibold text-[#171513] line-clamp-1">
                    {cert.title}
                  </p>
                  <p className="text-[11px] text-[#171513]/65 line-clamp-1 mt-0.5">
                    {cert.subtitle}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Viewing Certificates */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-[#171513]/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#FAF7F0] border border-[#B89A62] p-4 sm:p-6 shadow-2xl"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 p-2 bg-[#171513] text-[#FAF7F0] hover:bg-[#641F32] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-[#171513]/5">
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-serif text-xl font-semibold text-[#171513]">
                {selectedCert.title}
              </h4>
              <p className="text-xs uppercase tracking-[0.15em] text-[#641F32] mt-1">
                {selectedCert.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}