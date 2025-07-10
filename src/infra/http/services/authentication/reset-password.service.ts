import { api } from "@/lib/axios"
import { RESET_PASSWORD_URL } from "./_constants/endpoints"

interface ResetPasswordServiceProps {
  readonly newPassword: string
}

export async function resetPasswordService({ newPassword }: ResetPasswordServiceProps) {
  return api.patch(RESET_PASSWORD_URL, {
    newPassword
  })
}    