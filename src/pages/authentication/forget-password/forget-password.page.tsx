import { useForm } from "react-hook-form"
import { forgetPasswordFormSchema, ForgetPasswordFormSchema } from "./schemas/forget-password-form.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function ForgetPasswordPage() {
  const { register, handleSubmit } = useForm<ForgetPasswordFormSchema>({
    resolver: zodResolver(forgetPasswordFormSchema)
  })

  const handleSubmitForm = (data: ForgetPasswordFormSchema) => {
    console.log(data)
  }

  return (
    <div>
      <h4>Forget password</h4>
      
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} />
        </div>
      </form>
    </div>
  )
}