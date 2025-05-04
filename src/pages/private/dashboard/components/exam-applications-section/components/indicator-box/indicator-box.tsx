import { 
  BookXIcon as CanceledIcon, 
  CalendarClockIcon as ScheduledIcon,
  ScreenShareIcon as InProgressIcon,
  ClipboardCheckIcon as FinishedIcon,
  InfoIcon
} from "lucide-react"
import { LucideReactIcon } from "../../../../../../../core/types/lucide-react"

type Status = 'scheduled' | 'in-progress' | 'canceled' | 'finished'

interface IndicatorBoxProps {
  readonly title: string
  readonly status: Status
}

const STATUS_ICON: Record<Status, LucideReactIcon> = {
  scheduled: ScheduledIcon,
  "in-progress": InProgressIcon,
  finished: FinishedIcon,
  canceled: CanceledIcon
}

export function IndicatorBox({ title, status }: IndicatorBoxProps) {
  const Icon = STATUS_ICON[status]

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
        <span className="text-2xl font-semibold">{99}</span>
      </div>
    </div>
  )
}