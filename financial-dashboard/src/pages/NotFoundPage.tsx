import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  function goBackDashboard() {
    navigate("/dashboard");
  }

  function goLogin() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white p-6 text-center">
      <div className="max-w-sm w-full flex flex-col items-center gap-6">
        <div className="text-6xl font-bold text-indigo-400 tracking-tight">
          404
        </div>

        <div>
          <h1 className="text-xl font-semibold text-white">
            Página não encontrada
          </h1>
          <p className="text-[14px] text-white/50 mt-2 leading-relaxed">
            A página que você tentou acessar não existe ou não está disponível.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={goBackDashboard}
            className="flex-1 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-3 hover:bg-white/15 transition"
          >
            Ir para Dashboard
          </button>

          <button
            onClick={goLogin}
            className="flex-1 rounded-xl bg-indigo-600/90 border border-indigo-500/30 text-white text-sm font-semibold px-4 py-3 hover:bg-indigo-600 transition"
          >
            Ir para Login
          </button>
        </div>

        <div className="text-[11px] text-white/30 mt-4">
          Innodev © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
