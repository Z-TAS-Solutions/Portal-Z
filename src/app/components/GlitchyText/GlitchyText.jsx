import { useState, useRef } from "react";

const randomChar = () => {
  const charset = "@#$%^&*BCFGH@#$%^&*IJKLMNOP@#$%^&*VWXYZ0123456789!@#$%^&*";
  const i = Math.floor(Math.random() * charset.length);
  return charset[i];
};

export default function FracturedRunes({
  text = "",
  className = "",
  onClick = null,
}) {
  const [textState, setTextState] = useState(text);
  const timeframeRef = useRef(null);

  const startFracturedRitual = () => {
    let index = 0;
    clearInterval(timeframeRef.current);

    timeframeRef.current = setInterval(() => {
      setTextState(
        text
          .split("")
          .map((char, charIndex) => (charIndex < index ? char : randomChar()))
          .join(""),
      );

      index++;
      if (index > text.length) clearInterval(timeframeRef.current);
    }, 30);
  };

  const stopFracturedRitual = () => {
    clearInterval(timeframeRef.current);
    setTextState(text);
  };

  return (
    <span
      onClick={onClick}
      onMouseEnter={startFracturedRitual}
      onMouseLeave={stopFracturedRitual}
      className={className}
    >
      {textState}
    </span>
  );
}
