import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { registerFormSchema, RegisterFormSchema } from "./schemas/register-form.schema"
import { zodResolver } from "@hookform/resolvers/zod";

export function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const handleSubmitForm = async (data: RegisterFormSchema) => {
    console.log(data)

    fetch('http://localhost:3333/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

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