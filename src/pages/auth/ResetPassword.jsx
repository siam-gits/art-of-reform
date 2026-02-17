import React from "react";
import logo from "../../assets/logo.png";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[360px] flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-12 mb-8" />
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Enter new password
        </h2>

        <form className="w-full space-y-5">
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 border border-gray-200 rounded-lg text-[13px] outline-none focus:ring-1 focus:ring-[#C4A484]"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-3 border border-gray-200 rounded-lg text-[13px] outline-none focus:ring-1 focus:ring-[#C4A484]"
          />

          <button className="w-full bg-[#C4A484] text-white py-3 rounded-lg font-bold text-[14px] hover:bg-[#b39373] transition-colors shadow-sm">
            Confirm password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
