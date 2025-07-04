import { api } from "@/lib/axios"
import { CHANGE_PASSWORD_URL } from "../../_constants/endpoints/endpoints"

interface ChangePasswordServiceProps {
  readonly newPassword: string
  readonly accessToken: string
}

export async function changePasswordService({ newPassword, accessToken }: ChangePasswordServiceProps) {
  return api.patch(CHANGE_PASSWORD_URL, {
    newPassword
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}    