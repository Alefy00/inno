import { useMemo } from "react";
import { useTransactions } from "../../context/useTransactions";
import { useFilters } from "../../context/useFilters";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";

/**
 * Esse componente precisa ser responsivo:
 * - No mobile: empilha os selects em uma coluna
 * - No desktop: exibe linha horizontal
 */
export default function DashboardFilters() {
  const { transactions } = useTransactions();
  const { filters, setFilters } = useFilters();

  // pegar valores únicos para os dropdowns
  const uniqueAccounts = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.account))).sort();
  }, [transactions]);

  const uniqueIndustries = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.industry))).sort();
  }, [transactions]);

  const uniqueStates = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.state))).sort();
  }, [transactions]);

  function handleSelectChange(key: "account" | "industry" | "state", value: string) {
    setFilters((prev) => ({
      ...prev,
      [key]: value === "" ? null : value,
    }));
  }

  // date range vai entrar depois com popover, por enquanto placeholder

  return (
    <Card
      className={cn(
        "p-4 md:p-5",
        "flex flex-col gap-4",
        "md:flex-row md:flex-wrap md:items-end md:gap-6"
      )}
    >
      {/* Account */}
      <div className="w-full md:w-auto flex-1 min-w-[140px]">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Conta
        </label>
        <select
          className="w-full bg-[#0f172a]/60 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
          value={filters.account ?? ""}
          onChange={(e) => handleSelectChange("account", e.target.value)}
        >
          <option value="">Todas</option>
          {uniqueAccounts.map((acc) => (
            <option key={acc} value={acc}>
              {acc}
            </option>
          ))}
        </select>
      </div>

      {/* Industry */}
      <div className="w-full md:w-auto flex-1 min-w-[140px]">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Indústria
        </label>
        <select
          className="w-full bg-[#0f172a]/60 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
          value={filters.industry ?? ""}
          onChange={(e) => handleSelectChange("industry", e.target.value)}
        >
          <option value="">Todas</option>
          {uniqueIndustries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* State */}
      <div className="w-full md:w-auto flex-1 min-w-[140px]">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Estado
        </label>
        <select
          className="w-full bg-[#0f172a]/60 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40"
          value={filters.state ?? ""}
          onChange={(e) => handleSelectChange("state", e.target.value)}
        >
          <option value="">Todos</option>
          {uniqueStates.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
      </div>

      {/* Data (placeholder visual por enquanto) */}
      <div className="w-full md:w-auto flex-1 min-w-[140px] opacity-60 pointer-events-none">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Período
        </label>
        <div className="w-full bg-[#0f172a]/40 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 flex items-center justify-between">
          <span className="text-white/40 text-[13px]">Selecionar datas</span>
          <span className="text-white/30 text-[12px]">em breve</span>
        </div>
      </div>
    </Card>
  );
}
