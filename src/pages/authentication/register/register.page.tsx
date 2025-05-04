import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { registerFormSchema, RegisterFormSchema } from "./schemas/register-form.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAccountService } from "../../../services/authentication/register-account.service";

export function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })
  const navigate = useNavigate()

  const handleSubmitForm = async (data: RegisterFormSchema) => {
    try {
      await registerAccountService(data)

      navigate('/login')
    } catch (error) {
      console.error(error)
    }

  }

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