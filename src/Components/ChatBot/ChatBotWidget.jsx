"use client";

import { Activity } from "react";
import { useState } from "react";
import ChatBotInterface from "./ChatBot";
import { TailwindColors as TColors } from "../../ColorPalette.jsx";

function ChatBoxCard({
  className = "",
  fill = "",
  strokeColor = "",
  strokeWidth = 0,
}) {
  const w = 350;
  const h = 520;
  const r = 20;
  const cutSize = 68;
  const R_cut = 0;
  const pathData = ` 
      M ${r} 0 H ${w - r} Q ${w} 0 ${w} ${r}
      V ${h - R_cut} 
      A ${R_cut} ${R_cut} 0 0 1 ${w - R_cut} ${h}
      H ${r} 
      Q 0 ${h} 0 ${h - r} 
      V ${r} 
      Q 0 0 ${r} 0 
      Z
`;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
      className={`overflow-visible ${className}`}
    >
      <path
        d={pathData}
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default function ChatBotWidget({ buttonSize }) {
  const { chatInput, setChatInput, messages, status, onSubmit } =
    ChatBotInterface();

  const handleInputUI = (e) => {
    setChatInput(e.target.value);
  };

  return (
    <>
      <div className="overflow-y-auto rounded-xl">
        {messages.map((message) => (
          <div key={message.id} className="rounded-2xl">
            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <span key={index}>{part.text}</span>
              ) : null,
            )}
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={chatInput}
          onChange={handleInputUI}
          className={`
              border border-cyan-400 
              rounded-4xl 
              ${TColors.TXT_W1}
              `}
        />

        <button
          type="submit"
          className="
                bg-gray-900
                rounded-full"
          style={{
            width: buttonSize,
            height: buttonSize,
          }}
        ></button>
      </form>
    </>
  );
}
