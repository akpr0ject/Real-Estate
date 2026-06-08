import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  hint,
}: {
  label: string;
  value: string;
  delta?: number;
  icon: LucideIcon;
  hint?: string;
}) {
  const up = (delta ?? 0) >= 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-5 shadow-elegant"
    >
      <div className="flex items-start justify-between">
        <div className="grid size-10 place-items-center rounded-xl bg-muted">
          <Icon className="size-4 text-ember" />
        </div>
        {delta !== undefined && (
          <span
            className={`inline-flex items-center gap-0.5 rounded-full px-2 py-1 text-[11px] ${
              up ? "bg-ember/10 text-ember" : "bg-destructive/15 text-destructive"
            }`}
          >
            {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
            {Math.abs(delta)}%
          </span>
        )}
      </div>
      <div className="mt-5">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-2xl font-semibold tracking-tight">{value}</div>
        {hint && <div className="mt-1 text-[11px] text-muted-foreground">{hint}</div>}
      </div>
    </motion.div>
  );
}
