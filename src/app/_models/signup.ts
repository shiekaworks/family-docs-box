import z from 'zod';

export const signupSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .required();

export const signupFamilySchema = z
  .object({
    familyName: z.string(),
    email1: z.string().email(),
    email2: z.string().email(),
    email3: z.string().email(),
    email4: z.string().email(),
  })
  .required();

export type SignUp = z.infer<typeof signupSchema>;
export type SignUpFamily = z.infer<typeof signupFamilySchema>;
