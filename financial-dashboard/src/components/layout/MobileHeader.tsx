import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { Home, LogOut } from "lucide-react";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  function handleLogout() {
    logout();
    setOpen(false);
  }

  return (
    <div className="md:hidden border-b border-white/10 text-white">
      {/* Linha superior */}
      <header className="flex items-center justify-between bg-transparent px-4 py-4">
        <div className="flex flex-col">
          <span className="text-[13px] text-white/50 leading-tight">
            Olá, Innodev!
          </span>
          <span className="text-base font-semibold text-white leading-tight">
            Seu painel financeiro
          </span>
        </div>

        <button
          onClick={handleToggle}
          className="rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-2 active:scale-[.98] transition"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </header>

      {/* Menu expansível com animação */}
      <div
        className={[
          "px-4 pb-4 transition-all duration-200 ease-out origin-top",
          open
            ? "opacity-100 scale-y-100 translate-y-0 max-h-[200px]"
            : "opacity-0 scale-y-95 -translate-y-1 max-h-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="rounded-xl bg-gradient-to-b from-[#3D0262] to-[#8E6320] border border-white/10 shadow-xl shadow-black/50 overflow-hidden">
          {/* Home */}
          <a
            href="/dashboard"
            className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
            onClick={() => setOpen(false)}
          >
            <Home size={16} className="text-white/80" />
            <span>Home</span>
          </a>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            <LogOut size={16} className="text-white/80" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </div>
  );
}
