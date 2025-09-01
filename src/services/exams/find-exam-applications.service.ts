import { PaginationResponse } from "@/core/interfaces/pagination-response";
import { FIND_EXAM_APPLICATIONS } from "./@constants/endpoints";
import { api } from "@/lib/axios";
import { DateIsoString } from "@/core/types/date-iso-string";

interface FindExamApplicationsServiceProps {
  readonly order?: 'asc' | 'desc'
  readonly orderBy?: 'createdAt' | 'updatedAt' | 'startAt'
  readonly page?: number
  readonly perPage?: number
}

interface ExamApplicationQuestion {
  id: string
  position: number
  questionId: string
  weight: number
}

export interface ExamApplication {
  id: string
  instructorId: string
  createdAt: DateIsoString
  description: "..."
  endAt: DateIsoString
  questions: ExamApplicationQuestion[]
  startAt: DateIsoString
  title: string
  updatedAt: DateIsoString | null
}

export interface ExamApplicationsResponse extends PaginationResponse {
  examApplications: ExamApplication[]
}

export function findExamApplicationsService({ order, orderBy, page, perPage }: FindExamApplicationsServiceProps) {
  return api.get<ExamApplicationsResponse>(FIND_EXAM_APPLICATIONS, {
    params: {
      order,
      orderBy,
      page,
      perPage
    },
  })
}