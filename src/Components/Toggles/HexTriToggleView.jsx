import { useState } from "react";

export default function HexTriToggleView(
  {
    labels = ["OVERVIEW", "SPECS", "FEATURES"],
    components = []
  }
) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Calculates the position of the diamond knob
  const getKnobPosition = (index) => {
    if (index === 0) return 'left-[5%]';
    if (index === 1) return 'left-1/2 -translate-x-1/2';
    return 'left-[95%] -translate-x-full';
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-8">
      <div className="relative w-full max-w-lg h-14 select-none">
        
        {/* Background ambient glow (static) */}
        <div className="absolute inset-0 bg-[#086CB4] blur-xl opacity-20"></div>

        <div
          className="relative w-full h-full bg-[#02040a] border border-[#086CB4]/50 shadow-inner overflow-hidden"
          style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)' }}
        >
          {/* --- NEW GLOW IMPLEMENTATION --- */}
          {/* We use a radial gradient that acts as a spotlight behind the active tab */}
          <div
            className="absolute top-0 bottom-0 w-32 transition-all duration-500 ease-out pointer-events-none"
            style={{
              // We position the center of the glow to match the center of the diamond.
              // 0: Diamond is at 5% (edge), so center is approx 10%.
              // 1: Diamond is at 50%, glow is 50%.
              // 2: Diamond is at 95% (right edge), so center is approx 90%.
              left: selectedIndex === 0 ? '10%' : selectedIndex === 1 ? '50%' : '90%',
              transform: 'translateX(-50%)', // Always center the glow div on the coordinate
              background: 'radial-gradient(circle, rgba(8,108,180,0.6) 0%, rgba(8,108,180,0) 70%)'
            }}
          />
          {/* ------------------------------- */}

          <div className="absolute inset-0 flex">
            {labels.map((label, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className="flex-1 flex items-center justify-center cursor-pointer z-10"
              >
                <span className={`text-[10px] md:text-xs font-bold tracking-[0.15em] transition-all duration-300 
                  ${selectedIndex === idx
                    ? 'text-white drop-shadow-[0_0_8px_#086CB4] scale-105'
                    : 'text-gray-600 hover:text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diamond Knob */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 z-20 pointer-events-none transition-all 
            duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center justify-center
            ${getKnobPosition(selectedIndex)}`}
        >
          <div className="absolute inset-0 bg-[#086CB4] blur-md opacity-60 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          <div
            className="w-full h-full bg-gradient-to-br from-[#086CB4] to-[#02040a] border 
            border-[#086CB4] shadow-[0_0_15px_rgba(8,108,180,0.5)] flex items-center justify-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <div className="w-3 h-3 bg-white shadow-[0_0_10px_white]" style={{ transform: 'rotate(45deg)' }}></div>
          </div>
        </div>
      </div>

      <div className="w-full transition-all duration-500 ease-in-out">
        {components[selectedIndex]}
      </div>
    </div>
  );
};