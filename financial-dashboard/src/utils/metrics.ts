import type { NormalizedTransaction } from "../types/transaction";

export function getTotals(transactions: NormalizedTransaction[]) {
  let income = 0;
  let expense = 0;
  let pendingCount = 0;

  for (const t of transactions) {
    if (t.transaction_type === "deposit") {
      income += t.amount;
    } else if (t.transaction_type === "withdraw") {
      expense += t.amount;
      pendingCount += 1;
    }
  }

  const balance = income - expense;

  return {
    income,
    expense,
    balance,
    pendingCount,
  };
}

// formatar em BRL
export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
