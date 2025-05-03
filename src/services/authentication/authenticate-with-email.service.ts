import { AUTHENTICATE_WITH_EMAIL_URL } from "../../constants/endpoints/endppoints"
import { api } from "../../utils/axios"

interface AuthenticateWithEmailServiceProps {
  readonly email: string
  readonly password: string
}

export async function authenticateWithEmailService({ email, password }: AuthenticateWithEmailServiceProps) {
  return api.post(AUTHENTICATE_WITH_EMAIL_URL, {
    email,
    password
  })   
}