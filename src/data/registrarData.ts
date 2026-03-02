export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  rollNo: number;
  dob: string;
  gender: string;
  photo: string;
  guardian: string;
  guardianPhone: string;
  address: string;
  bloodGroup: string;
  allergies: string[];
  medicalNotes: string;
  emergencyContact: { name: string; relation: string; phone: string };
  enrolledDate: string;
  status: "Active" | "Inactive" | "Transferred";
}

export interface ClassTeacher {
  class: string;
  section: string;
  teacher: string;
  studentCount: number;
}

export const students: Student[] = [
  { id: "STU-001", name: "Aisha Rahman", class: "Grade 5", section: "A", rollNo: 1, dob: "2015-03-12", gender: "Female", photo: "", guardian: "Fatima Rahman", guardianPhone: "+673-50-123-4567", address: "Al Nahda, Sharjah", bloodGroup: "O+", allergies: ["Peanuts"], medicalNotes: "Carries EpiPen", emergencyContact: { name: "Omar Rahman", relation: "Father", phone: "+673-55-987-6543" }, enrolledDate: "2022-09-01", status: "Active" },
  { id: "STU-002", name: "Yusuf Al-Mansouri", class: "Grade 5", section: "A", rollNo: 2, dob: "2015-07-22", gender: "Male", photo: "", guardian: "Khalid Al-Mansouri", guardianPhone: "+673-50-234-5678", address: "Al Majaz, Sharjah", bloodGroup: "A+", allergies: [], medicalNotes: "", emergencyContact: { name: "Khalid Al-Mansouri", relation: "Father", phone: "+673-50-234-5678" }, enrolledDate: "2022-09-01", status: "Active" },
  { id: "STU-003", name: "Mariam Hassan", class: "Grade 4", section: "B", rollNo: 3, dob: "2016-01-05", gender: "Female", photo: "", guardian: "Layla Hassan", guardianPhone: "+673-56-345-6789", address: "Al Qasimia, Sharjah", bloodGroup: "B+", allergies: ["Dust"], medicalNotes: "Asthma — uses inhaler", emergencyContact: { name: "Hassan Ali", relation: "Father", phone: "+673-55-111-2222" }, enrolledDate: "2023-09-01", status: "Active" },
  { id: "STU-004", name: "Ahmed Bilal", class: "Grade 6", section: "A", rollNo: 1, dob: "2014-11-18", gender: "Male", photo: "", guardian: "Bilal Saeed", guardianPhone: "+673-50-456-7890", address: "Muwaileh, Sharjah", bloodGroup: "AB+", allergies: [], medicalNotes: "", emergencyContact: { name: "Bilal Saeed", relation: "Father", phone: "+673-50-456-7890" }, enrolledDate: "2021-09-01", status: "Active" },
  { id: "STU-005", name: "Sara Mahmoud", class: "Grade 3", section: "A", rollNo: 5, dob: "2017-06-30", gender: "Female", photo: "", guardian: "Nadia Mahmoud", guardianPhone: "+673-52-567-8901", address: "Al Taawun, Sharjah", bloodGroup: "O-", allergies: ["Lactose"], medicalNotes: "Lactose intolerant", emergencyContact: { name: "Mahmoud Tariq", relation: "Father", phone: "+673-55-333-4444" }, enrolledDate: "2024-09-01", status: "Active" },
  { id: "STU-006", name: "Zain Noor", class: "Grade 4", section: "A", rollNo: 6, dob: "2016-09-14", gender: "Male", photo: "", guardian: "Noor Ahmed", guardianPhone: "+673-50-678-9012", address: "Abu Shagara, Sharjah", bloodGroup: "A-", allergies: [], medicalNotes: "", emergencyContact: { name: "Noor Ahmed", relation: "Father", phone: "+673-50-678-9012" }, enrolledDate: "2023-09-01", status: "Transferred" },
];

export const classTeachers: ClassTeacher[] = [
  { class: "Grade 3", section: "A", teacher: "Ms. Huda Ali", studentCount: 28 },
  { class: "Grade 4", section: "A", teacher: "Mr. Tariq Saeed", studentCount: 30 },
  { class: "Grade 4", section: "B", teacher: "Ms. Rania Khalil", studentCount: 27 },
  { class: "Grade 5", section: "A", teacher: "Ms. Fatima Noor", studentCount: 29 },
  { class: "Grade 6", section: "A", teacher: "Mr. Ibrahim Youssef", studentCount: 31 },
];
