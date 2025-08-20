import { FIND_EXAM_APPLICATIONS } from "./@constants/endpoints";
import { api } from "@/lib/axios";

interface FindExamApplicationsServiceProps {
  readonly order: 'asc' | 'desc'
  readonly orderBy: 'createdAt' | 'updatedAt' | 'startAt'
  readonly page: number
  readonly perPage: number
}

export function findExamApplicationsService({ order, orderBy, page, perPage }: FindExamApplicationsServiceProps) {
  return api.get(FIND_EXAM_APPLICATIONS, {
    params: {
      order,
      orderBy,
      page,
      perPage
    },
  })
}