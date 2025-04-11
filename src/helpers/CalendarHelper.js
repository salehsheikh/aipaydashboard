// CalendarHelpers.js
export const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const leadingDays = Array(firstDay.getDay()).fill(null);
    const days = Array.from({length: lastDay.getDate()}, (_, i) => i + 1);
    const trailingDays = Array(6 - lastDay.getDay()).fill(null);
    
    return [...leadingDays, ...days, ...trailingDays];
  };