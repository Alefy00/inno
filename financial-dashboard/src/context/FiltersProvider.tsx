import { useState, useEffect, type ReactNode } from "react";
import { FiltersContext, type DashboardFilters } from "./FiltersContext";

const DEFAULT_FILTERS: DashboardFilters = {
  account: null,
  industry: null,
  state: null,
  dateStart: null,
  dateEnd: null,
};

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<DashboardFilters>(DEFAULT_FILTERS);

  // carrega filtros persistidos ao montar
  useEffect(() => {
    const raw = localStorage.getItem("dashboard_filters");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setFiltersState((prev) => ({ ...prev, ...parsed }));
      } catch {
        // se quebrar o parse, ignora
      }
    }
  }, []);

  // função pública para atualizar filtros
  function setFilters(updater: (prev: DashboardFilters) => DashboardFilters) {
    setFiltersState((prev) => {
      const next = updater(prev);
      localStorage.setItem("dashboard_filters", JSON.stringify(next));
      return next;
    });
  }

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
