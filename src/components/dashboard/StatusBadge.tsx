import type { BookStatus } from "@/data/mockData";

const config: Record<BookStatus, { bg: string; text: string }> = {
  Available: { bg: "bg-success/10", text: "text-success" },
  Issued: { bg: "bg-warning/10", text: "text-warning" },
  Reserved: { bg: "bg-info/10", text: "text-info" },
};

export function StatusBadge({ status }: { status: BookStatus }) {
  const c = config[status];
  return (
    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.bg} ${c.text}`}>
      {status}
    </span>
  );
}
