import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin, Send, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "918073620462";
const INSTAGRAM_URL = "https://www.instagram.com/makeoverbymangala/";

function InstagramBrandIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "Bridal Makeup",
    venue: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      `Hello Mangala! I would like to inquire about a booking:`,
      `• Name: ${formData.name}`,
      `• Phone: ${formData.phone}`,
      `• Event Date: ${formData.date}`,
      `• Service: ${formData.service}`,
      formData.venue ? `• Location / Venue: ${formData.venue}` : null,
      formData.notes ? `• Details: ${formData.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  const quickConsultUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Mangala! I visited your portfolio website and would like to consult about a makeover booking."
  )}`;

  return (
    <section
      id="booking"
      className="py-24 lg:py-32 bg-[#FAF7F0] border-t border-[#D8C19A]/45"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Invitation & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B89A62] font-medium">
              Private Consultation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] leading-[1.15]">
              Reserve Your Date for a{" "}
              <span className="italic text-[#641F32] font-normal">
                Timeless Look.
              </span>
            </h2>
            <div className="w-14 h-[1px] bg-[#B89A62]" />
            <p className="text-sm sm:text-base text-[#171513]/75 leading-relaxed font-light">
              Whether you are preparing for your muhurtham, engagement, reception, or an intimate family celebration, share your occasion details below to check date availability directly on WhatsApp.
            </p>

            {/* Studio Contact Details */}
            <div className="pt-4 space-y-5 border-t border-[#D8C19A]/50">
              <a
                href={quickConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#B89A62]/60 text-[#641F32] bg-[#F3ECE0]/60 group-hover:bg-[#641F32] group-hover:text-[#FAF7F0] transition-colors flex items-center justify-center shrink-0">
                  <Phone size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#171513]/55">
                    Call &amp; WhatsApp Concierge
                  </p>
                  <p className="font-serif text-xl text-[#171513] group-hover:text-[#641F32] transition-colors mt-0.5">
                    +91 80736 20462
                  </p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#B89A62]/60 text-[#641F32] bg-[#F3ECE0]/60 group-hover:bg-[#641F32] group-hover:text-[#FAF7F0] transition-colors flex items-center justify-center shrink-0">
                  <InstagramBrandIcon />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#171513]/55">
                    Latest Bridal &amp; Client Reels
                  </p>
                  <p className="font-serif text-xl text-[#171513] group-hover:text-[#641F32] transition-colors mt-0.5">
                    @makeoverbymangala
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#B89A62]/60 text-[#641F32] bg-[#F3ECE0]/60 flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#171513]/55">
                    On-Location Studio Service
                  </p>
                  <p className="font-serif text-xl text-[#171513] mt-0.5">
                    Bengaluru &amp; Across Karnataka
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={quickConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#641F32] text-[#641F32] hover:bg-[#641F32] hover:text-[#FAF7F0] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
                >
                  <MessageCircle size={15} />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Appointment Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-[#F3ECE0]/55 border border-[#B89A62]/55 p-7 sm:p-11 shadow-[0_14px_40px_rgba(23,21,19,0.04)]"
          >
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#D8C19A]/55">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#641F32] font-medium">
                  Appointment Inquiry
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171513] mt-1">
                  Share Your Event Details
                </h3>
              </div>
              <Sparkles size={20} className="text-[#B89A62] hidden sm:block" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Ananya Rao"
                    className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] placeholder:text-[#171513]/35 focus:outline-none focus:border-[#641F32] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] placeholder:text-[#171513]/35 focus:outline-none focus:border-[#641F32] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32] transition-colors"
                  >
                    <option value="Bridal Makeup">Bridal Makeup (South / North / Muhurtham)</option>
                    <option value="Engagement / Reception">Engagement / Reception Makeover</option>
                    <option value="Baby Shower / Family Ceremony">Baby Shower / Housewarming / Naming</option>
                    <option value="Party / Non-Bridal Makeup">Party / Non-Bridal / Waterproof Look</option>
                    <option value="Hairstyling & Saree Draping">Hairstyling, Pre-Pleating &amp; Draping</option>
                    <option value="Photoshoot / Editorial">Pre-Wedding / Editorial Photoshoot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                  City / Event Venue (Anywhere in Karnataka)
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="e.g., Bengaluru, Mysuru, Mangaluru, or Venue Name"
                  className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] placeholder:text-[#171513]/35 focus:outline-none focus:border-[#641F32] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                  Additional Occasion Details
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share your occasion timing, number of looks, or any preferences..."
                  className="w-full px-4 py-3.5 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] placeholder:text-[#171513]/35 focus:outline-none focus:border-[#641F32] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#4A1524] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Calendar size={15} />
                <span>Send Inquiry via WhatsApp</span>
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}