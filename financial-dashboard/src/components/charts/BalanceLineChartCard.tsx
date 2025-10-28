import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "../ui/Card";
import type { NormalizedTransaction } from "../../types/transaction";
import { buildBalanceTimeline } from "../../utils/chartData";
import { formatCurrencyBRL } from "../../utils/metrics";

interface Props {
  dataSource: NormalizedTransaction[];
}

type BalancePoint = {
  day: string;
  balance: number;
  sortKey: number;
};

export default function BalanceLineChartCard({ dataSource }: Props) {
  const chartData: BalancePoint[] = buildBalanceTimeline(dataSource);

  return (
    <Card className="p-4 flex flex-col h-64">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white/60">Saldo acumulado</div>
          <div className="text-[13px] text-white/40">
            Evolução do saldo ao longo do tempo
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.4)"
              fontSize={12}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              fontSize={12}
              tickFormatter={(v: number) =>
                formatCurrencyBRL(v).replace("R$ ", "")
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1f2e",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                fontSize: "12px",
                color: "#fff",
              }}
              formatter={(value: number | string) => {
                const numeric =
                  typeof value === "number"
                    ? value
                    : Number.parseFloat(String(value));
                return formatCurrencyBRL(numeric);
              }}
              labelStyle={{ color: "#fff", fontWeight: 500 }}
              cursor={{ stroke: "rgba(255,255,255,0.2)" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
              }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              name="Saldo"
              stroke="rgba(99,102,241,0.9)" // roxo/indigo
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                strokeWidth: 0,
                fill: "rgba(99,102,241,1)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
