"use client";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Modal({
  children,
  className,
  backPath,
}: {
  children: React.ReactNode;
  className?: string;
  backPath: string;
}) {
  const router = useRouter();

  function handleOpenChange() {
    router.replace(backPath);
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent className={className || ""}>{children}</DialogContent>
    </Dialog>
  );
}
