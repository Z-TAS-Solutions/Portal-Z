import SubHeading from "../../Components/Headings/SubHeading"

export default function OverviewCard(){
    
    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#086CB4] to-[#06426D] rounded-2xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-30"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
                {/* Background Gradients */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#086CB4]/5 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#086CB4]/10 blur-[100px] rounded-full pointer-events-none"></div> */}

                <div className="relative px-6 py-8 md:px-10 md:py-10 flex flex-col h-full">
          
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg mb-2">
                    <span className="text-white">Secure</span>{' '}
                    <span className="text-[#086CB4] bg-clip-text text-transparent bg-gradient-to-r from-[#086CB4] to-[#06426D] brightness-125">
                        Biometric Architecture
                    </span>
                    </h2>
                    <SubHeading>Zero-Touch Authentication Flow</SubHeading>
                </div>

                {/* Architecture Visual Pipeline */}

                </div>
            </div>
            </div>
        </div>

    )

}