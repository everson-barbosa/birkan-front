import { api } from "@/lib/axios"
import { FORGOT_PASSWORD_URL } from "../../_constants/endpoints/endpoints"

interface ForgotPasswordServiceProps {
  readonly email: string
}

export async function forgotPasswordService({ email }: ForgotPasswordServiceProps) {
  return api.post(FORGOT_PASSWORD_URL, {
    email
  })   
}    