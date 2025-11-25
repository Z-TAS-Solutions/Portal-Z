import TechGrid from "./TechGrid";
import BlueButton from "../../Components/Buttons/BlueButton";
import GrayButton from "../../Components/Buttons/GrayButton";
import MainHeading from "../../Components/Headings/MainHeading";

export default function Technology() {
  return (
    <section className="w-full flex flex-col items-center mt-12  px-4">
      <MainHeading>Technology behind Z-TAS</MainHeading>
      <p className="text-gray-300 mt-4 text-center max-w-2xl text-lg opacity-90">
        A powerful blend of advanced hardware and intelligent software
      </p>

      <div
        className="
          grid
          grid-cols-1         
          sm:grid-cols-2      
          gap-4
          mt-8
          w-full
          max-w-md            
        "
      >
        <BlueButton text="Software & Security" height={60} />
        <GrayButton text="Hardware" height={60} />
      </div>

      <TechGrid></TechGrid>
    </section>
  );
}
