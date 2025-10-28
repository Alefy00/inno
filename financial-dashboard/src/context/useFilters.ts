import { useContext } from "react";
import { FiltersContext } from "./FiltersContext";

export function useFilters() {
  const ctx = useContext(FiltersContext);
  if (!ctx) {
    throw new Error("useFilters deve ser usado dentro de <FiltersProvider>");
  }
  return ctx;
}
