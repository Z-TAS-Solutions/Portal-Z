import TechCard from "../../Components/TechCards/TechCard";

const tech = [
    {title : "NIR Camera Module", description : "To capture the verin patterns"},
    {title : "RGB Camera", description : "Assists with hand alignment"},
    {title : "NIR LED Array", description : "Provides infrared illumination"},
    {title : "Proximity Sensor", description : "Detects hand presence and optimal distance"},
    {title : "Processing Board", description : "Handles image processing & computation"},
    {title : "3D-Printed Casing", description : "Custom housing for components"},
    {title : "RGB LED Indicator", description : "Status and interaction LED"},
    {title : "CSI Adapter", description : "Camera interface module"},
    {title : "Cooling Module", description : "Prevents overheating"}
]


function ResponsiveGrid({ items }) {
  return (
    <div className="
        grid
        grid-cols-1         
        md:grid-cols-3       
        gap-8               
        place-items-center   
        w-full
    ">
      {items.map((item, index) => (
        <TechCard
          key={index + "Tech Card Item"}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default function TechGrid(){
    return (
        <ResponsiveGrid items={tech}></ResponsiveGrid>
    )
}