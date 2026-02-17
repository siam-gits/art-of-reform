import React from "react";
import featuredArt1 from "../../assets/Image (Featured artwork).png";
import mainLogo from "../../assets/logo.png"; // Ensure this path matches your logo location

const Shop = () => {
  // Expanded artwork array to fill the 3x3 grid
  const artworks = [
    {
      id: 1,
      title: "Hope Beyond Bars",
      artist: "Marcus Williams",
      buyNow: 850,
      currentBid: 420,
      timeLeft: "1d 23h 59m",
      sold: false,
    },
    {
      id: 2,
      title: "Divine Light",
      artist: "James Carter",
      buyNow: 1200,
      currentBid: 875,
      timeLeft: "4d 23h 59m",
      sold: false,
    },
    {
      id: 3,
      title: "Urban Dreams",
      artist: "DeShawn Jackson",
      buyNow: 650,
      currentBid: null,
      timeLeft: null,
      sold: true,
    },
    {
      id: 4,
      title: "Redemption Path",
      artist: "Carlos Rodriguez",
      buyNow: 950,
      currentBid: 680,
      timeLeft: "2d 23h 59m",
      sold: false,
    },
    {
      id: 5,
      title: "Freedom in Color",
      artist: "Andre Thompson",
      buyNow: 720,
      currentBid: 540,
      timeLeft: "3d 23h 59m",
      sold: false,
    },
    {
      id: 6,
      title: "Sacred Sanctuary",
      artist: "Michael Davis",
      buyNow: 1100,
      currentBid: 820,
      timeLeft: "5d 23h 59m",
      sold: false,
    },
    {
      id: 7,
      title: "Metamorphosis",
      artist: "Robert Lee",
      buyNow: 890,
      currentBid: 640,
      timeLeft: "1d 23h 59m",
      sold: false,
    },
    {
      id: 8,
      title: "Grace and Mercy",
      artist: "Steven Baker",
      buyNow: 1350,
      currentBid: 950,
      timeLeft: "6d 23h 59m",
      sold: false,
    },
    {
      id: 9,
      title: "Behind the Wall",
      artist: "Patrick Moore",
      buyNow: 775,
      currentBid: null,
      timeLeft: null,
      sold: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- SHOP CONTENT --- */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">
            Shop Artwork
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our collection of original prison artwork. All pieces are
            auction-based with "Buy It Now" options.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-6 mb-12">
          <div className="relative max-w-4xl">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by title or artist name..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg text-gray-600 focus:outline-none shadow-sm"
            />
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm max-w-4xl">
            <div className="flex items-center gap-2 mb-6 text-gray-700 text-xs font-bold uppercase tracking-widest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
              Filter Artwork
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">
                  Availability
                </label>
                <select className="w-full border border-gray-200 p-3 rounded-md text-sm text-gray-600 bg-white">
                  <option>All artwork</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">
                  Category
                </label>
                <select className="w-full border border-gray-200 p-3 rounded-md text-sm text-gray-600 bg-white">
                  <option>All categories</option>
                </select>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            Showing {artworks.length} artworks
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {artworks.map((art) => (
            <div key={art.id} className="group flex flex-col h-full">
              <div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative rounded-sm shadow-md">
                <img
                  src={featuredArt1}
                  alt={art.title}
                  className={`w-full h-full object-cover ${art.sold ? "grayscale-[0.4]" : ""}`}
                />
                {art.sold && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-[#E53E3E] text-white text-[10px] font-black px-8 py-3 uppercase tracking-[0.3em] rotate-12 shadow-2xl border-2 border-white/20">
                      SOLD
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900">{art.title}</h3>
                <p className="text-sm text-gray-500 font-serif mb-6 italic">
                  by {art.artist}
                </p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                        Buy It Now
                      </p>
                      <p className="text-xl font-serif font-bold text-[#38A169]">
                        ${art.buyNow.toLocaleString()}
                      </p>
                    </div>
                    {!art.sold && (
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                          Current Bid
                        </p>
                        <p className="text-xl font-serif font-bold text-[#3182CE]">
                          ${art.currentBid.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                  {!art.sold && (
                    <div className="flex items-center gap-2 text-[#DD6B20] font-bold text-[11px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {art.timeLeft}
                    </div>
                  )}
                  <button className="w-full py-4 bg-[#D1D5DB] hover:bg-gray-400 text-gray-700 font-bold text-[10px] uppercase tracking-[0.2em] rounded">
                    Login to Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
