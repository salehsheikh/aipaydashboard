"use client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UniformWave from "../../components/UniformWave";
import { useAuthStore } from "../../stores/authStore";


const Signup = () => {
  const router = useRouter();
  const {
    username,
    password,
    email, 
    setEmail,
    showPassword,
    isLoading,
    error,
    setUsername,
    setPassword,
    toggleShowPassword,
    signup
  } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(router);
   
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <UniformWave className="z-0" />

      <div className="relative  bg-[#D9E6EB]/80 backdrop-blur-lg border border-white/20 rounded-xl p-4 w-full max-w-lg  ">
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

        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Log In</h2>
          <p className="text-gray-600">Welcome Back to Leggo</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/90 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/90 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/90 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
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

          <div className="flex justify-end  text-sm">

            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="text-blue-600 hover:text-blue-700"
            >
              Already have an account ?
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#086788] hover:bg-[#075a73] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'signing in...' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;