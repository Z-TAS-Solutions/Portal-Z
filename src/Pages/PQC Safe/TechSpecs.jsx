import { ShieldCheck, Lock } from 'lucide-react';


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

export const TechSpecs = [TechSpec_0, TechSpec_1]

export default function TechSpec({ data, children }){

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