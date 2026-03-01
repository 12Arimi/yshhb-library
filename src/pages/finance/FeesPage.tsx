import { feeRecords, loanRecords } from "@/data/financeData";
import { Info, Banknote, History } from "lucide-react";

const statusColor: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Overdue: "bg-destructive/10 text-destructive",
  Active: "bg-info/10 text-info", // For pending reimbursements
  Cleared: "bg-success/10 text-success", // For completed reimbursements
  Defaulted: "bg-destructive/10 text-destructive",
};

export default function FeesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Finance Management</h1>
        <p className="text-xs text-muted-foreground mt-1">Tuition fees and activity reimbursement tracking</p>
      </div>

      {/* Fee Records */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex justify-between items-center">
          <h2 className="text-sm font-semibold text-foreground">Student Tuition Fees</h2>
          <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">All amounts in BND</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
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
                  <td className="px-5 py-3 text-right text-foreground">{r.totalFee.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-foreground">{r.amountPaid.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right font-semibold text-foreground">{r.balance.toLocaleString()}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{r.dueDate}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${statusColor[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Pre-funding Section */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border bg-info/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Banknote size={16} className="text-info" />
            <h2 className="text-sm font-semibold text-foreground">Activity Pre-funding & Reimbursements</h2>
          </div>
          <div className="group relative">
            <Info size={14} className="text-muted-foreground cursor-help" />
            <div className="absolute right-0 bottom-full mb-2 w-64 hidden group-hover:block bg-popover text-popover-foreground text-[10px] p-2 rounded shadow-lg border border-border">
              Funds provided by students to facilitate immediate activity needs, awaiting school budget disbursement.
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Facilitator (Student)</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Activity Purpose</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Pre-funded Amount (BND)</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Reimbursed</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Disbursement Date</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {loanRecords.map((l) => (
                <tr key={l.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{l.studentName}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground italic">
                    {/* Assuming purpose is stored or fallback to generic */}
                    Activity Support
                  </td>
                  <td className="px-5 py-3 text-right font-medium text-foreground">{l.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-success font-medium">
                    {l.repaid > 0 ? l.repaid.toLocaleString() : "—"}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">
                    {l.status === "Cleared" ? l.dueDate : "Pending Budget"}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${statusColor[l.status]}`}>
                      {l.status === "Cleared" ? "Reimbursed" : "Awaiting School"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 bg-muted/10 border-t border-border flex items-center gap-2 text-[10px] text-muted-foreground">
          <History size={12} />
          <span>Teachers/Admins: Ensure all activity receipts are attached before initiating reimbursement.</span>
        </div>
      </div>
    </div>
  );
}