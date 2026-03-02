import { CalendarDays, UserCheck, UserX, Clock } from "lucide-react";
import { attendanceRecords, monthlySummaries } from "@/data/attendanceData";

export default function AttendanceDashboard() {
  const today = "2026-03-02";
  const todayRecords = attendanceRecords.filter((r) => r.date === today);
  const present = todayRecords.filter((r) => r.status === "Present").length;
  const absent = todayRecords.filter((r) => r.status === "Absent").length;
  const late = todayRecords.filter((r) => r.status === "Late").length;

  const cards = [
    { label: "Today's Entries", value: todayRecords.length, icon: CalendarDays },
    { label: "Present", value: present, icon: UserCheck },
    { label: "Absent", value: absent, icon: UserX },
    { label: "Late", value: late, icon: Clock },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-foreground">Attendance & Exams Overview</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.map((c) => (
          <div key={c.label} className="bg-background border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <c.icon size={14} strokeWidth={1.5} />
              <span className="text-[11px] font-medium">{c.label}</span>
            </div>
            <p className="text-xl font-semibold text-foreground">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-lg p-4">
        <h2 className="text-sm font-semibold text-foreground mb-3">Monthly Summary — February 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Class</th>
                <th className="pb-2 pr-4 font-medium">Section</th>
                <th className="pb-2 pr-4 font-medium">Days</th>
                <th className="pb-2 pr-4 font-medium">Avg Present</th>
                <th className="pb-2 pr-4 font-medium">Avg Absent</th>
                <th className="pb-2 font-medium">Avg Late</th>
              </tr>
            </thead>
            <tbody>
              {monthlySummaries.map((m) => (
                <tr key={`${m.class}-${m.section}`} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 text-foreground">{m.class}</td>
                  <td className="py-2 pr-4 text-foreground">{m.section}</td>
                  <td className="py-2 pr-4 text-foreground">{m.totalDays}</td>
                  <td className="py-2 pr-4 text-foreground">{m.avgPresent}</td>
                  <td className="py-2 pr-4 text-foreground">{m.avgAbsent}</td>
                  <td className="py-2 text-foreground">{m.avgLate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
