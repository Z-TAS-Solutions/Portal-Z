"use client";

import { useEffect } from "react";
import useDisplayMode from "../../components/Helpers/DisplayMode.jsx";
import MobileNav from "./MobileNav.jsx";
import DesktopNav from "./DesktopNav.jsx";

function useActiveObserver({ query = "section", hashHandler }) {
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        hashHandler(id);
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
  }, [query, hashHandler]);
}

export default function Navbar({ setActiveHash }) {
  const displayMode = useDisplayMode();

  useActiveObserver({ query: "section", hashHandler: setActiveHash });

  return displayMode ? <MobileNav /> : <DesktopNav />;
}
