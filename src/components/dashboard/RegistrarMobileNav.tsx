import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, HeartPulse, GraduationCap, CreditCard } from "lucide-react";

const tabs = [
  { label: "Home", icon: LayoutDashboard, path: "/registrar/dashboard" },
  { label: "Students", icon: Users, path: "/registrar/students" },
  { label: "Medical", icon: HeartPulse, path: "/registrar/medical" },
  { label: "Class", icon: GraduationCap, path: "/registrar/academic" },
  { label: "ICE", icon: CreditCard, path: "/registrar/ice-cards" },
];

export function RegistrarMobileNav() {
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