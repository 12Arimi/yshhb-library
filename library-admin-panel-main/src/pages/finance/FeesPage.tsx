import { feeRecords, loanRecords } from "@/data/financeData";

const statusColor: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Overdue: "bg-destructive/10 text-destructive",
  Active: "bg-info/10 text-info",
  Cleared: "bg-success/10 text-success",
  Defaulted: "bg-destructive/10 text-destructive",
};

export default function FeesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Fee & Loan Management</h1>
        <p className="text-xs text-muted-foreground mt-1">Track student balances and loan status</p>
      </div>

      {/* Fee Records */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground">Student Fees</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Student</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Grade</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Total Fee</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Paid</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Balance</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Due Date</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {feeRecords.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{r.studentName}</td>
                  <td className="px-5 py-3 text-muted-foreground font-mono text-xs">{r.grade}</td>
                  <td className="px-5 py-3 text-right text-foreground">₹{r.totalFee.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-foreground">₹{r.amountPaid.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right font-medium text-foreground">₹{r.balance.toLocaleString()}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{r.dueDate}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColor[r.status]}`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loan Records */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground">Loans</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Student</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Repaid</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Due</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {loanRecords.map((l) => (
                <tr key={l.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{l.studentName}</td>
                  <td className="px-5 py-3 text-right text-foreground">₹{l.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-foreground">₹{l.repaid.toLocaleString()}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{l.dueDate}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColor[l.status]}`}>{l.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
