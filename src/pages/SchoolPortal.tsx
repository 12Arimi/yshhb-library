import { Link } from "react-router-dom";
import { BookOpen, DollarSign, ClipboardList, CalendarCheck } from "lucide-react";

const modules = [
  { label: "Library", description: "Manage books, issuing, and reservations", icon: BookOpen, path: "/library/dashboard" },
  { label: "Finance", description: "Fee collection and accounts", icon: DollarSign, path: "/finance/dashboard" },
  { label: "Registrar", description: "Student records and enrollment", icon: ClipboardList, path: "/registrar/dashboard" },
  { label: "Attendance & Exams", description: "Daily tracking, results, and reports", icon: CalendarCheck, path: "/attendance/dashboard" },
];

export default function SchoolPortal() {
  return (
    <div className="min-h-screen relative flex flex-col items-center p-6 bg-secondary overflow-hidden">
      
      {/* --- CUSTOM CORNER BORDER DESIGN --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Left Corner */}
        <div className="absolute left-6 top-6 w-12 h-12 border-t border-l border-foreground/20" />
        
        {/* Top Right Corner */}
        <div className="absolute right-6 top-6 w-12 h-12 border-t border-r border-foreground/20" />
        
        {/* Bottom Left Corner - Adjusted for potential browser chrome/spacing */}
        <div className="absolute left-6 bottom-6 w-12 h-12 border-b border-l border-foreground/20" />
        
        {/* Bottom Right Corner */}
        <div className="absolute right-6 bottom-6 w-12 h-12 border-b border-r border-foreground/20" />
      </div>

      {/* Header Section */}
      <div className="mt-20 mb-10 text-center relative z-10">
        <img 
          src="/brave_screenshot.png" 
          alt="YSHHB Logo" 
          className="h-28 sm:h-28 md:h-28 lg:h-36 xl:h-44 w-auto mx-auto mb-4 object-contain" 
        />
        <h1 className="text-2xl font-semibold text-foreground tracking-tight uppercase">YSHHB ONE</h1>
        
        <p className="text-sm text-muted-foreground mt-2 italic font-medium">
          "Empowering minds through digital education"
        </p>
        
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mt-4">
          School Management Portal
        </p>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full relative z-10">
        {modules.map((m) => (
          <Link
            key={m.label}
            to={m.path}
            className="bg-background border border-border rounded-lg p-5 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1 group"
          >
            <m.icon size={20} strokeWidth={1.5} className="text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
            <h2 className="text-sm font-semibold text-foreground">{m.label}</h2>
            <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
          </Link>
        ))}
      </div>

      <footer className="mt-auto py-10 opacity-40 text-[9px] uppercase tracking-widest text-foreground relative z-10">
        Brunei Darussalam
      </footer>
    </div>
  );
}