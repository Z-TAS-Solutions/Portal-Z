export default function TechHeading({ WhiteText = "So white", BlueText  = "so blue" }){

    return (
        <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2 drop-shadow-md">
            {WhiteText} <span className="text-[#086CB4]"> {BlueText} </span>
            </h3>
            <div className="h-1 w-24 bg-[#086CB4]/30 mx-auto rounded-full"></div>
        </div>

    )

}