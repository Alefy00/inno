import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // base visual
        "bg-[#1a1f2e]/90 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.8)]",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      {subtitle && (
        <p className="text-[13px] text-white/50 leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 text-center text-[12px] text-white/40">
      {children}
    </div>
  );
}
