import { LayoutDashboard, BookCopy, ArrowRightLeft, Users, BarChart3 } from "lucide-react";
import type { TabKey } from "@/pages/Index";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "dashboard", label: "Home", icon: LayoutDashboard },
  { key: "inventory", label: "Books", icon: BookCopy },
  { key: "issuing", label: "Issue", icon: ArrowRightLeft },
  { key: "queue", label: "Queue", icon: Users },
  { key: "reports", label: "Reports", icon: BarChart3 },
];

interface Props {
  activeTab: TabKey;
  setActiveTab: (t: TabKey) => void;
}

export function MobileNav({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-1.5 z-50">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setActiveTab(t.key)}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium transition-colors ${
            activeTab === t.key ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          <t.icon size={18} strokeWidth={1.5} />
          {t.label}
        </button>
      ))}
    </nav>
  );
}
