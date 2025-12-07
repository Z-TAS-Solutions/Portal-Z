import HardwareSpecs from "./HardwareSpecs";

export default function Technology() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">
            Under the Hood
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Security.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Z-TAS isn't just a camera. It's a synchronized array of sensors and 
            compute modules designed to capture vascular patterns with clinical precision.
          </p>
        </div>

        <HardwareSpecs />
      </div>
    </section>
  );
}