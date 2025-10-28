import { createContext } from "react";
import type { NormalizedTransaction } from "../types/transaction";

export interface TransactionsContextValue {
  transactions: NormalizedTransaction[];
}

export const TransactionsContext = createContext<TransactionsContextValue | undefined>(
  undefined
);
