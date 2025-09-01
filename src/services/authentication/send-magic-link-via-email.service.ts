import { api } from "@/lib/axios"
import { SEND_MAGIC_LINK_VIA_EMAIL_URL } from "./@constants/endpoints"

interface SendMagicLinkViaEmailServiceProps {
  readonly email: string
}

export async function sendMagicLinkViaEmailService({ email }: SendMagicLinkViaEmailServiceProps) {
  return api.post(SEND_MAGIC_LINK_VIA_EMAIL_URL, {
    email
  })   
}    