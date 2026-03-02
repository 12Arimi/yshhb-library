import { useState } from "react";
import { receipts } from "@/data/financeData";
import { Printer, Eye } from "lucide-react";

export default function ReceiptsPage() {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const previewReceipt = receipts.find((r) => r.id === previewId);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Digital Receipts</h1>
        <p className="text-xs text-muted-foreground mt-1">Preview and print official school receipts</p>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Receipt #</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Student</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Date</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Method</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-foreground">{r.id}</td>
                  <td className="px-5 py-3 font-medium text-foreground">{r.studentName}</td>
                  <td className="px-5 py-3 text-right text-foreground">₹{r.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{r.date}</td>
                  <td className="px-5 py-3 text-muted-foreground text-xs">{r.method}</td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => setPreviewId(r.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded border border-border text-foreground hover:bg-muted transition-colors"
                    >
                      <Eye size={10} /> Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Receipt Preview Modal */}
      {previewReceipt && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setPreviewId(null)}>
          <div className="bg-background border border-border rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {/* Receipt Template */}
            <div className="p-8 space-y-6">
              <div className="text-center border-b border-border pb-4">
                <h2 className="text-base font-semibold text-foreground tracking-wide">YSHHB ONE</h2>
                <p className="text-[10px] text-muted-foreground mt-1">Official School Receipt</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Receipt No.</span>
                  <span className="font-mono font-medium text-foreground">{previewReceipt.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="text-foreground">{previewReceipt.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student</span>
                  <span className="font-medium text-foreground">{previewReceipt.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grade</span>
                  <span className="text-foreground">{previewReceipt.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Description</span>
                  <span className="text-foreground">{previewReceipt.description}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="text-foreground">{previewReceipt.method}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="text-sm font-semibold text-foreground">Amount Paid</span>
                <span className="text-lg font-semibold text-foreground">₹{previewReceipt.amount.toLocaleString()}</span>
              </div>

              <div className="text-center pt-2">
                <p className="text-[10px] text-muted-foreground">This is a computer-generated receipt. No signature required.</p>
              </div>
            </div>

            <div className="border-t border-border px-5 py-3 flex justify-end gap-2">
              <button
                onClick={() => setPreviewId(null)}
                className="text-xs font-medium px-3 py-1.5 rounded border border-border text-foreground hover:bg-muted transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Printer size={12} /> Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
