import React from "react";

const SearchArtists = () => {
  const artists = [
    {
      id: 1,
      name: "Marcus Williams",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Marcus discovered his passion for art during his incarceration. His work focuses on themes of hope, resilience, and the human spirit.",
      location: "Federal Correctional Institution",
      artworks: 12,
      joined: "March 2022",
    },
    {
      id: 2,
      name: "James Carter",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      bio: "James uses religious imagery to explore themes of redemption and spiritual transformation. His detailed work reflects years of practice.",
      location: "State Correctional Facility",
      artworks: 8,
      joined: "November 2021",
    },
    {
      id: 3,
      name: "DeShawn Jackson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Urban landscapes and street scenes dominate DeShawn's portfolio, reflecting memories and dreams of life beyond the walls.",
      location: "County Detention Center",
      artworks: 15,
      joined: "January 2023",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
      bio: "Carlos blends traditional religious iconography with contemporary themes, creating powerful narratives about faith and forgiveness.",
      location: "Federal Prison Camp",
      artworks: 10,
      joined: "July 2022",
    },
    {
      id: 5,
      name: "Andre Thompson",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Andre's vibrant abstract works celebrate the power of color and emotion, offering windows into his inner world and creative freedom.",
      location: "Medium Security Prison",
      artworks: 18,
      joined: "September 2021",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-white min-h-screen">
      {/* --- PAGE HEADER --- */}
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Search Artists
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the talented artists behind our collection and learn their
          stories.
        </p>
      </div>

      {/* --- SEARCH BAR --- */}
      <div className="mb-8">
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
            placeholder="Search by artist name or biography..."
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 shadow-sm"
          />
        </div>
        <p className="mt-4 text-sm text-gray-500 font-medium">
          {artists.length} artists found
        </p>
      </div>

      {/* --- ARTIST GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm flex flex-col"
          >
            {/* Image using random placeholder URL */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                {artist.bio}
              </p>

              {/* Metadata icons and text */}
              <div className="space-y-3 mb-8 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {artist.location}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {artist.artworks} artworks
                </div>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Joined {artist.joined}
                </div>
              </div>

              {/* Tan Styled Button */}
              <button className="w-full py-3 bg-[#C4A484] hover:bg-[#b39373] text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded transition-colors mt-auto">
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchArtists;
