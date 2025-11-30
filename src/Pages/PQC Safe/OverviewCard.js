import TechDescription from "../../Components/Paragraphs/TechDescription"

export default function OverviewCard(){

    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#086CB4] to-[#06426D] rounded-2xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-30"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#086CB4]/5 to-transparent pointer-events-none"></div>

                <div className="relative px-6 py-10 md:px-12 md:py-12 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide drop-shadow-lg">
                    <span className="text-[#086CB4]">PQC:</span>{' '}
                    <span className="text-[#086CB4] bg-clip-text text-transparent bg-gradient-to-r from-[#086CB4] to-[#06426D] brightness-125">
                    Secured by Kyber & Dilithium
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10 max-w-3xl">
                    <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#086CB4] blur-[40px] opacity-20 rounded-full"></div>

                        {/*Shield BRO*/}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#086CB4] drop-shadow-[0_4px_10px_rgba(8,108,180,0.5)]">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center pt-2">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#02040a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        </div>
                    </div>
                    </div>

                    <TechDescription>
                    To ensure data protection against current and future cryptographic threats the template 
                    is transmitted via a post-Quantum secure communication tunnel, leveraging Kyber for key 
                    exchange and Dilithium for digital signature.
                    </TechDescription>
                </div>

                <div className="relative mt-2">
                    <div className="px-8 py-3 md:px-12 md:py-3.5 rounded-full bg-gradient-to-b from-[#086CB4] to-[#06426D] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_15px_rgba(6,66,109,0.4)] border-t border-[#086CB4]/50 border-b border-[#06426D]">
                    <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm select-none">
                        Future Proof Technology
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

}