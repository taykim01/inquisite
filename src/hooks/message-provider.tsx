"use client";
import { createContext, useContext, useState } from "react";

type MessageContextValue = {
  messages: string[];
  loading: boolean;
  sendMessage: (msg: string) => void;
};

const MessageContext = createContext<MessageContextValue | undefined>(undefined);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading] = useState(false);

  const sendMessage = (msg: string) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <MessageContext.Provider value={{ messages, loading, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const ctx = useContext(MessageContext);
  if (!ctx) throw new Error("useMessage must be used within MessageProvider");
  return ctx;
}
