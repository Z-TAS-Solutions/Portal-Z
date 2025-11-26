export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Outer Glow/Border Wrapper 
        - Creates the "Stroke" effect using a gradient background on a slightly larger container
        - "Embossed" feel comes from the contrast between the outer shadow and the inner border
      */}
      <div className="relative group w-full max-w-4xl mx-auto">
        
        {/* Ambient background glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#086CB4] to-[#06426D] rounded-2xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-30"></div>
        
        {/* The Card Stroke (Gradient Border) */}
        <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
          
          {/* Main Card Content */}
          <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Inner subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#086CB4]/5 to-transparent pointer-events-none"></div>

            <div className="relative px-6 py-10 md:px-12 md:py-12 flex flex-col items-center text-center">
              
              {/* Header: Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide drop-shadow-lg">
                <span className="text-[#086CB4]">PQC:</span>{' '}
                <span className="text-[#086CB4] bg-clip-text text-transparent bg-gradient-to-r from-[#086CB4] to-[#06426D] brightness-125">
                  Secured by Kyber & Dilithium
                </span>
              </h2>

              {/* Middle Section: Icon + Text */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10 max-w-3xl">
                
                {/* Shield Icon Area */}
                <div className="flex-shrink-0">
                </div>

                {/* Text Content */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed md:leading-loose text-center md:text-left font-light opacity-90 max-w-xl">
                  To ensure data protection against current and future cryptographic threats the template 
                  is transmited via a post :Quantum secure communication tunnel, leveraging kyber for key 
                  exchange and dilithium for digital signature.
                </p>
              </div>

              {/* Bottom Section: The "Pill" Badge */}
              {/* This is not a button. It uses a double-gradient technique and box-shadows 
                  to create that specific 2D pill shape.
              */}
              <div className="relative mt-2">
                <div 
                  className="
                    px-8 py-3 md:px-12 md:py-3.5
                    rounded-full
                    bg-gradient-to-b from-[#086CB4] to-[#06426D]
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_15px_rgba(6,66,109,0.4)]
                    border-t border-[#086CB4]/50
                    border-b border-[#06426D]
                  "
                >
                  <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm select-none">
                    Future Proof Technology
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}