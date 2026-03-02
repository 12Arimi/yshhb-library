import { Shield, AlertTriangle } from "lucide-react";
import { students } from "@/data/registrarData";

export default function MedicalPage() {
  const withMedical = students.filter((s) => s.allergies.length > 0 || s.medicalNotes);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-lg font-semibold text-foreground">Medical & Allergy Records</h1>
        <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
          <Shield size={10} /> Confidential — Admin Only
        </span>
      </div>

      <div className="bg-background border border-border rounded-lg p-4">
        <p className="text-xs text-muted-foreground mb-4">
          Showing {withMedical.length} student(s) with recorded medical information.
        </p>

        <div className="space-y-3">
          {withMedical.map((s) => (
            <div key={s.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
                  <p className="text-[11px] text-muted-foreground">{s.id} • {s.class} {s.section} • Blood: {s.bloodGroup}</p>
                </div>
                {s.allergies.length > 0 && (
                  <AlertTriangle size={14} className="text-destructive shrink-0" />
                )}
              </div>

              {s.allergies.length > 0 && (
                <div className="mb-2">
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">Allergies</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {s.allergies.map((a) => (
                      <span key={a} className="text-[11px] font-medium text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">{a}</span>
                    ))}
                  </div>
                </div>
              )}

              {s.medicalNotes && (
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">Notes</p>
                  <p className="text-xs text-foreground">{s.medicalNotes}</p>
                </div>
              )}

              <div className="mt-3 pt-2 border-t border-border">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">Emergency Contact</p>
                <p className="text-xs text-foreground">{s.emergencyContact.name} ({s.emergencyContact.relation}) — {s.emergencyContact.phone}</p>
              </div>
            </div>
          ))}

          {withMedical.length === 0 && (
            <p className="text-xs text-muted-foreground text-center py-8">No medical records found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
