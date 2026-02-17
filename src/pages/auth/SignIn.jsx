import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();

  const handleDummySignIn = (e) => {
    e.preventDefault();

    // Simulate authentication logic
    console.log("Signing in...");

    /** * Redirect to the specific logged-in home page route
     * Adjust "/HomePageAfterLogin" to match your actual route definition in App.js
     */
    navigate("/HomeAfterLogin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-10">
      <div className="w-full max-w-[360px] flex flex-col items-center">
        {/* --- LOGO --- */}
        <div className="mb-6">
          <img
            src={logo}
            alt="The Art of Reform"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* --- HEADER --- */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
          Welcome to your account
        </h1>

        {/* --- GOOGLE SIGN IN (Simulated) --- */}
        <button
          onClick={handleDummySignIn}
          className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 border border-gray-100 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors bg-[#F9FAFB] mb-5"
        >
          {/* Google Icon SVG code... */}
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

        <div className="w-full flex items-center mb-6">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="px-3 text-[12px] text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* --- LOGIN FORM --- */}
        <form onSubmit={handleDummySignIn} className="w-full space-y-4">
          <div className="space-y-1.5">
            <label className="text-[12px] font-bold text-gray-700 ml-0.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email or phone"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-[12px] font-bold text-gray-700 ml-0.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#C4A484]/50"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4"
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
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-3.5 h-3.5 accent-[#C4A484] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-[12px] text-gray-400">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              size="sm"
              className="text-[12px] text-gray-400 hover:text-[#C4A484] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C4A484] text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#b39373] transition-colors shadow-sm mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[13px] text-gray-500 mb-6">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-gray-900">
              Create account
            </Link>
          </p>

          <div className="flex items-center justify-center gap-5 text-[11px] text-gray-400">
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

export default SignIn;
