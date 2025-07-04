import { api } from "@/lib/axios"
import { LOGIN_WITH_EMAIL_URL } from "../../_constants/endpoints/endpoints"

interface LoginWithEmailServiceProps {
  readonly email: string
  readonly password: string
}

export async function loginWithEmailService({ email, password }: LoginWithEmailServiceProps) {
  return api.post(LOGIN_WITH_EMAIL_URL, {
    email,
    password
  })   
}