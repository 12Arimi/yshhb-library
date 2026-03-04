import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { RegistrarDesktopNav } from "@/components/registrar/RegistrarDesktopNav";
import { RegistrarMobileNav } from "@/components/registrar/RegistrarMobileNav";

export default function RegistrarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--secondary))",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 80 80'%3E%3Cg fill='%236e7687' fill-opacity='0.04'%3E%3Cpath d='M40 0l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "50px 50px",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="min-h-screen relative" style={backgroundStyle}>
      {/* Decorative Border Corners */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Left - Rotated 270 deg or flipped to match corner */}
        <img 
          src="/top-right-border.svg" 
          alt="" 
          className="absolute left-0 top-[3.5rem] md:top-[6.5rem] w-16 h-16 md:w-24 md:h-24 opacity-20 -scale-x-100" 
        />
        {/* Top Right - Original orientation */}
        <img 
          src="/top-right-border.svg" 
          alt="" 
          className="absolute right-0 top-[3.5rem] md:top-[6.5rem] w-16 h-16 md:w-24 md:h-24 opacity-20" 
        />
        {/* Bottom Left - Rotated 180 deg */}
        <img 
          src="/top-right-border.svg" 
          alt="" 
          className="absolute left-0 bottom-[4rem] md:bottom-2 w-16 h-16 md:w-24 md:h-24 opacity-20 -scale-x-100 -scale-y-100" 
        />
        {/* Bottom Right - Rotated/Flipped 90 deg */}
        <img 
          src="/top-right-border.svg" 
          alt="" 
          className="absolute right-0 bottom-[4rem] md:bottom-2 w-16 h-16 md:w-24 md:h-24 opacity-20 -scale-y-100" 
        />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/logo.webp" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Registrar Module
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Home size={15} strokeWidth={1.5} />
            <span>Switch Module</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-l border-border pl-6">
            <User size={15} strokeWidth={1.5} />
            <span>Registrar Admin</span>
          </div>
        </div>

        <div className="md:hidden relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-muted-foreground hover:text-foreground">
            {isMenuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-background border border-border rounded-xl shadow-xl py-2 z-[60] animate-in fade-in slide-in-from-top-2">
              <Link to="/" className="flex items-center gap-3 px-5 py-4 text-sm font-medium hover:bg-secondary" onClick={() => setIsMenuOpen(false)}>
                <Home size={18} className="text-primary" />
                Switch Module
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Nav Tabs */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <RegistrarDesktopNav />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      {/* Mobile Nav */}
      <RegistrarMobileNav />
    </div>
  );
}