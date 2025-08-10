"use client";
import { useState } from "react";
import { useMessage } from "@/hooks/message-provider";

export default function MessageInput() {
  const { sendMessage, loading } = useMessage();
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        sendMessage(value);
        setValue("");
      }}
      className="w-full max-w-xl flex gap-2"
    >
      <input
        className="flex-1 rounded-xl border border-white/20 bg-white/5 px-3 py-2 focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        placeholder="Type a message..."
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-medium"
        disabled={loading}
      >
        Send
      </button>
    </form>
  );
}
