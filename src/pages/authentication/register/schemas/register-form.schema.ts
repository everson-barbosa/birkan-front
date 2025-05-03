import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8)
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>