
'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getDaysInMonth, months, daysOfWeek } from '../../../helpers/CalendarHelper';

export const YearlyView = ({ currentDate, handleDateChange }) => {
  const year = currentDate.getFullYear();

  return (
    <div className="space-y-4">
      <div className="flex justify-center  mb-2">
        <div className="flex justify-center  gap-1">
          <button onClick={() => handleDateChange(-1, 'year')}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold">{year}</span>
          <button onClick={() => handleDateChange(1, 'year')}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>


      <div className="max-h-72 overflow-y-auto pr-1">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-1">
          {months.map((month, index) => {
            const monthDate = new Date(year, index);
            const days = getDaysInMonth(monthDate);

            return (
              <div key={month} className=" p-1">
                <div className="font-semibold mb-1 text-sm">{month}</div>
                <div className="grid grid-cols-7 gap-px text-xs">
                  {daysOfWeek.map(day => (
                    <div key={day} className="text-center text-[6px] font-medium p-1">
                      {day}
                    </div>
                  ))}
                  {days.map((day, i) => (
                    <div
                      key={i}
                      className={`text-center p-1 ${day ? 'hover:bg-gray-100' : ''} ${
                        day === new Date().getDate() &&
                        index === new Date().getMonth() &&
                        year === new Date().getFullYear()
                          ? 'bg-blue-100'
                          : ''
                      }`}
                    >
                      {day || ''}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
