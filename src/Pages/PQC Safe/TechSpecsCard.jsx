import { ShieldCheck, Lock, Network } from 'lucide-react';
import TechHeading from '../../Components/Headings/TechHeading';


const TitleIconStyle = "w-5 h-5 text-[#086CB4]";

const TechSpec_0 = {
    Title : "Kyber-1024",
    TitleIcon : Lock,
    Spec : [
        {
            SpecTitle : "Security Level",
            SpecDetail : "AES-256"
        },
        {
            SpecTitle : "Public Key",
            SpecDetail : "1568 bytes"
        },
        {
            SpecTitle : "Ciphertext",
            SpecDetail : "1568 bytes"
        },
    ]
}

const TechSpec_1 = {
    Title : "Dilithium-5",
    TitleIcon : ShieldCheck,
    Spec : [
        {
            SpecTitle : "Signature",
            SpecDetail : "Deterministic"
        },
        {
            SpecTitle : "Public Key",
            SpecDetail : "2592 bytes"
        },
        {
            SpecTitle : "Signature Size",
            SpecDetail : "4595 bytes"
        },
    ]
}

const TechSpecs = [TechSpec_0, TechSpec_1]

function TechSpec({ data, children }){

    const TitleIconComp = data.TitleIcon

    return(

        <>
            <div className="bg-[#086CB4]/5 p-6 rounded-lg border border-[#086CB4]/10 hover:border-[#086CB4]/30 transition-colors">
            <div className="flex items-center gap-3 mb-3"> 
                <TitleIconComp className={TitleIconStyle} />
                <h4 className="text-white font-semibold tracking-wide">{data.Title}</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-400 font-mono">
                {
                    data.Spec.map((item, index) => {
                        return(
                            <div className="flex justify-between" key={index + "Spec"}><span>{item.SpecTitle}:</span> <span className="text-[#086CB4]">{item.SpecDetail}</span></div>
                        );
                    })
                }

                {children}

            </div>
            </div>
        </>
    )


}

export default function TechSpecsCard(){

    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06426D] to-[#086CB4] rounded-2xl opacity-20 blur-xl"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#06426D]/40 via-[#086CB4]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                <div className="w-full h-1 bg-gradient-to-r from-[#086CB4] to-[#06426D]"></div>

                
        
                <div className="p-6 md:p-10 flex flex-col h-full">
                    <TechHeading WhiteText='Technical' BlueText='Specifications'></TechHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        TechSpecs.map((item, index) => {

                            return(
                                <TechSpec data={item} key={index + "TechSpec"}></TechSpec>
                            )
                        })
                    }
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