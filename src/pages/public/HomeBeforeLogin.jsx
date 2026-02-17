import React, { useState } from "react";
// --- ASSET IMPORTS ---
import mainLogo from "../../assets/logo.png";
import heroArt1 from "../../assets/Link(1).png";
import heroArt2 from "../../assets/Link(2).png";
import featuredArt1 from "../../assets/Image (Featured artwork).png";

const HomeBeforeLogin = () => {
  // --- STATE FOR MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);

  const openArtDetails = (artData) => {
    setSelectedArt(artData);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeArtDetails = () => {
    setIsModalOpen(false);
    setSelectedArt(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* ... HERO SECTION ... */}
      <section className="bg-[#1C1C1C] text-white py-24 px-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-6xl font-serif leading-tight">
            Discover Authentic Art Created Behind Bars
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Support incarcerated artists by bidding on original artwork. Every
            purchase helps fund rehabilitation programs and prepares artists for
            successful reintegration.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#C4A484] px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest text-white shadow-lg">
              Browse Artwork →
            </button>
            <button className="border border-gray-600 px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest text-white hover:bg-gray-800 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center gap-4">
          <img
            src={heroArt1}
            alt="Art 1"
            className="w-72 h-96 object-cover rounded shadow-2xl"
          />
          <div className="relative group overflow-hidden rounded shadow-2xl">
            <img
              src={heroArt2}
              alt="Art 2"
              className="w-64 h-80 object-cover opacity-60 transition-opacity group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold tracking-widest uppercase border-b-2 border-white pb-1">
                View More →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. QUICK STATS --- */}
      <div className="flex justify-around py-20 bg-white border-b border-gray-100">
        {/* Original Artworks Stat */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4A484"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="16" cy="11" r="1" />
              <circle cx="15" cy="15" r="1" />
              <circle cx="9" cy="15" r="1" />
              <circle cx="8" cy="11" r="1" />
            </svg>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-serif text-gray-800">
              150+
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              Original Artworks
            </div>
          </div>
        </div>

        {/* Talented Artists Stat */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4A484"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-serif text-gray-800">
              45
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              Talented Artists
            </div>
          </div>
        </div>

        {/* Raised for Programs Stat */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C4A484"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-serif text-gray-800">
              $85K+
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              Raised for Programs
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. FEATURED ARTWORK --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Featured Artwork
          </h2>
          <p className="text-gray-500">
            Explore exceptional pieces from our talented artists
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 mb-12 shadow-sm flex flex-col md:flex-row gap-6 text-left">
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">
              Availability
            </label>
            <select className="w-full border border-gray-200 p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]">
              <option>All artwork</option>
              <option>Available</option>
              <option>Sold</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">
              Category
            </label>
            <select className="w-full border border-gray-200 p-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A484]">
              <option>All categories</option>
              <option>Religious</option>
              <option>Not religious</option>
            </select>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() =>
                openArtDetails({
                  title: "Hope Beyond Bars",
                  artist: "Marcus Williams",
                  price: "$850",
                  dimension: '6"x9"',
                  description:
                    "“Hope Beyond Bars” depicts a vibrant school of koi fish swimming through shifting waters of blue, green, and white. The movement of the fish symbolizes resilience, transformation, and the pursuit of freedom even within confined spaces. Each koi carries bright tones of red, orange, and gold, reinforcing themes of perseverance and renewal. The piece evokes a quiet optimism — a reminder that hope continues to move, grow, and thrive despite limitations.",
                })
              }
            >
              {/* Image Container */}
              <div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative rounded-sm shadow-sm">
                <img
                  src={heroArt1}
                  alt="Artwork"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {idx === 2 && (
                  <div className="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rotate-12 shadow-lg z-10">
                    SOLD
                  </div>
                )}
              </div>

              {/* Details Container */}
              <div className="space-y-4 text-left">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Hope Beyond Bars
                  </h3>
                  <p className="text-sm text-gray-400 font-serif italic">
                    by Marcus Williams
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      Buy It Now
                    </p>
                    <p className="text-lg font-serif font-bold text-[#27AE60]">
                      $850
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      Current Bid
                    </p>
                    <p className="text-lg font-serif font-bold text-[#2D9CDB]">
                      $420
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#E67E22] font-bold text-[11px]">
                  <span>1d 23h 59m</span>
                </div>

                <button className="w-full py-3 bg-gray-200 text-gray-600 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#C4A484] hover:text-white transition-all">
                  Make a Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL SECTION --- */}
      {/* --- MODAL SECTION --- */}
      {isModalOpen && selectedArt && (
        /* 1. Added onClick to the backdrop to close the modal */
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeArtDetails}
        >
          {/* 2. Added e.stopPropagation() so clicking the content doesn't trigger the backdrop's close function */}
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto relative rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeArtDetails}
              className="absolute top-4 right-4 text-gray-400 hover:text-black z-[110] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col">
              {/* Banner Image */}
              <div className="w-full aspect-[21/8] overflow-hidden bg-gray-50">
                <img
                  src={heroArt1}
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedArt.title}
                </h2>

                <div className="space-y-2 mb-8 text-[14px]">
                  <p className="text-gray-800">
                    Artist Name:{" "}
                    <span className="font-bold">{selectedArt.artist}</span>
                  </p>
                  <p className="text-gray-800">
                    Price:{" "}
                    <span className="font-bold">{selectedArt.price}</span>
                  </p>
                  <p className="text-gray-800">
                    Dimension:{" "}
                    <span className="font-bold">{selectedArt.dimension}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Short description
                  </p>
                  <div className="border border-gray-100 rounded-lg p-6 bg-gray-50/30">
                    <p className="text-gray-600 leading-relaxed font-serif text-[14px]">
                      {selectedArt.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ... MISSION SECTION ... */}
      <section className="bg-[#1C1C1C] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-serif uppercase tracking-[0.4em] mb-4">
          THERE'S AN ART TO REFORM
        </h2>
        <p className="text-gray-500 italic mb-16">
          Transforming lives through art, one auction at a time.
        </p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white text-gray-900 p-12 rounded-sm shadow-2xl">
            <h3 className="text-2xl font-serif mb-6 border-b border-gray-100 pb-4">
              Why We Exist
            </h3>
            <p className="text-sm text-gray-600">
              Here at The Art of Reform®, our goal is to help unite society by
              changing prisons and the way people view prisoners/felons. In
              order to do that, we must first solve two key problems: 1. The
              prison drug trade that has consumed and ravaged the entire
              incarcerated community, causing endless pain and death to both
              user and dealer alike. 2. The systematic injustices and
              malpractices taking place throughout prisons, stripping prisoners
              of their hope for humanity and sense of belonging in the world.
              So, how do we plan to do that? Presenting prisoners with the
              opportunity to support themselves financially in a positive and
              constructive manner through their own creation of artwork Helping
              prisoners recapture the meaning of their lives, make good use of
              their time incarcerated, develop social skills, and foster
              positive relationships Offering a space to connect all who share
              the common goal of reforming prisons. Prisoners and their loved
              ones will be able to join forces with reformers throughout the
              country, together shining a light on the current issues in prisons
              and bringing a stop to the injustices.
            </p>
          </div>
          <div className="bg-white text-gray-900 p-12 rounded-sm shadow-2xl">
            <h3 className="text-2xl font-serif mb-6 border-b border-gray-100 pb-4">
              Why it even matters?
            </h3>
            <p className="text-sm text-gray-600">
              Incarcerated people are still people. They are still a part of our
              society and they will be released back into our communities one
              day. How many of them do you think will feel isolated in society
              like they're less than, no good, useless? How many of them have
              never experienced love, support, understanding or appreciation?
              Our dream is to give every person in the system those experiences.
              They will walk out of those gates ready to be a positive member of
              society with our support system cheering them on and counting on
              them to do great things. If we want real reform, we must change
              the way people feel about themselves and their lives. We have to
              change the entire system from the inside out, reframing the minds
              of everyone involved along the way. We didn't invent prison
              reform. We just discovered there's an art to it.
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. CORE VALUES --- */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-serif mb-16 uppercase tracking-[0.2em] text-gray-800">
          Our Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-6">
          {[
            {
              label: "Dignity",
              icon: "🤎",
              desc: "We treat every artist and artwork with respect and professionalism.",
            },
            {
              label: "Transparency",
              icon: "🎯",
              desc: "Clear auction mechanics and honest representation of each piece.",
            },
            {
              label: "Community",
              icon: "👥",
              desc: "Building connections between artists, collectors, and supporters.",
            },
            {
              label: "Impact",
              icon: "📈",
              desc: "Measuring success by the lives transformed and communities strengthened.",
            },
          ].map((val) => (
            <div key={val.label} className="space-y-4">
              <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">
                {val.icon}
              </div>
              <h4 className="font-bold text-gray-800 tracking-widest uppercase">
                {val.label}
              </h4>
              <p className="text-[11px] text-gray-400 leading-relaxed px-4">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. IMPACT & CTA (TAN BACKGROUND) --- */}
      <section className="bg-[#C4A484] py-24 text-white text-center">
        <div className="max-w-6xl mx-auto mb-20 space-y-12">
          <h3 className="text-[12px] uppercase tracking-[0.5em] font-bold opacity-80">
            Our Impact
          </h3>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-serif font-bold">150+</div>
              <div className="text-[10px] uppercase tracking-widest mt-2 font-bold">
                Artworks Sold
              </div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold">45</div>
              <div className="text-[10px] uppercase tracking-widest mt-2 font-bold">
                Artists Supported
              </div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold">$85K+</div>
              <div className="text-[10px] uppercase tracking-widest mt-2 font-bold">
                Raised for Programs
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 pt-20 border-t border-white/20">
          <h2 className="text-4xl font-serif uppercase tracking-[0.2em]">
            Make a Difference Through Art
          </h2>
          <p className="text-sm opacity-90 leading-relaxed max-w-2xl mx-auto italic font-serif">
            Join our community of collectors who believe in second chances and
            the transformative power of creative expression.
          </p>
          <button className="bg-white text-[#C4A484] px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-gray-50 transition-colors">
            Meet Our Artists →
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeBeforeLogin;
