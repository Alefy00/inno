import { useMemo, type ReactNode } from "react";
import { TransactionsContext } from "./TransactionsContext";
import { loadTransactions } from "../services/transactionsService";

export function TransactionsProvider({ children }: { children: ReactNode }) {
  // cacheia os dados carregados apenas uma vez
  const transactions = useMemo(() => loadTransactions(), []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
