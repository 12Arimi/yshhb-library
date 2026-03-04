import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { FinanceDesktopNav } from "@/components/finance/FinanceDesktopNav";
import { FinanceMobileNav } from "@/components/finance/FinanceMobileNav";

export default function FinanceLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Background styling for finance-themed SVGs
  const backgroundStyle = {
    backgroundColor: "hsl(var(--secondary))",
    backgroundImage: `
      url('/finance1.svg'), 
      url('/finance2.svg'), 
      url('/finance3.svg'), 
      url('/finance4.svg'), 
      url('/finance5.svg')
    `,
    // Scattered coordinates (X% Y%)
    backgroundPosition: `
      12% 18%, 
      85% 22%, 
      50% 88%, 
      78% 70%, 
      18% 75%
    `,
    // Variable sizing for a dynamic look
    backgroundSize: "90px, 110px, 80px, 100px, 95px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Keeps them stationary during scroll
  };

  return (
    <div className="min-h-screen relative" style={backgroundStyle}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Logo and Bold Module Title */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/logo.webp" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Finance Module
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
            <span>Finance Admin</span>
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
                Finance Admin
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Nav */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <FinanceDesktopNav />
      </div>

      {/* Content Area - Added z-10 to stay above background icons */}
      <main className="relative z-10 pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      {/* Mobile Nav */}
      <FinanceMobileNav />
    </div>
  );
}