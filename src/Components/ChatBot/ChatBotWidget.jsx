"use client";

import { Activity } from "react";
import { useState } from "react";
import ChatBotInterface from "./ChatBot";
import { TailwindColors as TColors } from "../../ColorPalette.jsx";

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
