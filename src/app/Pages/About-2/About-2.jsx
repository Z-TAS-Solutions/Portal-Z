import { useRef, useEffect, useState, useContext } from "react";
import useDisplayMode from "../../components/Helpers/DisplayMode.jsx";
import {
  Snail,
  Skull,
  ShieldAlert,
  Timer,
  AlertTriangle,
  Wrench,
} from "lucide-react";
import { ActiveHashContext } from "../../components/Helpers/HashContext.jsx";
import RuinicPathways from "./RuinicPathways";

import styles from "./About-2.module.css";

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

function AegisGlyph({ IconObject, title, desc, className = "" }) {
  return (
    <>
      <div className={"relative w-50 aspect-square group " + { className }}>
        <div
          className={`
            absolute inset-0
            bg-slate-900/50
            backdrop-blur-m
            transition-all
            duration-300
            overflow-hidden
            border-2 border-red-500
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
              className={`w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mb-3 border border-current/20 relative z-10`}
            >
              <IconObject className="w-7 h-7 text-red-400" />
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

function InferiorAegisGlyph({
  IconObject,
  title,
  desc,
  className = "",
  padding = "1",
  style = {},
  onClick = null,
  index,
}) {
  return (
    <div
      className={`group flex justify-center items-center ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      <div className="w-full h-full aspect-square flex justify-center items-center">
        <div
          className={`
            aspect-square 
            w-full
            bg-slate-900/60
            transition-all 
            duration-300 
            overflow-hidden 
            border-2 border-red-500
            flex justify-center items-center
            rotate-45 
            p-${padding}`}
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

          <div className="size-[85%] flex items-center justify-center ">
            <IconObject className="-rotate-45 bg-red-500/20 rounded-full border border-red-400/20 p-[7px] size-1/2 aspect-square text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CyberGlyph({ color = "#0ff" }) {
  return (
    <svg viewBox="5 4 88 39" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke={color}
        fill="rgba(10, 10, 5, 0.2)"
        strokeWidth={0.4}
        d="M7 12v21l3 3h36l6 6h37l3-3V12l-6-5H13z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={0.4}
        d="M85 5H12L8 9m40 31-3-3H11"
      />
      <text
        style={{
          fill: color,
          fontSize: 2,
          fontStyle: "italic",
          whiteSpace: "pre",
        }}
        x={11}
        y={40}
      >
        {
          "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0"
        }
      </text>
    </svg>
  );
}

function ellipsePointGen(centerX, centerY, a, b, angleInDegrees) {
  const t = angleInDegrees * (Math.PI / 180);

  const cosT = Math.cos(t);
  const sinT = Math.sin(t);

  const r = (a * b) / Math.sqrt(Math.pow(b * cosT, 2) + Math.pow(a * sinT, 2));

  return {
    x: centerX + r * cosT,
    y: centerY + r * sinT,
  };
}

function OrbitPosGen({ baseRot = 0, radius = 180 }) {
  return Array.from({ length: 12 }).map((_, index) => {
    const angle = (baseRot - index * 30) * (Math.PI / 180);

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
}

export default function About2({ id }) {
  const problemPoints = [
    {
      icon: Snail,
      title: "Slow Entry",
      description:
        "Slow processing and frequent re-scans create bottlenecks, wasting employee time and slowing down facility throughput.",
    },
    {
      icon: Skull,
      title: "Unhygenic Contact",
      description:
        "Shared touchpoints raise health concerns by spreading germs, especially in high-traffic areas.",
    },
    {
      icon: ShieldAlert,
      title: "Weak Credentials",
      description:
        "Traditional biometrics can be easy to replicate; fake fingerprints or high-res photos can compromise security.",
    },
    {
      icon: Timer,
      title: "Operational Delays",
      description:
        "Slow authentication speeds decrease overall facility efficiency and cause queuing at entry points.",
    },
    {
      icon: AlertTriangle,
      title: "Security Risks",
      description:
        "Easy to replicate, Legacy biometrics are physically deposited on the environment. Every time you touch a glass or a door handle, you are leaving a copy of your password behind.",
    },
    {
      icon: Wrench,
      title: "High Maintenance",
      description:
        "Physical hardware wears down over time, requiring frequent cleaning, recalibration, and expensive repairs.",
    },
    {
      icon: Snail,
      title: "Slow Entry",
      description:
        "Slow processing and frequent re-scans create bottlenecks, wasting employee time and slowing down facility throughput.",
    },
    {
      icon: Skull,
      title: "Unhygenic Contact",
      description:
        "Shared touchpoints raise health concerns by spreading germs, especially in high-traffic areas.",
    },
    {
      icon: ShieldAlert,
      title: "Weak Credentials",
      description:
        "Traditional biometrics can be easy to replicate; fake fingerprints or high-res photos can compromise security.",
    },
    {
      icon: Timer,
      title: "Operational Delays",
      description:
        "Slow authentication speeds decrease overall facility efficiency and cause queuing at entry points.",
    },
    {
      icon: AlertTriangle,
      title: "Security Risks",
      description:
        "Easy to replicate, Legacy biometrics are physically deposited on the environment. Every time you touch a glass or a door handle, you are leaving a copy of your password behind.",
    },
    {
      icon: Wrench,
      title: "High Maintenance",
      description:
        "Physical hardware wears down over time, requiring frequent cleaning, recalibration, and expensive repairs.",
    },
  ];

  const glyphOrbiter = useRef(null);
  const activeGlyph = useRef(-1);
  const [activeGlyphLabel, setActiveGlyphLabel] = useState(0);
  const loader = useRef(null);

  const displayMode = useDisplayMode();

  const orbitPos = OrbitPosGen({
    baseRot: displayMode ? -90 : 180,
    radius: displayMode ? 180 : 220,
  });

  const MoveGlyph = ({ angle }) => {
    const glyphs = glyphOrbiter.current.querySelectorAll(".glyph");
    glyphs.forEach((glyph, index) => {
      const inactiveStart = activeGlyph.current + (2 % 12);

      const distance = (index - inactiveStart + 12) % 12;

      if (distance > 0 && distance < 8) {
        glyph.style.display = "none";
      } else if (index === activeGlyph.current) {
        glyph.style.transform = ` translate3d(${orbitPos[index].x}px, ${orbitPos[index].y}px, 0) rotate(-${angle}deg) scale(1.8) ${displayMode ? "translateY(-35%)" : "translateX(80px)"}`;
        glyph.style.display = "block";
      } else {
        glyph.style.transform = `translate3d(${orbitPos[index].x}px, ${orbitPos[index].y}px, 0) rotate(-${angle}deg)`;
        glyph.style.display = "block";
      }
    });
  };

  const GoTo = ({ index }) => {
    activeGlyph.current = index - 1;
    setActiveGlyphLabel(activeGlyph.current);
    const angle = activeGlyph.current * 30;
    glyphOrbiter.current.style.transform = `rotate(${angle}deg)`;

    MoveGlyph({ angle: angle });
  };

  const Next = () => {
    activeGlyph.current = (activeGlyph.current + 1) % 12;
    setActiveGlyphLabel(activeGlyph.current);
    const angle = activeGlyph.current * 30;
    glyphOrbiter.current.style.transform = `rotate(${angle}deg)`;

    MoveGlyph({ angle: angle });
  };

  const Prev = () => {
    activeGlyph.current = (activeGlyph.current - 1 + 12) % 12;
    setActiveGlyphLabel(activeGlyph.current);
    const angle = activeGlyph.current * 30;
    glyphOrbiter.current.style.transform = `rotate(${angle}deg)`;

    MoveGlyph({ angle: angle });
  };

  const activeHash = useContext(ActiveHashContext);

  useEffect(() => {
    loader.current.classList.remove(styles.AnimateInfiniteScale);
    if (activeHash !== "about") return;
    loader.current.classList.add(styles.AnimateInfiniteScale);
    Next();

    let timer;

    const exec = () => {
      Next();

      timer = setTimeout(exec, 4000);
    };

    timer = setTimeout(exec, 4000);

    return () => clearTimeout(timer);
  }, [displayMode, activeHash]);

  return (
    <section
      id={id}
      className="
      relative min-h-screen
      p-6 w-full overflow-hidden scroll-mt-5 py-[4%] gap-16
      flex flex-col items-center
      "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/4 w-full h-1/3 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/4 w-full h-1/3 bg-blue-900/19 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-start w-full z-10 gap-6">
        <div className="flex-1 min-w-0">
          <GlyphMaestroRune
            accentLine="THE PROBLEM WE SAW"
            primaryLine={
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                The{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  State
                </span>{" "}
                of Authorization
              </h2>
            }
            secondaryLine="Six inherent blind spots embedded in conventional authorization..."
          />
        </div>

        <div className="w-full md:w-64 font-mono text-[11px] leading-relaxed select-none pointer-events-none">
          <div className="border-t border-white/10 pt-4 flex flex-col gap-1">
            <div className="flex justify-between text-cyan-400/60">
              <span>CPU_LOAD</span>
              <span>[||||||----] 65%</span>
            </div>

            <div className="text-white/50 truncate">
              {"> RUNNING: security_audit_v2.exe"}
            </div>
            <div className="text-white/50 truncate">
              {"> FETCHING: VULNERABILITY_METRICS..."}
            </div>
            <div className="text-red-500/80 animate-pulse">
              {"> WARNING: ANOMALIES_DETECTED"}
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`relative w-[70%] flex items-center justify-center`}>
        <div className={`absolute  ${styles.AnimateSpinner}`}>
          {problemPoints.map((point, index) => {
            return (
              <div
                key={index}
                className={`absolute `}
                onMouseEnter={() => setActiveDescription(point.description)}
              >
                <AegisGlyph
                  key={index}
                  IconObject={point.icon}
                  title={point.title}
                  desc={point.description}
                />
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-[min-content_min-content_min-content] gap-5 place-items-center justify-center grow ">
        <div
          className={`w-full h-full max-w-[200px] glyphOrbiter relative flex items-center md:items-center justify-center justify-self-center md:justify-self-end order-3 md:order-1`}
        >
          <div
            className={`transition-all duration-400 w-full ml-[200px] aspect-square translate-y-1/2 md:translate-y-0  relative flex items-center justify-center`}
            ref={glyphOrbiter}
            onClick={Next}
          >
            {problemPoints.map((point, index) => {
              return (
                <InferiorAegisGlyph
                  key={index}
                  index={index}
                  IconObject={point.icon}
                  title={point.title}
                  desc={point.description}
                  className={`glyph absolute size-14 md:w-20 hover:scale-110 transition-all duration-400`}
                  padding="0"
                  style={{
                    transform: `translate3d(${orbitPos[index].x}px, ${orbitPos[index].y}px, 0) scale(1)`,
                  }}
                  onClick={() => {
                    GoTo({ index: index });
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="h-full min-w-[100px] w-[150px] font-mono transition-all duration-300 order-2 flex flex-col justify-center items-center z-0">
          {/* {problemPoints[activeGlyphLabel].title} */}
          <div className="-rotate-90 md:rotate-none">
            <RuinicPathways className="w-full h-full" />
          </div>
        </div>

        <div
          className={`relative w-full max-w-[95%] md:max-w-[70%] md:min-w-[400px] h-fit gap-3 grid grid-cols-1 grid-rows-1 place-items-center justify-self-center md:justify-self-start order-1 md:order-3 ${styles.CyberGlyph}`}
        >
          <div className="flex h-fit w-full flex-grow gap-6 font-mono text-[10px] tracking-[0.2em] text-cyan-400/80 items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>
                MODE:
                <span className="text-white">LIVE</span>
              </span>
            </div>
            <span className="text-white/20">|</span>
            <span className="flex flex-col grow text-center">
              LAST ANALYSIS:
              <span className="text-white"> JAN 01 2196 </span>
            </span>
            <span className="text-white/20">|</span>
            <span>
              UPLINK: <span className="text-cyan-400">STABLE</span>
            </span>
          </div>

          <div className={`relative w-full h-fit `}>
            <CyberGlyph color="rgba(255,255,255,0.5)" />
            <span className="absolute inset-0 z-10 p-4 md:py-7 text-sm md:text-base text-center flex justify-center items-center tracking-wide text-slate-100/80 font-mono">
              {problemPoints[activeGlyphLabel].description}
            </span>
            {/* <div className="absolute w-full inset-0 translate-x-[3px] md:-translate-x-[5px] ${styles.AnimateFlicker}">
              <CyberGlyph color="#f0f" />
            </div>

            <div className="absolute w-full inset-0 -translate-x-[3px] md:translate-x-[5px]">
              <CyberGlyph color="#0ff" />
            </div> */}
          </div>

          <div className="w-[50%] bg-cyan-950/20 rounded-full h-1 overflow-hidden">
            <div ref={loader} className={`h-full w-full bg-sky-500`}></div>
            <div className="h-full w-full bg-white/10 "></div>
          </div>
          <span className="text-[14px] font-mono text-white/90">
            [ #00{1 + (activeGlyph.current % 6)} ]
          </span>
        </div>
      </div>
    </section>
  );
}
