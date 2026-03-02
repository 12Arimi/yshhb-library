import { DollarSign, AlertTriangle, Clock } from "lucide-react";
import { financeSummary } from "@/data/financeData";

const cards = [
  { label: "Total Collected", value: `₹${financeSummary.totalCollected.toLocaleString()}`, icon: DollarSign, accent: "text-success" },
  { label: "Outstanding Balances", value: `₹${financeSummary.outstandingBalances.toLocaleString()}`, icon: AlertTriangle, accent: "text-warning" },
  { label: "Pending Verifications", value: financeSummary.pendingVerifications, icon: Clock, accent: "text-info" },
];

export default function FinanceDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Finance Overview</h1>
        <p className="text-xs text-muted-foreground mt-1">Financial summary at a glance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-background border border-border rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground">{c.label}</span>
              <c.icon size={16} strokeWidth={1.5} className={c.accent} />
            </div>
            <p className="text-2xl font-semibold text-foreground">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-lg p-5">
        <h2 className="text-sm font-semibold text-foreground mb-3">Quick Stats</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl font-semibold text-foreground">{financeSummary.totalStudents}</p>
            <p className="text-[10px] text-muted-foreground mt-1">Total Students</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-success">2</p>
            <p className="text-[10px] text-muted-foreground mt-1">Fully Paid</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-warning">2</p>
            <p className="text-[10px] text-muted-foreground mt-1">Pending</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-destructive">2</p>
            <p className="text-[10px] text-muted-foreground mt-1">Overdue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
