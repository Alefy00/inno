import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl bg-[#0f172a]/60 border border-white/10",
          "px-3 py-[10px] text-[14px] text-white placeholder-white/30",
          "outline-none ring-0 focus:border-accent focus:ring-2 focus:ring-accent/40",
          "transition",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
