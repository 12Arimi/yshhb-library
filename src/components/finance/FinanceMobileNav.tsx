import { NavLink } from "react-router-dom";
import { LayoutDashboard, Receipt, CreditCard, Upload, Mail } from "lucide-react";

const tabs = [
  { label: "Home", icon: LayoutDashboard, path: "/finance/dashboard" },
  { label: "Fees", icon: Receipt, path: "/finance/fees" },
  { label: "Pay", icon: CreditCard, path: "/finance/payments" },
  { label: "Upload", icon: Upload, path: "/finance/uploads" },
  { label: "Comms", icon: Mail, path: "/finance/communications" },
];

export function FinanceMobileNav() {
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
