import { Snail, Skull, ShieldAlert, Timer, AlertTriangle, Wrench } from 'lucide-react';

function GlyphMaestroRune({ accentLine, primaryLine, secondaryLine }) {
  return (
    <div className="flex gap-6">

      <div className="w-1 bg-blue-700 rounded-full" />

      <div className="space-y-2">
        <p className="uppercase tracking-widest text-xs text-gray-400 leading-none">
          {accentLine}
        </p>

        <span className="text-5xl font-semibold text-white leading-tight">
          {primaryLine}
        </span >

        <p className="text-gray-300 max-w-2xl">
          {secondaryLine}
        </p>
      </div>

    </div>
  );
}


function AegisGlyph({ IconObject, title, desc }) {
  return (
    <div
      className={`
            w-50
            relative group aspect-square 
            bg-slate-950/80             
            backdrop-blur-m 
            transition-all 
            duration-300 
            overflow-hidden
            border-2 border-cyan-400
            flex justify-center items-center
          `}
      style={{
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      }} >

      <div className="inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`
          absolute inset-0
          bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full 
          group-hover:translate-y-full transition-transform duration-1000 pointer-events-none
          `}>
        </div>
        <div className={`w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3 border border-current/20 relative z-10`}>
          <IconObject className="w-7 h-7 text-cyan-400" />
        </div>
        <h3 className="text-slate-100 mb-2 tracking-wide relative z-10">
          {title}
        </h3>
      </div>

    </div >


  );
}

export default function About() {
  const problemPoints = [
    {
      icon: Snail,
      title: "Slow Entry",
      description: "later..",
      color: "cyan"
    },
    {
      icon: Skull,
      title: "Unhygenic Contact",
      description: "later...",
      color: "red"
    },
    {
      icon: ShieldAlert,
      title: "Weak Credentials",
      description: "later...",
      color: "pink"
    },
    {
      icon: Timer,
      title: "Operational Delays",
      description: "later...",
      color: "cyan"
    },
    {
      icon: AlertTriangle,
      title: "Security Risks",
      description: "later...",
      color: "red"
    },
    {
      icon: Wrench,
      title: "High Maintenance",
      description: "later...",
      color: "purple"
    }
  ];

  return (
    <section className="relative flex flex-col items-center p-6 min-h-screen h-[300px] overflow-hidden">

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] 
        bg-[size:50px_50px]">
      </div>

      <div
        className="
        absolute inset-0 z-10
        bg-gradient-to-br from-cyan-500/8 via-transparent to-pink-500/5"
      >
      </div>
      <div
        className="
        absolute inset-0 h-[30%] w-[120%]
        bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.03)_50%)] 
        bg-[length:100%_4px] 
        pointer-events-none 
        animate-scan blur-lg
        rotate-30
        overflow-hidden">
      </div>

      <div className="w-full mb-4">
        <GlyphMaestroRune
          accentLine="THE PROBLEM WE SAW"
          primaryLine={
            <h2>
              The{" "}
              <span className="
                bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
                drop-shadow-[0_0_12px_rgba(0,200,255,0.1)]
                bg-clip-text 
                text-transparent">
                Collapse
              </span>{" "}
              of Legacy Authorization
            </h2>
          }
          secondaryLine="Six inherent blind spots embedded in conventional authorization - each
        one a structural gap that silently weakens your security architecture." />
      </div>
      <div className="rounded-xl px-24 py-10">
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-18
          max-w-6xl w-full
          mx-auto z-15">
          {problemPoints.map((point, index) => (
            <AegisGlyph IconObject={point.icon} title={point.title} desc={point.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
