export default function ShieldIcon(){
    return(
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
        {/* Icon Glow */}
        <div className="absolute inset-0 bg-[#086CB4] blur-[40px] opacity-20 rounded-full"></div>
                    
        {/* SVG Shield */}
        <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-full h-full text-[#086CB4] drop-shadow-[0_4px_10px_rgba(8,108,180,0.5)]"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
                    
        {/* Checkmark overlay (dark to simulate cutout) */}
        <div className="absolute inset-0 flex items-center justify-center pt-2">
            <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#02040a" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            >
            <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        </div>
    )
}