import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6 py-8 font-sans">
      <div className="w-full max-w-[360px] flex flex-col items-center">
        {/* LOGO SECTION - Tightened margin */}
        <div className="mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain mx-auto"
          />
        </div>

        {/* HEADER - Tightened margin */}
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-5 tracking-tight">
          Create an account
        </h2>

        {/* SOCIAL SIGN UP - Reduced padding/margins */}
        <button className="w-full flex items-center justify-center gap-2.5 py-2 px-4 border border-gray-100 rounded-lg text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors bg-[#F9FAFB] mb-4">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* DIVIDER - Tightened padding */}
        <div className="w-full flex items-center mb-5">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="px-3 text-[11px] text-gray-400 font-medium">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* FORM SECTION - Changed space-y-5 to space-y-3 */}
        <form className="w-full space-y-3">
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-700 ml-0.5">
              User Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] focus:ring-1 focus:ring-[#C4A484]"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] focus:ring-1 focus:ring-[#C4A484]"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-700 ml-0.5">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] text-gray-400 focus:ring-1 focus:ring-[#C4A484]"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-700 ml-0.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] focus:ring-1 focus:ring-[#C4A484]"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-700 ml-0.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] focus:ring-1 focus:ring-[#C4A484]"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-gray-700 ml-0.5">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg outline-none text-[12px] focus:ring-1 focus:ring-[#C4A484]"
              onChange={handleChange}
            />
          </div>

          {/* CHECKBOX - Reduced gap and text size */}
          <div className="flex items-start gap-2 pt-0.5">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              className="mt-1 w-3 h-3 accent-[#C4A484]"
              onChange={handleChange}
            />
            <label
              htmlFor="terms"
              className="text-[10px] text-gray-400 leading-tight"
            >
              I agree to the terms and conditions & Privacy Policies
            </label>
          </div>

          <button className="w-full py-2.5 bg-[#C4A484] text-white rounded-lg font-bold text-[13px] hover:bg-[#b39373] transition-colors shadow-sm mt-2 uppercase tracking-wide">
            Sign up
          </button>
        </form>

        {/* FOOTER - Tightened spacing */}
        <div className="mt-6 text-center">
          <p className="text-[12px] text-gray-500 mb-4">
            Have an account?{" "}
            <Link
              to="/signin"
              className="font-bold text-gray-900 hover:underline"
            >
              Sign in
            </Link>
          </p>

          <div className="flex justify-center gap-4 text-[10px] text-gray-400">
            <Link to="/privacy" className="hover:text-gray-600">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-gray-600">
              Terms of service
            </Link>
            <Link to="/help" className="hover:text-gray-600">
              Help center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
