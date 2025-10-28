// src/context/LogoutModalContext.tsx
import { createContext, useContext } from "react";

export interface LogoutModalContextValue {
  askLogout: () => void;
}

export const LogoutModalContext = createContext<LogoutModalContextValue | undefined>(
  undefined
);

// hook helper igual seu padrão de useFilters()
export function useLogoutModal() {
  const ctx = useContext(LogoutModalContext);
  if (!ctx) {
    throw new Error(
      "useLogoutModal deve ser usado dentro de <LogoutModalProvider />"
    );
  }
  return ctx;
}
