import { GET_COUNT_EXAM_TEMPLATES_BY_STATUS_URL } from "../../constants/endpoints/endppoints";
import { api } from "../../utils/axios";

interface GetCountExamTemplatesByStatusProps {
  readonly status: string
}

export async function getCountExamTemplatesByStatus({
  status
}: GetCountExamTemplatesByStatusProps) {
  const endpoint = GET_COUNT_EXAM_TEMPLATES_BY_STATUS_URL.replace(':status', status)

  return api.get(endpoint)
}