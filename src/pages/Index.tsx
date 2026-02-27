import { useState } from "react";
import { User, BookOpen } from "lucide-react";
import { DesktopNav } from "@/components/dashboard/DesktopNav";
import { MobileNav } from "@/components/dashboard/MobileNav";
import { InventorySection } from "@/components/dashboard/InventorySection";
import { IssuingSection } from "@/components/dashboard/IssuingSection";
import { QueueSection } from "@/components/dashboard/QueueSection";
import { HistorySection } from "@/components/dashboard/HistorySection";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ReportsSection } from "@/components/dashboard/ReportsSection";

export type TabKey = "dashboard" | "inventory" | "issuing" | "queue" | "reports";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");

  return (
    <div className="min-h-screen bg-secondary">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-foreground" />
          <span className="text-sm font-semibold tracking-wide text-foreground">YSHHB ONE</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <User size={16} />
          <span className="text-xs font-medium">Librarian / Admin</span>
        </div>
      </header>

      {/* Desktop Nav - fixed below header */}
      <div className="hidden md:block fixed top-14 left-0 right-0 z-40">
        <DesktopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Content - offset for fixed header + nav */}
      <main className="pt-[6.5rem] md:pt-[6.5rem] pb-20 md:pb-6 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        {activeTab === "dashboard" && <DashboardOverview onNavigate={setActiveTab} />}
        {activeTab === "inventory" && <InventorySection />}
        {activeTab === "issuing" && <IssuingSection />}
        {activeTab === "queue" && <QueueSection />}
        {activeTab === "reports" && <HistorySection />}
      </main>

      {/* Mobile Nav - fixed bottom */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
