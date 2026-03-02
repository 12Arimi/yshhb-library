import { Users, UserCheck, UserX, ArrowUpDown } from "lucide-react";
import { students, classTeachers } from "@/data/registrarData";

export default function RegistrarDashboard() {
  const active = students.filter((s) => s.status === "Active").length;
  const inactive = students.filter((s) => s.status !== "Active").length;

  const cards = [
    { label: "Total Students", value: students.length, icon: Users },
    { label: "Active", value: active, icon: UserCheck },
    { label: "Inactive / Transferred", value: inactive, icon: UserX },
    { label: "Classes", value: classTeachers.length, icon: ArrowUpDown },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">Registrar Overview</h1>
        <span className="text-[10px] font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">Admin Only</span>
      </div>

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
        <h2 className="text-sm font-semibold text-foreground mb-3">Class Teachers</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Class</th>
                <th className="pb-2 pr-4 font-medium">Section</th>
                <th className="pb-2 pr-4 font-medium">Teacher</th>
                <th className="pb-2 font-medium">Students</th>
              </tr>
            </thead>
            <tbody>
              {classTeachers.map((ct) => (
                <tr key={`${ct.class}-${ct.section}`} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 text-foreground">{ct.class}</td>
                  <td className="py-2 pr-4 text-foreground">{ct.section}</td>
                  <td className="py-2 pr-4 text-foreground">{ct.teacher}</td>
                  <td className="py-2 text-foreground">{ct.studentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
