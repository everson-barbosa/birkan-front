import { ReactNode } from "react";
import { useCurrentUser } from "../../hooks/use-current-user.hook";
import { RequestStatus } from "@/core/enums/request-status";
import { ChangePasswordGuard } from "./components/change-password-guard/change-password-guard.component";
import { CurrentUserGuardError } from "./components/@error/current-user-guard-error.component";
import { CurrentUserGuardLoading } from "./components/@loading/current-user-guard-loading.component";

interface CurrentUserGuardProps { 
  readonly children: ReactNode
}

export function CurrentUserGuard({ children }: CurrentUserGuardProps) {
  const { status } = useCurrentUser()

  switch (status) {
    case RequestStatus.LOADING:
      return <CurrentUserGuardLoading />
    case RequestStatus.ERROR:
      return <CurrentUserGuardError />
    case RequestStatus.SUCCESS:
      return <ChangePasswordGuard>{children}</ChangePasswordGuard>
    default:
      return null
  }
}