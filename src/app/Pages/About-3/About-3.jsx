import { Hand, Cloud, Shield } from "lucide-react";
import React from "react";
function ImageCard({ src, alt, properties = "" }) {
  const clipId = "customClip";

  const viewBoxWidth = 430;
  const viewBoxHeight = 230;

  const customPath =
    "M 30 0 L 400 0 C 420 0 430 10 430 30 L 430 200 C 430 220 420 230 400 230 L 100 230 L 30 150 C 10 140 0 130 0 110 L 0 30 C 0 10 10 0 30 0 Z";

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <path d={customPath} />
        </clipPath>
      </defs>
      <foreignObject
        x="0"
        y="0"
        width={viewBoxWidth}
        height={viewBoxHeight}
        clipPath={`url(#${clipId})`}
      >
        <img
          src={src}
          alt={alt}
          className={"w-full h-full object-cover block" + properties}
        />
      </foreignObject>
    </svg>
  );
}

function LuneVeilSigil({ Title, Desc, Icon, HLabel, HValue, FLabel, FValue }) {
  return (
    <div
      className="
      bg-slate-900/50 
      backdrop-blur-sm 
      rounded-xl 
      p-6 
      border border-cyan-500/30 
      shadow-[0_0_30px_rgba(6,182,212,0.3)] 
      hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] 
      hover:border-cyan-500/60 transition-all duration-300 group
      "
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="
          bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 
          w-12 h-12 
          rounded-lg 
          flex items-center justify-center 
          border border-cyan-500/50 
          shadow-[0_0_20px_rgba(6,182,212,0.4)]
          "
        >
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <div className="text-right">
          <div className="text-xs text-cyan-500 tracking-wider uppercase mb-1">
            {HLabel}
          </div>
          <div className="text-white">{HValue}</div>
        </div>
      </div>

      <h3 className="text-cyan-100 mb-3">{Title}</h3>
      <p className="text-slate-400 text-sm mb-4">{Desc}</p>

      <div className="pt-3 border-t border-cyan-500/20">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">{FLabel}</span>
          <span className="text-cyan-400">{FValue}</span>
        </div>
      </div>
    </div>
  );
}

export default function About3({ id }) {
  const featurePoints = [
    {
      icon: Cloud,
      title: "Cloud-Native Verification",
      hlabel: "LATENCY",
      hvalue: "<900ms",
      flabel: "Encryption",
      fvalue: "AES-256 | KYBER | DILITHIUM",
      desc: "Quantum secure transmission to verification nodes. Sub-second authentication with enterprise-grade security.",
    },
    {
      icon: Hand,
      title: "Zero-Touch Interface",
      hlabel: "Mode",
      hvalue: "Contactless",
      flabel: "Detection Range",
      fvalue: "5-15cm",
      desc: "Hover-detection with proximity sensors. No physical contact, no contamination vectors, no bottlenecks. no compromises",
    },
    {
      icon: Shield,
      title: "Immutable Audit Trail",
      hlabel: "FAR",
      hvalue: "<0.0001%",
      flabel: "Retention",
      fvalue: "Indefinite",
      desc: "Cryptographically signed access logs with tamper-proof timestamping. Full accountability with zero data loss.",
    },
  ];

  return (
    <section
      id={id}
      className="flex flex-col items-center p-6 min-h-screen mb-10 overflow-hidden"
    >
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mx-10">
          <div>
            <div className="text-cyan-500 tracking-[0.2em] text-xs mb-6 uppercase flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500" />
              The Solution
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500" />
            </div>

            <div className="mb-8">
              <h1 className="text-white mb-0 text-4xl md:text-6xl lg:text-7xl">
                Vein Driven
              </h1>
              <div className="relative inline-block">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-5xl md:text-7xl lg:text-8xl animate-pulse mb-0">
                  Precision.
                </h1>
              </div>
            </div>

            <div>
              <p className="text-slate-300 mb-6">
                Transcending the basic scanner, Z-TAS is a palm-vein biometric
                engine built for high-throughput environments where milliseconds
                define efficiency.
              </p>
              <p className="text-slate-400">
                The system reads subcutaneous vein topology using near-infrared
                sensors, encrypts the data at the edge, and validates identity
                through cloud infrastructure—eliminating physical tokens, shared
                surfaces, and authentication latency.
              </p>
            </div>
          </div>

          <div className="relative group mb-5 mt-15 ">
            <div className="absolute inset-0 overflow-hidden rounded-xl z-20 pointer-events-none h-full w-full animate-slide">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>

            <div className="absolute bg-black w-full h-full mix-blend-overlay z-1 opacity-75"></div>

            <div className="absolute top-4 left-4 text-cyan-400 text-xs font-mono">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>SCANNING ACTIVE</span>
              </div>
              <div className="text-cyan-500/100">NIR_SENSOR_01</div>
            </div>

            <div className="relative flex items-center justify-center">
              <img
                src="Assets/veinless-scan.png"
                alt="Vein Scan Image"
                className="
                w-[70%] 
                object-cover 
                block inset-0
                
                "
              />
              <img
                src="Assets/vein-scan.png"
                alt="Vein Scan Image"
                className="
                w-[70%] 
                object-cover
                block absolute inset-0 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                animate-slide-mask
                "
                style={{
                  WebkitMaskImage: "url(/Assets/solid-color-image.png)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "100% 20%",

                  maskImage: "url(/Assets/solid-color-image.png)",
                  maskRepeat: "no-repeat",
                  maskPosition: "0% 80%",
                  maskSize: "100% 20%",
                }}
              />
            </div>

            <div className="absolute bottom-4 right-4 text-right text-xs font-mono">
              <div className="text-cyan-400 mb-1">MATCH: 99.97%</div>
              <div className="text-cyan-500/100">AUTH_VERIFIED</div>
            </div>

            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
          </div>
        </div>
      </div>

      <div className="mb-12 w-full">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="
              h-px flex-1
              bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
            "
          />
          <h2
            className="
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r from-cyan-500 to-purple-500 
              uppercase 
              tracking-wider
            "
          >
            Core Architecture
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-[95%] gap-x-[5%] lg:gap-x-[4%] gap-y-10">
        {featurePoints.map((feature, index) => (
          <div
            className="sm:w-[65%] md:w-[47%] lg:max-w-[40%] xl:w-[30%] h-full"
            key={index}
          >
            <LuneVeilSigil
              Title={feature.title}
              Desc={feature.desc}
              Icon={feature.icon}
              HLabel={feature.hlabel}
              HValue={feature.hvalue}
              FLabel={feature.flabel}
              FValue={feature.fvalue}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
