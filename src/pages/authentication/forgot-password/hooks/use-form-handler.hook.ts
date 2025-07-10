import { sendMagicLinkViaEmailService } from "@/infra/http/services/authentication/send-magic-link-via-email.service"
import { ForgotPasswordSchema } from "../schemas/forgot-password.schema"

export function useFormHandler() {
  const handleSubmitForm = async({ email }: ForgotPasswordSchema) => {
    try {
      await sendMagicLinkViaEmailService({ email })
    } catch (error) {
      console.error(error)
    }
  }

  return { handleSubmitForm }
}