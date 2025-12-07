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
  const RCut = 10;
  const st = 56;

  const pathData = `
    M ${r} 0 
    H ${w - r} 
    Q ${w} 0 ${w} ${r} 
    
    V ${h - st} 
    
    A 7 10 0 0 1 ${w - 7} ${h - st}
    A ${RCut} ${RCut} 0 0 0 ${w - st} ${h - 7}
    A 10 7 0 0 1 ${w - st} ${h}

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

  const [widgetStatus, setWidgetStatus] = useState(false);

  const widgetToggle = () => {
    setWidgetStatus(!widgetStatus);
  };

  const handleInputUI = (e) => {
    setChatInput(e.target.value);
  };

  return (
    <>
      <button
        type="button"
        onClick={widgetToggle}
        className={`
            bg-gray-900
            fixed bottom-5 right-5
            rounded-full
            border-3 border-cyan-400
            overflow-hidden
            flex items-center justify-center      
          `}
        style={{
          width: buttonSize,
          height: buttonSize,
        }}
      ></button>

      <Activity mode={widgetStatus ? "visible" : "hidden"}>
        <ChatBoxCard
          className="w-[350px] h-[520px] fixed bottom-0 right-0 mb-4 mr-4"
          strokeColor="cyan"
          strokeWidth="2"
          fill="#180b39"
        />
        <div className="flex flex-col w-[348px] h-[518px] fixed bottom-0 right-0 mb-4 mr-4">
          {/*chat display*/}
          <div className="flex flex-col gap-3 h-[76%] overflow-y-auto rounded-xl mb-4 mr-1 p-3 nocthyrra">
            {messages.map((message) => {
              const isUser = message.role === "user";

              const msgClass = isUser
                ? "self-end bg-[#3F00B2] text-white text-left"
                : "self-start bg-gray-700 text-gray-100 text-left";

              return (
                <div
                  key={message.id}
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3 shadow-md ${msgClass}`}
                >
                  {message.parts.map((part, index) =>
                    part.type === "text" ? (
                      <span key={index}>{part.text}</span>
                    ) : null,
                  )}
                </div>
              );
            })}
          </div>
          {/*chat inputs*/}

          <form onSubmit={onSubmit} className="flex w-full h-[12%] gap-x-4">
            <input
              type="text"
              value={chatInput}
              onChange={handleInputUI}
              placeholder="Type your message here..."
              aria-label="Chat input field"
              className={`
              border-2 border-cyan-400
              shadow-lg
              w-[77%] 
              rounded-4xl
              py-3 px-4
              mr-2 ml-2 mb-2
              ${TColors.TXT_W1}
              focus:outline-none
              focus:border-cyan-600  
              `}
            />

            <button
              type="submit"
              className="
                fixed bottom-5 right-5
                flex-1
                bg-gray-900
                rounded-full
                border-2 border-cyan-400
                overflow-hidden
                flex items-center justify-center"
              style={{
                width: buttonSize,
                height: buttonSize,
              }}
              disabled={status !== "ready"}
            ></button>
          </form>
        </div>
      </Activity>
    </>
  );
}
