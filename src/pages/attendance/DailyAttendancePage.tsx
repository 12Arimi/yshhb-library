import { useState } from "react";
import { attendanceRecords } from "@/data/attendanceData";
import { students } from "@/data/registrarData";

type Status = "Present" | "Absent" | "Late" | "Excused";

const statusColors: Record<Status, string> = {
  Present: "bg-accent text-foreground",
  Absent: "bg-destructive/10 text-destructive",
  Late: "bg-accent text-foreground",
  Excused: "bg-accent text-muted-foreground",
};

export default function DailyAttendancePage() {
  const [selectedDate, setSelectedDate] = useState("2026-03-02");
  const [selectedClass, setSelectedClass] = useState("Grade 5");
  const classes = [...new Set(students.map((s) => s.class))].sort();

  const classStudents = students.filter((s) => s.class === selectedClass && s.status === "Active");

  const getStatus = (studentId: string): Status => {
    const record = attendanceRecords.find((r) => r.studentId === studentId && r.date === selectedDate);
    return record?.status ?? "Present";
  };

  const [overrides, setOverrides] = useState<Record<string, Status>>({});

  const toggleStatus = (studentId: string) => {
    const current = overrides[studentId] || getStatus(studentId);
    const order: Status[] = ["Present", "Absent", "Late", "Excused"];
    const next = order[(order.indexOf(current) + 1) % order.length];
    setOverrides((prev) => ({ ...prev, [studentId]: next }));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Daily Attendance</h1>

      <div className="flex items-center gap-3 flex-wrap">
        <div>
          <label className="text-[11px] font-medium text-muted-foreground block mb-1">Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => { setSelectedDate(e.target.value); setOverrides({}); }}
            className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div>
          <label className="text-[11px] font-medium text-muted-foreground block mb-1">Class</label>
          <select
            value={selectedClass}
            onChange={(e) => { setSelectedClass(e.target.value); setOverrides({}); }}
            className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {classes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-background border border-border rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Roll</th>
                <th className="pb-2 pr-4 font-medium">Name</th>
                <th className="pb-2 pr-4 font-medium">ID</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {classStudents.map((s) => {
                const status = overrides[s.id] || getStatus(s.id);
                return (
                  <tr key={s.id} className="border-b border-border last:border-0">
                    <td className="py-2 pr-4 text-foreground">{s.rollNo}</td>
                    <td className="py-2 pr-4 text-foreground">{s.name}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{s.id}</td>
                    <td className="py-2">
                      <button
                        onClick={() => toggleStatus(s.id)}
                        className={`text-[10px] font-medium px-2.5 py-1 rounded-full transition-colors ${statusColors[status]}`}
                      >
                        {status}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {Object.keys(overrides).length > 0 && (
          <div className="mt-4 pt-3 border-t border-border">
            <button className="bg-foreground text-background text-xs font-medium px-4 py-2 rounded-lg hover:bg-foreground/90 transition-colors">
              Save Attendance
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
