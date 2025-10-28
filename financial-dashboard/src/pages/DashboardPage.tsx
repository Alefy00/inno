import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Card } from "../components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="flex">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 md:ml-64 min-h-screen bg-[#0f172a] text-white">
        <Header />

        <section className="p-6 md:p-10 space-y-8">
          {/* Cards resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5">
              <h2 className="text-sm text-white/60">Receitas</h2>
              <p className="text-2xl font-semibold mt-1 text-green-400">
                R$ 0,00
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Despesas</h2>
              <p className="text-2xl font-semibold mt-1 text-red-400">
                R$ 0,00
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Pendentes</h2>
              <p className="text-2xl font-semibold mt-1 text-yellow-400">
                0
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Saldo total</h2>
              <p className="text-2xl font-semibold mt-1 text-indigo-400">
                R$ 0,00
              </p>
            </Card>
          </div>

          {/* Placeholder para gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="h-64 flex items-center justify-center text-white/50">
              [ Gráfico de barras empilhadas ]
            </Card>
            <Card className="h-64 flex items-center justify-center text-white/50">
              [ Gráfico de linhas ]
            </Card>
          </div>

          {/* Placeholder para tabela */}
          <Card className="p-6 mt-6">
            <div className="text-white/50 text-center">
              [ Tabela de transações ]
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
