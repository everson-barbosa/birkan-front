import { findExamApplicationsService } from "@/services/exams/find-exam-applications.service";

export default function DashboardPage() {
  return (
    <div>
      <button onClick={() => findExamApplicationsService({
        order: 'asc',
        orderBy: 'createdAt',
        page: 1,
        perPage: 20
      })}>Enviar</button>
    </div>
  )
}