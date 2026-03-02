import { useNavigate } from "react-router-dom";
import { Users, HeartPulse, GraduationCap, CreditCard, ShieldAlert } from "lucide-react";

// Mock data structure based on your requirements
const mockRegistrarData = {
  totalStudents: 500,
  medicalAlerts: 12, // Students with allergies or conditions
  pendingPromotions: 45, // Students ready for class promotion
  iceCardsPrinted: 432,
  recentRegistrations: [
    { id: "1", name: "Fatimah Zahra", grade: "Year 7", type: "New Admission", date: "2 hours ago" },
    { id: "2", name: "Ali Bin Mansur", grade: "Year 9", type: "Re-entry", date: "5 hours ago" },
    { id: "3", name: "Siti Aminah", grade: "Year 10", type: "New Admission", date: "Yesterday" },
    { id: "4", name: "Hassan Basri", grade: "Year 11", type: "Transfer", date: "Yesterday" },
  ],
  classDistribution: [
    { label: "Primary", count: 210, color: "bg-info" },
    { label: "Secondary", count: 290, color: "bg-primary" },
  ]
};

export function RegistrarOverview() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Students", value: mockRegistrarData.totalStudents, icon: Users, path: "/registrar/students" },
    { label: "Medical Alerts", value: mockRegistrarData.medicalAlerts, icon: HeartPulse, path: "/registrar/medical", alert: true },
    { label: "Class Promotions", value: mockRegistrarData.pendingPromotions, icon: GraduationCap, path: "/registrar/academic" },
    { label: "ICE Cards Issued", value: mockRegistrarData.iceCardsPrinted, icon: CreditCard, path: "/registrar/ice-cards" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground tracking-tight">Registrar Dashboard</h1>
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Admin Secure Access</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <button
            key={s.label}
            onClick={() => navigate(s.path)}
            className="bg-background rounded-lg border border-border p-4 text-left hover:border-foreground/20 transition-all shadow-sm group"
          >
            <div className="flex items-center justify-between mb-2">
              <s.icon 
                size={16} 
                strokeWidth={2} 
                className={s.alert ? "text-destructive" : "text-muted-foreground"} 
              />
              {s.alert && <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse" />}
            </div>
            <p className="text-[11px] text-muted-foreground font-medium mb-1">{s.label}</p>
            <span className="text-2xl font-bold text-foreground">{s.value}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Medical & Enrollment Summary */}
        <div className="bg-background rounded-lg border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert size={16} className="text-warning" />
            <h2 className="text-xs font-bold text-foreground uppercase tracking-wider">Student Health Overview</h2>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-destructive/5 border border-destructive/10 rounded-md">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-destructive">Severe Allergies</span>
                <span className="text-xs font-bold text-destructive">5</span>
              </div>
              <div className="w-full bg-destructive/10 h-1 rounded-full">
                <div className="bg-destructive h-1 rounded-full w-[40%]" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {mockRegistrarData.classDistribution.map((item) => (
                <div key={item.label} className="p-3 bg-muted/30 rounded-md">
                  <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Admissions */}
        <div className="bg-background rounded-lg border border-border p-5">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Recent Registrations</h2>
          <div className="space-y-3">
            {mockRegistrarData.recentRegistrations.map((reg) => (
              <div key={reg.id} className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{reg.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{reg.grade} • {reg.type}</p>
                </div>
                <span className="text-[9px] font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {reg.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for icons
function ShieldCheck({ size }: { size: number }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}