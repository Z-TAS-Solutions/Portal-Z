import OverviewCard from "./OverviewCard";
import TechSpecsCard from "./TechSpecsCard";
import HexToggleView from "./HexToggleView";

export default function ToggleView() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      <div className="mb-12 text-center space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-[#086CB4]/10 border border-[#086CB4]/30 text-[#086CB4] text-xs font-mono tracking-widest uppercase mb-4">
          Interactive BULL shi*
        </div>
      </div>

      <HexToggleView 
        leftLabel="OVERVIEW"
        rightLabel="TECH SPECS"
        leftComponent={<OverviewCard></OverviewCard>}
        rightComponent={<TechSpecsCard></TechSpecsCard>}
      />

    </div>
  );
}