"use client";
import { useAuthStore } from "../../stores/authStore";
import UniformWave from "../../components/UniformWave";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
   const router = useRouter();
  const { email, setEmail, forgetPassword, isLoading, error, successMessage } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgetPassword(router);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <UniformWave />
      <div className="relative bg-[#D9E6EB] p-16 rounded-xl w-full max-w-lg">
        <div className="flex justify-center mb-10">
          <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
        </div>
        <h2 className="text-2xl font-bold text-black mb-3">Reset your password</h2>
        <h3 className="text-md mb-6">Enter Your Registered Email to Receive OTP</h3>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {successMessage && <div className="text-green-500 text-sm text-center">{successMessage}</div>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-[#086788] text-white py-2 rounded-md text-lg hover:bg-[#055a73] transition"
          >
            {isLoading ? "Sending..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
