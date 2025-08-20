import { LOGIN_WITH_MAGIC_LINK_URL } from "./@constants/endpoints"
import { api } from "@/lib/axios"

interface LoginWithMagicLinkProps {
  readonly token: string
}

export async function loginWithMagicLink({ token }: LoginWithMagicLinkProps) {
  return api.post(LOGIN_WITH_MAGIC_LINK_URL, {
    token,
  })   
}