import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { loginFormSchema, LoginFormSchema } from "./schemas/login-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormHandler } from "./hooks/use-form-handler.hook";

export function LoginPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })
  const { handleSubmitForm } = useFormHandler()

  return (
    <div>
      <h4>Login page</h4>
      
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} required/>
        </div>

        <button type="submit" disabled={isSubmitting}>Log-in</button>

      </form>

      <Link to='/forget-password'>Forget password</Link>
      
      <br />

      <Link to='/register'>Register</Link>

    </div>
  )
}