import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { AttendanceDesktopNav } from "@/components/attendance/AttendanceDesktopNav";
import { AttendanceMobileNav } from "@/components/attendance/AttendanceMobileNav";

export default function AttendanceLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary relative overflow-hidden">
      
      {/* --- CUSTOM CORNER BORDER DESIGN --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Left Corner - Aligned below Header and Desktop Nav */}
        <div className="absolute left-4 top-[4.5rem] md:top-[7.5rem] w-8 h-8 border-t border-l border-foreground/20" />
        
        {/* Top Right Corner */}
        <div className="absolute right-4 top-[4.5rem] md:top-[7.5rem] w-8 h-8 border-t border-r border-foreground/20" />
        
        {/* Bottom Left Corner - Aligned above Mobile Nav */}
        <div className="absolute left-4 bottom-[4.5rem] md:bottom-6 w-8 h-8 border-b border-l border-foreground/20" />
        
        {/* Bottom Right Corner */}
        <div className="absolute right-4 bottom-[4.5rem] md:bottom-6 w-8 h-8 border-b border-r border-foreground/20" />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/logo.webp" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Attendance & Exams
          </span>
        </Link>

        {/* Desktop Header Actions */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>

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

      {/* Desktop Nav */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <AttendanceDesktopNav />
      </div>

      {/* Main Content Area */}
      {/* pt-[7.5rem] on desktop ensures the top corners and text clear the navigation */}
      <main className="relative z-10 pt-[6.5rem] md:pt-[7.5rem] pb-24 md:pb-10 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      {/* Mobile Nav */}
      <AttendanceMobileNav />
    </div>
  );
}