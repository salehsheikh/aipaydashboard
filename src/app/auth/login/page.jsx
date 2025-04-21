"use client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UniformWave from "../../components/UniformWave";
import { useAuthStore } from "../../stores/authStore";


const Login = () => {
  const router = useRouter();
  const {
    username,
    password,
    rememberMe, 
    showPassword,
    isLoading,
    error,
    setUsername,
    setPassword,
    toggleRememberMe,
    toggleShowPassword,
    login
  } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(router);
   
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <UniformWave className="z-0" />

      <div className="relative  bg-[#D9E6EB]/80 backdrop-blur-lg border border-white/20 rounded-xl p-8 w-full max-w-lg  ">
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

        <div className="text-center mb-8">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={toggleRememberMe}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
              />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <button
              type="button"
              onClick={() => router.push("/auth/forgetpassword")}
              className="text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
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
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;