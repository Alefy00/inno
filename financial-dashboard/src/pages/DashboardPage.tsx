import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Card } from "../components/ui/Card";

import { useTransactions } from "../context/useTransactions";
import { useFilters } from "../context/useFilters";
import { filterTransactions } from "../utils/filterTransactions";
import { getTotals, formatCurrencyBRL } from "../utils/metrics";

import DashboardFilters from "../components/dashboard/DashboardFilters";
import StackedBarChartCard from "../components/charts/StackedBarChartCard";
import BalanceLineChartCard from "../components/charts/BalanceLineChartCard";

export default function DashboardPage() {
  const { transactions } = useTransactions();
  const { filters } = useFilters();

  // aplica filtros
  const filtered = filterTransactions(transactions, filters);

  // totais dos cards com base no filtro
  const { income, expense, balance, pendingCount } = getTotals(filtered);

  return (
    <div className="flex">
      {/* Sidebar fixa no desktop */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 md:ml-64 min-h-screen bg-[#0f172a] text-white flex flex-col">
        <Header />

        <section className="p-6 md:p-10 space-y-8 flex-1">
          {/* Filtros globais */}
          <DashboardFilters />

          {/* Cards resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5">
              <h2 className="text-sm text-white/60">Receitas</h2>
              <p className="text-2xl font-semibold mt-1 text-green-400 break-words">
                {formatCurrencyBRL(income)}
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Despesas</h2>
              <p className="text-2xl font-semibold mt-1 text-red-400 break-words">
                {formatCurrencyBRL(expense)}
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Pendentes</h2>
              <p className="text-2xl font-semibold mt-1 text-yellow-400 break-words">
                {pendingCount}
              </p>
              <p className="text-[11px] text-white/40 mt-1 leading-snug">
                (total de saídas registradas)
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm text-white/60">Saldo total</h2>
              <p className="text-2xl font-semibold mt-1 text-indigo-400 break-words">
                {formatCurrencyBRL(balance)}
              </p>
            </Card>
          </div>

          {/* Gráficos dinâmicos e responsivos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StackedBarChartCard dataSource={filtered} />
            <BalanceLineChartCard dataSource={filtered} />
          </div>

          {/* Tabela placeholder */}
          <Card className="p-6 mt-6 overflow-x-auto">
            <div className="text-white/50 text-center text-sm">
              [ Tabela de transações filtráveis ]
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
