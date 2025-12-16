import HomePage from "./Pages/Home Page/HomePage";
import About2 from "./Pages/About-2/About-2";
import About3 from "./Pages/About-3/About-3";
import ChatBotWidget from "./components/ChatBot/ChatBotWidget";
import Technology from "./Pages/Technology/TechnologyPage";
import PQCPage from "./Pages/PQC Safe/PQCPage";
import ProcessFlow from "./Pages/ProcessFlow/ProcessFlow";
import Team from "./Pages/Teams/Teams";

export default function Home() {
  return (
    <main className="min-h-screen font-sans dark:bg-black bg-white">
      <HomePage id="home" />
      <About2 id="about" />
      <About3 id="" />
      <Technology />
      <PQCPage />
      <ProcessFlow />
      <Team />
      <ChatBotWidget buttonSize="55px" />
    </main>
  );
}
