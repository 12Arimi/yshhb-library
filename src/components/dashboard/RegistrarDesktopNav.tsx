import { NavLink } from "react-router-dom";
import { LayoutDashboard, UserPlus, HeartPulse, GraduationCap, CreditCard, FileText } from "lucide-react";

const tabs = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/registrar/dashboard" },
  { label: "Students", icon: UserPlus, path: "/registrar/students" },
  { label: "Medical", icon: HeartPulse, path: "/registrar/medical" },
  { label: "Academic", icon: GraduationCap, path: "/registrar/academic" },
  { label: "ICE Cards", icon: CreditCard, path: "/registrar/ice-cards" },
  { label: "Reports", icon: FileText, path: "/registrar/reports" },
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