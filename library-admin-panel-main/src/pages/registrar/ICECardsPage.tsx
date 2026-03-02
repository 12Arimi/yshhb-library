import { useState } from "react";
import { Printer, CreditCard } from "lucide-react";
import { students, classTeachers } from "@/data/registrarData";

export default function ICECardsPage() {
  const [selectedClass, setSelectedClass] = useState("Grade 5");
  const classes = [...new Set(students.map((s) => s.class))].sort();
  const classStudents = students.filter((s) => s.class === selectedClass && s.status === "Active");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-lg font-semibold text-foreground">ICE Cards — Print View</h1>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg hover:bg-foreground/90 transition-colors"
        >
          <Printer size={12} /> Print Cards
        </button>
      </div>

      <div className="flex items-center gap-3 flex-wrap print:hidden">
        <label className="text-xs font-medium text-muted-foreground">Class Group:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          {classes.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <span className="text-xs text-muted-foreground">{classStudents.length} card(s)</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 print:grid-cols-2 print:gap-2">
        {classStudents.map((s) => (
          <div key={s.id} className="bg-background border-2 border-border rounded-lg p-4 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <CreditCard size={14} className="text-muted-foreground" />
              <span className="text-[10px] font-semibold text-foreground uppercase tracking-wider">In Case of Emergency</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded bg-accent border border-border flex items-center justify-center shrink-0">
                <span className="text-[10px] text-muted-foreground font-medium">Photo</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
                <p className="text-[11px] text-muted-foreground">{s.class} — Section {s.section}</p>
                <p className="text-[11px] text-muted-foreground font-mono">{s.id}</p>
              </div>
            </div>

            <div className="mt-3 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Blood Group</span>
                <span className="text-foreground font-semibold">{s.bloodGroup}</span>
              </div>
              {s.allergies.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Allergies</span>
                  <span className="text-destructive font-semibold">{s.allergies.join(", ")}</span>
                </div>
              )}
              {s.medicalNotes && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Medical</span>
                  <span className="text-foreground font-medium">{s.medicalNotes}</span>
                </div>
              )}
              <div className="pt-1.5 mt-1.5 border-t border-border">
                <p className="text-muted-foreground">Emergency Contact</p>
                <p className="text-foreground font-medium">{s.emergencyContact.name} ({s.emergencyContact.relation})</p>
                <p className="text-foreground font-mono">{s.emergencyContact.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
