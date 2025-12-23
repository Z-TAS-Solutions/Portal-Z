import "../../CSS Files/HomePage.css";

// Imported components
import MainHeading from "../../components/Headings/MainHeading.jsx";
import BlueButton from "../../components/Buttons/BlueButton.jsx";
import GrayButton from "../../components/Buttons/GrayButton.jsx";
import NormalParagraph from "../../components/Paragraphs/NormalParagraph.jsx";

export default function Homepage({ id = "home" }) {
  return (
    <section id="home" className="w-full overflow-hidden">
      <div className="hero-section w-full">
        <div className="angled-background"></div>
        <div className="hero-content">
          <h1 className="text-xl tracking-widest font-medium mb-6 text-[var(--color-text-light)] text-center">
            ZERO-TOUCH AUTHENTICATION
          </h1>

          <MainHeading className="!text-5xl md:!text-6xl lg:!text-7xl !font-extrabold !mb-4">
            Reinvented.
          </MainHeading>

          <NormalParagraph className="!text-lg md:!text-xl !mt-0 !mb-6 md:!mb-10 text-slate-400">
            Your identity secured through NIR vein biometrics and advanced
            cryptographic defense.
          </NormalParagraph>

          <div className="cta-buttons flex justify-center items-center gap-5">
            <BlueButton text="Launch App" />
            <GrayButton text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
}
