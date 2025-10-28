import { useMemo, useState } from "react";
import type { NormalizedTransaction } from "../../types/transaction";
import { Card } from "../ui/Card";
import {
  formatCurrencyBRL,
  formatDate,
  getTransactionLabel,
  getTransactionColorClass,
} from "../../utils/format";

interface TransactionsTableProps {
  dataSource: NormalizedTransaction[];
  pageSize?: number; // opcional, default 20
}

export default function TransactionsTable({
  dataSource,
  pageSize = 20,
}: TransactionsTableProps) {
  // estado da página atual (começa na 1)
  const [page, setPage] = useState(1);

  // total de páginas
  const totalPages = Math.max(1, Math.ceil(dataSource.length / pageSize));

  // garantir que page esteja sempre em range (ex: se filtros mudarem e lista ficar menor)
  const safePage = Math.min(page, totalPages);

  // fatia dos dados que vamos exibir
  const paginatedData = useMemo(() => {
    const startIdx = (safePage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    return dataSource.slice(startIdx, endIdx);
  }, [dataSource, safePage, pageSize]);

  // intervalo que está sendo mostrado agora (pra mensagem "Mostrando X-Y de Z")
  const startNumber = dataSource.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endNumber = dataSource.length === 0
    ? 0
    : Math.min(safePage * pageSize, dataSource.length);

  function goPrev() {
    setPage((p) => Math.max(1, p - 1));
  }

  function goNext() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <Card className="p-0 overflow-hidden">
      {/* Header da seção */}
      <div className="px-6 pt-6 pb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm text-white/60 font-medium">
            Histórico de transações
          </div>
          <div className="text-[13px] text-white/40">
            {dataSource.length} resultado(s) após filtro
          </div>
        </div>

        {/* Controles de paginação - topo no desktop, embaixo no mobile */}
        <div className="hidden sm:flex items-center gap-3 text-[12px] text-white/60">
          <button
            onClick={goPrev}
            disabled={safePage === 1}
            className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-[12px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition"
          >
            ← Anterior
          </button>
          <span className="text-white/50">
            Página <span className="text-white">{safePage}</span> de{" "}
            <span className="text-white">{totalPages}</span>
          </span>
          <button
            onClick={goNext}
            disabled={safePage === totalPages}
            className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-[12px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition"
          >
            Próximo →
          </button>
        </div>
      </div>

      {/* Versão Desktop: tabela */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm text-white/80 min-w-[700px] border-t border-white/10">
          <thead className="bg-white/5 text-[12px] uppercase text-white/50 tracking-wide">
            <tr>
              <th className="py-3 px-6 font-medium">Data</th>
              <th className="py-3 px-6 font-medium">Conta</th>
              <th className="py-3 px-6 font-medium">Indústria</th>
              <th className="py-3 px-6 font-medium">Estado</th>
              <th className="py-3 px-6 font-medium">Tipo</th>
              <th className="py-3 px-6 font-medium text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedData.map((t, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/5 text-[13px] text-white/80"
              >
                <td className="py-3 px-6 whitespace-nowrap text-white/90">
                  {formatDate(t.date)}
                </td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <span className="text-white">{t.account}</span>
                </td>
                <td className="py-3 px-6 whitespace-nowrap text-white/70">
                  {t.industry}
                </td>
                <td className="py-3 px-6 whitespace-nowrap text-white/70">
                  {t.state}
                </td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center rounded-lg px-2 py-[2px] text-[11px] font-medium bg-white/5 ${getTransactionColorClass(
                      t.transaction_type
                    )}`}
                  >
                    {getTransactionLabel(t.transaction_type)}
                  </span>
                </td>
                <td className="py-3 px-6 whitespace-nowrap text-right font-semibold text-white">
                  <span
                    className={getTransactionColorClass(t.transaction_type)}
                  >
                    {formatCurrencyBRL(t.amount)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Versão Mobile: cards */}
      <div className="md:hidden flex flex-col gap-4 px-6 pb-4 pt-2">
        {paginatedData.map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[13px] text-white/80"
          >
            <div className="flex items-start justify-between">
              <div className="font-medium text-white">{t.account}</div>
              <div
                className={`text-right font-semibold ${getTransactionColorClass(
                  t.transaction_type
                )}`}
              >
                {formatCurrencyBRL(t.amount)}
              </div>
            </div>

            <div className="flex items-center justify-between mt-2 text-[12px] text-white/60">
              <div>{formatDate(t.date)}</div>
              <div
                className={`rounded-lg bg-white/5 px-2 py-[2px] ${getTransactionColorClass(
                  t.transaction_type
                )}`}
              >
                {getTransactionLabel(t.transaction_type)}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-y-1 text-[12px] text-white/60">
              <div>
                <span className="text-white/40">Indústria: </span>
                <span className="text-white/80">{t.industry}</span>
              </div>
              <div className="text-right">
                <span className="text-white/40">Estado: </span>
                <span className="text-white/80">{t.state}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Barra de paginação (mobile-friendly) */}
      <div className="px-6 pb-6 pt-4 border-t border-white/10 flex flex-col items-center gap-3 text-[12px] text-white/60 sm:flex-row sm:justify-between sm:text-left">
        <div className="text-center sm:text-left">
          Mostrando{" "}
          <span className="text-white font-medium">{startNumber}</span>-
          <span className="text-white font-medium">{endNumber}</span> de{" "}
          <span className="text-white font-medium">{dataSource.length}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            disabled={safePage === 1}
            className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-[12px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition"
          >
            ← Anterior
          </button>
          <div className="text-white/50">
            <span className="text-white">{safePage}</span> /{" "}
            <span className="text-white">{totalPages}</span>
          </div>
          <button
            onClick={goNext}
            disabled={safePage === totalPages}
            className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/80 text-[12px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition"
          >
            Próximo →
          </button>
        </div>
      </div>
    </Card>
  );
}
