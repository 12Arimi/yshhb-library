import { LayoutDashboard, BookCopy, ArrowRightLeft, Users, BarChart3 } from "lucide-react";

// Local type definition to resolve the 'TabKey' import error
export type TabKey = "dashboard" | "inventory" | "issuing" | "queue" | "reports";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "inventory", label: "Inventory", icon: BookCopy },
  { key: "issuing", label: "Issuing", icon: ArrowRightLeft },
  { key: "queue", label: "Queue", icon: Users },
  { key: "reports", label: "Reports", icon: BarChart3 },
];

interface Props {
  activeTab: TabKey;
  setActiveTab: (t: TabKey) => void;
}

export function DesktopNav({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="flex bg-background border-b border-border px-6 gap-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setActiveTab(t.key)}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium transition-colors border-b-2 -mb-px ${
            activeTab === t.key
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <t.icon size={14} strokeWidth={1.5} />
          {t.label}
        </button>
      ))}
    </nav>
  );
}