import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, HeartPulse, ArrowUpDown, CreditCard } from "lucide-react";

const tabs = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/registrar/dashboard" },
  { label: "Students", icon: Users, path: "/registrar/students" },
  { label: "Medical", icon: HeartPulse, path: "/registrar/medical" },
  { label: "Promote", icon: ArrowUpDown, path: "/registrar/promote" },
  { label: "ICE Cards", icon: CreditCard, path: "/registrar/ice-cards" },
];

export function RegistrarDesktopNav() {
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
