import type { NormalizedTransaction } from "../types/transaction";
import type { DashboardFilters } from "../context/FiltersContext";

export function filterTransactions(
  all: NormalizedTransaction[],
  filters: DashboardFilters
): NormalizedTransaction[] {
  return all.filter((t) => {
    // filtra account
    if (filters.account && t.account !== filters.account) {
      return false;
    }

    // filtra industry
    if (filters.industry && t.industry !== filters.industry) {
      return false;
    }

    // filtra state
    if (filters.state && t.state !== filters.state) {
      return false;
    }

    // filtra data inicial
    if (filters.dateStart && t.date < filters.dateStart) {
      return false;
    }

    // filtra data final
    if (filters.dateEnd && t.date > filters.dateEnd) {
      return false;
    }

    return true;
  });
}
