import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Home, LogOut } from "lucide-react";

export default function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleToggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  function goHome() {
    navigate("/dashboard"); // navegação interna SPA
    setOpenMenu(false);
  }

  function askLogout() {
    setConfirmLogout(true);
  }

  function cancelLogout() {
    setConfirmLogout(false);
  }

  function confirmLogoutAndExit() {
    logout(); // limpa sessão do contexto + localStorage
    setConfirmLogout(false);
    setOpenMenu(false);
    navigate("/login");
  }

  return (
    <div className="md:hidden border-b border-white/10 text-white relative">
      {/* Linha superior */}
      <header className="flex items-center justify-between bg-transparent px-4 py-4">
        <div className="flex flex-col">
          <span className="text-[13px] text-white/50 leading-tight">
            Olá, Alefy 👋
          </span>
          <span className="text-base font-semibold text-white leading-tight">
            Seu painel financeiro
          </span>
        </div>

        <button
          onClick={handleToggleMenu}
          className="rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-2 active:scale-[.98] transition"
        >
          {openMenu ? "Fechar" : "Menu"}
        </button>
      </header>

      {/* Dropdown animado (Home / Sair) */}
      <div
        className={[
          "px-4 pb-4 transition-all duration-200 ease-out origin-top",
          openMenu
            ? "opacity-100 scale-y-100 translate-y-0 max-h-[200px]"
            : "opacity-0 scale-y-95 -translate-y-1 max-h-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="rounded-xl bg-gradient-to-b from-[#3D0262] to-[#8E6320] border border-white/10 shadow-xl shadow-black/50 overflow-hidden">
          {/* Home */}
          <button
            onClick={goHome}
            className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            <Home size={16} className="text-white/80" />
            <span>Home</span>
          </button>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Logout -> abre modal de confirmação */}
          <button
            onClick={askLogout}
            className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            <LogOut size={16} className="text-white/80" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Modal de confirmação de logout */}
      {confirmLogout && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-10 bg-black/60 backdrop-blur-sm">
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

    </div>
  );
}
