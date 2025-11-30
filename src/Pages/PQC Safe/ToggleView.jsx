import OverviewCard from "./OverviewCard";
import TechSpecsCard from "./TechSpecsCard";
import FeaturesCard from "./FeaturesCard";
import HexTriToggleView from "../../Components/Toggles/HexTriToggleView";

export default function ToggleView({children, text="Interactive Button"}) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      <div className="mb-8 text-center space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-[#086CB4]/10 border border-[#086CB4]/30 text-[#086CB4] text-xs font-mono tracking-widest uppercase mb-4">
          {children ?? text}
        </div>
      </div>

      <HexTriToggleView
        labels={["OVERVIEW", "SPECS", "FEATURES"]}
        components={[
          <OverviewCard key="overview" />,
          <TechSpecsCard key="specs" />,
          <FeaturesCard key="features" />
        ]}
      />
    </div>
  );
}