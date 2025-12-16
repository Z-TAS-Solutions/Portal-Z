"use client";
import { useState, useRef } from "react";

const hoomans = [
  {
    id: 1,
    name: "Ruffian",
    npos: "absolute top-0 left-0 -translate-x-1/2",
    pos: "absolute top-0 left-2/6 -translate-x-1/2",
    line: "top-3/8 right-6/14 transform rotate-60",
    hooman: "/Assets/rafa.png",
  },
  {
    id: 2,
    name: "Saffiya",
    npos: "absolute top-0 left-6/6 -translate-x-1/2",
    pos: "absolute top-0 left-4/6 -translate-x-1/2",
    line: "top-3/8 left-6/14 transform rotate-120",
    hooman: "/Assets/saffy.png",
  },
  {
    id: 3,
    name: "Nidula Weerasinghe",
    npos: "absolute top-1/2 left-6/6 -translate-y-1/2",
    pos: "absolute top-1/2 right-0 -translate-y-1/2",
    line: "top-1/2 left-1/2 rotate-180",
    hooman: null,
  },
  {
    id: 4,
    name: "Alisha",
    npos: "absolute bottom-0 left-6/6 -translate-x-1/2",
    pos: "absolute bottom-0 left-4/6 -translate-x-1/2",
    line: "bottom-3/8 left-6/14 transform rotate-240",
    hooman: "/Assets/ali.png",
  },
  {
    id: 5,
    name: "Amna",
    npos: "absolute bottom-0 left-0 -translate-x-1/2",
    pos: "absolute bottom-0 left-2/6 -translate-x-1/2",
    line: "bottom-3/8 right-6/14 transform rotate-300 ",
    hooman: "/Assets/amna.png",
  },
  {
    id: 6,
    name: "Oshadha",
    npos: "absolute top-1/2 right-6/6 -translate-y-1/2",
    pos: "absolute top-1/2 left-0 -translate-y-1/2",
    line: "top-1/2 right-1/2",
    hooman: null,
  },
];

const HexagonProfile = ({
  src = null,
  alt = "",
  fill = "none",
  stroke = "blue",
  strokeWidth = 0.5,
  className = "",
  imgClassName = "",
  size = "150",
  onMouseEnter = null,
  onMouseLeave = null,
}) => {
  console.log({ src });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <defs>
        <clipPath id="hexClip">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </clipPath>
      </defs>

      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <image
        href={src}
        x="0"
        y="2"
        width="24"
        height="24"
        clipPath="url(#hexClip)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

const NameTag = ({ name, title, className }) => {
  return (
    <div
      className={`flex flex-col bg-black text-white font-sans border-2 border-transparent hover:border-cyan-400 transition-colors duration-300 ${className}`}
    >
      <div className="flex justify-between w-full h-2">
        <div className="w-4 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="w-4 border-t-2 border-r-2 border-cyan-400"></div>
      </div>

      <div className="flex-grow p-6 flex flex-col justify-center relative">
        <h2 className="text-2xl font-bold uppercase tracking-wider">{name}</h2>

        <p className="text-sm text-cyan-400 mt-1 uppercase opacity-80">
          {title}
        </p>
      </div>

      <div className="flex justify-between w-full h-2">
        <div className="w-4 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="w-4 border-b-2 border-r-2 border-cyan-400"></div>
      </div>
    </div>
  );
};

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

export default function TeamsPage({ id }) {
  const [outerLink, setOuterLink] = useState(false);

  const [innerLinks, setInnerLinks] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const ACTIVE = "#2b7fff";
  const INACTIVE = "#0d2373";
  const ACTIVE_T = "bg-[#2b7fff]";
  const INACTIVE_T = "bg-[#0d2373]";

  return (
    <section
      id={id}
      className="relative w-full flex items-center justify-center my-16"
    >
      <div className="absolute top-0 left-[3%]">
        <GlyphMaestroRune
          primaryLine={
            <h2 className="tracking-widest">
              OUR{" "}
              <span
                className="
                  drop-shadow-[0_0_12px_rgba(0,0,255,0.7)]
                  text-blue-400
                  font-extrabold
                "
              >
                TEAM
              </span>
            </h2>
          }
          accentLine="hoomans..."
          secondaryLine="HOOMANS EVERYWHERE !"
        />
      </div>

      <div className="relative mt-0 ml-50">
        <HexagonProfile
          className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
          size="600"
          strokeWidth="0.2"
          stroke={outerLink ? ACTIVE : INACTIVE}
        />

        <div className="relative h-[600px] w-[650px]">
          {hoomans.map((hooman, index) => (
            <>
              <div
                className={`w-1/4 h-[3px] absolute ${hooman.line} ${
                  innerLinks[index] ? ACTIVE_T : INACTIVE_T
                }`}
              >
                <div
                  className={`
                    w-1/4 h-[8px] 
                    rounded-full bg-cyan-400 blur 
                    absolute top-0 left-0 -translate-y-1/4 -translate-x-1/2
                    ${innerLinks[index] ? "animate-slow-move" : "animate-none"}
                  `}
                ></div>
                <div
                  className={`
                    w-1/4 h-[8px] 
                    rounded-full ${ACTIVE_T} blur-sm 
                    absolute top-0 left-0 -translate-y-1/4 -translate-x-1/2
                    ${innerLinks[index] ? "animate-slow-move" : "animate-none"}  
                  `}
                ></div>
              </div>

              <HexagonProfile
                className={`${hooman.pos} z-1`}
                size="200"
                src={hooman.hooman}
                alt={`Hooman Number ${hooman.id}`}
                fill="black"
                stroke={`${innerLinks[index] ? ACTIVE : INACTIVE}`}
                onMouseEnter={() => {
                  setInnerLinks((prev) => {
                    const tempLinks = [...prev];
                    tempLinks[index] = true;
                    return tempLinks;
                  });
                  setOuterLink(true);
                }}
                onMouseLeave={() => {
                  setInnerLinks((prev) => {
                    const tempLinks = [...prev];
                    tempLinks[index] = false;
                    return tempLinks;
                  });
                  setOuterLink(false);
                }}
              />

              <NameTag
                name={hooman.name}
                title="blehhh"
                className={hooman.npos}
              />
            </>
          ))}
        </div>
        <img
          onMouseEnter={() => {
            setInnerLinks(Array(6).fill(true));
            setOuterLink(true);
          }}
          onMouseLeave={() => {
            setInnerLinks(Array(6).fill(false));
            setOuterLink(false);
          }}
          src="Assets/ZTAS.png"
          alt="ZTAS-Logo"
          className="
          absolute top-1/2 left-1/2 
          -translate-y-1/2 -translate-x-1/2 
          object-cover 
          w-[150px]
          "
        />
      </div>
    </section>
  );
}
