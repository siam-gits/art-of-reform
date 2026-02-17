import React, { useState } from "react";

const FAQ = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the auction process work?",
      answer:
        "Our auctions are designed to be fair and accessible. Registered users can place bids on available artworks within the specified auction window. The highest bidder at the end of the period wins the piece.",
    },
    {
      question: "Where does my money go?",
      answer:
        "A significant portion of each sale goes directly to the artist. The remainder supports rehabilitation programs, art supplies, platform maintenance, and shipping costs. We maintain full transparency about how funds are allocated.",
    },
    {
      question: "Can I communicate directly with artists?",
      answer:
        "To ensure safety and privacy for both collectors and artists, direct communication is currently handled through our moderated platform messaging system.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on the facility location. Generally, expect 2-4 weeks for processing and delivery, as items must undergo facility inspection before being sent.",
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer:
        "We strive for complete satisfaction. If an item arrives damaged or significantly different than described, please contact our support team within 7 days of receipt.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-20">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-lg">
          Find answers to common questions about our platform, auctions, and
          mission.
        </p>
      </div>

      {/* --- FAQ ACCORDION LIST --- */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 text-[#C4A484] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer section with smooth expand/collapse */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-8 pb-8 text-gray-600 leading-relaxed text-[15px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- CTA FOOTER --- */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-[#C4A484]/90 p-12 rounded-2xl text-center shadow-lg">
          <h2 className="text-2xl font-serif text-white mb-2">
            Still Have Questions?
          </h2>
          <p className="text-white/90 text-sm mb-8">
            We're here to help. Reach out to our team and we'll get back to you
            as soon as possible.
          </p>
          <button className="bg-white text-[#C4A484] px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
