import { useAuth } from "../../context/useAuth";
import { Button } from "../ui/Button";
import { Home, LogOut } from "lucide-react";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="hidden md:flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-[#3D0262] to-[#8E6320] p-6 text-white fixed left-0 top-0">
      {/* Logo / marca */}
      <div>
        <div className="text-2xl font-bold tracking-wide mb-10 text-white">
          fintrack
        </div>

        {/* Menu */}
        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/10 transition text-sm font-medium text-white"
          >
            <Home size={18} className="text-white/80" />
            <span>Home</span>
          </a>
        </nav>
      </div>

      {/* Logout */}
      <div>
        <Button
          onClick={logout}
          className="w-full bg-white/20 hover:bg-white/30 text-sm font-medium flex items-center justify-center gap-2"
        >
          <LogOut size={16} className="text-white/80" />
          <span>Sair</span>
        </Button>
      </div>
    </aside>
  );
}
