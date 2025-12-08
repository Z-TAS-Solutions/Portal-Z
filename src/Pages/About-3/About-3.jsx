import { Hand, Cloud, Shield } from 'lucide-react';

function LuneVeilSigil({ Title, Desc, Icon, HLabel, HValue, FLabel, FValue }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:border-cyan-500/60 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 w-12 h-12 rounded-lg flex items-center justify-center border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <div className="text-right">
          <div className="text-xs text-cyan-500 tracking-wider uppercase mb-1">{HLabel}</div>
          <div className="text-white">{HValue}</div>
        </div>
      </div>

      <h3 className="text-cyan-100 mb-3">
        {Title}
      </h3>
      <p className="text-slate-400 text-sm mb-4">
        {Desc}
      </p>

      <div className="pt-3 border-t border-cyan-500/20">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">{FLabel}</span>
          <span className="text-cyan-400">{FValue}</span>
        </div>
      </div>
    </div>
  );
}

export default function About3() {

  const featurePoints = [
    {
      icon: Hand,
      title: "Zero-Touch Interface",
      hlabel: "Mode",
      hvalue: "Contactless",
      flabel: "Detection Range",
      fvalue: "5-15cm",
      desc: "Hover-detection with proximity sensors. No physical contact, no contamination vectors, no bottlenecks."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Verification",
      hlabel: "",
      hvalue: "",
      flabel: "Encryption",
      fvalue: "",
      desc: "i dunno what to add here for now, later..."
    },
    {
      icon: Shield,
      title: "Immutable Audit Trail",
      hlabel: "FAR",
      hvalue: "<0.0001%",
      flabel: "Retention",
      fvalue: "Indefinite",
      desc: "Cryptographically signed access logs with tamper-proof timestamping. Full accountability with zero data loss."
    },
  ];

  return (
    <section className="flex flex-col items-center p-6 min-h-screen h-[300px] overflow-hidden">

      <div className="mb-20">
        <div className="text-cyan-500 tracking-[0.2em] text-xs mb-6 uppercase">
          The Solution
        </div>

        <h1 className="text-white mb-6">
          Vein-Driven {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
            Precision.
          </span>
        </h1>

        <div className="max-w-3xl">
          <p className="text-slate-300 mb-6">
            Transcending the basic scanner, Z-TAS is a palm-vein biometric engine built for high-throughput environments where milliseconds define efficiency.
          </p>
          <p className="text-slate-400">
            The system reads subcutaneous vein topology using near-infrared sensors, encrypts the data at the edge, and validates identity through cloud infrastructure—eliminating physical tokens, shared surfaces, and authentication latency.
          </p>
        </div>
      </div>


      <div className="mb-12 w-full">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="
              h-px flex-1
              bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
            "/>
          <h2
            className="
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r from-cyan-500 to-purple-500 
              uppercase 
              tracking-wider
            "
          >Core Architecture
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </div >

      <div className="grid grid-cols-3 w-full gap-10 flex-wrap">
        {featurePoints.map((feature, index) => (
          <div className="flex-1 ">
            <LuneVeilSigil
              key={index}
              Title={feature.title}
              Desc={feature.desc}
              Icon={feature.icon}
              HLabel={feature.hlabel}
              HValue={feature.hvalue}
              FLabel={feature.flabel}
              FValue={feature.fvalue} />
          </div>
        ))}
      </div>

    </section>
  );
}































































































































































































































































































































































































































































































































































































































































































































































































