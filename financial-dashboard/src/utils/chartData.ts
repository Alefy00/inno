import type { NormalizedTransaction } from "../types/transaction";

function formatDay(epochMs: number): string {
  const d = new Date(epochMs);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
}

export type DailyFlowPoint = {
  day: string;
  depositTotal: number;
  withdrawTotal: number;
  sortKey: number;
};

export function buildDailyFlowData(
  transactions: NormalizedTransaction[]
): DailyFlowPoint[] {
  const map = new Map<string, { depositTotal: number; withdrawTotal: number }>();

  for (const t of transactions) {
    const key = formatDay(t.date);
    if (!map.has(key)) {
      map.set(key, { depositTotal: 0, withdrawTotal: 0 });
    }
    const bucket = map.get(key)!;
    if (t.transaction_type === "deposit") {
      bucket.depositTotal += t.amount;
    } else {
      bucket.withdrawTotal += t.amount;
    }
  }

  const dateKeyToEpoch = new Map<string, number>();
  for (const t of transactions) {
    const k = formatDay(t.date);
    if (!dateKeyToEpoch.has(k)) {
      dateKeyToEpoch.set(k, t.date);
    } else {
      dateKeyToEpoch.set(k, Math.min(dateKeyToEpoch.get(k)!, t.date));
    }
  }

  const result: DailyFlowPoint[] = Array.from(map.entries()).map(
    ([day, vals]) => ({
      day,
      depositTotal: Number(vals.depositTotal.toFixed(2)),
      withdrawTotal: Number(vals.withdrawTotal.toFixed(2)),
      sortKey: dateKeyToEpoch.get(day) ?? 0,
    })
  );

  result.sort((a, b) => a.sortKey - b.sortKey);
  return result;
}

export type BalancePoint = {
  day: string;
  balance: number;
  sortKey: number;
};

export function buildBalanceTimeline(
  transactions: NormalizedTransaction[]
): BalancePoint[] {
  // ordena por data
  const sorted = [...transactions].sort((a, b) => a.date - b.date);

  let running = 0;
  const timeline: Array<{ day: string; balance: number }> = [];

  for (const t of sorted) {
    if (t.transaction_type === "deposit") {
      running += t.amount;
    } else {
      running -= t.amount;
    }
    timeline.push({
      day: formatDay(t.date),
      balance: Number(running.toFixed(2)),
    });
  }

  const perDay = new Map<string, number>();
  for (const point of timeline) {
    perDay.set(point.day, point.balance);
  }

  const dayToEpoch = new Map<string, number>();
  for (const t of sorted) {
    const k = formatDay(t.date);
    if (!dayToEpoch.has(k)) {
      dayToEpoch.set(k, t.date);
    }
  }

  const merged: BalancePoint[] = Array.from(perDay.entries()).map(
    ([day, balance]) => ({
      day,
      balance,
      sortKey: dayToEpoch.get(day) ?? 0,
    })
  );

  merged.sort((a, b) => a.sortKey - b.sortKey);
  return merged;
}
