import { useState } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { students } from "@/data/registrarData";
import { examResults } from "@/data/attendanceData";

export default function ReportsPage() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]?.id || "");
  const [showPreview, setShowPreview] = useState(false);

  const student = students.find((s) => s.id === selectedStudent);
  const results = examResults.filter((r) => r.studentId === selectedStudent);

  const totalObtained = results.reduce((s, r) => s + r.obtained, 0);
  const totalMax = results.reduce((s, r) => s + r.maxMarks, 0);
  const percentage = totalMax > 0 ? Math.round((totalObtained / totalMax) * 100) : 0;

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-foreground">Academic Reports</h1>

      <div className="flex items-center gap-3 flex-wrap">
        <label className="text-xs font-medium text-muted-foreground">Student:</label>
        <select
          value={selectedStudent}
          onChange={(e) => { setSelectedStudent(e.target.value); setShowPreview(false); }}
          className="bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          {students.filter((s) => s.status === "Active").map((s) => (
            <option key={s.id} value={s.id}>{s.name} ({s.class})</option>
          ))}
        </select>

        <button
          onClick={() => setShowPreview(true)}
          className="flex items-center gap-1.5 bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg hover:bg-foreground/90 transition-colors"
        >
          <Eye size={12} /> Preview Report
        </button>
        <button className="flex items-center gap-1.5 border border-border text-foreground text-xs font-medium px-3 py-2 rounded-lg hover:bg-accent transition-colors">
          <Download size={12} /> Download PDF
        </button>
      </div>

      {showPreview && student && (
        <div className="bg-background border border-border rounded-lg p-6 print:shadow-none" id="report-preview">
          {/* Report Header */}
          <div className="text-center mb-6 pb-4 border-b border-border">
            <h2 className="text-base font-bold text-foreground">YSHHB ONE — Academic Report</h2>
            <p className="text-[11px] text-muted-foreground mt-1">Academic Year 2025–2026</p>
          </div>

          {/* Student Info */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Student Name</span>
              <span className="text-foreground font-medium">{student.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">ID</span>
              <span className="text-foreground font-mono">{student.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Class</span>
              <span className="text-foreground font-medium">{student.class} — {student.section}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Roll No</span>
              <span className="text-foreground font-medium">{student.rollNo}</span>
            </div>
          </div>

          {/* Results Table */}
          {results.length > 0 ? (
            <div className="mb-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-2 pr-4 font-medium">Subject</th>
                    <th className="pb-2 pr-4 font-medium">Exam</th>
                    <th className="pb-2 pr-4 font-medium">Max</th>
                    <th className="pb-2 pr-4 font-medium">Obtained</th>
                    <th className="pb-2 font-medium">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-2 pr-4 text-foreground">{r.subject}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{r.examType}</td>
                      <td className="py-2 pr-4 text-foreground font-mono">{r.maxMarks}</td>
                      <td className="py-2 pr-4 text-foreground font-mono">{r.obtained}</td>
                      <td className="py-2">
                        <span className="font-medium text-foreground">{r.grade}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground text-center py-6">No exam results available for this student.</p>
          )}

          {/* Summary */}
          {results.length > 0 && (
            <div className="flex items-center justify-between pt-4 border-t border-border text-sm">
              <span className="text-muted-foreground font-medium">Overall Percentage</span>
              <span className="text-foreground font-bold text-lg">{percentage}%</span>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-border flex justify-between text-[10px] text-muted-foreground">
            <span>Generated on {new Date().toLocaleDateString()}</span>
            <span>YSHHB ONE School Management System</span>
          </div>
        </div>
      )}

      {!showPreview && (
        <div className="bg-background border border-border rounded-lg p-8 text-center">
          <FileText size={32} className="text-muted-foreground mx-auto mb-3" />
          <p className="text-xs text-muted-foreground">Select a student and click "Preview Report" to generate an academic report.</p>
        </div>
      )}
    </div>
  );
}
