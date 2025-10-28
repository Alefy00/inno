// Converte epoch (ms) -> "YYYY-MM-DD" pra usar em <input type="date">
export function epochToDateInputValue(epochMs: number | null): string {
  if (!epochMs) return "";
  const d = new Date(epochMs);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Converte "YYYY-MM-DD" -> epoch ms (início do dia local)
export function dateInputValueToEpochStart(value: string): number | null {
  if (!value) return null;
  // cria Date naquele dia às 00:00 local
  const [yearStr, monthStr, dayStr] = value.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr) - 1; // Date usa 0-11
  const day = Number(dayStr);
  return new Date(year, month, day, 0, 0, 0, 0).getTime();
}

// Converte "YYYY-MM-DD" -> epoch ms (fim do dia local)
export function dateInputValueToEpochEnd(value: string): number | null {
  if (!value) return null;
  const [yearStr, monthStr, dayStr] = value.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);
  // 23:59:59.999 do dia
  return new Date(year, month, day, 23, 59, 59, 999).getTime();
}
