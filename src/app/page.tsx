import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#000] via-[#111] to-[#222] text-white p-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Inquisite</h1>
      <p className="text-lg mb-8 max-w-md">
        An all-inclusive personal knowledge generation and management system using premium AI models.
      </p>
      <Link
        href="/chat"
        className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400"
      >
        Get Started
      </Link>
    </main>
  );
}
