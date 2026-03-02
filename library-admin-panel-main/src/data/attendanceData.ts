export interface AttendanceRecord {
  studentId: string;
  studentName: string;
  class: string;
  section: string;
  date: string;
  status: "Present" | "Absent" | "Late" | "Excused";
}

export interface ExamResult {
  studentId: string;
  studentName: string;
  class: string;
  subject: string;
  examType: "Quiz" | "Midterm" | "Final";
  maxMarks: number;
  obtained: number;
  grade: string;
  date: string;
}

export interface MonthlyAttendanceSummary {
  class: string;
  section: string;
  month: string;
  totalDays: number;
  avgPresent: number;
  avgAbsent: number;
  avgLate: number;
}

const todayStr = "2026-03-02";

export const attendanceRecords: AttendanceRecord[] = [
  { studentId: "STU-001", studentName: "Aisha Rahman", class: "Grade 5", section: "A", date: todayStr, status: "Present" },
  { studentId: "STU-002", studentName: "Yusuf Al-Mansouri", class: "Grade 5", section: "A", date: todayStr, status: "Present" },
  { studentId: "STU-003", studentName: "Mariam Hassan", class: "Grade 4", section: "B", date: todayStr, status: "Late" },
  { studentId: "STU-004", studentName: "Ahmed Bilal", class: "Grade 6", section: "A", date: todayStr, status: "Present" },
  { studentId: "STU-005", studentName: "Sara Mahmoud", class: "Grade 3", section: "A", date: todayStr, status: "Absent" },
  { studentId: "STU-001", studentName: "Aisha Rahman", class: "Grade 5", section: "A", date: "2026-03-01", status: "Present" },
  { studentId: "STU-002", studentName: "Yusuf Al-Mansouri", class: "Grade 5", section: "A", date: "2026-03-01", status: "Absent" },
  { studentId: "STU-003", studentName: "Mariam Hassan", class: "Grade 4", section: "B", date: "2026-03-01", status: "Present" },
  { studentId: "STU-004", studentName: "Ahmed Bilal", class: "Grade 6", section: "A", date: "2026-03-01", status: "Present" },
  { studentId: "STU-005", studentName: "Sara Mahmoud", class: "Grade 3", section: "A", date: "2026-03-01", status: "Present" },
];

export const examResults: ExamResult[] = [
  { studentId: "STU-001", studentName: "Aisha Rahman", class: "Grade 5", subject: "Mathematics", examType: "Midterm", maxMarks: 100, obtained: 92, grade: "A+", date: "2026-02-15" },
  { studentId: "STU-001", studentName: "Aisha Rahman", class: "Grade 5", subject: "English", examType: "Midterm", maxMarks: 100, obtained: 88, grade: "A", date: "2026-02-16" },
  { studentId: "STU-001", studentName: "Aisha Rahman", class: "Grade 5", subject: "Science", examType: "Midterm", maxMarks: 100, obtained: 95, grade: "A+", date: "2026-02-17" },
  { studentId: "STU-002", studentName: "Yusuf Al-Mansouri", class: "Grade 5", subject: "Mathematics", examType: "Midterm", maxMarks: 100, obtained: 78, grade: "B+", date: "2026-02-15" },
  { studentId: "STU-002", studentName: "Yusuf Al-Mansouri", class: "Grade 5", subject: "English", examType: "Midterm", maxMarks: 100, obtained: 85, grade: "A", date: "2026-02-16" },
  { studentId: "STU-003", studentName: "Mariam Hassan", class: "Grade 4", subject: "Mathematics", examType: "Midterm", maxMarks: 100, obtained: 91, grade: "A+", date: "2026-02-15" },
  { studentId: "STU-003", studentName: "Mariam Hassan", class: "Grade 4", subject: "Arabic", examType: "Midterm", maxMarks: 100, obtained: 96, grade: "A+", date: "2026-02-18" },
  { studentId: "STU-004", studentName: "Ahmed Bilal", class: "Grade 6", subject: "Mathematics", examType: "Midterm", maxMarks: 100, obtained: 72, grade: "B", date: "2026-02-15" },
  { studentId: "STU-004", studentName: "Ahmed Bilal", class: "Grade 6", subject: "Science", examType: "Midterm", maxMarks: 100, obtained: 68, grade: "C+", date: "2026-02-17" },
  { studentId: "STU-005", studentName: "Sara Mahmoud", class: "Grade 3", subject: "English", examType: "Quiz", maxMarks: 50, obtained: 45, grade: "A+", date: "2026-02-20" },
];

export const monthlySummaries: MonthlyAttendanceSummary[] = [
  { class: "Grade 3", section: "A", month: "February 2026", totalDays: 20, avgPresent: 18, avgAbsent: 1, avgLate: 1 },
  { class: "Grade 4", section: "A", month: "February 2026", totalDays: 20, avgPresent: 17, avgAbsent: 2, avgLate: 1 },
  { class: "Grade 4", section: "B", month: "February 2026", totalDays: 20, avgPresent: 19, avgAbsent: 0.5, avgLate: 0.5 },
  { class: "Grade 5", section: "A", month: "February 2026", totalDays: 20, avgPresent: 18.5, avgAbsent: 1, avgLate: 0.5 },
  { class: "Grade 6", section: "A", month: "February 2026", totalDays: 20, avgPresent: 17.5, avgAbsent: 1.5, avgLate: 1 },
];
