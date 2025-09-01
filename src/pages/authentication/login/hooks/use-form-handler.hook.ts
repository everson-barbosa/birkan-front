import { To, useNavigate } from "react-router"
import { loginWithEmailService } from "@/services/authentication/login-with-email.service"
import { LoginFormSchema } from "../schemas/login-form.schema"
import { toast } from "sonner"
import { SESSION_STORAGE_LAST_ROUTE_KEY } from "@/constants/session-storage-key"

export function useFormHandler() {
  const navigate = useNavigate()

  const parsePathToNavigateTo = (value: string): To => {
    try {
      const pathAsJson = JSON.parse(value)

      return {
        search: pathAsJson?.search,
        pathname: pathAsJson?.pathname,
        hash: pathAsJson?.hash
      }
    }

    catch {
      return value
    }
  }

  const handleSubmitForm = async ({ email, password }: LoginFormSchema) => {
      try {
        await loginWithEmailService({
          email,
          password
        })

        const navigateTo = 
          sessionStorage.getItem(SESSION_STORAGE_LAST_ROUTE_KEY) ?? '/dashboard'

        setTimeout(() => {
          navigate(parsePathToNavigateTo(navigateTo))
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