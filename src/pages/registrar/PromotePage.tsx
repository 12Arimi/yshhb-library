import { useState } from "react";
import { ArrowUpDown, Shield, Check } from "lucide-react";
import { students, classTeachers } from "@/data/registrarData";

export default function PromotePage() {
  const [selectedClass, setSelectedClass] = useState("Grade 5");
  const [promoted, setPromoted] = useState<string[]>([]);

  const classStudents = students.filter((s) => s.class === selectedClass && s.status === "Active");
  const classes = [...new Set(students.map((s) => s.class))].sort();

  const handlePromote = (id: string) => {
    setPromoted((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-lg font-semibold text-foreground">Class Promotion Tool</h1>
        <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
          <Shield size={10} /> Admin Only
        </span>
      </div>

      <div className="bg-background border border-border rounded-lg p-4 space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <label className="text-xs font-medium text-muted-foreground">Select Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => { setSelectedClass(e.target.value); setPromoted([]); }}
            className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {classes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ArrowUpDown size={14} className="text-muted-foreground" />
          <span className="text-xs text-foreground font-medium">→ Next Grade</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium w-8">Select</th>
                <th className="pb-2 pr-4 font-medium">ID</th>
                <th className="pb-2 pr-4 font-medium">Name</th>
                <th className="pb-2 pr-4 font-medium">Section</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {classStudents.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4">
                    <button
                      onClick={() => handlePromote(s.id)}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        promoted.includes(s.id)
                          ? "bg-foreground border-foreground text-background"
                          : "border-border text-transparent hover:border-foreground/50"
                      }`}
                    >
                      <Check size={12} />
                    </button>
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">{s.id}</td>
                  <td className="py-2 pr-4 text-foreground">{s.name}</td>
                  <td className="py-2 pr-4 text-foreground">{s.section}</td>
                  <td className="py-2">
                    <span className="text-[10px] font-medium bg-accent text-foreground px-2 py-0.5 rounded-full">{s.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {promoted.length > 0 && (
          <button className="bg-foreground text-background text-xs font-medium px-4 py-2 rounded-lg hover:bg-foreground/90 transition-colors">
            Promote {promoted.length} Student(s) →
          </button>
        )}
      </div>

      <div className="bg-background border border-border rounded-lg p-4">
        <h2 className="text-sm font-semibold text-foreground mb-3">Class Teacher Assignments</h2>
        <div className="space-y-2">
          {classTeachers.map((ct) => (
            <div key={`${ct.class}-${ct.section}`} className="flex items-center justify-between text-xs border-b border-border last:border-0 pb-2 last:pb-0">
              <span className="text-foreground">{ct.class} — {ct.section}</span>
              <span className="text-muted-foreground">{ct.teacher} ({ct.studentCount} students)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
