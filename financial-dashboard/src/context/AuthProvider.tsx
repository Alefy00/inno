import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth_session");
    if (stored === "true") setIsAuthenticated(true);
  }, []);

  function login() {
    setIsAuthenticated(true);
    localStorage.setItem("auth_session", "true");
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("auth_session");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
