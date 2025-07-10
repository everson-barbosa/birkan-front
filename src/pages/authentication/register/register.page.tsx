import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { registerFormSchema, RegisterFormSchema } from "./schemas/register-form.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormHandler } from "./hooks/use-form-handler.hook";
import { Button } from "@/components/ui/button/button.component";
import { Input } from "@/components/ui/input/input.component";
import { Label } from "@/components/ui/label/label.component";
import { GalleryVerticalEnd } from "lucide-react";

export function RegisterPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })
  const {  handleSubmitForm} = useFormHandler()
  

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a
            href="#"
            className="flex flex-col items-center gap-2 font-medium"
          >
            <div className="flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">Birkan</span>
          </a>
          <h1 className="text-xl font-bold">Welcome to Birkan.</h1>
          <div className="text-center text-sm">
            Do have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              Sign in
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register('name')}
              id="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required {...register('password')} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Register
          </Button>
        </div>
      </div>
    </form>
  )
}