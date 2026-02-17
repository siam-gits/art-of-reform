import React from "react";

const Connect = () => {
  const posts = [
    {
      id: 1,
      tag: "California",
      category: "Legislation",
      title:
        "New legislation proposal in California for prison education programs",
      author: "u/ReformAdvocate2023",
      time: "4 hours ago",
      content:
        "Just heard that California is considering a new bill to expand educational opportunities in state prisons. This bill would allocate $50M for vocational training and college courses. What are your thoughts?",
      upvotes: 34,
      comments: 15,
    },
    {
      id: 2,
      tag: "Texas",
      category: "Prison Conditions",
      title: "Texas prison conditions - Recent inspection report",
      author: "u/JusticeSeeker89",
      time: "7 hours ago",
      content:
        "The latest inspection report from Harris County facilities is concerning. Overcrowding has increased 20% in the last year. We need to put pressure on local representatives to address this.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      upvotes: 67,
      comments: 28,
    },
    {
      id: 3,
      tag: "New York",
      category: "Visitation",
      title: "NY expanding video visitation hours - Great news!",
      author: "u/FamilyConnection",
      time: "10 hours ago",
      content:
        "Starting next month, New York DOC is expanding video visitation hours from 2 hours to 4 hours per week for families. This is huge for those of us who live far from facilities. Finally some good news!",
      upvotes: 156,
      comments: 42,
    },
    {
      id: 4,
      tag: "Florida",
      category: "Healthcare",
      title: "Florida mental health services update",
      author: "u/ChangeAgent",
      time: "14 hours ago",
      content:
        "Attended a town hall yesterday about mental health services in Florida prisons. They announced partnership with local hospitals to provide better psychiatric care. Steps in the right direction but still a long way to go.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      upvotes: 45,
      comments: 19,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* --- HEADER SECTION --- */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">
            Prison Reform Community
          </h1>
          <p className="text-gray-600 text-lg">
            Discuss prison news, updates, and advocacy for reform. Connect with
            others passionate about change.
          </p>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="space-y-4 mb-8">
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
              placeholder="Search posts by topic, member, or keyword..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none shadow-sm bg-white"
            />
          </div>

          <div className="flex items-center gap-4 max-w-4xl">
            <select className="flex-grow border border-gray-200 p-3 rounded-md text-xs text-gray-500 bg-white">
              <option>All States</option>
            </select>
            <button className="bg-[#C4A484] text-white px-6 py-3 rounded-md text-xs font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Recent
            </button>
            <button className="bg-white border border-gray-200 text-gray-500 px-6 py-3 rounded-md text-xs font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Popular
            </button>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            {posts.length} posts found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* --- MAIN FEED --- */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"
              >
                <div className="flex gap-2 mb-4">
                  <span className="bg-[#FAA264]/10 text-[#FAA264] text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-widest">
                    {post.tag}
                  </span>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight hover:text-[#FAA264] cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-[11px] text-gray-400 font-medium mb-6">
                  {post.author} • {post.time}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {post.content}
                </p>
                {post.image && (
                  <div className="mb-6 overflow-hidden rounded-lg border border-gray-100">
                    <img
                      src={post.image}
                      className="w-full h-64 object-cover"
                      alt="Post visual"
                    />
                  </div>
                )}
                <div className="flex items-center gap-6 text-gray-400 text-xs font-bold">
                  <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    {post.upvotes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {post.comments} replies
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- SIDEBAR --- */}
          <div className="space-y-6">
            {/* Join the Discussion Card */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Join the Discussion
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Login to create posts and engage with the community.
              </p>
              <button className="w-full py-3 bg-[#C4A484] hover:bg-[#b39373] text-white font-bold text-[11px] uppercase tracking-widest rounded-md transition-colors shadow-sm">
                Login to Post
              </button>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
                Community Guidelines
              </h3>
              <ul className="text-xs text-gray-500 space-y-3 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#FAA264]">•</span> Be respectful and
                  constructive
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAA264]">•</span> Focus on reform and
                  advocacy
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAA264]">•</span> Verify information
                  before sharing
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAA264]">•</span> No hate speech or
                  harassment
                </li>
              </ul>
            </div>

            {/* Popular Topics */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Legislation",
                  "Prison Conditions",
                  "Visitation",
                  "Healthcare",
                  "Reentry",
                  "Education",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="bg-gray-50 text-gray-500 text-[10px] px-3 py-1.5 rounded-full font-bold border border-gray-100 cursor-pointer hover:bg-gray-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
