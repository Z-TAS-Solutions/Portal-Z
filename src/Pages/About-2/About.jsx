import { Clock, MapPin, Key, Timer, AlertTriangle, Wrench } from 'lucide-react';

function AegisGlyph({ IconObject, title, desc }) {
  return (

    // <div className="rounded-xl border border-cyan-400 p-5">
    //   <div className="text-sky-400 text-3xl mb-3">{iconObject}</div>
    //   <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    //   <p className="text-gray-400 text-sm">{desc}</p>
    // </div>
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
      icon: Clock,
      title: "Slow Entry",
      description: "later..",
      color: "cyan"
    },
    {
      icon: MapPin,
      title: "Touchpoints",
      description: "later...",
      color: "red"
    },
    {
      icon: Key,
      title: "Weak Credentials",
      description: "Physical badges and cards can be easily lost, stolen, or duplicated, creating significant security gaps in access control systems.",
      color: "pink"
    },
    {
      icon: Timer,
      title: "Delays",
      description: "later...",
      color: "cyan"
    },
    {
      icon: AlertTriangle,
      title: "Risks",
      description: "later...",
      color: "red"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "later...",
      color: "purple"
    }
  ];

  return (
    <section>
      <div className="w-full">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4 text-white">
            The problem we saw
          </h1>
          <p className="text-xl text-gray-400">Why traditional systems fail</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {problemPoints.map((point, index) => (
            <AegisGlyph IconObject={point.icon} title={point.title} desc={point.description} />
          ))}
        </section>
      </div>
      {/*<AuraPane src="./src/palm-scan.png" alt="bleh" glowColor="cyan" glowRange="40px" />*/}
    </section>
  );
}
