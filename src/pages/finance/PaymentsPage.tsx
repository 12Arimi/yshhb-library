import { useState } from "react";
import { paymentUploads, type PaymentUpload, type VerificationStatus } from "@/data/financeData";
import { Check, X, Eye } from "lucide-react";

const statusColor: Record<VerificationStatus, string> = {
  Pending: "bg-warning/10 text-warning",
  Approved: "bg-success/10 text-success",
  Rejected: "bg-destructive/10 text-destructive",
};

export default function PaymentsPage() {
  const [uploads, setUploads] = useState<PaymentUpload[]>(paymentUploads);
  const [preview, setPreview] = useState<string | null>(null);

  const updateStatus = (id: string, status: VerificationStatus) => {
    setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Payment Verification</h1>
        <p className="text-xs text-muted-foreground mt-1">Review uploaded payment screenshots and approve to generate receipts</p>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Student</th>
                {/* Currency indicated in the header instead of every row */}
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Amount (BND)</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Uploaded</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Screenshot</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Status</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {uploads.map((u) => (
                <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{u.studentName}</td>
                  <td className="px-5 py-3 text-right text-foreground font-medium">{u.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{u.uploadedAt}</td>
                  <td className="px-5 py-3">
                    <button
                      onClick={() => setPreview(u.screenshotUrl)}
                      className="flex items-center gap-1 text-xs text-info hover:underline"
                    >
                      <Eye size={12} /> View
                    </button>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColor[u.status]}`}>{u.status}</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    {u.status === "Pending" && (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => updateStatus(u.id, "Approved")}
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded bg-success/10 text-success hover:bg-success/20 transition-colors"
                        >
                          <Check size={10} /> Approve
                        </button>
                        <button
                          onClick={() => updateStatus(u.id, "Rejected")}
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                        >
                          <Check size={10} /> Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Screenshot Preview Modal */}
      {preview && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <div className="bg-background border border-border rounded-lg p-4 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Payment Screenshot</h3>
              <button onClick={() => setPreview(null)} className="text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <img src={preview} alt="Payment screenshot" className="max-h-full max-w-full rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}