import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageSquarePlus } from "lucide-react";

const GOOGLE_PROFILE_URL = "https://share.google/JGdZ8FiJMAV8rVfCf";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CUztiFwmssEBEBM/review";

const realGoogleReviews = [
  {
    reviewerName: "Srinidhi Kamath",
    text: "At the beginning, we were like fish out of water when it came to makeup and hairstyles. Then we found Mangala aunty, who was a boon for us. She suggested many ideas and she was very up to date about the latest trends. She suggested Instagram pages, showed us her previous work and asked us about any idea we had ourselves, so she could implement it. Once we had a general idea, we met up again so we could discuss in more detail and she could give a small demo before the big day. It was like going to a parlor, but with the comfort of home. It was a very thorough and relaxing process. She was professional about her work and was very friendly and open. She made us feel comfortable and at home with the entire process. We completely relied on her and entrusted her with everything. She was very knowledgeable about all aspects of makeup, sari pleating and hairstyles along with jewelry and flower decoration for hair. We recommend her for everybody, whether it is a simple function or a wedding day. She gave us the confidence that we really needed on our big day.",
  },
  {
    reviewerName: "Ramya Ramesh",
    text: "Amazing experience at Makeover by Mangala! Mangala did a fantastic job—very professional, friendly, and made me feel completely comfortable. The makeover was flawless and exactly how I wanted. Highly recommend her for any special occasion or even a glam-up session. Thank you for the great service! She understood exactly what I wanted and gave me the perfect traditional yet elegant look. Her attention to detail, calm nature, and professional approach made the whole experience stress-free and enjoyable. I received so many compliments! Highly recommend her for any kind of makeup queries.",
  },
  {
    reviewerName: "Shwetha Subramaniyam",
    text: "Hi dear, I am truly grateful to have you as my makeup artist. The service you provided exceeded my expectations, and I sincerely appreciate your exceptional work. You have significantly enhanced my appearance, and I am very pleased with the results. Thank you once again for your outstanding contribution; you truly made my day special.",
  },
  {
    reviewerName: "Megha's kitchen",
    text: "I have visited @Make over by Mangala for make up and hair session so many times and I am very happy with the results. Her makeup application is flawless and she uses high quality products. Ms. Mangala is expert in creating a look that is stylish and suits face shape perfectly. I highly recommend Makeover by Mangala for top notch hairstyling and makeup services.",
  },
  {
    reviewerName: "Nikhitha H R",
    text: "Fantastic experience in every way! The stylist did the supernatural, and I feel fantastic. For a genuinely transformational experience, I strongly advise using this makeover and hair styling service. 10/10!",
  },
  {
    reviewerName: "Bhagyashree Raikar",
    text: "Mangala Mam is very good makeup artist.. She did natural makeup, saree draping and traditional hair style for baby shower.. Loved the look.. She is very friendly and professional makeup artist.. Thank you for the makeover.",
  },
  {
    reviewerName: "Shreya Gowda",
    text: "I have a great experience with her. I have been taking her services since 4 years. Very comfortable and friendly which allows me to communicate my needs. I would love to recommend her to all.",
  },
  {
    reviewerName: "Neena Shastry",
    text: "I have been using Mangala's services for over a year now. She has always done a fabulous job. It's not only her excellent work, but also her sunny personality that makes me a repeat customer. Thank you!",
  },
  {
    reviewerName: "Dee Singh",
    text: "It's been more than a decade; I am with Mangala and taking her services as beautician and makeup artist. It's best service at comfort of your home.",
  },
  {
    reviewerName: "Vaishnavi S",
    text: "Had a good service. Professional Makeup Artist.. I loved the makeup & hairstyle... I'm happily satisfied. Thank you so much. I would like recommend others.",
  },
];

function GoogleLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const visibleReviews = realGoogleReviews.slice(0, 10);

  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#D8C19A]/20 border-t border-[#D8C19A]/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.26em] text-[#641F32] font-medium">
            Google Business Profile
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171513] mt-2">
            Client Love &amp; Google Reviews
          </h2>
          <p className="text-base text-[#171513]/75 mt-3 font-light">
            Real words from brides, families, and long-time clients on Google.
          </p>
        </div>

        {/* 10 Real Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="bg-[#FAF7F0] border border-[#B89A62]/50 p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#D8C19A]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#641F32] text-[#FAF7F0] font-serif text-base flex items-center justify-center shrink-0 uppercase">
                      {review.reviewerName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#171513]">
                        {review.reviewerName}
                      </p>
                      <p className="text-[11px] text-[#171513]/55">
                        Google Review
                      </p>
                    </div>
                  </div>
                  <GoogleLogo className="w-4 h-4 shrink-0" />
                </div>
                <p className="text-sm text-[#171513]/85 leading-relaxed font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Google Profile & Write a Review Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#641F32] text-[#FAF7F0] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#4d1726] transition-colors inline-flex items-center gap-2.5"
          >
            <span>View More Reviews on Google</span>
            <ExternalLink size={14} />
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#FAF7F0] text-[#171513] border border-[#B89A62] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#D8C19A]/25 transition-colors inline-flex items-center gap-2.5"
          >
            <MessageSquarePlus size={15} className="text-[#641F32]" />
            <span>Write a Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}