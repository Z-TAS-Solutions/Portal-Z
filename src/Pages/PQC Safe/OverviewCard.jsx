import TechDescription from "../../Components/Paragraphs/TechDescription"
import { Fingerprint } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { Blocks } from "lucide-react"

export default function OverviewCard(){
    
    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#086CB4] to-[#06426D] rounded-2xl opacity-20 blur-xl transition duration-1000 group-hover:opacity-30"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#086CB4]/5 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#086CB4]/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative px-6 py-8 md:px-10 md:py-10 flex flex-col h-full">
          
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg mb-2">
                    <span className="text-white">Secure</span>{' '}
                    <span className="text-[#086CB4] bg-clip-text text-transparent bg-gradient-to-r from-[#086CB4] to-[#06426D] brightness-125">
                        Biometric Architecture
                    </span>
                    </h2>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-mono">
                    Zero-Touch Authentication Flow
                    </p>
                </div>

                {/* Architecture Visual Pipeline */}
                <div className="space-y-6 max-w-2xl mx-auto w-full">
            
                    {/* Step 1: Capture & Hash */}
                    <div className="flex group/step">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-10 h-10 rounded-full bg-[#086CB4]/10 border border-[#086CB4]/30 flex items-center justify-center group-hover/step:bg-[#086CB4]/20 group-hover/step:border-[#086CB4] transition-all shadow-[0_0_15px_rgba(8,108,180,0.1)]">
                        <Fingerprint className="w-5 h-5 text-[#086CB4]" />
                        </div>
                        <div className="w-0.5 h-full bg-gradient-to-b from-[#086CB4]/30 to-transparent my-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                        Noised Biometric Hashing
                        <span className="px-2 py-0.5 rounded text-[10px] bg-[#06426D]/30 border border-[#06426D] text-[#086CB4]">NIR Scan</span>
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Palm vein & print templates are generated, injected with noise for entropy, and hashed. Stored securely using <span className="text-[#086CB4] font-medium">Homomorphic Encryption</span> within a Secure Enclave.
                        </p>
                    </div>
                    </div>

                    {/* Step 2: PQC Tunnel */}
                    <div className="flex group/step">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-10 h-10 rounded-full bg-[#086CB4]/10 border border-[#086CB4]/30 flex items-center justify-center group-hover/step:bg-[#086CB4]/20 group-hover/step:border-[#086CB4] transition-all shadow-[0_0_15px_rgba(8,108,180,0.1)]">
                        <ShieldCheck className="w-5 h-5 text-[#086CB4]" />
                        </div>
                        <div className="w-0.5 h-full bg-gradient-to-b from-[#086CB4]/30 to-transparent my-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="text-white font-bold text-lg mb-1">Post-Quantum Tunnel</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Auth requests are transmitted via a quantum-secure tunnel.
                        <br />
                        <span className="font-mono text-xs text-[#086CB4] opacity-80 mt-1 block">
                            • Key Exchange: Kyber &nbsp; | &nbsp; Signature: Dilithium
                        </span>
                        </p>
                    </div>
                    </div>

                    {/* Step 3: Authorization & Audit */}
                    <div className="flex group/step">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-10 h-10 rounded-full bg-[#086CB4]/10 border border-[#086CB4]/30 flex items-center justify-center group-hover/step:bg-[#086CB4]/20 group-hover/step:border-[#086CB4] transition-all shadow-[0_0_15px_rgba(8,108,180,0.1)]">
                        <Blocks className="w-5 h-5 text-[#086CB4]" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">MFA & Blockchain Audit</h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Upon hash match, MFA is triggered. Successful auth grants access and writes an immutable audit trail to the blockchain.
                        </p>
                    </div>
                    </div>

                </div>

                {/* Bottom Pill */}
                <div className="mt-8 flex justify-center">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#086CB4]/10 to-[#06426D]/10 border border-[#086CB4]/30 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#086CB4] rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-[#086CB4] tracking-widest uppercase">System Operational</span>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>

    )

}