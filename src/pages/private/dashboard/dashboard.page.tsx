import { findExamApplicationsService } from "@/infra/http/services/exams/find-exam-applications.service";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <button onClick={() => findExamApplicationsService({
        order: 'asc',
        orderBy: 'createdAt',
        page: 1,
        perPage: 20
      })}>Enviar</button>
    </div>
  )
}