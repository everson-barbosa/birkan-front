import { useExamApplications } from "./hooks/use-exam-applications/use-exam-applications.hook";
import { ExamApplicationsTable } from "./components/exam-applications-table/exam-applications-table.component";
import { Button } from "@/components/ui/button/button.component";

export default function ExamApplicationsPage() {
  const { data, isSuccess, isLoading, isError } = useExamApplications({})

  return (
    <div>
      <h1>Exam Applications Page</h1>

      <Button>
        Create
      </Button>

      <ExamApplicationsTable data={data} isLoading={isLoading} isSuccess={isSuccess} isError={isError} />
    </div>
  )
}