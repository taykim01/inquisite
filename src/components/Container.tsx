import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#000] via-[#111] to-[#222] text-white p-4">
      {children}
    </div>
  );
}
