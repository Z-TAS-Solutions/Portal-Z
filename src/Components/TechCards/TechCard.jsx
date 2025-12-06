export default function TechCard({ title = "Bleh Bleh", 
  description = "Blehscription is telling you to bleh!"}) {
  return (
    <div
      className="
      bg-black text-white rounded-2xl 
        px-6 py-5 w-[360px]
        shadow-[0_0_20px_#007BFF] border border-[#007BFF]
        transition-all duration-300 
        hover:shadow-[0_0_45px_#007BFF] hover:scale-105 hover:brightness-110
        cursor-pointer select-none
      "
    >
      <h2 className="font-bold text-lg mb-1 text-center">{title}</h2>
      <p className="text-sm text-center opacity-90 leading-snug">{description}</p>
    </div>
  );
}
