import { api } from "@/lib/axios"
import { LOGIN_WITH_MAGIC_LINK_URL } from "../../_constants/endpoints/endpoints"

interface LoginWithMagicLinkProps {
  readonly token: string
}

export async function loginWithMagicLink({ token }: LoginWithMagicLinkProps) {
  return api.post(LOGIN_WITH_MAGIC_LINK_URL, {
    token,
  })   
}