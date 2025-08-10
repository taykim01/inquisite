"use client";
import { useMessage } from "@/hooks/message-provider";

export default function MessageList() {
  const { messages } = useMessage();
  return (
    <div className="flex-1 w-full max-w-xl overflow-y-auto mb-4 flex flex-col gap-2">
      {messages.map((m, idx) => (
        <div key={idx} className="self-start rounded-xl bg-white/10 backdrop-blur p-3">
          {m}
        </div>
      ))}
    </div>
  );
}
