export default function BlueButton({ text = "Launch App", height = 75 }) {
  return (
    <button
      className="w-fit px-6 rounded-full text-white font-medium transition-all duration-300 hover:opacity-90"
      style={{
        background: "linear-gradient(90deg, #00C4FF, #006B89)",
        height: `${height}px`,
      }}
    >
      {text}
    </button>
  );
}
