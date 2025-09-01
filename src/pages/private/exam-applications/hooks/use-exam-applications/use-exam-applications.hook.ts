import { RequestStatus } from "@/core/enums/request-status"
import { ExamApplicationsResponse, findExamApplicationsService } from "@/services/exams/find-exam-applications.service"
import { useEffect, useState } from "react"

interface UseExamApplicationsProps {
  readonly order?: 'asc' | 'desc'
  readonly orderBy?: 'createdAt' | 'updatedAt' | 'startAt'
  readonly page?: number
  readonly perPage?: number
}

export function useExamApplications({ order, orderBy, page, perPage }: UseExamApplicationsProps) {
  const [data, setData] = useState<ExamApplicationsResponse | null>(null)
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(RequestStatus.IDLE)

  const requestData = async () => {
    setRequestStatus(RequestStatus.LOADING)

    try {
      const response = await findExamApplicationsService({ order, orderBy, page, perPage })

      setData(response.data)

      setRequestStatus(RequestStatus.SUCCESS)
    } catch (error) {
      console.error(error)

      setRequestStatus(RequestStatus.ERROR)
    }
  }

  useEffect(() => {
    requestData()
  }, [order, orderBy, page, perPage])

  const isLoading = requestStatus === RequestStatus.LOADING
  const isError = requestStatus === RequestStatus.ERROR
  const isSuccess = requestStatus === RequestStatus.SUCCESS

  return {
    data,
    isLoading,
    isError,
    isSuccess
  }
}