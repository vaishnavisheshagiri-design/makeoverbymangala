import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin, Send, MessageCircle } from "lucide-react";

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
      className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#D8C19A]/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Invitation & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-[#B89A62] font-medium">
              Reserve Your Date
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] leading-tight">
              Let&apos;s Create Your{" "}
              <span className="italic text-[#641F32] font-normal">
                Signature Look.
              </span>
            </h2>
            <p className="text-base text-[#171513]/75 leading-relaxed font-light">
              Planning your wedding, engagement, family celebration, or photoshoot? 
              Fill in your event details or chat directly on WhatsApp to check availability.
            </p>

            {/* Contact Details Card */}
            <div className="pt-4 space-y-5 border-t border-[#D8C19A]/60">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 border border-[#B89A62]/70 text-[#641F32] bg-[#D8C19A]/15 group-hover:bg-[#641F32] group-hover:text-[#FAF7F0] transition-colors">
                  <InstagramBrandIcon />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#171513]/60">
                    Instagram Portfolio
                  </p>
                  <p className="font-serif text-lg text-[#171513] group-hover:text-[#641F32] transition-colors">
                    @makeoverbymangala
                  </p>
                </div>
              </a>

              <a
                href={quickConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 border border-[#B89A62]/70 text-[#641F32] bg-[#D8C19A]/15 group-hover:bg-[#641F32] group-hover:text-[#FAF7F0] transition-colors">
                  <Phone size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#171513]/60">
                    Call / WhatsApp Bookings
                  </p>
                  <p className="font-serif text-lg text-[#171513] group-hover:text-[#641F32] transition-colors">
                    +91 80736 20462
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#B89A62]/70 text-[#641F32] bg-[#D8C19A]/15">
                  <MapPin size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#171513]/60">
                    Service Coverage &amp; Travel
                  </p>
                  <p className="font-serif text-lg text-[#171513]">
                    All Across Karnataka &amp; Destination Venues
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={quickConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#641F32] text-[#641F32] hover:bg-[#641F32] hover:text-[#FAF7F0] text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Consultation Form -> Opens WhatsApp Directly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-white/75 border border-[#B89A62]/60 p-8 sm:p-10 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
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
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
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
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
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
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
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
                  placeholder="e.g., Bengaluru, Mysuru, Mangaluru, Hubballi, or Venue Name"
                  className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] text-[#171513]/80 font-medium mb-2">
                  Tell Me About Your Look or Occasion
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share your occasion details, number of people, or any preferences..."
                  className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8C19A] text-sm text-[#171513] focus:outline-none focus:border-[#641F32]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4d1726] transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Calendar size={15} />
                <span>Send Booking Inquiry via WhatsApp</span>
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}