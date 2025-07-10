import { useForm } from "react-hook-form"
import { useFormHandler } from "./hooks/use-form-handler/use-form-handler.hook"
import { zodResolver } from "@hookform/resolvers/zod"
import { changePasswordFormSchema } from "./schemas/change-password-form.schema"
import { Button } from "@/components/ui/button/button.component"
import { Input } from "@/components/ui/input/input.component"
import { GalleryVerticalEnd } from "lucide-react"
import { Label } from "@/components/ui/label/label.component"

export function ChangePasswordForm() {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm({
    resolver: zodResolver(changePasswordFormSchema)
  })
  const { handleSubmitForm } = useFormHandler()

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
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
                Enter your new password
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required {...register('newPassword')} />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}