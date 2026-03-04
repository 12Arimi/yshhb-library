import { Link } from "react-router-dom";
import { BookOpen, DollarSign, ClipboardList, CalendarCheck, GraduationCap } from "lucide-react";

const modules = [
  { label: "Library", description: "Manage books, issuing, and reservations", icon: BookOpen, path: "/library/dashboard" },
  { label: "Finance", description: "Fee collection and accounts", icon: DollarSign, path: "/finance/dashboard" },
  { label: "Registrar", description: "Student records and enrollment", icon: ClipboardList, path: "/registrar/dashboard" },
  { label: "Attendance & Exams", description: "Daily tracking, results, and reports", icon: CalendarCheck, path: "/attendance/dashboard" },
];

export default function SchoolPortal() {
  const portalBackground = {
    backgroundColor: "hsl(var(--secondary))",
    backgroundImage: `
      url('/attendance3.svg'), 
      url('/finance5.svg'), 
      url('/registrar1.svg'), 
      url('/attendance4.svg'),
      url('/book2.svg')
    `,
    // Adjusted Y-coordinates (the second percentage) to be 40% or lower 
    // This keeps the top area clear for the logo
    backgroundPosition: `
      10% 45%, 
      90% 50%, 
      50% 95%, 
      85% 85%, 
      15% 90%
    `,
    backgroundSize: "100px, 120px, 90px, 110px, 80px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center p-6" style={portalBackground}>
      
      {/* 1. Added mt-20 for top margin from screen edge */}
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
        {modules.map((m) => {
          const Wrapper = m.path === "#" ? "div" : Link;
          return (
            <Wrapper
              key={m.label}
              to={m.path as string}
              className="bg-background border border-border rounded-lg p-5 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
            >
              <m.icon size={20} strokeWidth={1.5} className="text-muted-foreground mb-3" />
              <h2 className="text-sm font-semibold text-foreground">{m.label}</h2>
              <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
            </Wrapper>
          );
        })}
      </div>

      <footer className="mt-auto py-10 opacity-40 text-[9px] uppercase tracking-widest text-foreground relative z-10">
        Brunei Darussalam
      </footer>
    </div>
  );
}