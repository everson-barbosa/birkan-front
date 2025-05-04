import { REGISTER_ACCOUNT_URL } from "../../constants/endpoints/endppoints"
import { api } from "../../utils/axios"

interface RegisterAccountServiceProps {
  readonly name: string
  readonly email: string
  readonly password: string
}

export async function registerAccountService({ name, email, password }: RegisterAccountServiceProps) {
  return api.post(REGISTER_ACCOUNT_URL, {
    name,
    email,
    password
  })   
}    