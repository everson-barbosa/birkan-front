import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { registerFormSchema, RegisterFormSchema } from "./schemas/register-form.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormHandler } from "./hooks/use-form-handler.hook";

export function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })
  const {  handleSubmitForm} = useFormHandler()
  

  return (
    <div>
      <h4>Register page</h4>
      
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register('name')} required />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input {...register('email')} required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} required/>
        </div>

        <button type="submit">Register</button>

      </form>

      <Link to='/login'>Login</Link>
    </div>
  )
}