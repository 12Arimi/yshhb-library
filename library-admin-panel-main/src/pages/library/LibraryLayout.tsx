import { Outlet } from "react-router-dom";
import { User, BookOpen } from "lucide-react";
import { LibraryDesktopNav } from "@/components/dashboard/LibraryDesktopNav";
import { LibraryMobileNav } from "@/components/dashboard/LibraryMobileNav";

export default function LibraryLayout() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-foreground" />
          <span className="text-sm font-semibold tracking-wide text-foreground">YSHHB ONE</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <User size={16} />
          <span className="text-xs font-medium">Librarian / Admin</span>
        </div>
      </header>

      {/* Desktop Nav */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <LibraryDesktopNav />
      </div>

      {/* Content */}
      <main className="pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      {/* Mobile Nav */}
      <LibraryMobileNav />
    </div>
  );
}
