import { ReactNode } from "react";
import { useCurrentUser } from "../../hooks/use-current-user.hook";
import { NetworkStatus } from "@/core/enums/network-status";

interface CurrentUserGuardProps { 
  readonly children: ReactNode
}

export function CurrentUserGuard({ children }: CurrentUserGuardProps) {
  const { status } = useCurrentUser()

  switch (status) {
    case NetworkStatus.LOADING:
      return 'Loading...'
    case NetworkStatus.ERROR:
      return 'Error'
    case NetworkStatus.SUCCESS:
      return children
    default:
      return null
  }
}