"use client";

import { useState } from "react";
import {
  Cpu,
  Eye,
  ShieldCheck,
  Zap,
  Thermometer,
  Layers,
  Wifi,
  Camera,
} from "lucide-react";

const specs = [
  {
    category: "Vision System",
    items: [
      {
        title: "NIR Optical Module",
        detail:
          "Captures subcutaneous vein patterns invisible to the naked eye.",
        icon: <Eye className="w-5 h-5" />,
        stat: "850nm",
      },
      {
        title: "Intelligent LED Array",
        detail:
          "Adaptive infrared illumination for varied lighting conditions.",
        icon: <Zap className="w-5 h-5" />,
        stat: "Adaptive",
      },
      {
        title: "RGB Alignment Sensor",
        detail: "Real-time hand tracking ensures perfect user positioning.",
        icon: <Camera className="w-5 h-5" />,
        stat: "1080p",
      },
      {
        title: "ToF Proximity Field",
        detail: "Detects hand presence and triggers instant wake-up.",
        icon: <Wifi className="w-5 h-5" />,
        stat: "<20ms",
      },
    ],
  },
  {
    category: "Core Processing",
    items: [
      {
        title: "Neural Processing Board",
        detail: "On-device computation for immediate template matching.",
        icon: <Cpu className="w-5 h-5" />,
        stat: "Quad-Core",
      },
      {
        title: "CSI High-Speed Bridge",
        detail: "Lossless data transmission between sensor and core.",
        icon: <Layers className="w-5 h-5" />,
        stat: "Zero Latency",
      },
    ],
  },
  {
    category: "Chassis & Thermal",
    items: [
      {
        title: "Active Cooling Loop",
        detail: "Maintains optimal sensor temperature for consistent accuracy.",
        icon: <Thermometer className="w-5 h-5" />,
        stat: "Silent",
      },
      {
        title: "Polymer Matrix Shell",
        detail: "Custom 3D-fabricated housing for durability and ergonomics.",
        icon: <ShieldCheck className="w-5 h-5" />,
        stat: "Rugged",
      },
    ],
  },
];

function SpecRow({ item }) {
  return (
    <div
      className="
      group relative flex items-center justify-between
      p-6 rounded-xl
      bg-zinc-900/40 border border-white/5
      hover:bg-zinc-800/60 hover:border-white/10
      transition-all duration-300 ease-out
    "
    >
      <div className="flex items-start gap-5">
        <div
          className="
          p-3 rounded-lg bg-zinc-950 border border-zinc-800 
          text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30
          transition-colors duration-300
        "
        >
          {item.icon}
        </div>
        <div>
          <h4 className="text-lg font-medium text-white mb-1 group-hover:text-blue-200 transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            {item.detail}
          </p>
        </div>
      </div>

      <div className="hidden sm:block text-right">
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-1">
          Spec
        </span>
        <span className="text-sm font-bold text-zinc-300 group-hover:text-white">
          {item.stat}
        </span>
      </div>
    </div>
  );
}

export default function HardwareSpecs() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
      <div className="hidden lg:block w-1/3 relative">
        <div className="sticky top-24">
          <div className="aspect-[4/5] bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center animate-pulse">
              <div className="w-32 h-32 rounded-full border border-emerald-500/30" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-mono text-zinc-500">
                SYSTEM ARCHITECTURE
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                {specs[activeCategory].category}
              </h3>
              <p className="text-zinc-400 text-sm">
                Precision hardware components working in unison to deliver
                low-FAR authorization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <div className="space-y-16">
          {specs.map((section, catIndex) => (
            <div
              key={catIndex}
              className="group"
              onMouseEnter={() => setActiveCategory(catIndex)}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 pl-4 border-l-2 border-blue-500">
                {section.category}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item, index) => (
                  <SpecRow key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

