"use client";

import dynamic from "next/dynamic";

import HomePage from "./Pages/HomePage/HomePage";
import About2 from "./Pages/About-2/About-2.jsx";
import About3 from "./Pages/About-3/About-3";
import Technology from "./Pages/Technology/TechnologyPage";
import PQCPage from "./Pages/PQC-Safe/PQCPage";
import ProcessFlow from "./Pages/ProcessFlow/ProcessFlow";
import Team from "./Pages/Teams/Teams";
import ContactUs from "./Pages/Contact/Contact.jsx";

const ChatBotWidget = dynamic(
  () => import("./components/ChatBot/ChatBotWidget"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans bg-zinc-950 overflow-x-hidden">
      <HomePage id="home" />
      <About2 id="about" />
      <About3 id="solution" />
      <Technology id="technology" />
      <PQCPage id="features" />
      <ProcessFlow id="process" />
      <Team id="team" />
      <ContactUs id="contact" />
      <ChatBotWidget buttonSize="55px" />
    </main>
  );
}
