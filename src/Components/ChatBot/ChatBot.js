"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function ChatBotInterface() {
  const [chatInput, setChatInput] = useState("");

  const ChatInterface = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    ChatInterface.sendMessage({ text: chatInput });
    setChatInput("");
  };

  return {
    chatInput,
    setChatInput,
    ...ChatInterface,
    onSubmit,
  };
}
