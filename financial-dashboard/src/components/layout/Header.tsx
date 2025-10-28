export default function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent px-4 md:px-10 py-6 border-b border-white/10">
      <h1 className="text-xl md:text-2xl font-semibold text-white">
        Olá, Alefy 👋
      </h1>

      <div className="text-sm text-white/50">
        <span>Bem-vindo ao seu painel financeiro</span>
      </div>
    </header>
  );
}
