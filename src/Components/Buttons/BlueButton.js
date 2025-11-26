export default function BlueButton({ text = "Launch App", height = 60, children, 
  className= "", width = 8}) {

  return (
    <button
      className={ `w-fit px-8 rounded-full text-white font-medium transition-all 
      duration-300 hover:opacity-100 hover:outline hover:outline-2 
      hover:outline-[#6ec5ff] hover:shadow-[0_0_12px_white] 
      hover:scale-105 active:scale-95 ${className}` }

      style={{
        background: "linear-gradient(90deg, #00C4FF, #006B89)",
        height: `${height}px`,

      }}
    >

      {children ?? text}

    </button>
  );
}
