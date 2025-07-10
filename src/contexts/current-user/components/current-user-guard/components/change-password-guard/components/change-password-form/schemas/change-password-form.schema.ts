import { z } from "zod";

export const changePasswordFormSchema = z.object({
  newPassword: z.string().min(8)
})

export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>