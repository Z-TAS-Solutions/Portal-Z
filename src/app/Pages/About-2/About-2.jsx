import {
  Snail,
  Skull,
  ShieldAlert,
  Timer,
  AlertTriangle,
  Wrench,
} from "lucide-react";

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
        </span>

        <p className="text-gray-300 max-w-2xl">{secondaryLine}</p>
      </div>
    </div>
  );
}

function AegisGlyph({ IconObject, title, desc }) {
  return (
    <>
      <div className="relative w-50 aspect-square group">
        <div
          className={`
            absolute inset-0
            bg-slate-900/50
            backdrop-blur-m
            transition-all
            duration-300
            overflow-hidden
            border-2 border-cyan-400
            flex justify-center items-center
            rotate-45
          `}
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        ></div>

        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center p-6 text-center
            rotate-45 group
          "
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          <div
            className={`
              absolute inset-0
              bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full
              group-hover:translate-y-full 
              transition-transform duration-1000
              pointer-events-none
            `}
          ></div>

          <div className="-rotate-45 flex flex-col items-center justify-center">
            <div
              className={`w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3 border border-current/20 relative z-10`}
            >
              <IconObject className="w-7 h-7 text-cyan-400" />
            </div>

            <h3 className="text-slate-100 mb-2 tracking-wide relative z-10">
              {title}
            </h3>
          </div>
        </div>

        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <div
            className={`bg-slate-950/95 backdrop-blur-md border rounded-lg p-4 shadow-2xl`}
          >
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45`}
            ></div>
            <p className="text-slate-300 text-sm relative">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function About2({ id }) {
  const problemPoints = [
    {
      icon: Snail,
      title: "Slow Entry",
      description:
        "Slow processing and frequent re-scans create bottlenecks, wasting employee time and slowing down facility throughput.",
      color: "cyan",
    },
    {
      icon: Skull,
      title: "Unhygenic Contact",
      description:
        "Shared touchpoints raise health concerns by spreading germs, especially in high-traffic areas.",
      color: "red",
    },
    {
      icon: ShieldAlert,
      title: "Weak Credentials",
      description:
        "Traditional biometrics can be easy to replicate; fake fingerprints or high-res photos can compromise security.",
      color: "pink",
    },
    {
      icon: Timer,
      title: "Operational Delays",
      description:
        "Slow authentication speeds decrease overall facility efficiency and cause queuing at entry points.",
      color: "cyan",
    },
    {
      icon: AlertTriangle,
      title: "Security Risks",
      description:
        "Easy to repliiate, Legacy biometrics are physically deposited on the environment. Every time you touch a glass or a door handle, you are leaving a copy of your password behind.",
      color: "red",
    },
    {
      icon: Wrench,
      title: "High Maintenance",
      description:
        "Physical hardware wears down over time, requiring frequent cleaning, recalibration, and expensive repairs.",
      color: "purple",
    },
  ];

  return (
    <section
      id={id}
      className="
      relative min-h-screen flex flex-col items-center justify-center 
      p-6 w-full overflow-hidden scroll-mt-5 bg-zinc-950 "
    >
      {/* <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-900/20 blur-[50px] rounded-full pointer-events-none"></div> */}
      {/* <div
        className="
        absolute inset-0 z-0 
        bg-gradient-to-br from-cyan-500/8 via-transparent to-pink-500/5 
        pointer-events-none
        "
      ></div> */}

      <div className="w-full mb-12 z-10 ">
        <GlyphMaestroRune
          accentLine="THE PROBLEM WE SAW"
          primaryLine={
            <h2>
              The{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Collapse
              </span>{" "}
              of Legacy Authorization
            </h2>
          }
          secondaryLine="Six inherent blind spots embedded in conventional authorization..."
        />
      </div>

      <div className="relative flex flex-col justify-center items-center ">
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8 md:gap-18 
          space-x-30
          w-[70%]"
        >
          {problemPoints.map((point, index) => (
            <AegisGlyph
              key={index}
              IconObject={point.icon}
              title={point.title}
              desc={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
