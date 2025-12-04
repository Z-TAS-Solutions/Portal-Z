import { Database } from "lucide-react";
import { Server } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldAlert } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { FileCheck } from "lucide-react";
import TechHeading from "../../Components/Headings/TechHeading";


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


const Features = [feature_1, feature_2]


function Feature({children, data = {}}){

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


export default function FeaturesCard(){
    
    return(
        <div className="relative group w-full animate-in fade-in zoom-in duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06426D] via-[#086CB4] to-[#06426D] rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>
    
            <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
            <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                <div className="w-full h-1 bg-gradient-to-r from-[#086CB4] via-white/20 to-[#086CB4]"></div>

                <div className="p-6 md:p-10 flex flex-col h-full">
                    <TechHeading WhiteText = "Advanced Features &" BlueText = "Fraud Protection"></TechHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                    {Features.map((item, index) => (
                        <Feature key={index + "Feature"} data={item}></Feature>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

    );
}