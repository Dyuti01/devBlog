import z from 'zod'

export const signUpInput = z.object({
  email: z.string().email({message:"Invalid email"}),
  password: z.string().min(6, {message:"Password should be atleast 6 characters long"}),
  firstName: z.string().min(3).optional(),
  lastName: z.string().min(3)
})
export const signInInput = z.object({
  userEmail: z.string().email({message:"Invalid email"}),
  password: z.string()
})
export const postInput = z.object({
  content: z.string().max(300),
  title: z.string().max(20)
})
export const updatePostInput = z.object({
  content: z.string().max(300).optional(),
  title: z.string().max(20).optional(),
  published: z.boolean()
})

export type SignUpInputParams = z.infer<typeof signUpInput>
export type SignInInputParams = z.infer<typeof signInInput>
export type postInputParams = z.infer<typeof postInput>