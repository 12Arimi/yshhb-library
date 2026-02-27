import { Bell } from "lucide-react";
import { reservations } from "@/data/mockData";
import { toast } from "sonner";

export function QueueSection() {
  const handleNotify = (studentName: string, bookTitle: string) => {
    toast.success(`Notification sent to ${studentName} for "${bookTitle}".`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Reservation Queue</h1>

      <div className="space-y-4">
        {reservations.map((res) => (
          <div key={res.bookId} className="bg-background border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-medium text-foreground text-sm">{res.bookTitle}</span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">{res.bookId}</span>
              </div>
              <span className="text-[10px] font-semibold bg-info/10 text-info px-2 py-0.5 rounded-full">
                {res.queue.length} waiting
              </span>
            </div>
            <div className="space-y-2">
              {res.queue.map((q, i) => (
                <div key={q.studentId} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-[10px] font-semibold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{q.studentName}</span>
                    <span className="font-mono text-xs text-muted-foreground">{q.studentId}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-tertiary">{q.requestedAt}</span>
                    {i === 0 && (
                      <button
                        onClick={() => handleNotify(q.studentName, res.bookTitle)}
                        className="flex items-center gap-1 text-[11px] font-medium text-foreground border border-border rounded px-2 py-1 hover:bg-accent transition-colors"
                      >
                        <Bell size={12} strokeWidth={1.5} />
                        Notify
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
