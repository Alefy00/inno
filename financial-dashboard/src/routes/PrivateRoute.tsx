import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { useAuth } from "../context/useAuth";

interface PrivateRouteProps {
  children: ReactElement;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
