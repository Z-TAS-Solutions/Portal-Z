"use client";
import { useState } from "react";
import { ActiveHashContext } from "./components/Helpers/HashContext.jsx";
import Navbar from "./components/NavBar/Navbar";

export default function MainWrapper({ children }) {
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <ActiveHashContext.Provider value={activeHash}>
      <Navbar setActiveHash={setActiveHash} />
      {children}
    </ActiveHashContext.Provider>
  );
}
