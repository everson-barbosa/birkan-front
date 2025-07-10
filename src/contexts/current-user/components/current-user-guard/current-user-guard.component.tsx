import { ReactNode } from "react";
import { useCurrentUser } from "../../hooks/use-current-user.hook";
import { NetworkStatus } from "@/core/enums/network-status";
import { ChangePasswordGuard } from "./components/change-password-guard/change-password-guard.component";

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
      return <ChangePasswordGuard>{children}</ChangePasswordGuard>
    default:
      return null
  }
}