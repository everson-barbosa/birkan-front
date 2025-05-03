import { ReactNode } from "react"

interface IndicatorBoxLoadingFallbackProps {
  readonly isLoading: boolean
  readonly children: ReactNode
}

export function IndicatorBoxLoadingFallback({ isLoading, children }: IndicatorBoxLoadingFallbackProps) {
  if (isLoading) return 'Loading...'

  return children
}