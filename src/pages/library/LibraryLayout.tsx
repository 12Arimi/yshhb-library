import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { User, Home, MoreVertical, X } from "lucide-react";
import { LibraryDesktopNav } from "@/components/dashboard/LibraryDesktopNav";
import { LibraryMobileNav } from "@/components/dashboard/LibraryMobileNav";

export default function LibraryLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the background style with your 5 SVG files
  const backgroundStyle = {
    backgroundColor: "hsl(var(--secondary))",
    // Loading all 5 SVGs from your public folder
    backgroundImage: `
      url('/book1.svg'), 
      url('/book2.svg'), 
      url('/book3.svg'), 
      url('/book4.svg'), 
      url('/book5.svg')
    `,
    // Spreading them out across the screen (Randomized positions)
    backgroundPosition: `
      10% 20%, 
      80% 15%, 
      45% 85%, 
      85% 75%, 
      15% 70%
    `,
    // Setting different sizes for a natural scattered look
    backgroundSize: "80px, 100px, 70px, 90px, 110px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // This ensures they don't scroll
  };

  return (
    <div className="min-h-screen relative" style={backgroundStyle}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <img src="/brave_screenshot.png" alt="YSHHB Logo" className="h-9 w-auto object-contain" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-foreground uppercase border-l border-border pl-4">
            Library Module
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground">
            <Home size={15} strokeWidth={1.5} />
            <span>Switch Module</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-l border-border pl-6">
            <User size={15} strokeWidth={1.5} />
            <span>Librarian Admin</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-muted-foreground">
            {isMenuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-background border border-border rounded-xl shadow-xl py-2 z-[60]">
              <Link to="/" className="flex items-center gap-3 px-5 py-4 text-sm font-medium hover:bg-secondary">
                <Home size={18} className="text-primary" />
                Switch Module
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Nav & Content */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <LibraryDesktopNav />
      </div>

      <main className="relative z-10 pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      <LibraryMobileNav />
    </div>
  );
}