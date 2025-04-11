// MonthlyView.jsx
'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getDaysInMonth, months, daysOfWeek } from '../../../helpers/CalendarHelper';

export const MonthlyView = ({ 
  currentDate, 
  handleDateChange, 
  selectedDate, 
  setSelectedDate 
}) => {
  // Get month and year from currentDate
  const monthName = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const days = getDaysInMonth(currentDate);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <button onClick={() => handleDateChange(-1, 'month')}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold">
            {monthName} {year}
          </span>
          <button onClick={() => handleDateChange(1, 'month')}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {daysOfWeek.map(day => (
          <div key={day} className="bg-white p-1 text-center text-xs font-medium">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <div
            key={index}
            className={`bg-white p-1 h-12 border border-gray-200 ${
              day ? 'hover:bg-gray-50 cursor-pointer' : ''
            } ${
              day === selectedDate?.getDate() && 
              currentDate.getMonth() === selectedDate?.getMonth() ? 'bg-blue-50' : ''
            } ${
              day ? 'text-gray-900' : 'text-gray-400'
            }`}
            onClick={() => day && setSelectedDate(new Date(year, currentDate.getMonth(), day))}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};