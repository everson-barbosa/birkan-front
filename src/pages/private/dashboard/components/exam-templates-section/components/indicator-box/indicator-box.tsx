import { useEffect, useState } from "react"
import { getCountExamTemplatesByStatus } from "../../../../../../../services/exam-templates/get-count-exam-templates-by-status.service"
import { NetworkStatus } from "../../../../../../../core/enums/network-status"
import { IndicatorBoxErrorFallback } from "./components/@error-fallback/indicator-box-error-fallback"
import { IndicatorBoxLoadingFallback } from "./components/@loading-fallback/indicator-box-loading-fallback"

interface IndicatorBoxProps {
  readonly title: string
  readonly status: 'sketch' | 'published' | 'canceled'
}

export function IndicatorBox({ title, status }: IndicatorBoxProps) {
  const [data, setData] = useState(null)
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(NetworkStatus.IDLE)

  const getData = async () => {
    setNetworkStatus(NetworkStatus.LOADING)

    try {
      const result = await getCountExamTemplatesByStatus({
        status
      })

      const count = result.data.count

      setData(count)
      setNetworkStatus(NetworkStatus.SUCCESS)
    } catch (error) {
      console.error(error)

      setNetworkStatus(NetworkStatus.ERROR)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const isLoading = networkStatus === NetworkStatus.LOADING
  const isError = networkStatus === NetworkStatus.ERROR

  return (
    <IndicatorBoxErrorFallback isError={isError} onRetry={getData}>
      <IndicatorBoxLoadingFallback isLoading={isLoading}>
        <div>
          <h5>{title}</h5>
          <span>{data ?? '-'}</span>
        </div>
      </IndicatorBoxLoadingFallback>
    </IndicatorBoxErrorFallback>
  )
}