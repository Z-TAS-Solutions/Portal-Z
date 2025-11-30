import { Database } from "lucide-react";
import { Server } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { FileCheck } from "lucide-react";

export default function FeaturesCard(){
    
    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06426D] via-[#086CB4] to-[#06426D] rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                <div className="w-full h-1 bg-gradient-to-r from-[#086CB4] via-white/20 to-[#086CB4]"></div>

                <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="text-center mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2 drop-shadow-md">
                    Advanced Features & <span className="text-[#086CB4]">Fraud Protection</span>
                    </h3>
                    <div className="h-1 w-24 bg-[#086CB4]/30 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                    {/* Card 1: Data Sovereignty */}
                    <div className="group/card relative">
                    <div className="absolute inset-0 bg-[#086CB4]/5 rounded-xl blur-sm transition-opacity opacity-0 group-hover/card:opacity-100"></div>
                    <div className="relative h-full bg-[#086CB4]/5 border border-[#086CB4]/20 rounded-xl p-6 hover:border-[#086CB4]/50 transition-all duration-300 flex flex-col">
                        <div className="flex items-center gap-3 mb-6 border-b border-[#086CB4]/20 pb-4">
                        <div className="p-2 bg-[#086CB4]/10 rounded-lg">
                            <Database className="w-6 h-6 text-[#086CB4]" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-100">Data Sovereignty</h4>
                        </div>
                        <ul className="space-y-4 flex-grow">
                        <li className="flex items-start gap-3">
                            <Server className="w-5 h-5 text-[#086CB4] mt-1 shrink-0" />
                            <div>
                            <span className="block text-white font-semibold">PostgreSQL</span>
                            <span className="text-xs text-gray-400">Relational integrity & secure storage</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Globe className="w-5 h-5 text-[#086CB4] mt-1 shrink-0" />
                            <div>
                            <span className="block text-white font-semibold">IPFS (Decentralized)</span>
                            <span className="text-xs text-gray-400">Distributed immutable file system</span>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>

                    {/* Card 2: Fraud Prevention */}
                    <div className="group/card relative">
                    <div className="absolute inset-0 bg-[#086CB4]/5 rounded-xl blur-sm transition-opacity opacity-0 group-hover/card:opacity-100"></div>
                    <div className="relative h-full bg-[#086CB4]/5 border border-[#086CB4]/20 rounded-xl p-6 hover:border-[#086CB4]/50 transition-all duration-300 flex flex-col">
                        <div className="flex items-center gap-3 mb-6 border-b border-[#086CB4]/20 pb-4">
                        <div className="p-2 bg-[#086CB4]/10 rounded-lg">
                            <ShieldAlert className="w-6 h-6 text-[#086CB4]" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-100">Fraud Prevention</h4>
                        </div>
                        <ul className="space-y-4 flex-grow">
                        <li className="flex items-start gap-3">
                            <Fingerprint className="w-5 h-5 text-[#086CB4] mt-1 shrink-0" />
                            <div>
                            <span className="block text-white font-semibold">Palm Geometric Analysis</span>
                            <span className="text-xs text-gray-400">Biometric vector verification</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <FileCheck className="w-5 h-5 text-[#086CB4] mt-1 shrink-0" />
                            <div>
                            <span className="block text-white font-semibold">Session Confirmation</span>
                            <span className="text-xs text-gray-400">Real-time auth token validation</span>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
}