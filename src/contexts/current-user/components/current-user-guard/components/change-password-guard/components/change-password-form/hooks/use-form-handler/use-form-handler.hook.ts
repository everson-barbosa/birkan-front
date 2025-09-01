import { resetPasswordService } from "@/services/authentication/reset-password.service"
import { ChangePasswordFormSchema } from "../../schemas/change-password-form.schema"
import { useCurrentUser } from "@/contexts/current-user/hooks/use-current-user.hook"

export function useFormHandler() {
  const { getCurrentUserData } = useCurrentUser()

  const handleSubmitForm = async ({ newPassword }: ChangePasswordFormSchema) => {
    try {
      await resetPasswordService({ newPassword })

      getCurrentUserData()
    } catch (error) {
      console.error(error)
    }
  }

  return { handleSubmitForm }
}