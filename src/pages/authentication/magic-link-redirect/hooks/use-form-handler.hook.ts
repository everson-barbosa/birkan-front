import { useNavigate } from "react-router"
import { changePasswordService } from "@/infra/http/services/authentication/reset-password.service"
import { ResetPasswordFormSchema } from "../schemas/reset-password-form.schema"

export function useFormHandler() {
  const navigate = useNavigate()

  const handleSubmitForm = async ({ password }: ResetPasswordFormSchema) => {
    const resetPasswordAccessToken = ''
    
    try {
      await changePasswordService({
        newPassword: password,
        accessToken: resetPasswordAccessToken
      })
      
      window.alert('Senha alterada com sucesso!')

      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    handleSubmitForm
  }
}