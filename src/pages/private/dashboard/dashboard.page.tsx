import { ExamApplicationsSection } from "./components/exam-applications-section/exam-applications-section";
import { ExamTemplatesSection } from "./components/exam-templates-section/exam-templates-section";

export function DashboardPage() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>

      <ExamTemplatesSection />

      <ExamApplicationsSection />

    </div>
  )
}