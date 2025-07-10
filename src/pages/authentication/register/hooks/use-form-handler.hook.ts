import { registerAccountService } from "@/infra/http/services/authentication/register-account.service"
import { RegisterFormSchema } from "../schemas/register-form.schema"
import { toast } from "sonner"

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

        toast('Error', {
          position: 'top-center',
        })
      }
    }

  return {
    handleSubmitForm
  }
}