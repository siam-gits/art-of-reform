import React from "react";
import { Link } from "react-router-dom";

const OurStory = () => {
  const coreValues = [
    {
      title: "Dignity",
      description:
        "We treat every artist and artwork with respect and professionalism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        "Clear auction mechanics and honest representation of each piece.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Community",
      description:
        "Building connections between artists, collectors, and supporters.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Impact",
      description:
        "Measuring success by the lives transformed and communities strengthened.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.5 4.5L21.75 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div
        className="relative h-[300px] flex flex-col items-center justify-center text-white text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&q=80")',
        }}
      >
        <h1 className="text-4xl font-serif mb-2">Our Story</h1>
        <p className="text-sm max-w-2xl font-light">
          Transforming lives through art, one auction at a time.
        </p>
      </div>

      {/* --- SIDE-BY-SIDE CARDS --- */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Why We Exist Card - With Enhanced Floating Shadow */}
        <div
          className="bg-white p-12 rounded-2xl 
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)] 
                  hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] 
                  transition-all duration-300 transform hover:-translate-y-3"
        >
          <h2 className="text-2xl font-serif mb-8 text-gray-900">
            Why We Exist
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-[13px]">
            <p>
              Here at The Art of Reform®, our goal is to help unite society by
              changing prisons and the way people view prisoners/felons.
            </p>
            <p>In order to do that, we must first solve two key problems:</p>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                The prison drug trade that has consumed and ravaged the entire
                incarcerated community...
              </li>
              <li>
                The systematic injustices and malpractices taking place
                throughout prisons...
              </li>
            </ol>
            <p>
              So, how do we plan to do that? Presenting prisoners with the
              opportunity to support themselves financially...
            </p>
          </div>
        </div>

        {/* Why it even matters Card */}
        <div
          className="bg-white p-12 rounded-2xl 
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)] 
                  hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] 
                  transition-all duration-300 transform hover:-translate-y-3"
        >
          <h2 className="text-2xl font-serif mb-8 text-gray-900">
            Why it even matters?
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-[13px]">
            <p>
              Incarcerated people are still people. They are still a part of our
              society and they will be released back into our communities one
              day.
            </p>
            <p>
              How many of them do you think will feel isolated in society like
              they're less than, no good, useless?
            </p>
            <p>
              Our dream is to give every person in the system those
              experiences...
            </p>
            <p className>
              We didn't invent prison reform. We just discovered there's an art
              to it.
            </p>
          </div>
        </div>
      </div>

      {/* --- CORE VALUES --- */}
      <div className="max-w-7xl mx-auto py-12 px-6 text-center">
        <h2 className="text-xl font-serif mb-12 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div key={value.title} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#C4A484]/15 text-[#C4A484] rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[200px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- IMPACT STATS BAR --- */}
      <div className="bg-[#C4A484] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-xl mb-10">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl font-serif mb-1">150+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-light">
                Artworks Sold
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">45</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-light">
                Artists Supported
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">$85K+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-light">
                Raised for Programs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- JOIN MISSION --- */}
      <div className="py-20 text-center px-6">
        <h2 className="text-2xl font-serif mb-3 text-gray-900">
          Join Our Mission
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto text-[13px]">
          Every purchase makes a difference. Browse our collection and find a
          piece that speaks to you.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#C4A484] text-white px-8 py-3 rounded font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#b39373] transition-colors"
        >
          Browse Artwork
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
