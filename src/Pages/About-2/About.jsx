import { Snail, Skull, ShieldAlert, Timer, AlertTriangle, Wrench } from 'lucide-react';

function AegisGlyph({ IconObject, title, desc }) {
  return (
    <div
      className={`
            w-50
            relative aspect-square 
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
      }}>

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

    </div>


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
    <section className="flex flex-col items-center">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4 text-white">
          The problem we saw
        </h1>
        <p className="text-xl text-gray-400">Why traditional systems fail</p>
      </div>
      <div className="bg-slate-900 rounded-xl px-24 py-10">
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-18
          max-w-6xl w-full
          mx-auto">
          {problemPoints.map((point, index) => (
            <AegisGlyph IconObject={point.icon} title={point.title} desc={point.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
