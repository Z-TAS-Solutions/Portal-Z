"use client";
import { useState, useRef } from "react";

const hoomans = [
  {
    id: 1,
    name: "Rafa Rizvi",
    Title: "ruffian",
    npos: "absolute -top-[2%] -translate-x-[70%] text-right",
    pos: "absolute left-5/16 -translate-x-1/2",
    line: "top-4/10 right-6/14 transform rotate-55",
    hooman: "/Assets/rafa.webp",
  },
  {
    id: 2,
    name: "Saffiya Sanhar",
    Title: "suffian",
    npos: "absolute -top-[2%] left-[90%] text-left",
    pos: "absolute right-0 -translate-x-1/2",
    line: "top-4/10 left-6/14 transform rotate-125",
    hooman: "/Assets/saffy.webp",
  },
  {
    id: 3,
    name: "Nidula Weerasinghe",
    Title: "",
    npos: "absolute top-1/2 left-[99%] md:left-[106%] -translate-y-[15%] md:-translate-y-1/2 text-left",
    pos: "absolute top-1/2 -right-1/32 -translate-y-1/2",
    line: "top-1/2 left-1/2 rotate-180",
    hooman: null,
  },
  {
    id: 4,
    name: "Alisha Mohomed",
    Title: "alien",
    npos: "absolute -bottom-[2%] left-[90%] text-left",
    pos: "absolute top-4 right-0/16 -translate-x-1/2",
    line: "bottom-4/10 left-6/14 transform rotate-235",
    hooman: "/Assets/ali.webp",
  },
  {
    id: 5,
    name: "Amna Yousuf",
    Title: "amnian",
    npos: "absolute -bottom-[2%]  -translate-x-[70%] text-right",
    pos: "absolute top-4 left-5/16 -translate-x-1/2",
    line: "bottom-4/10 right-6/14 transform rotate-305 ",
    hooman: "/Assets/amna.webp",
  },
  {
    id: 6,
    name: "Oshadha Bhanu",
    Title: "",
    npos: "absolute top-1/2 -translate-x-[103%] md:-translate-x-[115%] -translate-y-[60%] md:-translate-y-1/2 text-right",
    pos: "absolute top-1/2 -left-1/32 -translate-y-1/2",
    line: "top-1/2 right-1/2",
    hooman: null,
  },
];

function GlyphMaestroRune({ accentLine, primaryLine, secondaryLine }) {
  return (
    <div className="flex gap-6">
      <div className="w-1 bg-blue-700 rounded-full" />

      <div className="space-y-2">
        <p className="uppercase tracking-widest text-xs text-blue-300 leading-none">
          {accentLine}
        </p>

        <span className="text-5xl font-semibold text-white leading-tight">
          {primaryLine}
        </span>

        <p className="text-gray-400 max-w-2xl">{secondaryLine}</p>
      </div>
    </div>
  );
}

const HexagonContainer = ({
  fill = "none",
  stroke = "blue",
  strokeWidth = 0.5,
  className = "",
  onMouseEnter = null,
  onMouseLeave = null,
  object = null,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <foreignObject
        x="0"
        y="0"
        width="24"
        height="24"
        style={{ overflow: "visible" }}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="w-full h-full flex justify-center items-center"
        >
          {object}
        </div>
      </foreignObject>
    </svg>
  );
};

const HexagonProfile = ({
  src = null,
  alt = "",
  fill = "none",
  stroke = "blue",
  strokeWidth = 0.5,
  className = "",
  imgClassName = "",
  onMouseEnter = null,
  onMouseLeave = null,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <defs>
        <clipPath id="hexClip">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" />
        </clipPath>
      </defs>

      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"
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
        className=""
        preserveAspectRatio="xMidYMid slice"
        loading="lazy"
        priority="false"
      />
    </svg>
  );
};

const NameTag = ({ name, title, className }) => {
  return (
    <div
      className={`
        flex flex-col text-white font-sans 
        border-2 border-transparent 
        hover:border-cyan-400 
        transition-colors duration-300 ${className}

      `}
    >
      <div className="flex justify-between w-full h-2">
        <div className="w-4 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="w-4 border-t-2 border-r-2 border-cyan-400"></div>
      </div>

      <div className="flex-grow p-1 flex flex-col justify-center relative">
        <h2
          className={`
          xl:text-2xl lg:text-xl md:text-lg sm:text-base text-[3vw] 
          font-bold uppercase tracking-wider 
        `}
        >
          {name}
        </h2>

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
      className="relative flex flex-col w-full h-dvh overflow-hidden scroll-mt-18 mt-18"
    >
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-full h-full bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className=" ml-10">
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
          accentLine="[ SRC_CODE ]"
          secondaryLine="FUELLED BY COFFEE AND CODE"
        />
      </div>

      <div className="relative top-1/3 xl:top-2/7 xl:left-[12%] w-full flex justify-center items-center ">
        <div
          className="relative w-full h-full flex-1 
            max-w-[60%] 
            sm:max-w-[55%] 
            md:max-w-[42%] 
            lg:max-w-[38%] 
            xl:max-w-[33%] 
            transition-all duration-500 ease-in-out
            flex justify-center items-center
            "
        >
          <div className="absolute w-full h-auto aspect-square ">
            {hoomans.map((hooman, index) => (
              <div key={index}>
                <div
                  className={`w-1/4 lg:w-2/7 h-[2px] absolute ${hooman.line} transform ${
                    innerLinks[index] ? ACTIVE_T : INACTIVE_T
                  }`}
                >
                  <div
                    className={`
                    w-1/4 lg:w-2/7 h-[8px] 
                    rounded-full bg-cyan-400 blur 
                    absolute top-0 left-0 -translate-y-1/4 -translate-x-1/2
                    ${innerLinks[index] ? "animate-slow-move" : "animate-none"}
                  `}
                  ></div>
                  <div
                    className={`
                    w-1/4 lg:w-2/7 h-[8px] 
                    rounded-full ${ACTIVE_T} blur-sm 
                    absolute top-0 left-0 -translate-y-1/4 -translate-x-1/2
                    ${innerLinks[index] ? "animate-slow-move" : "animate-none"}  
                  `}
                  ></div>
                </div>

                <NameTag
                  name={hooman.name}
                  title={hooman.Title}
                  className={`w-[35%] ${hooman.npos}`}
                />
              </div>
            ))}
          </div>
          <HexagonContainer
            className={`absolute w-full h-auto aspect-square overflow-visible`}
            strokeWidth="0.2"
            stroke={outerLink ? ACTIVE : INACTIVE}
            object={
              <div className={`h-[95%] w-[95%]`}>
                {hoomans.map((hooman, index) => (
                  <HexagonProfile
                    key={index}
                    className={`${hooman.pos} z-1 size-[31%] aspect-square scale-125`}
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
                ))}
              </div>
            }
          />
          <img
            onMouseEnter={() => {
              setInnerLinks(Array(6).fill(true));
              setOuterLink(true);
            }}
            onMouseLeave={() => {
              setInnerLinks(Array(6).fill(false));
              setOuterLink(false);
            }}
            src="Assets/ZTAS.webp"
            alt="ZTAS-Logo"
            className="
          absolute top-1/2 left-1/2 
          -translate-y-1/2 -translate-x-1/2 
          object-cover 
          w-[30%]
          "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
