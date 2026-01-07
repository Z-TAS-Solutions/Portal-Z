import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { ActiveHashContext } from "../Helpers/HashContext.jsx";
import FracturedRunes from "../../components/GlitchyText/GlitchyText.jsx";

export default function MobileNav() {
  const NavItems = {
    home: "Home",
    about: "About",
    solution: "Solution",
    technology: "The Tech",
    features: "Features",
    process: "The Flow",
    team: "Team",
    contact: "Contact Us",
  };

  const [toggleState, setToggleState] = useState(false);

  const ToggleHandler = () => setToggleState(!toggleState);

  const activeID = useContext(ActiveHashContext);

  const MobileNavMenu = () => {
    const pathname = usePathname();

    return (
      <div
        className="
      fixed top-0 left-1/2 -translate-x-1/2 z-50
      flex justify-center items-center
      h-screen w-screen
      z-45
      transition-all duration-300
      "
      >
        <div
          className="
            w-[90%] h-[95%]
            bg-black/70 backdrop-blur-sm
            rounded-2xl
            border border-white/10
            flex flex-col  
            py-14 px-5
            font-audiowide
          text-center
          "
        >
          <div className="w-full flex justify-between">
            <span className="">+</span>
            <span className="">+</span>
          </div>
          {Object.entries(NavItems).map(([key, value]) => {
            return (
              <>
                <a
                  href={`${pathname}#${key}`}
                  className="w-auto h-auto my-auto mx-5 text-center"
                >
                  <FracturedRunes
                    key={key}
                    text={value}
                    forwards={true}
                    className={`
                      cursor-pointer 
                      text-[2.4rem]
                      tracking-widest 
                      uppercase 
                      transition-all
                      duration-300
                      w-full h-auto
                      ${activeID === key ? "text-white" : "text-zinc-400 hover:text-zinc-200"}
                    `}
                    onClick={ToggleHandler}
                  />
                  <div className="w-auto mx-5 border-t border-dashed border-gray-400"></div>
                </a>
              </>
            );
          })}
          <div className="w-full flex justify-between">
            <span className="">+</span>
            <span className="">+</span>
          </div>
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
          <a href="#home">
            <img
              src="Assets/ZTAS-Text.webp"
              className="w-auto h-full object-contain"
            />
          </a>
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
            <span
              className={`absolute transition-all duration-300 transform ${
                toggleState
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
            >
              X
            </span>
            <span
              className={`absolute transition-all duration-300 transform ${
                !toggleState
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-50"
              }`}
            >
              ☰
            </span>
          </div>
        </button>
      </nav>
    </>
  );
}
