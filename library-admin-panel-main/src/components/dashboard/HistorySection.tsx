import { useState } from "react";
import { Search } from "lucide-react";
import { transactions } from "@/data/mockData";

export function HistorySection() {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(
    (tx) =>
      tx.bookTitle.toLowerCase().includes(search.toLowerCase()) ||
      tx.studentName.toLowerCase().includes(search.toLowerCase()) ||
      tx.bookId.toLowerCase().includes(search.toLowerCase()) ||
      tx.studentId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Borrowing History</h1>

      <div className="relative max-w-md">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search transactions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-8 pr-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div className="bg-background rounded-lg border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Book</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Student</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{tx.id}</td>
                <td className="px-4 py-2.5 text-foreground">{tx.bookTitle}</td>
                <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{tx.studentName}</td>
                <td className="px-4 py-2.5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    tx.type === "Issue" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-muted-foreground font-mono text-xs">{tx.date}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground text-sm">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
