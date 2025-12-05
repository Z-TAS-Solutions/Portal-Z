import TechHeading from "../Headings/TechHeading";

export default function SpecCard(
{ 
    WhiteTitle = "", 
    BlueTitle = "",
    gridSize = "", 
    cards = null,
    children,
    AlternateTitle = null
}
)
{
    return(
        <>
            <div className="relative group w-full animate-in fade-in zoom-in duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#06426D] via-[#086CB4] 
                to-[#06426D] rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>
    
                <div className="relative p-[1px] bg-gradient-to-b from-[#086CB4]/40 via-[#06426D]/20 to-transparent rounded-2xl">
                <div className="relative bg-[#02040a] rounded-2xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                    <div className="w-full h-1 bg-gradient-to-r from-[#086CB4] via-white/20 to-[#086CB4]"></div>

                    <div className= "p-6 md:p-10 flex flex-col h-full">
                        <TechHeading WhiteText = {WhiteTitle} BlueText = {BlueTitle} ></TechHeading>
                        {AlternateTitle}

                    <div className={gridSize}>
                        {cards}
                    </div>
                    <>
                        {children}
                    </>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
}