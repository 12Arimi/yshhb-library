export type BookStatus = "Available" | "Issued" | "Reserved";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  status: BookStatus;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
}

export interface Transaction {
  id: string;
  bookId: string;
  bookTitle: string;
  studentId: string;
  studentName: string;
  type: "Issue" | "Return";
  date: string;
}

export interface Reservation {
  bookId: string;
  bookTitle: string;
  queue: { studentId: string; studentName: string; requestedAt: string }[];
}

export const books: Book[] = [
  { id: "BK-0001", title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", status: "Available" },
  { id: "BK-0002", title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", status: "Issued" },
  { id: "BK-0003", title: "Design Patterns", author: "Gang of Four", category: "Software Engineering", status: "Reserved" },
  { id: "BK-0004", title: "The Pragmatic Programmer", author: "David Thomas", category: "Software Engineering", status: "Available" },
  { id: "BK-0005", title: "Structure and Interpretation", author: "Harold Abelson", category: "Computer Science", status: "Available" },
  { id: "BK-0006", title: "Artificial Intelligence", author: "Stuart Russell", category: "AI / ML", status: "Issued" },
  { id: "BK-0007", title: "Deep Learning", author: "Ian Goodfellow", category: "AI / ML", status: "Reserved" },
  { id: "BK-0008", title: "Database System Concepts", author: "Abraham Silberschatz", category: "Databases", status: "Available" },
  { id: "BK-0009", title: "Computer Networking", author: "James Kurose", category: "Networking", status: "Issued" },
  { id: "BK-0010", title: "Operating System Concepts", author: "Abraham Silberschatz", category: "Operating Systems", status: "Available" },
];

export const students: Student[] = [
  { id: "STU-2001", name: "Aarav Sharma", grade: "10-A" },
  { id: "STU-2002", name: "Priya Patel", grade: "11-B" },
  { id: "STU-2003", name: "Rohan Gupta", grade: "9-C" },
  { id: "STU-2004", name: "Sneha Reddy", grade: "12-A" },
  { id: "STU-2005", name: "Vikram Singh", grade: "10-B" },
];

export const transactions: Transaction[] = [
  { id: "TXN-001", bookId: "BK-0002", bookTitle: "Clean Code", studentId: "STU-2001", studentName: "Aarav Sharma", type: "Issue", date: "2026-02-20" },
  { id: "TXN-002", bookId: "BK-0006", bookTitle: "Artificial Intelligence", studentId: "STU-2002", studentName: "Priya Patel", type: "Issue", date: "2026-02-18" },
  { id: "TXN-003", bookId: "BK-0009", bookTitle: "Computer Networking", studentId: "STU-2004", studentName: "Sneha Reddy", type: "Issue", date: "2026-02-22" },
  { id: "TXN-004", bookId: "BK-0001", bookTitle: "Introduction to Algorithms", studentId: "STU-2003", studentName: "Rohan Gupta", type: "Return", date: "2026-02-15" },
  { id: "TXN-005", bookId: "BK-0005", bookTitle: "Structure and Interpretation", studentId: "STU-2005", studentName: "Vikram Singh", type: "Return", date: "2026-02-12" },
];

export const reservations: Reservation[] = [
  {
    bookId: "BK-0003",
    bookTitle: "Design Patterns",
    queue: [
      { studentId: "STU-2003", studentName: "Rohan Gupta", requestedAt: "2026-02-19" },
      { studentId: "STU-2005", studentName: "Vikram Singh", requestedAt: "2026-02-21" },
    ],
  },
  {
    bookId: "BK-0007",
    bookTitle: "Deep Learning",
    queue: [
      { studentId: "STU-2001", studentName: "Aarav Sharma", requestedAt: "2026-02-20" },
      { studentId: "STU-2004", studentName: "Sneha Reddy", requestedAt: "2026-02-23" },
      { studentId: "STU-2002", studentName: "Priya Patel", requestedAt: "2026-02-25" },
    ],
  },
];
