import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { Card } from "../ui/Card";
import type { NormalizedTransaction } from "../../types/transaction";
import { buildDailyFlowData } from "../../utils/chartData";
import { formatCurrencyBRL } from "../../utils/metrics";

interface Props {
  dataSource: NormalizedTransaction[];
}

type DailyFlowPoint = {
  day: string;
  depositTotal: number;
  withdrawTotal: number;
  sortKey: number;
};

export default function StackedBarChartCard({ dataSource }: Props) {
  const chartData: DailyFlowPoint[] = buildDailyFlowData(dataSource);

  return (
    <Card className="p-4 flex flex-col h-64">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white/60">Fluxo diário</div>
          <div className="text-[13px] text-white/40">
            Entradas vs Saídas (empilhado)
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} stackOffset="sign">
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
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
              }}
            />
            <Bar
              dataKey="depositTotal"
              name="Entradas"
              stackId="flow"
              fill="rgba(16,185,129,0.8)" // verde
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="withdrawTotal"
              name="Saídas"
              stackId="flow"
              fill="rgba(239,68,68,0.8)" // vermelho
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
