import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[340px] flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="w-12 mb-6" />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Forgot password?
        </h1>
        <p className="text-[12px] text-gray-400 mb-8">
          No worries, we'll send you reset instructions.
        </p>

        <form className="w-full space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-800 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2.5 border border-gray-200 rounded-lg text-[12px] outline-none focus:ring-1 focus:ring-[#C4A484]"
            />
          </div>
          <button className="w-full bg-[#C4A484] text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#b39373] shadow-sm">
            <Link to="/reset-password">Reset Password</Link>
          </button>
        </form>

        <Link
          to="/signin"
          className="mt-8 text-[12px] font-bold text-gray-900 flex items-center gap-1 hover:opacity-70"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
