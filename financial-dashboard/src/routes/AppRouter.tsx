// src/routes/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";

export default function AppRouter() {
  return (
    <Routes>
      {/* Login público */}
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard protegida */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      {/* Raiz -> dashboard se autenticado */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
