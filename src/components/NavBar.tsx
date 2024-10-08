"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  return (
    <nav className="flex flex-row w-screen justify-center items-center gap-4">
      <Link href={"/"} className="px-4 py-2 bg-white text-black rounded-md">
        home
      </Link>
      <Link
        href={"/second"}
        className="px-4 py-2 bg-white text-black rounded-md"
      >
        second
      </Link>
    </nav>
  );
}
