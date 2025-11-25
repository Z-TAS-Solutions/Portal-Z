import TechGrid from "./TechGrid";
import BlueButton from "../../Components/Buttons/BlueButton";
import GrayButton from "../../Components/Buttons/GrayButton";
import MainHeading from "../../Components/Headings/MainHeading";
import NormalParagraph from "../../Components/Paragraphs/NormalParagraph";

export default function Technology() {
  return (
    <section className="w-full flex flex-col items-center mt-12  px-4">
      <MainHeading>Technology behind Z-TAS</MainHeading>
      <NormalParagraph>A Powerful Blend of Advanced Hardware and Intelligent Software</NormalParagraph>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mt-8
          w-full
          max-w-md
          place-items-center      
        "
      >
        <BlueButton text="Software & Security"/>
        <GrayButton text="Hardware"/>
      </div>

      <TechGrid></TechGrid>
    </section>
  );
}
