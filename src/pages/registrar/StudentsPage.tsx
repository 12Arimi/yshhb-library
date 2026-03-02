import { useState } from "react";
import { Search, Upload, Shield } from "lucide-react";
import { students } from "@/data/registrarData";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.class.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-lg font-semibold text-foreground">Student Profiles</h1>
        <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
          <Shield size={10} /> Admin Only Edit
        </span>
      </div>

      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by name, ID, or class..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-background border border-border rounded-lg pl-9 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div className="grid gap-3">
        {filtered.map((s) => (
          <div key={s.id} className="bg-background border border-border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-accent border border-border flex items-center justify-center shrink-0">
                {s.photo ? (
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <Upload size={16} className="text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground truncate">{s.name}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    s.status === "Active" ? "bg-accent text-foreground" : "bg-destructive/10 text-destructive"
                  }`}>
                    {s.status}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{s.id}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] text-muted-foreground">
                  <span>{s.class} — {s.section}</span>
                  <span>Roll #{s.rollNo}</span>
                  <span>DOB: {s.dob}</span>
                  <span>Blood: {s.bloodGroup}</span>
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">
                  <span>Guardian: {s.guardian} • {s.guardianPhone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
