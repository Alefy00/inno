import { useAuth } from "../../context/useAuth";
import { Button } from "../ui/Button";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="hidden md:flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-[#3D0262] to-[#8E6320] p-6 text-white fixed left-0 top-0">
      {/* Logo */}
      <div>
        <div className="text-2xl font-bold tracking-wide mb-10">fintrack</div>

        {/* Menu */}
        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="block py-2 px-3 rounded-lg hover:bg-white/10 transition text-sm font-medium"
          >
            🏠 Home
          </a>
        </nav>
      </div>

      {/* Logout */}
      <div>
        <Button
          onClick={logout}
          className="w-full bg-white/20 hover:bg-white/30 text-sm font-medium"
        >
          Sair
        </Button>
      </div>
    </aside>
  );
}
