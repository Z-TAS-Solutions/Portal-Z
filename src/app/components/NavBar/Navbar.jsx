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

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-0 left-0 w-full h-16 flex justify-center items-center gap-8 
      bg-black/70 backdrop-blur justify-center z-50"
    >
      <NavItem label="Home" id="#home" />
      <NavItem label="About" id="#about" />
      <NavItem label="Our Solution" id="#solution" />
      <NavItem label="Technology" id="#technology" />
      <NavItem label="Features" id="#features" />
      <NavItem label="Team" id="#team" />
    </nav>
  );
}
