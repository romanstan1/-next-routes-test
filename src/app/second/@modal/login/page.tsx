"use client";
import LoginModal from "@/components/LoginModal";
import { usePathname } from "next/navigation";

export default function LoginPage() {
  const pathname = usePathname();

  if (pathname === "/second/login") return <LoginModal backPath="/second" />;
  return null;
}
