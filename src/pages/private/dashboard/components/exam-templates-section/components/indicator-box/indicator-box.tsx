import { useEffect, useState } from "react"
import { getCountExamTemplatesByStatus } from "../../../../../../../services/exam-templates/get-count-exam-templates-by-status.service"
import { NetworkStatus } from "../../../../../../../core/enums/network-status"
import { BookXIcon as CanceledIcon, InfoIcon, BookCheckIcon as PublishedIcon, PencilLineIcon as SketchIcon } from "lucide-react"
import { LucideReactIcon } from "../../../../../../../core/types/lucide-react"

type Status = 'sketch' | 'published' | 'canceled'

interface IndicatorBoxProps {
  readonly title: string
  readonly status: Status
}

const STATUS_ICON: Record<Status, LucideReactIcon> = {
  sketch: SketchIcon,
  published: PublishedIcon,
  canceled: CanceledIcon
}

export function IndicatorBox({ title, status }: IndicatorBoxProps) {
  const [data, setData] = useState(null)
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(NetworkStatus.IDLE)

  const Icon = STATUS_ICON[status]

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

  if (isLoading) return 'loading...'
  if (isError) return 'error!'

  return (
    <div className="relative flex flex-row items-center justify-start gap-2 bg-gray-200 border-b-gray-950 border-2 rounded-sm p-2">
      <span className="cursor-pointer absolute right-2 top-2">
        <InfoIcon size={16}/>
      </span>
      <div className="w-10 h-10 flex items-center justify-center bg-gray-50 border-b-gray-950 border-2 rounded-sm p-1">
        <Icon />
      </div>
      <div className="flex flex-col">
        <h5 className="text-xs">{title}</h5>
        <span className="text-2xl font-semibold">{data ?? '-'}</span>
      </div>
    </div>
  )
}