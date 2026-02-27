import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { books as initialBooks } from "@/data/mockData";
import type { Book } from "@/data/mockData";
import { StatusBadge } from "@/components/dashboard/StatusBadge";

export function InventorySection() {
  const [search, setSearch] = useState("");
  const [bookList] = useState<Book[]>(initialBooks);

  const filtered = bookList.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Inventory</h1>
        <button className="flex items-center gap-1.5 text-xs font-medium text-foreground border border-border rounded-md px-3 py-1.5 hover:bg-accent transition-colors">
          <Plus size={14} strokeWidth={1.5} />
          Add Book
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by title, author, or ID…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-8 pr-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Table */}
      <div className="bg-background rounded-lg border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Book ID</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Title</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Author</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Category</th>
              <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((book) => (
              <tr key={book.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{book.id}</td>
                <td className="px-4 py-2.5 font-medium text-foreground">{book.title}</td>
                <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{book.author}</td>
                <td className="px-4 py-2.5 text-muted-foreground hidden lg:table-cell">{book.category}</td>
                <td className="px-4 py-2.5"><StatusBadge status={book.status} /></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground text-sm">No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
