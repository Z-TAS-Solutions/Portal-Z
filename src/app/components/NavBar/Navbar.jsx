"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, act } from "react";
import FracturedRunes from "../../components/GlitchyText/GlitchyText.jsx";

function useActiveObserver({ query = "section" }) {
  const [activeID, setActiveID] = useState(null);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        setActiveID(id);
        window.history.replaceState(null, "", `#${id}`);
      }
    });
  };

  const observerOptions = {
    threshold: 0,
    rootMargin: "-50% 0px -49% 0px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const elements = document.querySelectorAll(query);
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [query]);

  return activeID;
}

function NavItem({ label, id, activeHash }) {
  const pathname = usePathname();
  const fullHref = `${pathname}#${id}`;

  return (
    <a href={fullHref}>
      <div className="group flex flex-col items-center cursor-pointer">
        <FracturedRunes
          text={label}
          className={
            "font-mono text-slate-300 group-hover:text-blue-300 transition-colors" +
            (activeHash === id ? "text-blue-300" : "text-gray-300")
          }
        />

        <div
          className={
            "h-[2px] w-full bg-sky-500 transition-all duration-300 origin-left " +
            (activeHash === id
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100")
          }
        ></div>
      </div>
    </a>
  );
}

const NavTapezroider = ({ fill1 = "", fill2 = "", properties = "" }) => (
  <svg
    className={`w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]  ${properties}`}
    viewBox="-55.935 5.656 216.926 36.652"
    // viewBox="-60.935 5.692 235.997 36.616"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M-31.725 42.308h177.801c1.505 0 3.427-.658 3.888-2.409l5.681-29.75c.948-5.197-.048-4.457-3.099-4.457H-59.951c-1.995.195-.555 2.181.777 4.328l22.401 29.879c1.342 1.879 3.543 2.409 5.048 2.409"
      // d="M-31.725 42.308h177.056c1.505 0 2.855-.976 3.888-2.409l23.592-29.75c1.423-2.21 3.367-4.116 1.447-4.457H-59.951c-1.995.195-.555 2.181.777 4.328l22.401 29.879c1.342 1.879 3.543 2.409 5.048 2.409"
      fill="rgba(10, 10, 190, 0.2)"
      strokeWidth="0.6"
      filter="url(#softBlur)"
      className="drop-shadow-[0_0_12px_rgba(17,13,238,0.6)] stroke-slate-200/30"
    />
    <path
      d="M-31.327 39.744h175.83c1.526 0 4.069.465 4.751-2.092l5.115-27.208c.889-4.336-.182-3.872-2.337-3.872H-57.502c-2.038 0-.489 2.062.789 3.872l20.604 27.208c1.362 1.648 3.462 2.092 4.782 2.092"
      // d="M-31.327 39.744h175.83c1.32 0 3.508-.789 4.751-2.092l21.223-27.208c1.399-1.789 3.305-3.872 1.269-3.872H-57.502c-2.038 0-.489 2.062.789 3.872l20.604 27.208c1.362 1.648 3.462 2.092 4.782 2.092"
      fill="#08080B"
      stroke="none"
      className=""
    />
    <defs>
      <filter id="softBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="300"
        y1="0"
        x2="300"
        y2="60"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1e3a8a" stopOpacity="0.4" />
        <stop offset="1" stopColor="#000000" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

function DesktopNav() {
  const activeHash = useActiveObserver({ query: "section" });

  return (
    <>
      {/* -right-10 */}
      <nav className="fixed top-0 w-full h-16 z-50 bg-transparent py-4 animate-[slideDown_0.6s_ease-in-out]">
        <div className="absolute top-0 bg-black h-4 w-full"></div>
        <div
          // left-1/2 -translate-x-1/2
          className="
          -right-10
          absolute top-0 
          w-auto h-full
          grid grid-cols-1 grid-rows-1 
          place-items-center 
          "
        >
          <NavTapezroider properties="col-start-1 row-start-1" />

          <div className="col-start-1 row-start-1 z-1 flex gap-8 w-auto justify-between items-center mx-20">
            <NavItem label="Home" id="home" activeHash={activeHash} />
            <NavItem label="About" id="about" activeHash={activeHash} />
            <NavItem label="Solution" id="solution" activeHash={activeHash} />

            {/* <div className="z-1 h-18 w-full">
              <img
                src="/Assets/ZTAS-Text.webp"
                className="w-auto h-full object-contain"
              />
            </div> */}

            <NavItem
              label="Technology"
              id="technology"
              activeHash={activeHash}
            />
            <NavItem label="Features" id="features" activeHash={activeHash} />
            <NavItem label="Team" id="team" activeHash={activeHash} />
          </div>
        </div>

        <div
          className="
          absolute top-0  
          h-full min-w-31 w-[10%] flex justify-center items-center
          "
        >
          <div
            className="
              absolute top-0 left-0
              bg-black
              border border-t-blue-800 border-x-0 border-b-0
              rounded-full
              h-full w-full
              transform rotate-180
              transition-[clip-path] duration-300 ease-out
              [clip-path:polygon(15%_0%,85%_0%,100%_100%,0%_100%)]
            "
          >
            {" "}
          </div>
          <div
            className="
               relative h-full w-full px-8
            "
          >
            <img
              src="/Assets/ZTAS-Text.webp"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </nav>
      {/* <div class="fixed top-1/2 right-5 h-[30%] bg-white/20 backdrop-blur-lg p-5 rounded-full border border-blue/50 z-50 "></div> */}
    </>
  );
}

function MobileNav() {
  const NavItems = {
    home: "Home",
    about: "About",
    solution: "Solution",
    technology: "The Tech",
    features: "Features",
    process: "The Flow",
    team: "Our Team",
  };

  const [toggleState, setToggleState] = useState(false);

  const ToggleHandler = () => setToggleState(!toggleState);

  const activeID = useActiveObserver({ query: "section" });

  const MobileNavMenu = () => {
    const pathname = usePathname();

    return (
      <div
        className="
      fixed top-0 left-1/2 -translate-x-1/2 z-50
      flex justify-center items-center
      h-screen w-screen
      z-45
      "
      >
        <div
          className="
            w-[90%] h-[95%]
            bg-black/70 backdrop-blur-sm
            rounded-2xl
            border border-white/10
            flex flex-col  
            pt-18 px-10
          "
        >
          {Object.entries(NavItems).map(([key, value]) => {
            return (
              <a href={`${pathname}#${key}`}>
                <FracturedRunes
                  key={key}
                  text={value}
                  className={`
                      cursor-pointer 
                      font-audiowide
                      text-[2.4rem]
                      tracking-widest 
                      uppercase 
                      transition-all
                      duration-300
                      ${activeID === key ? "text-white" : "text-zinc-400 hover:text-zinc-200"}
                    `}
                  onClick={ToggleHandler}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {toggleState ? <MobileNavMenu /> : null}
      <nav
        className="
        fixed top-0 left-1/2 -translate-x-1/2 z-50
        h-14 w-[95%] sm:w-fit
        flex justify-center items-center 
        gap-10 mt-2
        "
      >
        <div
          className="
        absolute
        w-full h-full
        bg-[#08080B]/60 backdrop-blur-sm
        border-[1px] border-white/10
        rounded-2xl
        drop-shadow-2xl
        "
        ></div>

        <div
          className="
        z-50 rounded-2xl
        w-[26%] h-full 
        px-[4%]
        border-none
        transition-all duration-100
        active:scale-95
        active:border 
        active:border-blue-500/50 
        active:shadow-[0_0_15px_rgba(59,130,246,0.5)]
        "
        >
          <img
            src="Assets/ZTAS-Text.webp"
            className="w-auto h-full object-contain"
          />
        </div>
        <div
          className="
        z-50 rounded-2xl
        w-[46%] h-full 
        px-[2%] 
        flex items-center justify-center 
        tracking-[0.2em] font-mono uppercase text-slate-400 text-center
        border-none
        active:scale-95
        active:border 
        active:border-x-cyan-500/50 
        active:border-l-cyan-500/50 
        active:border-r-white/0 

        hover:scale-95
        hover:border 
        hover:border-x-cyan-500/50 
        hover:border-l-cyan-500/50 
        hover:border-r-white/0 
        "
        >
          {NavItems[activeID]}
        </div>
        <button
          className="z-50 rounded-2xl
        w-[24%] h-full 
        pl-[2%]"
          onClick={ToggleHandler}
        >
          <div
            className="
        z-50 rounded-2xl
        w-full h-full 
        flex items-center justify-center 
        tracking-[0.2em] font-mono uppercase text-slate-400 text-center
        active:scale-95
        active:border 
        active:border-blue-500/50 
        active:shadow-[0_0_15px_rgba(59,130,246,0.5)]
        transition-all duration-500
        "
          >
            {toggleState ? "X" : "☰"}
          </div>
        </button>
      </nav>
    </>
  );
}

export default function Navbar() {
  const [displayMode, setDisplayMode] = useState(false);

  if (typeof window !== "undefined") {
    const mmObj = window.matchMedia("(max-width: 768px)");
    useEffect(() => {
      setDisplayMode(mmObj.matches);

      mmObj.addEventListener("change", function () {
        setDisplayMode(mmObj.matches);
      });

      return () =>
        mmObj.removeEventListener("change", function () {
          setDisplayMode(mmObj.matches);
        });
    }, []);
  }
  return displayMode ? <MobileNav /> : <DesktopNav />;
}
