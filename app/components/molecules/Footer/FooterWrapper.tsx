"use client";
import { usePathname } from "next/navigation";

export const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${pathname === "/" ? "fixed bottom-40" : "mb-40"}  w-full`}
    >
      {children}
    </div>
  );
};
