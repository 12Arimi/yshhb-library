import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { RegistrarDesktopNav } from "@/components/registrar/RegistrarDesktopNav";
import { RegistrarMobileNav } from "@/components/registrar/RegistrarMobileNav";

export default function RegistrarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Logo and Bold Module Title */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/logo.webp" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Registrar Module
          </span>
        </Link>

        {/* Desktop Header Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Switch Module */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home size={15} strokeWidth={1.5} />
            <span>Switch Module</span>
          </Link>

          {/* Registrar Admin - Matched Structure */}
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-l border-border pl-6">
            <User size={15} strokeWidth={1.5} />
            <span>Registrar Admin</span>
          </div>
        </div>

        {/* Mobile Menu Button (Three Dots) */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>

          {/* Mobile Dropdown */}
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
                Registrar Admin
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Nav (Module specific tabs) */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <RegistrarDesktopNav />
      </div>

      {/* Content */}
      <main className="pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      {/* Mobile Nav (Bottom bar) */}
      <RegistrarMobileNav />
    </div>
  );
}