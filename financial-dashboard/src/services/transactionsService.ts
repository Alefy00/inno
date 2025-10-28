import data from "../data/transactions.json";
import type { NormalizedTransaction, Transaction } from "../types/transaction";


// helper p/ converter "5565" -> 55.65
function parseAmount(raw: string): number {
  if (!raw) return 0;
  const padded = raw.padStart(3, "0");
  const intPart = padded.slice(0, padded.length - 2);
  const decPart = padded.slice(-2);
  return Number(`${intPart}.${decPart}`);
}

export function loadTransactions(): NormalizedTransaction[] {
  const arr = data as Transaction[];

  return arr.map((t) => ({
    date: t.date,
    amount: parseAmount(t.amount),
    transaction_type: t.transaction_type,
    currency: t.currency,
    account: t.account,
    industry: t.industry,
    state: t.state,
  }));
}
