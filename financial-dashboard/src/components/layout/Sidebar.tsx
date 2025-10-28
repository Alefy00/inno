import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Home, LogOut } from "lucide-react";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);

  function goHome() {
    navigate("/dashboard");
  }

  function askLogout() {
    setShowConfirm(true);
  }

  function cancelLogout() {
    setShowConfirm(false);
  }

  function confirmLogoutAndExit() {
    logout();
    setShowConfirm(false);
    navigate("/login");
  }

  return (
    <>
      {/* sidebar fixa no desktop */}
      <aside className="hidden md:flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-[#3D0262] to-[#8E6320] p-6 text-white fixed left-0 top-0">
        {/* topo */}
        <div>
          <div className="text-2xl font-bold tracking-wide mb-10 text-white">
            Innodev
          </div>

          <nav className="space-y-3">
            <button
              onClick={goHome}
              className="flex items-center gap-2 w-full text-left py-2 px-3 rounded-lg hover:bg-white/10 transition text-sm font-medium text-white"
            >
              <Home size={18} className="text-white/80" />
              <span>Home</span>
            </button>
          </nav>
        </div>

        {/* sair */}
        <div>
          <Button
            onClick={askLogout}
            className="w-full bg-white/20 hover:bg-white/30 text-sm font-medium flex items-center justify-center gap-2"
          >
            <LogOut size={16} className="text-white/80" />
            <span>Sair</span>
          </Button>
        </div>
      </aside>

      {/* overlay global de confirmação */}
      {showConfirm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-10">
          <div className="w-full max-w-[320px] rounded-xl bg-[#1a1f2e] border border-white/10 text-white shadow-2xl shadow-black/70 p-5">
            <div className="text-base font-semibold text-white mb-2">
              Deseja realmente sair?
            </div>

            <div className="text-[13px] text-white/60 mb-5 leading-relaxed">
              Sua sessão será encerrada e você voltará para a tela de login.
            </div>

            <div className="flex items-center justify-end gap-3 text-[14px]">
              <button
                onClick={cancelLogout}
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white/80 font-medium hover:bg-white/15 transition"
              >
                Cancelar
              </button>

              <button
                onClick={confirmLogoutAndExit}
                className="px-3 py-2 rounded-lg bg-red-600/80 border border-red-400/20 text-white font-semibold hover:bg-red-600 transition"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
