import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { AttendanceDesktopNav } from "@/components/attendance/AttendanceDesktopNav";
import { AttendanceMobileNav } from "@/components/attendance/AttendanceMobileNav";

export default function AttendanceLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundStyle = {
    backgroundColor: "hsl(var(--secondary))",
    backgroundImage: `
      url('/attendance1.svg'), 
      url('/attendance2.svg'), 
      url('/attendance3.svg'), 
      url('/attendance4.svg'), 
      url('/attendance5.svg')
    `,
    backgroundPosition: `
      15% 20%, 
      85% 15%, 
      48% 85%, 
      80% 75%, 
      12% 78%
    `,
    backgroundSize: "90px, 110px, 75px, 95px, 100px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="min-h-screen relative" style={backgroundStyle}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/logo.webp" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Attendance & Exams
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home size={15} strokeWidth={1.5} />
            <span>Switch Module</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-l border-border pl-6">
            <User size={15} strokeWidth={1.5} />
            <span>Academic Admin</span>
          </div>
        </div>

        <div className="md:hidden relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>

          {/* FIXED: Single curly braces for conditional rendering */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-background border border-border rounded-xl shadow-xl py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
              <Link 
                to="/" 
                className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} className="text-primary" />
                Switch Module
              </Link>
              <div className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-muted-foreground border-t border-border">
                <User size={18} />
                Academic Admin
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <AttendanceDesktopNav />
      </div>

      <main className="relative z-10 pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      <AttendanceMobileNav />
    </div>
  );
}