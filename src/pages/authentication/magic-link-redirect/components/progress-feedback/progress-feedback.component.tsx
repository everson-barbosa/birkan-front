import { Progress } from "@/components/ui/progress/progress.component";

interface ProgressFeedbackProps {
  readonly text: string
  readonly value: number
}

export function ProgressFeedback({ text, value }: ProgressFeedbackProps) {
  return (
    <div>
      <div>
        <span>{text}</span>
      </div>

      <Progress value={value} />
    </div>
  )
}