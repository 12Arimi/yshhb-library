import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function IssuingSection() {
  const [studentId, setStudentId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleIssue = () => {
    if (!studentId.trim() || !bookId.trim()) {
      toast.error("Please enter both Student ID and Book ID.");
      return;
    }
    toast.success(`Book ${bookId} issued to ${studentId}.`);
    setStudentId("");
    setBookId("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Issue a Book</h1>

      <div className="bg-background border border-border rounded-lg p-5 max-w-lg space-y-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Student ID</label>
          <input
            type="text"
            placeholder="e.g. STU-2001"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Book ID</label>
          <input
            type="text"
            placeholder="e.g. BK-0001"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <button
          onClick={handleIssue}
          className="flex items-center gap-1.5 text-xs font-medium bg-foreground text-background rounded-md px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Issue Book
          <ArrowRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
