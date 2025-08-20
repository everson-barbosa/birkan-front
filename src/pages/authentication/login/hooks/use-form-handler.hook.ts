import { useNavigate } from "react-router"
import { loginWithEmailService } from "@/infra/http/services/authentication/login-with-email.service"
import { LoginFormSchema } from "../schemas/login-form.schema"
import { toast } from "sonner"

export function useFormHandler() {
  const navigate = useNavigate()

  const handleSubmitForm = async ({ email, password }: LoginFormSchema) => {
      try {
        await loginWithEmailService({
          email,
          password
        })

        setTimeout(() => {
          navigate('/dashboard')
        }, 100)
      } catch (error) {
        console.error(error)

        const message = error instanceof Error ? error.message : 'Unknown error'

        toast(message, {
          dismissible: true,
          position: 'top-right'
        })        
      }
    }

  return {
    handleSubmitForm
  }
}