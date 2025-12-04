import OverviewCard from "./OverviewCard";
import HexTriToggleView from "../../Components/Toggles/HexTriToggleView";
import SpecCard from "../../Components/TechCards/SpecCard";
import FeatureCard from "./Features";
import { Features } from "./Features";
import TechSpec from "./TechSpecs";
import { TechSpecs } from "./TechSpecs";
import { Network } from "lucide-react";

export default function ToggleView({children, text="Interactive Button"}) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      <div className="mb-8 text-center space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-[#086CB4]/10 border 
        border-[#086CB4]/30 text-[#086CB4] text-xs font-mono tracking-widest uppercase mb-4">
          {children ?? text}
        </div>
      </div>

      <HexTriToggleView
        labels={["OVERVIEW", "SPECS", "FEATURES"]}
        components={[
          <OverviewCard key="overview" />,
          <SpecCard
            WhiteText = "Technical"
            BlueText = "Specifications"
            gridSize = "grid grid-cols-1 md:grid-cols-2 gap-6"
            cards = {TechSpecs.map((item, index) => {

                            return(
                                <TechSpec data={item} key={index + "TechSpec"}></TechSpec>
                            )
                        })}>
            <div className="mt-8 pt-6 border-t border-[#086CB4]/20 flex items-start gap-4">
                <Network className="w-6 h-6 text-[#086CB4] mt-1 shrink-0" />
                <div>
                    <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Protocol Handshake</h5>
                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                    [INIT] TLS 1.3 Extension → [HELLO] Hybrid Key Exchange (X25519 + Kyber) → [AUTH] Certificate Verify (Dilithium) → [ESTABLISHED] 0-RTT Quantum Tunnel.
                    </p>
                </div>
            </div>
          </SpecCard>,
          <SpecCard
              WhiteText="Advanced Features &"
              BlueText = "Fraud Protection"
              gridSize = "grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow"
              cards = {Features.map((item, index) => (
                              <FeatureCard key={index + "FeatureCard"} data={item}></FeatureCard>
                          ))}>
          </SpecCard>
        ]}
      />
    </div>
  );
}