import { createContext } from "react";

export interface DashboardFilters {
  account: string | null;
  industry: string | null;
  state: string | null;
  dateStart: number | null; // epoch ms
  dateEnd: number | null;   // epoch ms
}

export interface FiltersContextValue {
  filters: DashboardFilters;
  setFilters: (updater: (prev: DashboardFilters) => DashboardFilters) => void;
}

export const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined
);
