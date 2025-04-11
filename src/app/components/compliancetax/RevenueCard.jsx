

 const RevenueCard = ({ title, value, Icon, bgColor, iconColor }) => (
  <div className="bg-[#FFFFFF] w-auto max-h-27 p-6 rounded-xl shadow-sm flex-1  gap-4 z-10 ">
    <div className="flex justify-between items-center">
      <div className="block">
      <h3 className="text-gray-600 text-lg font-medium">{title}</h3>
      <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      <div className={`p-3 rounded-3xl ${bgColor}`}>
        <Icon className={iconColor} size={36} />
      </div>
    </div>
  </div>
);
export default RevenueCard;