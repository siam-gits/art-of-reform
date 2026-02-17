import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-20">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-lg">
          Have questions or need assistance? We're here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT: MESSAGE FORM --- */}
        <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-50">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-gray-700">
                Message *
              </label>
              <textarea
                rows="6"
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50 resize-none"
              ></textarea>
            </div>

            <button className="bg-[#C4A484] text-white px-8 py-3.5 rounded-lg font-bold text-[11px] uppercase tracking-widest hover:bg-[#b39373] transition-colors flex items-center gap-2 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* --- RIGHT: SIDEBAR INFO --- */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-50">
            <h3 className="font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#C4A484]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-gray-600">
                    support@artbehindbars.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#C4A484]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#C4A484]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Address
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    123 Art Street
                    <br />
                    Creative District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-50">
            <h3 className="font-bold text-gray-900 mb-6">Office Hours</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9am - 6pm EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10am - 4pm EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-[#C4A484] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="font-bold mb-4">Quick Response Time</h3>
            <p className="text-xs leading-relaxed opacity-90">
              We typically respond to all inquiries within 24 hours during
              business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
