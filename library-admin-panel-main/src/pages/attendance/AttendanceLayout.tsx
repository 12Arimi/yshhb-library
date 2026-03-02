import { Outlet } from "react-router-dom";
import { User, CalendarCheck } from "lucide-react";
import { AttendanceDesktopNav } from "@/components/attendance/AttendanceDesktopNav";
import { AttendanceMobileNav } from "@/components/attendance/AttendanceMobileNav";

export default function AttendanceLayout() {
  return (
    <div className="min-h-screen bg-secondary">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarCheck size={20} className="text-foreground" />
          <span className="text-sm font-semibold tracking-wide text-foreground">YSHHB ONE</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <User size={16} />
          <span className="text-xs font-medium">Teacher / Admin</span>
        </div>
      </header>

      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <AttendanceDesktopNav />
      </div>

      <main className="pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>

      <AttendanceMobileNav />
    </div>
  );
}
