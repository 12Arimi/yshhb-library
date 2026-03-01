import { useNavigate } from "react-router-dom";
import { BookCopy, ArrowRightLeft, Users, Clock } from "lucide-react";
import { books, transactions, reservations } from "@/data/mockData";

export function DashboardOverview() {
  const navigate = useNavigate();
  const available = books.filter((b) => b.status === "Available").length;
  const issued = books.filter((b) => b.status === "Issued").length;
  const reserved = books.filter((b) => b.status === "Reserved").length;
  const totalQueue = reservations.reduce((s, r) => s + r.queue.length, 0);

  const stats = [
    { label: "Total Books", value: books.length, icon: BookCopy, path: "/library/inventory" },
    { label: "Currently Issued", value: issued, icon: ArrowRightLeft, path: "/library/issuing" },
    { label: "In Queue", value: totalQueue, icon: Users, path: "/library/queue" },
    { label: "Transactions", value: transactions.length, icon: Clock, path: "/library/reports" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <button
            key={s.label}
            onClick={() => navigate(s.path)}
            className="bg-background rounded-lg border border-border p-4 text-left hover:border-foreground/20 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <s.icon size={14} strokeWidth={1.5} className="text-muted-foreground" />
              <span className="text-[11px] text-muted-foreground font-medium">{s.label}</span>
            </div>
            <span className="text-2xl font-semibold text-foreground">{s.value}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-background rounded-lg border border-border p-4">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Availability</h2>
          <div className="space-y-2">
            {[
              { label: "Available", count: available, color: "bg-success" },
              { label: "Issued", count: issued, color: "bg-warning" },
              { label: "Reserved", count: reserved, color: "bg-info" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-foreground">{item.label}</span>
                </div>
                <span className="font-mono text-muted-foreground">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-lg border border-border p-4">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Activity</h2>
          <div className="space-y-2.5">
            {transactions.slice(0, 4).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-foreground">{tx.bookTitle}</span>
                  <span className="text-muted-foreground text-xs ml-1.5">→ {tx.studentName}</span>
                </div>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  tx.type === "Issue" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
                }`}>
                  {tx.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
