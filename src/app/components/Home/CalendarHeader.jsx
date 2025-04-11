
'use client';
import { ChevronDown} from 'lucide-react';
export const CalendarHeader = ({ 
  viewMode, 
  setViewMode, 
}) => {
  const viewModes = ['yearly', 'monthly', 'daily'];
  
  const cycleViewMode = () => {
    const currentIndex = viewModes.indexOf(viewMode);
    const nextIndex = (currentIndex + 1) % viewModes.length;
    setViewMode(viewModes[nextIndex]);
  };

  const currentViewLabel = viewMode.charAt(0).toUpperCase() + viewMode.slice(1);

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-sm font-semibold">Calendar</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
          <button
            onClick={cycleViewMode}
            className="flex items-center gap-1 px-2 py-1 text-sm rounded-lg bg-white shadow-sm transition-all hover:scale-105"
          >
            <span >{currentViewLabel}</span>
            <ChevronDown className="h-4 w-4 transition-transform" />
          </button>
        </div>
        
        <button className="flex items-center gap-2 bg-blue-600 text-white px-2 text-sm py-1 rounded-lg">
          Add Event
        </button>
      </div>
    </div>
  );
};