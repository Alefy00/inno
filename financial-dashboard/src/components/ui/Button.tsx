import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "w-full rounded-xl bg-accent text-white font-medium py-2.5 text-[14px]",
        "shadow-[0_20px_60px_-10px_rgba(99,102,241,0.9)]",
        "hover:opacity-90 active:scale-[.99] transition",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}
