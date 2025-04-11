'use client';
import { menuItems } from '../constants/constant';

export default function Sidebar({ activeTab, onTabClick }) {
  return (
    <aside className="fixed top-16 left-0 w-56 h-[calc(100vh-4rem)] border-r border-gray-300 bg-white z-10">
      <nav className="flex flex-col gap-2 py-4">
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={`flex items-center text-sm font-semibold gap-3 p-3 w-full
              ${name === activeTab ? 'bg-[#CE2323] text-white' : 'text-gray-600'}`}
            onClick={() => onTabClick(name)}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}