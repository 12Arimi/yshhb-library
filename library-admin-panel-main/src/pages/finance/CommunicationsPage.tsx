import { useState } from "react";
import { Mail, Bell } from "lucide-react";

export default function CommunicationsPage() {
  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [alerts, setAlerts] = useState({ fees: true, loans: true, payments: false });

  const handleSend = () => {
    alert(`Email sent to: ${emailTo}\nSubject: ${emailSubject}`);
    setEmailTo("");
    setEmailSubject("");
    setEmailBody("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Communication Hub</h1>
        <p className="text-xs text-muted-foreground mt-1">Send notifications and manage automated alerts</p>
      </div>

      {/* Manual Email */}
      <div className="bg-background border border-border rounded-lg p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Mail size={14} className="text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">Manual Email</h2>
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Recipient</label>
            <input
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
              placeholder="parent@email.com"
              className="w-full h-9 px-3 text-sm rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Subject</label>
            <input
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              placeholder="Payment Reminder"
              className="w-full h-9 px-3 text-sm rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Body</label>
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              rows={4}
              placeholder="Dear Parent, this is a reminder..."
              className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!emailTo || !emailSubject}
            className="text-xs font-medium px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send Email
          </button>
        </div>
      </div>

      {/* Automated Alerts */}
      <div className="bg-background border border-border rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <Bell size={14} className="text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">Automated Alerts</h2>
        </div>
        <div className="space-y-4">
          {([
            { key: "fees" as const, label: "Fee Due Reminders", desc: "Auto-notify parents 7 days before fee due date" },
            { key: "loans" as const, label: "Loan Payment Alerts", desc: "Notify when loan installments are due" },
            { key: "payments" as const, label: "Payment Confirmation", desc: "Send receipt when payment is verified" },
          ]).map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setAlerts((a) => ({ ...a, [item.key]: !a[item.key] }))}
                className={`relative w-10 h-5 rounded-full transition-colors ${alerts[item.key] ? "bg-success" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-background shadow transition-transform ${alerts[item.key] ? "translate-x-5" : ""}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
