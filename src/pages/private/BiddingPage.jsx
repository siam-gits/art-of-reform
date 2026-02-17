import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for redirection
import heroArt1 from "../../assets/Link(1).png";

const BiddingPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [bidAmount, setBidAmount] = useState(445);
  const [agreed, setAgreed] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false); // State for accordion

  // Mock data for the accordion
  const bidHistory = [
    { bidder: "User_882", amount: 420, time: "2 hours ago" },
    { bidder: "ArtLover99", amount: 395, time: "5 hours ago" },
    { bidder: "Collector_J", amount: 370, time: "Yesterday" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10 font-sans">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-black mb-8 transition-colors"
      >
        <span className="mr-2">←</span> Back to Artwork
      </button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT COLUMN: Artwork Preview Card */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-10">
            <img
              src={heroArt1}
              alt="Hope Beyond Bars"
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hope Beyond Bars
                </h2>
                <p className="text-gray-500 italic">by Marcus Williams</p>
              </div>

              <div className="space-y-4 border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Current Bid</span>
                  <span className="text-2xl font-bold text-[#2F6DF2]">
                    $420
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Buy It Now</span>
                  <span className="text-2xl font-bold text-[#27AE60]">
                    $850
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Auction Ends In:
                </p>
                <div className="flex gap-2">
                  {[
                    { label: "Days", val: "1" },
                    { label: "Hours", val: "23" },
                    { label: "Min", val: "59" },
                    { label: "Sec", val: "21" },
                  ].map((time, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="bg-[#1C1C1C] text-white w-full py-3 rounded-lg text-center font-bold text-lg">
                        {time.val}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 uppercase">
                        {time.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUY IT NOW REDIRECTION */}
              <button
                onClick={() => navigate("/purchase")}
                className="w-full py-4 bg-[#00B14F] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all"
              >
                Buy It Now - $850
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Bidding Controls */}
        <div className="lg:w-2/3 space-y-6 text-left">
          {/* Header Box */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="text-2xl">🔨</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Place Your Bid
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enter your maximum bid amount. Your bid is a binding commitment
                to purchase if you win.
              </p>
            </div>
          </div>

          {/* Current Status Box */}
          <div className="bg-[#EBF2FF] p-6 rounded-2xl border border-[#D0E1FF] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-blue-600">📈</span>
              <span className="text-sm font-semibold text-[#2F6DF2]">
                Current Auction Status
              </span>
            </div>
            <div className="flex gap-10">
              <div className="text-xs">
                <p className="text-gray-500">Current Bid:</p>
                <p className="font-bold text-blue-900">$420</p>
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Minimum Bid:</p>
                <p className="font-bold text-blue-900">$445</p>
              </div>
            </div>
          </div>

          {/* Bid Input Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Enter Your Bid Amount
              </label>
              <p className="text-xs text-gray-400 mb-4">Minimum bid: $445</p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  $
                </span>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Quick Bid Options */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Quick Bid Options:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[445, 470, 495, 545].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setBidAmount(amount)}
                    className={`py-3 rounded-xl font-bold transition-all border ${
                      bidAmount === amount
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms and Conditions Box */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">ℹ️</span>
                <p className="text-[11px] font-bold uppercase tracking-wider">
                  Bidding Rules
                </p>
              </div>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Your bid is a legally binding commitment to purchase.</li>
                <li>
                  If outbid, you'll be notified and can place a higher bid.
                </li>
                <li>Bids must be in increments of $25.</li>
              </ul>

              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-600 leading-normal">
                  I agree to the{" "}
                  <span className="text-orange-500 underline">
                    bidding terms and conditions
                  </span>
                  . I understand that placing a bid is a binding commitment.
                </span>
              </label>
            </div>

            <button
              disabled={!agreed}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-md ${
                agreed
                  ? "bg-gray-800 text-white hover:bg-black active:scale-[0.98]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Place Bid
            </button>
          </div>

          {/* Bid History Accordion */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div
              onClick={() => setIsHistoryOpen(!isHistoryOpen)}
              className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-all"
            >
              <span className="font-bold text-gray-800">Bid History</span>
              <span
                className={`text-xl transition-transform duration-300 ${isHistoryOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </div>

            {isHistoryOpen && (
              <div className="px-6 pb-6 border-t border-gray-50 pt-4 space-y-4">
                {bidHistory.map((bid, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                  >
                    <div>
                      <p className="font-bold text-sm text-gray-800">
                        {bid.bidder}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
                        {bid.time}
                      </p>
                    </div>
                    <span className="font-bold text-blue-600">
                      ${bid.amount}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiddingPage;
