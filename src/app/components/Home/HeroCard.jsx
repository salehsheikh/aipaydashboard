const HeroCard = ({ 
    title, 
    value, 
    text, 
    Icon, 
    textIcon: TextIcon, 
    bgColor, 
    iconColor,
    textIconColor 
  }) => (
    <div className="bg-white w-full h-full p-7.5 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <div className="block">
          <h3 className="text-gray-600 text-lg font-medium">{title}</h3>
          <h2 className="text-2xl font-bold">{value}</h2>
          <div className="flex items-center gap-1 mt-1">
          {TextIcon && ( 
              <TextIcon className={`${textIconColor} w-6 h-6`} />
            )}
            <span className="text-green-500 text-sm">15%</span>
           
            <span className="text-gray-600 text-sm">{text}</span>
          </div>
        </div>
        <div className={`p-3 rounded-3xl lg:-mt-10 ${bgColor}`}>
          <Icon className={iconColor} size={36} />
        </div>
      </div>
    </div>
  );
  
  export default HeroCard;