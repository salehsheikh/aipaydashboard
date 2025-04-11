import React from 'react';

const statusColors = {
  completed: 'bg-[#D9F7E8]', 
  approved:'bg-[#D9F7E8]', 
  inreview: 'bg-[#D9F7E8]', 
  verified: 'bg-[#D9F7E8]',
  resolved: 'bg-[#D9F7E8]', 
  active: 'bg-[#D9F7E8]',
  pending: 'bg-[#F5D1D9]',
  delayed: 'bg-[#F5D1D9]',
  denied:'bg-[#F5D1D9]',
  open: 'bg-[#F5D1D9]',
  failed: 'bg-[#F9E9CC]',
  disabled: 'bg-[#F9E9CC]',
  default: 'bg-gray-500',
};

const textColors = {
  completed: 'text-green-600',
  approved:'text-green-600',
  inreview: 'text-green-600',
  verified: 'text-green-600',
  resolved: 'text-green-600',
  active: 'text-green-600',
  pending: 'text-red-600',
  delayed: 'text-red-600',
  denied:'text-red-600',
  open: 'text-red-600',
  failed: 'text-orange-600',
  disabled: 'text-orange-600',
  default: 'text-white',
};

const StatusBadge = ({ status }) => {
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, '');
  const bgColor = statusColors[normalizedStatus] || statusColors.default;
  const textColor = textColors[normalizedStatus] || textColors.default;

  return (
    <span className={`${bgColor} ${textColor} px-3 py-2 rounded-full text-xs font-semibold`}>
      {status}
    </span>
  );
};

export default StatusBadge;
