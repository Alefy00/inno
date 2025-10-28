import { useMemo } from "react";
import { useTransactions } from "../../context/useTransactions";
import { useFilters } from "../../context/useFilters";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";
import {
  epochToDateInputValue,
  dateInputValueToEpochStart,
  dateInputValueToEpochEnd,
} from "../../utils/dateRange";

/**
 * Responsividade:
 * - mobile: empilha os filtros em colunas (w-full)
 * - desktop: coloca lado a lado e permite wrap
 */
export default function DashboardFilters() {
  const { transactions } = useTransactions();
  const { filters, setFilters } = useFilters();

  // Combos dinâmicos baseados nas transações disponíveis
  const uniqueAccounts = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.account))).sort();
  }, [transactions]);

  const uniqueIndustries = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.industry))).sort();
  }, [transactions]);

  const uniqueStates = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.state))).sort();
  }, [transactions]);

  function handleSelectChange(
    key: "account" | "industry" | "state",
    value: string
  ) {
    setFilters((prev) => ({
      ...prev,
      [key]: value === "" ? null : value,
    }));
  }

  function handleDateStartChange(value: string) {
    const epoch = dateInputValueToEpochStart(value);
    setFilters((prev) => ({
      ...prev,
      dateStart: epoch,
    }));
  }

  function handleDateEndChange(value: string) {
    const epoch = dateInputValueToEpochEnd(value);
    setFilters((prev) => ({
      ...prev,
      dateEnd: epoch,
    }));
  }

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

      {/* Date Start */}
      <div className="w-full md:w-auto flex-1 min-w-[140px]">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Início
        </label>
        <input
          type="date"
          className="w-full bg-[#0f172a]/60 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 [color-scheme:dark]"
          value={epochToDateInputValue(filters.dateStart)}
          onChange={(e) => handleDateStartChange(e.target.value)}
        />
      </div>

      {/* Date End */}
      <div className="w-full md:w-auto flex-1 min-w-[140px]">
        <label className="block text-[12px] text-white/60 mb-1 font-medium">
          Fim
        </label>
        <input
          type="date"
          className="w-full bg-[#0f172a]/60 border border-white/10 text-white text-[14px] rounded-xl px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 [color-scheme:dark]"
          value={epochToDateInputValue(filters.dateEnd)}
          onChange={(e) => handleDateEndChange(e.target.value)}
        />
      </div>
    </Card>
  );
}
