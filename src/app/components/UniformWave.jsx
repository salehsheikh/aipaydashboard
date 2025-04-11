
const UniformWave = ({ 
    className = "",
    fillColor = "#FAF3EC",
    waveHeight = "300px",
    containerWidth = "full"
  }) => {
    return (
      <div 
        className={`absolute bottom-0  left-0 w-${containerWidth} overflow-hidden ${className}`}
        style={{ height: waveHeight }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 520"
          className="w-full h-full scale-[1.5] origin-bottom"
          preserveAspectRatio="none"
        >
          <path 
            fill={fillColor}
            d="M0,256L120,234.7C240,213,480,171,720,160C960,149,1200,171,1320,181.3L1440,192L1440,520L1320,520C1200,520,960,520,720,520C480,520,240,520,120,520L0,520Z"
          />
        </svg>
      </div>
    );
  };
  
  export default UniformWave;