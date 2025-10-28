type Props = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmLogoutModal({ open, onCancel, onConfirm }: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        z-[99999]
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        px-4
      "
    >
      <div
        className="
          w-full max-w-[320px]
          rounded-xl
          bg-[#1a1f2e]
          border border-white/10
          text-white
          shadow-2xl shadow-black/70
          p-5
        "
      >
        <div className="text-base font-semibold text-white mb-2">
          Deseja realmente sair?
        </div>

        <div className="text-[13px] text-white/60 mb-5 leading-relaxed">
          Sua sessão será encerrada e você voltará para a tela de login.
        </div>

        <div className="flex items-center justify-end gap-3 text-[14px]">
          <button
            onClick={onCancel}
            className="
              px-3 py-2 rounded-lg
              bg-white/10
              border border-white/20
              text-white/80 font-medium
              hover:bg-white/15
              transition
            "
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="
              px-3 py-2 rounded-lg
              bg-red-600/80
              border border-red-400/20
              text-white font-semibold
              hover:bg-red-600
              transition
            "
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
