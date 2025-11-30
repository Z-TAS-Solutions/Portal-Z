export default function GrayButton({ text = "Learn More", height = 60, children,
    className = "", width = 8 }) {

  return (
    <button
      className={ `w-fit px-8 rounded-full text-white font-medium 
      transition-all duration-300 bg-gray-500 hover:bg-gray-600 
      hover:outline hover:outline-2 hover:outline-gray-400 hover:shadow-[0_0_12px_black] 
      hover:scale-105 active:scale-95 active:bg-gray-700 ${className}` }

      style={{ 
        height: `${height}px`
    }}
    >

      {children ?? text}

    </button>
  );
}