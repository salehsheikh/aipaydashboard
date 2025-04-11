'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const WorldMap = () => {
  const tabs = ['Regions', 'Countries', 'Cities', 'Languages', 'Currencies', 'Time Zones'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 h-full flex flex-col">
      <div className="flex items-center gap-2 justify-between mb-1">
        <h2 className="text-xl font-semibold">Map</h2>
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="flex items-center gap-1 rounded-md border border-blue-400 p-1"
            >
              <span className="text-xs whitespace-nowrap">{tab}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden relative flex-1">
        <Image
          src="/amCharts.pixelMap.svg"
          alt="World Map"
          fill
          className="object-cover scale-y-110"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        />
      </div>
    </div>
  );
};