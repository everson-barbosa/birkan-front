import { ReactNode } from "react"

interface IndicatorBoxErrorFallbackProps {
  readonly isError: boolean
  readonly onRetry: () => Promise<void>
  readonly children: ReactNode
}

export function IndicatorBoxErrorFallback({ isError, onRetry, children }: IndicatorBoxErrorFallbackProps) {
  if (isError) {
    return (
      <div>
        <span>Error</span>
        <button type="button" onClick={onRetry}>Try again</button>
      </div>
    )
  }

  return children
}