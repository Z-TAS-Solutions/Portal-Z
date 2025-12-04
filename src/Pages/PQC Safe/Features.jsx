import { Database } from "lucide-react";
import { Server } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { FileCheck } from "lucide-react";

const FeatureStyle = {
    TitleIconStyle : "w-6 h-6 text-[#086CB4]",
    FeatureIconStyle : "w-5 h-5 text-[#086CB4] mt-1 shrink-0"
}


const feature_1 = {
    Title : "Data Sovereignty",
    TitleIcon : Database,
    Features : [
        {
            Feature : "PostgreSQL",
            Description : "Relational integrity & secure storage",
            Icon : Server

        },
        {
            Feature : "IPFS (Decentralized)",
            Description : "Distributed immutable file system",
            Icon : Globe

        }
    ]
}


const feature_2 = {
    Title : "Fraud Prevention",
    TitleIcon : ShieldAlert,
    Features : [
        {
            Feature : "Palm Geometric Analysis",
            Description : "Biometric vector verification",
            Icon : Fingerprint 

        },
        {
            Feature : "Session Confirmation",
            Description : "Real-time auth token validation",
            Icon : FileCheck 

        }
    ]
}


export const Features = [feature_1, feature_2]


export default function FeatureCard({children, data = {}}){

    const TitleIconComponent = data.TitleIcon;

    return(
        <div className="group/card relative">
        <div className="absolute inset-0 bg-[#086CB4]/5 rounded-xl 
        blur-sm transition-opacity opacity-0 group-hover/card:opacity-100"></div>
        <div className="relative h-full bg-[#086CB4]/5 border border-[#086CB4]/20 
        rounded-xl p-6 hover:border-[#086CB4]/50 transition-all duration-300 flex flex-col">

            <div className="flex items-center gap-3 mb-6 border-b border-[#086CB4]/20 pb-4">
            <div className="p-2 bg-[#086CB4]/10 rounded-lg">
                <TitleIconComponent className={FeatureStyle.TitleIconStyle}/>
            </div>
            <h4 className="text-xl font-bold text-gray-100">{data.Title}</h4>
            </div>

            <ul className="space-y-4 flex-grow">

            {data.Features.map((item,index) => {
                const IconComponent = item.Icon;
                
                return(
                    <li className="flex items-start gap-3" key={index + "listItem"}>
                        <IconComponent className={FeatureStyle.FeatureIconStyle}/>
                        <div>
                        <span className="block text-white font-semibold">{item.Feature}</span>
                        <span className="text-xs text-gray-400">{item.Description}</span>
                        </div>
                    </li>
                );

            }
            )}

            </ul>

            {children}

        </div>
        </div>
    )

}