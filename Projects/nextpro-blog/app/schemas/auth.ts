import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(30, { message: "Name is too long." }),
  email: z.email({ message: "Invalid email address." }),
  password: z.string().min(8).max(30),
});
