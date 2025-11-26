import { useState } from 'react';

export default function HexToggleView ({ leftLabel, rightLabel, leftComponent, rightComponent }) {
  
  const [isToggled, setIsToggled] = useState(false);

    return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-8">
      
      {/* The Custom Hexagonal Toggle Switch */}
      <div 
        onClick={() => setIsToggled(!isToggled)}
        className="relative w-72 h-14 cursor-pointer group select-none"
      >
        {/* Glow behind toggle */}
        <div className="absolute inset-0 bg-[#086CB4] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

        {/* The Track (Hexagonal Bar) */}
        <div 
          className="relative w-full h-full bg-[#02040a] border border-[#086CB4]/50 shadow-inner overflow-hidden transition-colors"
          style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }}
        >
          {/* Active Fill Background - Moves based on toggle state */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#06426D] to-[#086CB4] transition-transform duration-500 ease-out ${isToggled ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ opacity: 0.3 }}
          />
          
          {/* Labels */}
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <span className={`text-xs font-bold tracking-[0.2em] transition-all duration-300 ${!isToggled ? 'text-white drop-shadow-[0_0_5px_#086CB4]' : 'text-gray-600'}`}>
              {leftLabel}
            </span>
            <span className={`text-xs font-bold tracking-[0.2em] transition-all duration-300 ${isToggled ? 'text-white drop-shadow-[0_0_5px_#086CB4]' : 'text-gray-600'}`}>
              {rightLabel}
            </span>
          </div>
        </div>

        {/* The Knob (Diamond Slider) */}
        {/* We calculate 'left' position based on state to slide it across */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 z-20 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center 
            ${isToggled ? 'left-[calc(95%-3rem)]' : 'left-[5%]'}`}
        >
          {/* Outer Diamond Glow */}
          <div 
            className="absolute inset-0 bg-[#086CB4] blur-md opacity-60 animate-pulse" 
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          ></div>

          {/* Main Diamond Shape */}
          <div 
            className="w-full h-full bg-gradient-to-br from-[#086CB4] to-[#02040a] border border-[#086CB4] shadow-[0_0_15px_rgba(8,108,180,0.5)] flex items-center justify-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
             {/* Inner small diamond */}
             <div className="w-3 h-3 bg-white shadow-[0_0_10px_white]" style={{ transform: 'rotate(45deg)' }}></div>
          </div>
        </div>
      </div>

      {/* Content Area - Fades between components */}
      <div className="w-full transition-all duration-500 ease-in-out">
        {isToggled ? rightComponent : leftComponent}
      </div>

    </div>
  );
};