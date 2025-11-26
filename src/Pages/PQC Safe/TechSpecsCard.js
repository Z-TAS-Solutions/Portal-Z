import { ShieldCheck, Cpu, Lock, Network } from 'lucide-react';

export default function TechSpecsCard(){
    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06426D] to-[#086CB4] rounded-2xl opacity-20 blur-xl"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#06426D]/40 via-[#086CB4]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
        
                <div className="w-full h-1 bg-gradient-to-r from-[#086CB4] to-[#06426D]"></div>
        
                <div className="p-8 md:p-12 w-full">
                <h3 className="text-xl font-bold text-white mb-8 border-b border-[#086CB4]/30 pb-4 flex items-center gap-3">
                    <Cpu className="text-[#086CB4]" /> Technical Specifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-[#086CB4]/5 p-6 rounded-lg border border-[#086CB4]/10 hover:border-[#086CB4]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Lock className="w-5 h-5 text-[#086CB4]" />
                        <h4 className="text-white font-semibold tracking-wide">Kyber-1024</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 font-mono">
                        <div className="flex justify-between"><span>Security Level:</span> <span className="text-[#086CB4]">AES-256</span></div>
                        <div className="flex justify-between"><span>Public Key:</span> <span className="text-white">1568 bytes</span></div>
                        <div className="flex justify-between"><span>Ciphertext:</span> <span className="text-white">1568 bytes</span></div>
                    </div>
                    </div>

             
                    <div className="bg-[#086CB4]/5 p-6 rounded-lg border border-[#086CB4]/10 hover:border-[#086CB4]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="w-5 h-5 text-[#086CB4]" />
                        <h4 className="text-white font-semibold tracking-wide">Dilithium-5</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 font-mono">
                        <div className="flex justify-between"><span>Signature:</span> <span className="text-[#086CB4]">Deterministic</span></div>
                        <div className="flex justify-between"><span>Public Key:</span> <span className="text-white">2592 bytes</span></div>
                        <div className="flex justify-between"><span>Signature Size:</span> <span className="text-white">4595 bytes</span></div>
                    </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#086CB4]/20 flex items-start gap-4">
                    <Network className="w-6 h-6 text-[#086CB4] mt-1 shrink-0" />
                    <div>
                        <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Protocol Handshake</h5>
                        <p className="text-xs text-gray-400 leading-relaxed font-mono">
                        [INIT] TLS 1.3 Extension → [HELLO] Hybrid Key Exchange (X25519 + Kyber) → [AUTH] Certificate Verify (Dilithium) → [ESTABLISHED] 0-RTT Quantum Tunnel.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}