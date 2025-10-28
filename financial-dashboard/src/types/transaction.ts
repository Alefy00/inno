export type TransactionType = "deposit" | "withdraw";

export interface Transaction {
  date: number; // epoch ms (ms desde 1970)
  amount: string; // valor em centavos como string, ex "5565"
  transaction_type: TransactionType;
  currency: string;
  account: string;
  industry: string;
  state: string;
}

export interface NormalizedTransaction {
  date: number;
  amount: number; // ex: 55.65
  transaction_type: TransactionType;
  currency: string;
  account: string;
  industry: string;
  state: string;
}
