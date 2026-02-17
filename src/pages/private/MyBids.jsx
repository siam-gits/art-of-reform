import React from "react";

const MyBids = () => {
  const stats = [
    { label: "Total Bids", value: 4, icon: "🔨", color: "text-gray-600" },
    { label: "Winning", value: 2, icon: "📈", color: "text-green-600" },
    { label: "Outbid", value: 1, icon: "❗", color: "text-orange-600" },
    { label: "Won", value: 0, icon: "✅", color: "text-blue-600" },
  ];

  const activeBids = [
    {
      id: 1,
      title: "Hope Beyond Bars",
      artist: "Marcus Williams",
      yourBid: 420,
      currentBid: 420,
      timeLeft: "1d 22h 27m",
      status: "Winning Bid",
      statusType: "winning",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Divine Light",
      artist: "James Carter",
      yourBid: 850,
      currentBid: 875,
      timeLeft: "4d 22h 27m",
      status: "Outbid",
      statusType: "outbid",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Redemption Path",
      artist: "Carlos Rodriguez",
      yourBid: 680,
      currentBid: 680,
      timeLeft: "2d 22h 27m",
      status: "Winning Bid",
      statusType: "winning",
      image:
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 text-left font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">My Bids</h1>
          <p className="text-gray-500 mt-2">
            Track your active bids and view your bidding history.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className={`text-2xl mb-2`}>{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Active Bids Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Active Bids</h2>
          <div className="space-y-6">
            {activeBids.map((bid) => (
              <div
                key={bid.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row"
              >
                <div className="md:w-72 h-64 md:h-auto overflow-hidden">
                  <img
                    src={bid.image}
                    alt={bid.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {bid.title}
                      </h3>
                      <p className="text-sm text-gray-500">by {bid.artist}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1 
                      ${bid.statusType === "winning" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"}`}
                    >
                      {bid.statusType === "winning" ? "📈" : "❗"} {bid.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-6 border-y border-gray-50">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                        Your Bid
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        ${bid.yourBid}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                        Current Bid
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        ${bid.currentBid}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-orange-500 font-bold">
                      <span>🕒 Time Remaining:</span>
                      <span>{bid.timeLeft}</span>
                    </div>
                    <div className="flex gap-3">
                      {bid.statusType === "outbid" && (
                        <button className="px-8 py-2.5 bg-[#C4A484] text-white rounded-lg text-sm font-bold shadow-md hover:bg-[#b39373] transition-all">
                          Increase Bid
                        </button>
                      )}
                      <button className="px-8 py-2.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-200 transition-all flex-1 md:flex-none">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Auctions Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Completed Auctions
          </h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row opacity-80">
            <div className="md:w-72 h-64 md:h-auto overflow-hidden grayscale">
              <img
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800"
                alt="Urban Dreams"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Urban Dreams
                  </h3>
                  <p className="text-sm text-gray-500">by DeShawn Jackson</p>
                </div>
                <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
                  ❌ Lost
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6 border-y border-gray-50">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                    Your Bid
                  </p>
                  <p className="text-xl font-bold text-gray-900 text-gray-400">
                    $500
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                    Final Bid
                  </p>
                  <p className="text-xl font-bold text-gray-900">$520</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-400 font-bold italic">
                Auction ended on 1/9/2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
