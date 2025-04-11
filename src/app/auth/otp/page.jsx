"use client";

import React, { useRef } from "react";
import { useAuthStore } from "../../stores/authStore";
import UniformWave from "../../components/UniformWave";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Otp = () => {
  const { otp, setOtp, verifyOtp, isLoading, error, successMessage } = useAuthStore();
  const inputRefs = useRef([]);
  const router = useRouter();

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only numbers
    if (!value) return; // Prevent entering non-numeric values

    setOtp(index, value);

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyOtp(router);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <UniformWave />
      <div className="relative bg-[#D9E6EB] p-12 rounded-xl w-full max-w-md">
        <div className="flex justify-center mb-8 py-12">
          <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
        </div>
        <h2 className="text-2xl font-bold text-black mb-2">Verify Your Identity</h2>
        <h3 className="text-md mb-6 text-gray-600">Enter the OTP sent to your email address</h3>

        <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>

        {/* OTP Input Fields */}
        <form className="flex justify-center sm:gap-5 gap-1 mb-6" onSubmit={handleSubmit}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#ecefef]"
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </form>

        {/* Error and Success Messages */}
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 text-sm text-center mb-4">{successMessage}</div>}

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[#086788] text-white py-3 rounded-md text-sm hover:bg-[#055a73] transition disabled:opacity-50"
        >
          {isLoading ? "Verifying..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Otp;
