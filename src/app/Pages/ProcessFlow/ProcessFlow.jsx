import React from "react";
import { Hand, Settings, Lock, ChevronRight } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "1. Capture & Stabilization",
    description: "The NIR Camera captures the unique vain patter",
    Icon: Hand,
  },
  {
    id: 2,
    title: "2. Geometry Extraction & Hashing",
    description:
      "Converted through geometry extraction, noise reduction and cryptographic hashing",
    Icon: Settings,
  },
  {
    id: 3,
    title: "3. Template Secure",
    description: "The final domestic template is prepared for and storage",
    Icon: Lock,
  },
];

export default function ProcessFlow({ id }) {
  return (
    <section className="relative w-full" id={id}>
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-full h-full bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="w-full md:w-80 lg:w-96 flex-none flex flex-col">
                <div className="relative h-full p-8 bg-gray-950 rounded-[2rem] border border-blue-900/50 shadow-[0_0_50px_-12px_rgba(37,99,235,0.6)] flex flex-col items-center text-center group transition-transform hover:scale-[1.02]">
                  <step.Icon className="w-24 h-24 text-blue-500 mb-6 stroke-[1.5px] drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]" />

                  <h3 className="text-white text-2xl font-bold mb-4 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden md:flex self-center">
                  <ChevronRight className="w-12 h-12 text-blue-500 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
