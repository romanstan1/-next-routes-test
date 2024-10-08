"use client";
import Link from "next/link";
import { useState } from "react";

export default function SecondPage() {
  const [someState, setSomeState] = useState<string>("");
  return (
    <main className="flex flex-col h-screen w-screen justify-left items-center gap-4 mt-8">
      <h1>Second page</h1>
      <input
        className="border-2 border-black rounded-md"
        value={someState}
        onChange={(e) => setSomeState(e.target.value)}
      />
      <Link
        href={"/second/login"}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        login!
      </Link>
    </main>
  );
}
