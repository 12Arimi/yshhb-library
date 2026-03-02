import { useState } from "react";
import { examResults } from "@/data/attendanceData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ExamsPage() {
  const [selectedClass, setSelectedClass] = useState("Grade 5");
  const classes = [...new Set(examResults.map((r) => r.class))].sort();
  const classResults = examResults.filter((r) => r.class === selectedClass);

  // Performance chart data — avg by subject
  const subjects = [...new Set(classResults.map((r) => r.subject))];
  const chartData = subjects.map((sub) => {
    const subResults = classResults.filter((r) => r.subject === sub);
    const avg = Math.round(subResults.reduce((sum, r) => sum + (r.obtained / r.maxMarks) * 100, 0) / subResults.length);
    return { subject: sub, average: avg };
  });

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Examination Results</h1>

      <div className="flex items-center gap-3 flex-wrap">
        <label className="text-xs font-medium text-muted-foreground">Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          {classes.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Performance Chart */}
      {chartData.length > 0 && (
        <div className="bg-background border border-border rounded-lg p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Average Performance by Subject</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="subject" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    fontSize: 11,
                  }}
                />
                <Bar dataKey="average" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Results Table */}
      <div className="bg-background border border-border rounded-lg p-4">
        <h2 className="text-sm font-semibold text-foreground mb-3">Result Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-2 pr-4 font-medium">Student</th>
                <th className="pb-2 pr-4 font-medium">Subject</th>
                <th className="pb-2 pr-4 font-medium">Type</th>
                <th className="pb-2 pr-4 font-medium">Score</th>
                <th className="pb-2 font-medium">Grade</th>
              </tr>
            </thead>
            <tbody>
              {classResults.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 text-foreground">{r.studentName}</td>
                  <td className="py-2 pr-4 text-foreground">{r.subject}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{r.examType}</td>
                  <td className="py-2 pr-4 text-foreground font-mono">{r.obtained}/{r.maxMarks}</td>
                  <td className="py-2">
                    <span className="text-[10px] font-medium bg-accent text-foreground px-2 py-0.5 rounded-full">{r.grade}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
