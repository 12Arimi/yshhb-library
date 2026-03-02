import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookCopy, ArrowRightLeft, Users, BarChart3 } from "lucide-react";

const tabs = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/library/dashboard" },
  { label: "Inventory", icon: BookCopy, path: "/library/inventory" },
  { label: "Issuing", icon: ArrowRightLeft, path: "/library/issuing" },
  { label: "Queue", icon: Users, path: "/library/queue" },
  { label: "Reports", icon: BarChart3, path: "/library/reports" },
];

export function LibraryDesktopNav() {
  return (
    <nav className="flex bg-background border-b border-border px-6 gap-1">
      {tabs.map((t) => (
        <NavLink
          key={t.path}
          to={t.path}
          className={({ isActive }) =>
            `flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium transition-colors border-b-2 -mb-px ${
              isActive
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <t.icon size={14} strokeWidth={1.5} />
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
