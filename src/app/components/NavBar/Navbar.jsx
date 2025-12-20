"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function NavItem({ label, id }) {
  const pathname = usePathname();
  const fullHref = `${pathname}${id}`;

  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActive = activeHash === id;

  return (
    <a href={fullHref}>
      <div className="group flex flex-col items-center cursor-pointer">
        <span className="text-gray-300 group-hover:text-white transition-colors">
          {label}
        </span>

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
    viewBox="-60.935 5.692 235.997 36.616"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M-31.725 42.308h177.056c1.505 0 2.855-.976 3.888-2.409l23.592-29.75c1.423-2.21 3.367-4.116 1.447-4.457H-59.951c-1.995.195-.555 2.181.777 4.328l22.401 29.879c1.342 1.879 3.543 2.409 5.048 2.409"
      fill="rgba(10, 10, 190, 0.2)"
      strokeWidth="0.6"
      filter="url(#softBlur)"
      className="drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] stroke-slate-200/30"
    />
    <path
      d="M-31.327 39.744h175.83c1.32 0 3.508-.789 4.751-2.092l21.223-27.208c1.399-1.789 3.305-3.872 1.269-3.872H-57.502c-2.038 0-.489 2.062.789 3.872l20.604 27.208c1.362 1.648 3.462 2.092 4.782 2.092"
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

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Forums", "Shop", "FAQ"];

  return (
    <>
      <nav className="fixed top-0 w-full h-18 z-50 bg-transparent py-4 animate-[slideDown_0.6s_ease-in-out]">
        <div className="absolute top-0 bg-black-700 h-8 w-full"></div>
        <div
          className="
          absolute top-0 left-1/2 
          w-auto h-full 
          -translate-x-1/2 
          grid grid-cols-1 grid-rows-1 
          place-items-center 
          "
        >
          <NavTapezroider properties="col-start-1 row-start-1" />

          <div className="col-start-1 row-start-1 z-1 flex gap-8 w-auto justify-between items-center mx-25">
            <NavItem label="Home" id="#home" />
            <NavItem label="About" id="#about" />
            <NavItem label="Solution" id="#solution" />
            <NavItem label="Technology" id="#technology" />
            <NavItem label="Features" id="#features" />
            <NavItem label="Team" id="#team" />
          </div>
        </div>

        {/* <div className="absolute px-8 z-10">
          <span className="text-lg font-bold tracking-widest text-white uppercase italic">
            ZTAS
          </span>
        </div> */}
      </nav>
      {/* <div class="fixed top-1/2 right-5 h-[30%] bg-white/20 backdrop-blur-lg p-5 rounded-full border border-blue/50 z-50 "></div> */}
    </>
  );
}
