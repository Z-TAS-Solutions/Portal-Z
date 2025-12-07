import { Clock, MapPin, Key, Timer, AlertTriangle, Wrench } from 'lucide-react';

function AegisGlyph({ iconObject, title, desc }) {
  return (
    <div className="rounded-xl border border-cyan-400 p-5">
      <div className="text-sky-400 text-3xl mb-3">{iconObject}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
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
            <AegisGlyph iconObject={<point.icon />} title={point.title} desc={point.description} />
          ))}
        </section>
      </div>
      {/*<AuraPane src="./src/palm-scan.png" alt="bleh" glowColor="cyan" glowRange="40px" />*/}
    </section>
  );
}
