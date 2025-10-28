import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-[13px] font-medium text-white/80 mb-1",
        className
      )}
    >
      {children}
    </label>
  );
}
