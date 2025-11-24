import TechGrid from "./TechGrid";
import BlueButton from "../../Components/Buttons/BlueButton";
import GrayButton from "../../Components/Buttons/GrayButton";

export default function Technology() {
  return (
    <section className="w-full flex flex-col items-center mt-12 px-4">
      <h1 className="text-white font-extrabold text-6xl sm:text-7xl text-center leading-tight drop-shadow-[0_0_20px_#007BFF]">
        Technology Behind Z-TAS
      </h1>

      {/* Optional subtitle */}
      <p className="text-gray-300 mt-4 text-center max-w-2xl text-lg opacity-90">
        A powerful blend of advanced hardware and intelligent software
      </p>

      <div
        className="
          grid
          grid-cols-1          /* Mobile: 1 column */
          sm:grid-cols-2       /* Desktop: 2 columns */
          gap-4
          mt-8
          w-full
          max-w-md             /* prevent buttons from stretching too wide */
        "
      >
        <BlueButton text="Software & Security" height={60} />
        <GrayButton text="Hardware" height={60} />
      </div>

      <TechGrid></TechGrid>
    </section>
  );
}
