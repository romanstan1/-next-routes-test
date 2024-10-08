"use client";
import LoginModal from "@/components/LoginModal";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const pathname = usePathname();

  if (pathname === "/login") return <LoginModal backPath="/" />;
  return null;
}
