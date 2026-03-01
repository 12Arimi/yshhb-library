import { NavLink } from "react-router-dom";
import { LayoutDashboard, Receipt, CreditCard, Upload, Mail } from "lucide-react";

const tabs = [
  { label: "Overview", icon: LayoutDashboard, path: "/finance/dashboard" },
  { label: "Fees & Loans", icon: Receipt, path: "/finance/fees" },
  { label: "Payments", icon: CreditCard, path: "/finance/payments" },
  { label: "Uploads", icon: Upload, path: "/finance/uploads" },
  { label: "Communications", icon: Mail, path: "/finance/communications" },
];

export function FinanceDesktopNav() {
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
