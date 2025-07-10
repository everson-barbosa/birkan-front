import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { forgotPasswordSchema, ForgotPasswordSchema } from "./schemas/forgot-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormHandler } from "./hooks/use-form-handler.hook";
import { Input } from "@/components/ui/input/input.component";
import { Button } from "@/components/ui/button/button.component";
import { GalleryVerticalEnd } from "lucide-react";
import { Label } from "@/components/ui/label/label.component";

export function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  })
  const { handleSubmitForm } = useFormHandler()

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
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}