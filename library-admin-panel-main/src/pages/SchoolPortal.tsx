import { Link } from "react-router-dom";
import { BookOpen, DollarSign, ClipboardList, CalendarCheck, GraduationCap } from "lucide-react";

const modules = [
  { label: "Library", description: "Manage books, issuing, and reservations", icon: BookOpen, path: "/library/dashboard" },
  { label: "Finance", description: "Fee collection and accounts", icon: DollarSign, path: "/finance/dashboard" },
  { label: "Registrar", description: "Student records and enrollment", icon: ClipboardList, path: "/registrar/dashboard" },
  { label: "Attendance & Exams", description: "Daily tracking, results, and reports", icon: CalendarCheck, path: "/attendance/dashboard" },
  { label: "Student / Parent Portal", description: "Grades, attendance, and announcements", icon: GraduationCap, path: "#" },
];

export default function SchoolPortal() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center p-6">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">YSHHB ONE</h1>
        <p className="text-sm text-muted-foreground mt-1">School Management Portal</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full">
        {modules.map((m) => {
          const Wrapper = m.path === "#" ? "div" : Link;
          return (
            <Wrapper
              key={m.label}
              to={m.path as string}
              className={`bg-background border border-border rounded-lg p-5 text-left transition-colors ${
                m.path === "#" ? "opacity-50 cursor-not-allowed" : "hover:border-foreground/20"
              }`}
            >
              <m.icon size={20} strokeWidth={1.5} className="text-muted-foreground mb-3" />
              <h2 className="text-sm font-semibold text-foreground">{m.label}</h2>
              <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
              {m.path === "#" && (
                <span className="inline-block mt-2 text-[10px] font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">Coming Soon</span>
              )}
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
