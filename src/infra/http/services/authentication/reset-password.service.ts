import { RESET_PASSWORD_URL } from "./@constants/endpoints"
import { api } from "@/lib/axios"

interface ResetPasswordServiceProps {
  readonly newPassword: string
}

export async function resetPasswordService({ newPassword }: ResetPasswordServiceProps) {
  return api.patch(RESET_PASSWORD_URL, {
    newPassword
  })
}    