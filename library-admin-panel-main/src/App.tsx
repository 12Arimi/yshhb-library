import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SchoolPortal from "./pages/SchoolPortal";
import LibraryLayout from "./pages/library/LibraryLayout";
import DashboardPage from "./pages/library/DashboardPage";
import InventoryPage from "./pages/library/InventoryPage";
import IssuingPage from "./pages/library/IssuingPage";
import QueuePage from "./pages/library/QueuePage";
import ReportsPage from "./pages/library/ReportsPage";
import FinanceLayout from "./pages/finance/FinanceLayout";
import FinanceDashboard from "./pages/finance/FinanceDashboard";
import FeesPage from "./pages/finance/FeesPage";
import PaymentsPage from "./pages/finance/PaymentsPage";
import UploadsPage from "./pages/finance/UploadsPage";
import CommunicationsPage from "./pages/finance/CommunicationsPage";
import ReceiptsPage from "./pages/finance/ReceiptsPage";
import RegistrarLayout from "./pages/registrar/RegistrarLayout";
import RegistrarDashboard from "./pages/registrar/RegistrarDashboard";
import StudentsPage from "./pages/registrar/StudentsPage";
import MedicalPage from "./pages/registrar/MedicalPage";
import PromotePage from "./pages/registrar/PromotePage";
import ICECardsPage from "./pages/registrar/ICECardsPage";
import AttendanceLayout from "./pages/attendance/AttendanceLayout";
import AttendanceDashboard from "./pages/attendance/AttendanceDashboard";
import DailyAttendancePage from "./pages/attendance/DailyAttendancePage";
import ExamsPage from "./pages/attendance/ExamsPage";
import AttendanceReportsPage from "./pages/attendance/ReportsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SchoolPortal />} />
          <Route path="/library" element={<LibraryLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="issuing" element={<IssuingPage />} />
            <Route path="queue" element={<QueuePage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
          <Route path="/finance" element={<FinanceLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FinanceDashboard />} />
            <Route path="fees" element={<FeesPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="uploads" element={<UploadsPage />} />
            <Route path="communications" element={<CommunicationsPage />} />
            <Route path="receipts" element={<ReceiptsPage />} />
          </Route>
          <Route path="/registrar" element={<RegistrarLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<RegistrarDashboard />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="medical" element={<MedicalPage />} />
            <Route path="promote" element={<PromotePage />} />
            <Route path="ice-cards" element={<ICECardsPage />} />
          </Route>
          <Route path="/attendance" element={<AttendanceLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AttendanceDashboard />} />
            <Route path="daily" element={<DailyAttendancePage />} />
            <Route path="exams" element={<ExamsPage />} />
            <Route path="reports" element={<AttendanceReportsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
