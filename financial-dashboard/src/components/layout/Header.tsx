export default function Header() {
  return (
    <header className="hidden md:flex items-center justify-between bg-transparent px-10 py-6 border-b border-white/10 text-white">
      <h1 className="text-2xl font-semibold text-white">
        Olá, Innodev!
      </h1>

      <div className="text-sm text-white/50">
        <span>Bem-vindo ao seu painel financeiro</span>
      </div>
    </header>
  );
}
