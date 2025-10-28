// 12345 -> "R$ 123,45" já temos outro formatador em metrics, mas vou repetir aqui
export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

// epoch ms -> "dd/MM/yyyy"
export function formatDate(epochMs: number): string {
  const d = new Date(epochMs);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

// tipo deposit / withdraw para texto amigável
export function getTransactionLabel(type: "deposit" | "withdraw"): string {
  return type === "deposit" ? "Entrada" : "Saída";
}

// cor baseada no tipo de transação
export function getTransactionColorClass(
  type: "deposit" | "withdraw"
): string {
  return type === "deposit"
    ? "text-green-400"
    : "text-red-400";
}
