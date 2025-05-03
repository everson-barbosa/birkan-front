import { useNavigate } from "react-router"
import { useAuthentication } from "../../../../contexts/authentication/hooks/use-authentication.hook"
import { authenticateWithEmailService } from "../../../../services/authentication/authenticate-with-email.service"
import { LoginFormSchema } from "../schemas/login-form.schema"

export function useFormHandler() {
  const { authenticate } = useAuthentication()
  const navigate = useNavigate()

  const handleSubmitForm = async ({ email, password }: LoginFormSchema) => {
      try {
        const response = await authenticateWithEmailService({
          email,
          password
        })

        const accessToken = response.data.accessToken

        authenticate({ accessToken })

        setTimeout(() => {
          navigate('/dashboard')
        }, 100)
      } catch (error) {
        console.error(error)
      }
    }

  return {
    handleSubmitForm
  }
}