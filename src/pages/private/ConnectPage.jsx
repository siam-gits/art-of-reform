import React, { useState } from "react";

const ConnectPage = () => {
  const [activeFilter, setActiveFilter] = useState("Recent");
  const STATES = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const CATEGORIES = [
    "Legislation",
    "Prison Conditions",
    "Visitation",
    "Healthcare",
    "Reentry",
    "Education",
    "Reform Initiatives",
    "News & Updates",
    "General Discussion",
  ];
  const posts = [
    {
      id: 1,
      state: "California",
      category: "Legislation",
      title:
        "New legislation proposal in California for prison education programs",
      author: "u/ReformAdvocate2023",
      time: "4 hours ago",
      content:
        "Just heard that California is considering a new bill to expand educational opportunities in state prisons. The bill would allocate $50M for vocational training and college courses.",
      likes: 34,
      replies: 15,
    },
    {
      id: 2,
      state: "Texas",
      category: "Prison Conditions",
      title: "Texas prison conditions - Recent inspection report",
      author: "u/JusticeSeeker89",
      time: "7 hours ago",
      content:
        "The latest inspection report from Harris County facilities is concerning. Overcrowding has increased 20% in the last year.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
      likes: 67,
      replies: 28,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 md:px-10 font-sans text-left">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* --- MAIN CONTENT (LEFT side) --- */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Prison Reform Community
            </h1>
            <p className="text-gray-500 mt-2">
              Discuss prison news, updates, and advocacy for reform.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-10 space-y-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#C4A484]"
              />
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600 border-none outline-none">
                <option>All States</option>
              </select>
              <button
                onClick={() => setActiveFilter("Recent")}
                className={`px-5 py-2 rounded-lg text-sm font-bold ${activeFilter === "Recent" ? "bg-[#C4A484] text-white" : "bg-gray-50 text-gray-400"}`}
              >
                Recent
              </button>
              <button
                onClick={() => setActiveFilter("Popular")}
                className={`px-5 py-2 rounded-lg text-sm font-bold ${activeFilter === "Popular" ? "bg-[#C4A484] text-white" : "bg-gray-50 text-gray-400"}`}
              >
                Popular
              </button>
            </div>
          </div>

          {/* Feed */}
          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex gap-2 mb-4 text-[10px] font-black uppercase tracking-widest">
                  <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded">
                    {post.state}
                  </span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 hover:text-[#C4A484] cursor-pointer">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                  <span className="text-[#C4A484] font-bold">
                    {post.author}
                  </span>
                  <span>• {post.time}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={post.image}
                    className="w-full h-72 object-cover rounded-2xl mb-6"
                    alt="post"
                  />
                )}
                <div className="flex gap-6 border-t border-gray-50 pt-6 font-bold text-gray-400 text-sm">
                  <span>👍 {post.likes}</span>
                  <span>💬 {post.replies} replies</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[400px] space-y-8">
          {/* Create a Post Card */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Create a Post
            </h3>

            <div className="space-y-4 text-left">
              {/* State Dropdown */}
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">
                  Select State *
                </label>
                <select className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#C4A484]">
                  <option value="">Choose a state...</option>
                  {STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">
                  Category
                </label>
                <select className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#C4A484]">
                  <option value="">Select category...</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title Input */}
              <input
                type="text"
                placeholder="Post title..."
                className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#C4A484]"
              />

              {/* Discussion Textarea */}
              <textarea
                rows="5"
                placeholder="Share news, updates, or start a discussion..."
                className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#C4A484] resize-none"
              ></textarea>

              {/* Media Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-[11px] font-bold border border-gray-100 hover:bg-gray-100 transition-colors">
                  <span className="text-sm">📷</span> Add Images (0/4)
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-[11px] font-bold border border-gray-100 hover:bg-gray-100 transition-colors">
                  <span className="text-sm">🎥</span> Add Video
                </button>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 bg-[#C4A484] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[#b39373] transition-all flex items-center justify-center gap-2 mt-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Post to Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
