import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import mainLogo from "../../assets/logo.png";
const Layout = () => {
  const location = useLocation();

  const getActiveLink = (path) => {
    if (location.pathname === path) return true;
    return false;
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP ART", path: "/shop" },
    { name: "SEARCH ARTISTS", path: "/artists" },
    { name: "CONNECT", path: "/connect" },
    { name: "OUR STORY", path: "/OurStory" }, // Added / so it works from any page
    { name: "FAQ", path: "/faq" },
    { name: "CONTACT US", path: "/Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* --- SHARED NAVIGATION --- */}
      <nav className="bg-[#FAA264] px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src={mainLogo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-medium tracking-wide">
            The Art of Reform
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-white pb-1 transition-all hover:border-b-2 hover:border-white/50 ${
                getActiveLink(link.path, link.name)
                  ? "border-b-2 border-white"
                  : "border-b-2 border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/SignIn"
          className="bg-white text-[#FAA264] px-6 py-2 rounded-md text-xs font-bold shadow-sm hover:bg-gray-50"
        >
          Login
        </Link>
      </nav>

      {/* --- PAGE CONTENT INJECTED HERE --- */}
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
