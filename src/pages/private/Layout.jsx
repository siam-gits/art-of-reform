import React, { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/logo.png";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getActiveLink = (path) => location.pathname === path;

  // Manual Logout Action
  const handleLogout = () => {
    setIsDropdownOpen(false);
    navigate("/"); // Redirect to landing page
  };

  const navLinks = [
    { name: "HOME", path: "/HomeAfterLogin" },
    { name: "SHOP ART", path: "/Shop" },
    { name: "SEARCH ARTISTS", path: "/artists" },
    { name: "CONNECT", path: "/connectpage" },
    { name: "OUR STORY", path: "/OurStory" },
    { name: "FAQ", path: "/faq" },
    { name: "CONTACT US", path: "/Contact" },
    { name: "My Bids", path: "/my-bids" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* --- BRANDED ORANGE NAVBAR --- */}
      <nav className="bg-[#FAA264] px-10 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <Link
          to="/HomeAfterLogin"
          className="flex items-center gap-3 text-white"
        >
          <img src={mainLogo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-medium tracking-wide">
            The Art of Reform
          </span>
        </Link>

        {/* --- MAIN NAV LINKS --- */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-white transition-all hover:opacity-80 ${
                getActiveLink(link.path)
                  ? "border-b-2 border-white pb-1"
                  : "pb-1 border-b-2 border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- ACCOUNT SECTION (PERMANENTLY VISIBLE) --- */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-[#FFC299] text-white px-5 py-2.5 rounded-md text-[13px] font-medium shadow-sm hover:bg-[#ffb380] transition-colors"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            My Account
            <svg
              className={`w-3 h-3 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* DROPDOWN MENU */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-2xl border border-gray-100 overflow-hidden z-[120]">
              <div className="flex flex-col py-1 text-gray-700">
                <Link
                  to="/my-bids"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[13px] border-b border-gray-50"
                >
                  <span className="opacity-60">🔨</span> My Bids
                </Link>
                <Link
                  to="/connections"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[13px] border-b border-gray-50"
                >
                  <span className="opacity-60">👥</span> My Connections
                </Link>
                <Link
                  to="/messages"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[13px] border-b border-gray-50"
                >
                  <span className="opacity-60">💬</span> Messages
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[13px] border-b border-gray-50"
                >
                  <span className="opacity-60">⚙️</span> Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-[13px] text-red-500"
                >
                  <span>🚪</span> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- SHARED FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">ArtBehindBars</h4>
            <p className="text-gray-400 leading-relaxed">
              Transforming lives through art, one auction at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop Art</Link>
              </li>
              <li>
                <Link to="/artists">Search Artists</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6">
              Information
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Our Story</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>support@theartofreform.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex justify-between text-[11px] text-gray-500">
          <p>© Copyright theartofreform, 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
