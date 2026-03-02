export type PaymentStatus = "Paid" | "Pending" | "Overdue";
export type LoanStatus = "Active" | "Cleared" | "Defaulted";
export type VerificationStatus = "Pending" | "Approved" | "Rejected";

export interface FeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  grade: string;
  totalFee: number;
  amountPaid: number;
  balance: number;
  status: PaymentStatus;
  dueDate: string;
}

export interface LoanRecord {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  repaid: number;
  status: LoanStatus;
  dueDate: string;
}

export interface PaymentUpload {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  screenshotUrl: string;
  uploadedAt: string;
  status: VerificationStatus;
  note?: string;
}

export interface Receipt {
  id: string;
  studentId: string;
  studentName: string;
  grade: string;
  amount: number;
  date: string;
  method: string;
  description: string;
}

export const feeRecords: FeeRecord[] = [
  { id: "FEE-001", studentId: "STU-2001", studentName: "Aarav Sharma", grade: "10-A", totalFee: 45000, amountPaid: 45000, balance: 0, status: "Paid", dueDate: "2026-03-01" },
  { id: "FEE-002", studentId: "STU-2002", studentName: "Priya Patel", grade: "11-B", totalFee: 48000, amountPaid: 30000, balance: 18000, status: "Pending", dueDate: "2026-03-15" },
  { id: "FEE-003", studentId: "STU-2003", studentName: "Rohan Gupta", grade: "9-C", totalFee: 42000, amountPaid: 10000, balance: 32000, status: "Overdue", dueDate: "2026-02-15" },
  { id: "FEE-004", studentId: "STU-2004", studentName: "Sneha Reddy", grade: "12-A", totalFee: 50000, amountPaid: 50000, balance: 0, status: "Paid", dueDate: "2026-03-01" },
  { id: "FEE-005", studentId: "STU-2005", studentName: "Vikram Singh", grade: "10-B", totalFee: 45000, amountPaid: 25000, balance: 20000, status: "Pending", dueDate: "2026-04-01" },
  { id: "FEE-006", studentId: "STU-2006", studentName: "Ananya Iyer", grade: "11-A", totalFee: 48000, amountPaid: 0, balance: 48000, status: "Overdue", dueDate: "2026-01-31" },
];

export const loanRecords: LoanRecord[] = [
  { id: "LN-001", studentId: "STU-2002", studentName: "Priya Patel", amount: 15000, repaid: 5000, status: "Active", dueDate: "2026-06-01" },
  { id: "LN-002", studentId: "STU-2003", studentName: "Rohan Gupta", amount: 10000, repaid: 10000, status: "Cleared", dueDate: "2026-02-01" },
  { id: "LN-003", studentId: "STU-2006", studentName: "Ananya Iyer", amount: 20000, repaid: 0, status: "Defaulted", dueDate: "2026-01-15" },
];

export const paymentUploads: PaymentUpload[] = [
  { id: "UP-001", studentId: "STU-2002", studentName: "Priya Patel", amount: 10000, screenshotUrl: "/placeholder.svg", uploadedAt: "2026-02-28", status: "Pending" },
  { id: "UP-002", studentId: "STU-2005", studentName: "Vikram Singh", amount: 5000, screenshotUrl: "/placeholder.svg", uploadedAt: "2026-02-27", status: "Pending" },
  { id: "UP-003", studentId: "STU-2001", studentName: "Aarav Sharma", amount: 15000, screenshotUrl: "/placeholder.svg", uploadedAt: "2026-02-25", status: "Approved" },
];

export const receipts: Receipt[] = [
  { id: "RCP-001", studentId: "STU-2001", studentName: "Aarav Sharma", grade: "10-A", amount: 45000, date: "2026-02-20", method: "Bank Transfer", description: "Term 2 Tuition Fee" },
  { id: "RCP-002", studentId: "STU-2004", studentName: "Sneha Reddy", grade: "12-A", amount: 50000, date: "2026-02-18", method: "Online Payment", description: "Term 2 Tuition Fee" },
];

export const financeSummary = {
  totalCollected: 175000,
  outstandingBalances: 118000,
  pendingVerifications: 2,
  totalStudents: 6,
};
