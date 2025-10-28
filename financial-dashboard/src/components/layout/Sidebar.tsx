import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Home, LogOut } from "lucide-react";
import { ConfirmLogoutModal } from "./ConfirmLogoutModal";


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
            fintrack
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

      {/* modal global */}
      <ConfirmLogoutModal
        open={showConfirm}
        onCancel={cancelLogout}
        onConfirm={confirmLogoutAndExit}
      />
    </>
  );
}
