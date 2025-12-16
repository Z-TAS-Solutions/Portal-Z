"use client";

import { Activity } from "react";
import { useState } from "react";
import ChatBotInterface from "./ChatBot";
import { TailwindColors as TColors } from "../../ColorPalette.jsx";

const SentMsgCol = "bg-[#3F00B2] text-white text-left";
const RecvMsgCol = "bg-gray-700 text-gray-100 text-left";

const border_cyan = "border-cyan-400";
const gray1 = "bg-gray-400";
const gray2 = "bg-gray-900";
const gray3 = "border-gray-400";
const cyan2 = "border-cyan-600";
const cyan_strokes = "cyan";
const white1 = "bg-white/10";

const purple1 = "bg-[#3F00B2]";

const stroke_col = "cyan";

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
            ${gray2}
            fixed bottom-5 right-5
            rounded-full
            border-3 ${border_cyan}
            overflow-hidden
            flex items-center justify-center
            hover: cursor-pointer
            z-1
            ${widgetStatus === true && chatInput !== "" ? "hidden" : ""}
          `}
        style={{
          width: buttonSize,
          height: buttonSize,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={`${cyan_strokes}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-gigantification z-49"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          <path d="M7.5 12h10" />
          <path d="M7.5 16h6" />
          <path d="M7.5 8h8" />
        </svg>
      </button>

      <Activity mode={widgetStatus ? "visible" : "hidden"}>
        <ChatBoxCard
          className="
          w-[350px] h-[520px] 
          fixed bottom-0 right-0 
          mb-4 mr-4 
          transition duration-800 ease-in-out"
          strokeColor={`${stroke_col}`}
          strokeWidth="2"
          fill="#180b39"
        />
        <div className="flex flex-col w-[348px] h-[518px] fixed bottom-0 right-0 mb-4 mr-4">
          {/*chat header box..*/}
          <div
            className={`flex items-center w-full h-[9%] rounded-2xl ${purple1} text-white overflow-hidden p-3`}
          >
            {/*chat title box.. maybe with an icon later idk */}
            <div className="flex-1 text-base font-semibold">
              <span className="mr-2">^_^</span>
              ZTAS AI Sentinel
            </div>
            <button
              onClick={widgetToggle}
              className={`
              flex items-center justify-center
              p-2 
              rounded-full 
              hover:${white1}
              hover:cursor-pointer
              transition-colors duration-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
          {/*chat display*/}
          <div className="flex flex-col gap-3 h-[76%] overflow-y-auto rounded-xl mb-4 mr-1 p-3 nocthyrra">
            {messages.map((message) => {
              const isUser = message.role === "user";

              const msgClass = isUser
                ? `self-end ${SentMsgCol}`
                : `self-start  ${RecvMsgCol}`;

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
              border-2 ${border_cyan}
              shadow-lg
              w-[77%] 
              rounded-4xl
              py-3 px-4
              mr-2 ml-2 mb-2
              ${TColors.TXT_W1}
              focus:outline-none
              focus:${cyan2}  
              `}
            />

            <button
              type="submit"
              className={`
                fixed bottom-5 right-5
                flex-1    
                ${gray2}
                rounded-full
                border-2 ${TColors.BORDER_BLUE}
                overflow-hidden
                flex items-center justify-center
                hover: cursor-pointer
                disabled:${gray3}
              `}
              style={{
                width: buttonSize,
                height: buttonSize,
              }}
              disabled={status !== "ready" || chatInput === ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={`${cyan_strokes}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-wiggle"
              >
                <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                <path d="M6 12h16" />
              </svg>
            </button>
          </form>
        </div>
      </Activity>
    </>
  );
}
