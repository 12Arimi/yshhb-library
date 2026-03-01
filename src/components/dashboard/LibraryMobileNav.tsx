import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookCopy, ArrowRightLeft, Users, BarChart3 } from "lucide-react";

const tabs = [
  { label: "Home", icon: LayoutDashboard, path: "/library/dashboard" },
  { label: "Books", icon: BookCopy, path: "/library/inventory" },
  { label: "Issue", icon: ArrowRightLeft, path: "/library/issuing" },
  { label: "Queue", icon: Users, path: "/library/queue" },
  { label: "Reports", icon: BarChart3, path: "/library/reports" },
];

export function LibraryMobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-1.5 z-50">
      {tabs.map((t) => (
        <NavLink
          key={t.path}
          to={t.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium transition-colors ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <t.icon size={18} strokeWidth={1.5} />
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
