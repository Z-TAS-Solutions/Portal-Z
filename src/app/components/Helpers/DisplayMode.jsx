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

export function useDisplayModeEx() {
  const [displayMode, setDisplayMode] = useState("xl");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mmObj = window.matchMedia("(max-width: 768px)");
      const mmObj2 = window.matchMedia("(min-width: 1536px)");

      const handler = () => {
        setDisplayMode(mmObj2.matches ? "xl" : mmObj.matches);
      };

      handler();

      mmObj.addEventListener("change", handler);
      mmObj2.addEventListener("change", handler);

      return () => {
        mmObj.removeEventListener("change", handler);
        mmObj2.removeEventListener("change", handler);
      };
    }
  }, []);

  return displayMode;
}
