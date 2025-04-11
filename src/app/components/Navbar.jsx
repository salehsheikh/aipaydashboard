'use client';
import { Search, Bell } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";

const Navbar = () => {
  const { user } = useAuthStore(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-b-gray-300 px-4 sm:px-6 py-3 w-full flex justify-between items-center fixed gap-4 z-50">
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={40}
          priority
          className="w-auto h-8 sm:h-10"
        />
      </div>

      <div className="flex items-center gap-4 flex-grow justify-end">
        <div className="relative flex-grow max-w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#247BA0] text-sm sm:text-base"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#247BA0] w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#247BA0]" />
            </div>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative profile-dropdown">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {user?.image ? (
                <Image
                  src={user.image || "/default-avatar.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                  onError={(e) => e.currentTarget.src = "/default-avatar.png"}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#247BA0]"
                />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#247BA0] flex items-center justify-center text-white font-medium">
                  {user?.username?.[0]?.toUpperCase() || 'U'}
                </div>
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-900">{user?.username}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  Notifications
                </button>
                <button 
                  className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                  onClick={() => {
                    // Add your logout logic here
                    useAuthStore.getState().logout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;