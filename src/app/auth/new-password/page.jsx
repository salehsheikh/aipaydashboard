"use client";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import UniformWave from '../../components/UniformWave';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useAuthStore } from "../../stores/authStore";

const NewPassword = () => {
  const searchParams = useSearchParams();
  const {
    showPassword,
    showConfirmPassword,
    newPassword,
    confirmPassword,
    loading,
    error,
    successMessage,
    toggleShowPassword,
    toggleShowConfirmPassword,
    setNewPassword,
    setConfirmPassword,
    resetPassword,
    setResetToken
  } = useAuthStore();

  // Extract token from URL and set in store
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      setResetToken(token);
    }
  }, [searchParams, setResetToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(); // Token is already in store
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <UniformWave />
      <div className="relative bg-[#D9E6EB] p-8 rounded-xl w-full max-w-lg">
        <div className="flex justify-center mb-10">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={150} 
            height={50} 
            priority 
            className="drop-shadow-md"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Create a New Password</h2>
        <p className="text-gray-600 mb-6">Set a strong password to keep your account secure</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-white/90 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white/90 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              />
              <button
                type="button"
                onClick={toggleShowConfirmPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-sm text-center">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#086788] hover:bg-[#075a73] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;