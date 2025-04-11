
'use client';
import { useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { YearlyView } from './YearlyView';
import { MonthlyView } from './MonthlyView';
import { DailyView } from './DailyView';

export  const Calendar = () => {
  const [viewMode, setViewMode] = useState('monthly');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('08:00');

  const handleDateChange = (offset, type) => {
    const newDate = new Date(currentDate);
    if (type === 'year') newDate.setFullYear(newDate.getFullYear() + offset);
    if (type === 'month') newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 ">
      <CalendarHeader 
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentDate={currentDate}
        handleDateChange={handleDateChange}
      />

      {viewMode === 'yearly' && (
        <YearlyView 
          currentDate={currentDate}
          handleDateChange={handleDateChange}
        />
      )}

      {viewMode === 'monthly' && (
        <MonthlyView
          currentDate={currentDate}
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}

      {viewMode === 'daily' && (
        <DailyView
          currentDate={currentDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </div>
  );
};
export default Calendar;