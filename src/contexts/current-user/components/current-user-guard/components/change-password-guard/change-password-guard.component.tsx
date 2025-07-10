import { useCurrentUser } from "@/contexts/current-user/hooks/use-current-user.hook";
import { UserStatus } from "@/infra/http/services/authentication/get-current-user.service";
import { ReactNode } from "react";
import { ChangePasswordForm } from "./components/change-password-form/change-password-form.component";

interface ChangePasswordGuardProps {
  readonly children: ReactNode
}

export function ChangePasswordGuard({ children }: ChangePasswordGuardProps) {
  const { user } = useCurrentUser()

  const shouldChangePassword = user?.status === UserStatus.REQUIRE_CHANGE_PASSWORD

  if (shouldChangePassword) return <ChangePasswordForm />

  return children
}