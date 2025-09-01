import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table/table.component";
import { ExamApplicationsResponse } from "@/services/exams/find-exam-applications.service";

interface ExamApplicationsTableProps {
  data: ExamApplicationsResponse | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

export function ExamApplicationsTable({ 
  data, 
  isLoading,
  isError,
  isSuccess
}: ExamApplicationsTableProps) {
  if (isLoading) return 'loading...'

  if (isError) return 'error!'

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Scheduled At</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead className="text-right">Questions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          isSuccess && data && data.examApplications.map(examApplication => (
            <TableRow key={examApplication.id}>
              <TableCell className="font-medium">{examApplication.title}</TableCell>
              <TableCell>
                {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(examApplication.startAt))}
              </TableCell>
              <TableCell>{90}</TableCell>
              <TableCell className="text-right">{examApplication.questions.length}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}