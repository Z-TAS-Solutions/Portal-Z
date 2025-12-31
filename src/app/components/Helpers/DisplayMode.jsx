"use client";
import { useState, useEffect } from "react";

export default function useDisplayMode() {
  const [displayMode, setDisplayMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mmObj = window.matchMedia("(max-width: 768px)");

      const handler = () => {
        setDisplayMode(mmObj.matches);
      };

      handler();

      mmObj.addEventListener("change", handler);

      return () => mmObj.removeEventListener("change", handler);
    }
  }, []);

  return displayMode;
}
