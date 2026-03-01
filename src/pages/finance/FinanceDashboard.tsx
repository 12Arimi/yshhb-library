import { DollarSign, AlertTriangle, Clock, TrendingUp } from "lucide-react";

// Example Inflated Data based on 500 students
const stats = {
  totalCollected: 1250500,
  outstanding: 45200,
  pendingVerifications: 12,
  totalStudents: 500,
  fullyPaid: 465,
  pending: 25,
  overdue: 10
};

const cards = [
  { 
    label: "Total Collected", 
    value: stats.totalCollected.toLocaleString(), 
    icon: DollarSign, 
    accent: "text-success",
    isCurrency: true 
  },
  { 
    label: "Outstanding Balances", 
    value: stats.outstanding.toLocaleString(), 
    icon: AlertTriangle, 
    accent: "text-warning",
    isCurrency: true 
  },
  { 
    label: "Pending Verifications", 
    value: stats.pendingVerifications.toString(), 
    icon: Clock, 
    accent: "text-info",
    isCurrency: false 
  },
];

export default function FinanceDashboard() {
  return (
    <div className="relative space-y-6 overflow-hidden">
      
      {/* Background SVG Watermark */}
      <div className="absolute -top-10 -right-10 opacity-[0.05] pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="relative z-10">
        <h1 className="text-lg font-semibold text-foreground tracking-tight">Finance Overview</h1>
        <p className="text-xs text-muted-foreground mt-1">Financial summary for 500 enrolled students</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-background border border-border rounded-lg p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{c.label}</span>
              <c.icon size={16} strokeWidth={1.5} className={c.accent} />
            </div>
            <div className="flex items-baseline gap-1">
              {c.isCurrency && (
                <span className="text-xs font-medium text-muted-foreground">BND</span>
              )}
              <p className="text-2xl font-bold text-foreground tracking-tight">
                {c.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 bg-background border border-border rounded-lg p-5">
        <h2 className="text-sm font-semibold text-foreground mb-5 flex items-center gap-2">
          <TrendingUp size={14} className="text-primary" />
          Quick Enrollment Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">{stats.totalStudents}</p>
            <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Total Students</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-success">{stats.fullyPaid}</p>
            <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Fully Paid</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-warning">{stats.pending}</p>
            <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Pending</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-destructive">{stats.overdue}</p>
            <p className="text-[10px] uppercase tracking-tighter text-muted-foreground">Overdue</p>
          </div>
        </div>
      </div>
    </div>
  );
}