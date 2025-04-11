
'use client';

export const DailyView = ({ currentDate, selectedTime, setSelectedTime }) => {
  // Generate time slots for the day
  const timeSlots = Array.from({ length: 12 }, (_, i) => 
    `${i.toString().padStart(2, '0')}:00`
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">
            {currentDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <select 
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="p-4 border rounded-lg">
          <div className="font-medium">Sample Event</div>
          <div className="text-sm text-gray-500">10:00 AM - 11:00 AM</div>
        </div>
      </div>
    </div>
  );
};