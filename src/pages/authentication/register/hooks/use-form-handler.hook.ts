import { registerAccountService } from "@/infra/http/services/authentication/register-account.service"
import { RegisterFormSchema } from "../schemas/register-form.schema"

export function useFormHandler() {

  const handleSubmitForm = async ({ name, email, password }: RegisterFormSchema) => {
      try {
        await registerAccountService({
          name,
          email,
          password,
        })
      } catch (error) {
        console.error(error)
      }
    }

  return {
    handleSubmitForm
  }
}